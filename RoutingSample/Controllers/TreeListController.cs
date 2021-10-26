using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RoutingSample.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Docs.Samples;
using Microsoft.Extensions.Caching.Memory;

namespace RoutingSample.Controllers
{
    [Route("projectTreeList")]
    [ApiController]
    public class TreeListController : ControllerBase
    {
        private IMemoryCache _cache;
        private int count;

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
                                        .OrderBy((row) => row.Id)
                                        .ToList();
            
            return root;
        }

        [HttpPost("updateTreeNode")]
        public TreeList ModifyTreeNode(Dictionary<String, Object> data, string mode)
        {
            var cacheKey = "ProjectTreeStore";
            var sampleList = _cache.Get(cacheKey) as List<TreeList>;
            if (sampleList == null)
                sampleList = new List<TreeList>();

            string dataId = data["id"].ToString();
            var modifyObject = sampleList.Where((row) => row.Id.ToString() == dataId).FirstOrDefault();

            if (data != null && modifyObject != null)
            {
                foreach (var key in data.Keys)
                {
                    var value = data[key];
                    var properties = typeof(TreeList).GetProperties();
                    var property = properties.FirstOrDefault(row => row.Name.ToLower() == key.ToLower());
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
            return modifyObject;
        }

        [HttpPost("destroyTreeNode")]
        public String RemoveTreeNode(Dictionary<String, Object> data)
        {
            // 캐쉬 가져와서
            var cacheKey = "ProjectTreeStore";
            var sampleList = _cache.Get(cacheKey) as List<TreeList>;
            if (sampleList == null)
                sampleList = new List<TreeList>();

            string _id = data["id"].ToString();
            var removeObject = sampleList.Where((row) => row.Id.ToString() == _id).FirstOrDefault();
            removeObject.IsDelete = true;
            //var removeObjectCnt = sampleList.RemoveAll((row) => row.Id.ToString() == _id);
            //_cache.Set(cacheKey, sampleList);
            //var readAllObject = sampleList.ToList();

            var parentId = removeObject.ParentId;
            updateParentLeaf(parentId);

            return "Success";
        }

        [HttpPost("moveUpdateTreeNode")]
        public string moveUpdateTreeNode(List<Dictionary<string,object>> datas, string mode)
        {
            var cacheKey    = "ProjectTreeStore";
            var sampleList  = _cache.Get(cacheKey) as List<TreeList>;
            if (sampleList == null)
                sampleList = new List<TreeList>();

            if(datas != null)
            {
                foreach (var data in datas)
                {
                    string dataId = data["id"].ToString();
                    var dragNode = sampleList.Where((row) => row.Id.ToString() == dataId).FirstOrDefault();

                    var parentId = dragNode.ParentId;
                    updateParentLeaf(parentId);

                    if (data["parentId"].ToString().Equals("root")) // root이면 ParentId 0 으로 변경
                        dragNode.ParentId = 0;
                    else
                        dragNode.ParentId = int.Parse(data["parentId"].ToString()); // 변경하려던 node로 변경

                    dragNode.Mode = mode; // 상태 변경

                    updateModeOfChildNode(dragNode);
                }
            }

            void updateModeOfChildNode(TreeList parentNode)
            {
                var childrenNode = sampleList.Where((row) => row.ParentId == parentNode.Id).ToList();
                if (childrenNode.Count > 0)
                {
                    foreach (var childNode in childrenNode)
                    {
                        childNode.Mode = mode;
                        updateModeOfChildNode(childNode);
                    }
                }
            }
            var returnString = "finished";
            return returnString;
        }

        public void updateParentLeaf(int parentId)
        {
            var cacheKey = "ProjectTreeStore";
            var sampleList = _cache.Get(cacheKey) as List<TreeList>;
            if (sampleList == null)
                sampleList = new List<TreeList>();

            var parentNode = sampleList.Where((row) => row.Id == parentId).FirstOrDefault();
            if (parentNode != null)
            {
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
    }
}
