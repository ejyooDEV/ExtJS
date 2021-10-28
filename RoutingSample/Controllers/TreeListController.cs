using System;
using System.Collections.Generic;
using System.Linq;
using RoutingSample.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace RoutingSample.Controllers
{
    [Route("projectTreeList")]
    [ApiController]
    public class TreeListController : ControllerBase
    {
        private IMemoryCache _cache;

        public TreeListController(IMemoryCache memoryCache)
        {
            _cache = memoryCache;
        }

        [HttpPost("createTreeNode")]
        public TreeList CreateTreeNode(TreeList newNode)
        {
            var cacheKey = "ProjectTreeStore";
            var dbRecords = _cache.Get(cacheKey) as List<TreeList>;
            if (dbRecords == null)
                dbRecords = new List<TreeList>();

            newNode.Id = dbRecords.Count + 1;

            dbRecords.Add(newNode);
            _cache.Set(cacheKey, dbRecords);

            return newNode;
        }

        [HttpGet("readAllTreeNode")]
        public List<TreeList> ReadAllTreeNode(string mode)
        {
            var cacheKey  = "ProjectTreeStore";
            var dbRecords = _cache.Get(cacheKey) as List<TreeList>;
            
            if(dbRecords == null)
                return new List<TreeList>();
            
            var treeRecords  = dbRecords.Where((row) => row.Mode.Equals(mode) && row.IsDelete == false);
            var lookup       = treeRecords.ToLookup((row) => row.ParentId);

            foreach (var treeRecord in treeRecords)
                treeRecord.Children = lookup[treeRecord.Id] .OrderBy((row) => row.Id)
                                                            .ToList();

            var root = treeRecords.Where((row) => row.ParentId.ToString() == "0")
                                  .OrderBy((row) => row.Index)
                                  .ToList();
            
            return root;
        }

        [HttpPost("updateTreeNode")]
        public string UpdateTreeNode(object jsonData)
        {
            var cacheKey    = "ProjectTreeStore";
            var dbRecords   = _cache.Get(cacheKey) as List<TreeList>;
            if (dbRecords == null)
                return "수정할 데이터가 없습니다.";
            var updateNode    = new TreeList();
            var jsonObj       = JsonConvert.DeserializeObject(jsonData.ToString());

            if (jsonObj.GetType() == typeof(JArray))
            {
                var records = JsonConvert.DeserializeObject<List<Dictionary<string, object>>>(jsonData.ToString());
                foreach(var record in records)
                {
                    updateNode = dbRecords.Where((row) => row.Id.ToString() == record["id"].ToString()).FirstOrDefault();
                    if(updateNode != null)
                    {
                        updateParentNodeIndex(record, updateNode);
                    }
                }
            }
            else if(jsonObj.GetType() == typeof(JObject))
            {
                var record = JsonConvert.DeserializeObject<Dictionary<string, object>>(jsonData.ToString());
                string dataId = record["id"].ToString();
                updateNode = dbRecords.Where((row) => row.Id.ToString() == dataId).FirstOrDefault();

                if (updateNode != null)
                {
                    updateParentNodeIndex(record, updateNode);
                }
            }

            return jsonData.ToString();
        }

        [HttpPost("destroyTreeNode")]
        public string DestroyTreeNode(object jsonData)
        {
            // 캐쉬 가져와서
            var cacheKey = "ProjectTreeStore";
            var dbRecords = _cache.Get(cacheKey) as List<TreeList>;
            if (dbRecords == null)
                return "삭제할 데이터가 없습니다.";
            var removeNode = new TreeList();
            var jsonObj = JsonConvert.DeserializeObject(jsonData.ToString());

            if (jsonObj.GetType() == typeof(JArray))
            {
                var records = JsonConvert.DeserializeObject<List<Dictionary<string, object>>>(jsonData.ToString());
                foreach (var record in records)
                {
                    removeNode = dbRecords.Where((row) => row.Id.ToString() == record["id"].ToString()).FirstOrDefault();
                    
                    if (removeNode != null)
                    {
                        removeNode.IsDelete = true;
                        var parentId = removeNode.ParentId;
                        updateParentLeaf(parentId);
                        updateParentNodeIndex(record, removeNode);
                    }
                }
            }
            else if(jsonObj.GetType() == typeof(JObject))
            {
                var record = JsonConvert.DeserializeObject<Dictionary<string, object>>(jsonData.ToString());
                string dataId = record["id"].ToString();
                removeNode = dbRecords.Where((row) => row.Id.ToString() == dataId).FirstOrDefault();

                if (removeNode != null)
                {
                    removeNode.IsDelete = true;
                    var parentId = removeNode.ParentId;
                    updateParentLeaf(parentId);
                    updateParentNodeIndex(record, removeNode);
                }
            }

            /*
                string _id = data["id"].ToString();
            var removeObject = sampleList.Where((row) => row.Id.ToString() == _id).FirstOrDefault();
            removeObject.IsDelete = true;
            //var removeObjectCnt = sampleList.RemoveAll((row) => row.Id.ToString() == _id);
            //_cache.Set(cacheKey, sampleList);
            //var readAllObject = sampleList.ToList();

            var parentId = removeObject.ParentId;
            updateParentLeaf(parentId);
            */
            return jsonData.ToString();
        }


        [HttpPost("moveUpdateTreeNode")]
        public string moveUpdateTreeNode(Dictionary<string,object> datas)
        {
            var cacheKey    = "ProjectTreeStore";
            var dbRecords = _cache.Get(cacheKey) as List<TreeList>;
            if (dbRecords == null)
                return "움직일 Node가 없습니다.";

            var updateNodes = JsonConvert.DeserializeObject<List<Dictionary<string, object>>>(datas["nodeList"].ToString());

            if(datas != null)
            {
                foreach (var updateNode in updateNodes)
                {
                    string nodeId = updateNode["id"].ToString();
                    var node = dbRecords.Where((row) => row.Id.ToString() == nodeId).FirstOrDefault();

                    var beforeParentId  = node.ParentId;
                    var afterParentId = updateNode["parentId"].ToString();
                    afterParentId = (afterParentId == "root") ? "0" : afterParentId;
                    node.ParentId = int.Parse(afterParentId);
                    node.Mode = datas["changeMode"].ToString(); // 상태 변경

                    updateModeOfChildNode(node); // 변경 Node의 ChildrenNode Mode를 변경
                    updateParentChild(node.Id, beforeParentId); // 변경 Node의 전 부모에서 자식 정리
                    updateParentLeaf(beforeParentId); // 변경 Node의 전 부모의 Leaf 검사
                    //updateParentNodeIndex(beforeParentId, int.Parse(afterParentId)); // 변경 Node의 전, 후 부모의 Index 변경
                }
            }

            // 부모 노드에 존재하는 이동한 Child 제거
            void updateParentChild(int dragNodeId, int BeforeParent)
            {
                if (BeforeParent == 0)
                    return;
                var parentNode = dbRecords.Where((row) => row.Id == BeforeParent).FirstOrDefault();
                int removeChildIndex = parentNode.Children.FindIndex((row) => row.Id == dragNodeId);
                parentNode.Children.RemoveAt(removeChildIndex);
            }

            // childNode의 상태값 변경
            void updateModeOfChildNode(TreeList parentNode)
            {
                var childrenNode = dbRecords.Where((row) => row.ParentId == parentNode.Id).ToList();
                if (childrenNode.Count > 0)
                {
                    foreach (var childNode in childrenNode)
                    {
                        childNode.Mode = datas["changeMode"].ToString();
                        updateModeOfChildNode(childNode);
                    }
                }
            }

            return datas["nodeList"].ToString();
        }

        

        [HttpPost("setExpanded")]
        public string SetExpanded(Dictionary<string,Object> data)
        {
            var cacheKey = "ProjectTreeStore";
            var dbRecords = _cache.Get(cacheKey) as List<TreeList>;
            if (dbRecords == null)
                return "Failed";

            var updateNode = dbRecords.Where((row) => row.Id == int.Parse(data["id"].ToString())).FirstOrDefault();

            if (updateNode == null)
                return "Failed";

            updateNode.Expanded = bool.Parse(data["expanded"].ToString());

            return "Success";
        }

        // 부모 노드의 인덱스 정리
        void updateParentNodeIndex(Dictionary<string, object> record, TreeList updateNode)
        {
            foreach (var key in record.Keys)
            {
                var value = record[key];
                var properties = typeof(TreeList).GetProperties();
                var property = properties.FirstOrDefault(row => row.Name.ToLower() == key.ToLower());
                if (property == null) continue;
                var propertyType = property.PropertyType;
                if (propertyType == typeof(string))
                {
                    property.SetValue(updateNode, value.ToString());
                }
                else if (propertyType == typeof(int))
                {
                    int.TryParse(value.ToString(), out var value2);
                    property.SetValue(updateNode, value2);
                }
                else if (propertyType == typeof(bool))
                {
                    property.SetValue(updateNode, bool.Parse(value.ToString()));
                }
            }
        }

        // parnetNode에 Children 이 없을 경우 Leaf 설정
        public void updateParentLeaf(int parentId)
        {
            if (parentId == 0)
                return;

            var cacheKey = "ProjectTreeStore";
            var dbRecords = _cache.Get(cacheKey) as List<TreeList>;

            var childrenNode = dbRecords.Where((row) => row.ParentId == parentId && row.IsDelete == false).ToList();
            if (childrenNode.Count < 1)
            {
                var parentNode = dbRecords.Where((row) => row.Id == parentId).FirstOrDefault();
                parentNode.Leaf = true;
            }
        }
    }
}
