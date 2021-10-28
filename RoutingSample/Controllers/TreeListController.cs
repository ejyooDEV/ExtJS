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
        public TreeList SetTreeNode(TreeList ObjTreeNode)
        {
            var cacheKey = "ProjectTreeStore";
            var sampleList = _cache.Get(cacheKey) as List<TreeList>;
            if (sampleList == null)
                sampleList = new List<TreeList>();

            ObjTreeNode.Id = sampleList.Count + 1;

            var tempClientId = ObjTreeNode.ClientId;

            ObjTreeNode.ClientId = 0;

            sampleList.Add(ObjTreeNode);

            TreeList parentNode = sampleList.Where(row => row.Id == ObjTreeNode.ParentId).FirstOrDefault();

            _cache.Set(cacheKey, sampleList);


            ObjTreeNode.ClientId = tempClientId;

            return ObjTreeNode;
        }

        [HttpGet("readAllTreeNode")]
        public List<TreeList> GetTreeNodeAll(string mode)
        {
            var cacheKey                    = "ProjectTreeStore";
            var sampleList                  = _cache.Get(cacheKey) as List<TreeList>;
            
            if(sampleList == null)
            {
                return new List<TreeList>();
            }
            var statusTreeList  = sampleList.Where((row) => row.Mode.Equals(mode) && row.IsDelete == false);
            var lookup          = statusTreeList.ToLookup((row) => row.ParentId);

            foreach (var statusTree in statusTreeList)
                statusTree.Children = lookup[statusTree.Id] .OrderBy((row) => row.Id)
                                                            .ToList();

            var root = statusTreeList   .Where((row) => row.ParentId.ToString() == "0")
                                        .OrderBy((row) => row.Index)
                                        .ToList();
            
            return root;
        }

        [HttpPost("updateTreeNode")]
        public TreeList ModifyTreeNode(object data)
        {
            var cacheKey = "ProjectTreeStore";
            var sampleList = _cache.Get(cacheKey) as List<TreeList>;
            if (sampleList == null)
                sampleList = new List<TreeList>();
            var modifyObject = new TreeList();
            // dataType 확인 List인지 Dictionary<String, Object> 인지
            var obj = JsonConvert.DeserializeObject(data.ToString());
            var temp = obj.GetType();
            //JArray jo = JArray.Parse(data.ToString());

            if (temp == typeof(JArray))
            {
                var datas = JsonConvert.DeserializeObject<List<Dictionary<string, object>>>(data.ToString());
                foreach(var record in datas)
                {
                    modifyObject = sampleList.Where((row) => row.Id.ToString() == record["id"].ToString()).FirstOrDefault();
                    if(modifyObject != null)
                    {
                        updateParentNodeIndex(record, modifyObject);
                    }
                }
            }
            else if(temp == typeof(JObject))
            {
                var record = JsonConvert.DeserializeObject<Dictionary<string, object>>(data.ToString());
                string dataId = record["id"].ToString();
                modifyObject = sampleList.Where((row) => row.Id.ToString() == dataId).FirstOrDefault();

                if (modifyObject != null)
                {
                    updateParentNodeIndex(record, modifyObject);
                }
            }

            


            return modifyObject;
        }

            [HttpPost("destroyTreeNode")]
        public String RemoveTreeNode(object data)
        {
            // 캐쉬 가져와서
            var cacheKey = "ProjectTreeStore";
            var sampleList = _cache.Get(cacheKey) as List<TreeList>;
            if (sampleList == null)
                sampleList = new List<TreeList>();

            var removeObject = new TreeList();

            var obj = JsonConvert.DeserializeObject(data.ToString());
            var temp = obj.GetType();
            //JArray jo = JArray.Parse(data.ToString());

            if (temp == typeof(JArray))
            {
                var datas = JsonConvert.DeserializeObject<List<Dictionary<string, object>>>(data.ToString());
                foreach (var record in datas)
                {
                    removeObject = sampleList.Where((row) => row.Id.ToString() == record["id"].ToString()).FirstOrDefault();
                    
                    if (removeObject != null)
                    {
                        removeObject.IsDelete = true;
                        var parentId = removeObject.ParentId;
                        updateParentLeaf(parentId);
                        updateParentNodeIndex(record, removeObject);
                    }
                }
            }
            else if(temp == typeof(JObject))
            {
                var record = JsonConvert.DeserializeObject<Dictionary<string, object>>(data.ToString());
                string dataId = record["id"].ToString();
                removeObject = sampleList.Where((row) => row.Id.ToString() == dataId).FirstOrDefault();

                if (removeObject != null)
                {
                    removeObject.IsDelete = true;
                    var parentId = removeObject.ParentId;
                    updateParentLeaf(parentId);
                    updateParentNodeIndex(record, removeObject);
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
            return "Success";
        }


        [HttpPost("moveUpdateTreeNode")]
        public string moveUpdateTreeNode(Dictionary<string,object> datas)
        {
            var cacheKey    = "ProjectTreeStore";
            var sampleList  = _cache.Get(cacheKey) as List<TreeList>;
            if (sampleList == null)
                sampleList = new List<TreeList>();

            var nodes = JsonConvert.DeserializeObject<List<Dictionary<string, object>>>(datas["nodeList"].ToString());
            //var ids = datas["ids"];

            if(datas != null)
            {
                foreach (var node in nodes)
                {
                    string dataId = node["id"].ToString();
                    var dragNode = sampleList.Where((row) => row.Id.ToString() == dataId).FirstOrDefault();

                    var beforeParentId  = dragNode.ParentId;
                    var afterParentId = node["parentId"].ToString();
                    afterParentId = (afterParentId == "root") ? "0" : afterParentId;
                    dragNode.ParentId = int.Parse(afterParentId);
                    dragNode.Mode = datas["changeMode"].ToString(); // 상태 변경

                    updateModeOfChildNode(dragNode); // 변경 Node의 ChildrenNode Mode를 변경
                    updateParentChild(dragNode.Id, beforeParentId); // 변경 Node의 전 부모에서 자식 정리
                    updateParentLeaf(beforeParentId); // 변경 Node의 전 부모의 Leaf 검사
                    //updateParentNodeIndex(beforeParentId, int.Parse(afterParentId)); // 변경 Node의 전, 후 부모의 Index 변경
                }
            }

            // 부모 노드에 존재하는 이동한 Child 제거
            void updateParentChild(int dragNodeId, int BeforeParent)
            {
                if (BeforeParent == 0)
                    return;
                var parentNode = sampleList.Where((row) => row.Id == BeforeParent).FirstOrDefault();
                int removeChildIndex = parentNode.Children.FindIndex((row) => row.Id == dragNodeId);
                parentNode.Children.RemoveAt(removeChildIndex);
            }

            // childNode의 상태값 변경
            void updateModeOfChildNode(TreeList parentNode)
            {
                var childrenNode = sampleList.Where((row) => row.ParentId == parentNode.Id).ToList();
                if (childrenNode.Count > 0)
                {
                    foreach (var childNode in childrenNode)
                    {
                        childNode.Mode = datas["changeMode"].ToString();
                        updateModeOfChildNode(childNode);
                    }
                }
            }
            var returnString = "finished";
            return returnString;
        }

        // parnetNode에 Children 이 없을 경우 Leaf 설정
        public void updateParentLeaf(int parentId)
        {
            if (parentId == 0)
                return;

            var cacheKey = "ProjectTreeStore";
            var sampleList = _cache.Get(cacheKey) as List<TreeList>;

            var childNode = sampleList.Where((row) => row.ParentId == parentId && row.IsDelete == false).ToList();
            if (childNode.Count < 1)
            {
                var parentNode = sampleList.Where((row) => row.Id == parentId).FirstOrDefault();
                parentNode.Leaf = true;
            }
        }

        [HttpPost("setExpanded")]
        public string SetExpanded(Dictionary<string,Object> data)
        {
            var cacheKey = "ProjectTreeStore";
            var sampleList = _cache.Get(cacheKey) as List<TreeList>;
            if (sampleList == null)
                return "Failed";

            var updateNode = sampleList.Where((row) => row.Id == int.Parse(data["id"].ToString())).FirstOrDefault();

            if (updateNode == null)
                return "Failed";

            updateNode.Expanded = bool.Parse(data["expanded"].ToString());

            return "Success";
        }

        // 부모 노드의 인덱스 정리
        void updateParentNodeIndex(Dictionary<string, object> record, TreeList modifyObject)
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
                    property.SetValue(modifyObject, value.ToString());
                }
                else if (propertyType == typeof(int))
                {
                    int.TryParse(value.ToString(), out var value2);
                    property.SetValue(modifyObject, value2);
                }
                else if (propertyType == typeof(bool))
                {
                    property.SetValue(modifyObject, bool.Parse(value.ToString()));
                }
            }
        }
    }
}
