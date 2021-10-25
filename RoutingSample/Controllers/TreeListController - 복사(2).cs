/*
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
        public Object GetTreeNodeAll(string mode)
        {
            var cacheKey = "ProjectTreeStore";

            var sampleList = _cache.Get(cacheKey) as List<TreeList>;
            List<TreeList> readAllRecord = null;
            List<TreeList> copyReadAllRecord = null;
            Dictionary<String, Object> returnChildren = new Dictionary<String, Object>();
            List<TreeList> FinishNode = new List<TreeList>();

            if (sampleList != null)
            {
                readAllRecord = sampleList.Where(row => row.mode.Equals(mode)).ToList();
                copyReadAllRecord = readAllRecord.ConvertAll(t => t);
                count = copyReadAllRecord.Count;
                List<TreeList> childrenNode = getChildNodeByParent(copyReadAllRecord, 0, count);
                if (childrenNode.Count > 0)
                {
                    returnChildren.Add("children", childrenNode);
                }
            }
            return returnChildren;
        }

        /*
         트리 JSON 형식 가공하여 리턴
         Root를 ParentNode로 가지는 자식 폴더를 기준으로 해당하는 폴더가 가지고 있는 자식 노드를 탐색
         *//*
        public List<TreeList> getChildNodeByParent(List<TreeList> data, int parentId, int count)
        {
            List<TreeList> finishNode = new List<TreeList>();
            List<TreeList> deepCopyFalseNode = new List<TreeList>();
            List<TreeList> temp = new List<TreeList>();

            deepCopyFalseNode = data.ConvertAll(t => t);
            foreach (TreeList searchNode in data)
            {
                if (parentId.Equals(searchNode.ParentId))
                {
                    temp.Add(searchNode);
                    deepCopyFalseNode.Remove(searchNode);
                }
            }
            finishNode = temp.ConvertAll(t => t);
            if (deepCopyFalseNode.Count > 0)
            {
                foreach (TreeList childrenNode in finishNode)
                {
                    --count;
                    childrenNode.Children = getChildNodeByParent(deepCopyFalseNode, childrenNode.Id, count);
                    if (count <= 0)
                    {
                        return finishNode;
                    }
                }
            }

            return finishNode;
        }

        [HttpPost("updateTreeNode")]
        public TreeList ModifyTreeNode(Dictionary<String, Object> data)
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
        public Object RemoveTreeNode(Dictionary<String, Object> data)
        {
            // 캐쉬 가져와서
            var cacheKey = "ProjectTreeStore";
            var sampleList = _cache.Get(cacheKey) as List<TreeList>;
            if (sampleList == null)
                sampleList = new List<TreeList>();

            string _id = data["id"].ToString();
            //var removeObject = sampleList.Where((row) => row.Id.ToString() == _id).FirstOrDefault();
            var removeObjectCnt = sampleList.RemoveAll((row) => row.Id.ToString() == _id);
            _cache.Set(cacheKey, sampleList);
            var readAllObject = sampleList.ToList();
            return new {removeRecordCnt = removeObjectCnt};
        }
    }
}
*/