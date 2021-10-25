using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RoutingSample.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Docs.Samples;
using Microsoft.Extensions.Caching.Memory;
/*
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

        [HttpPost("setTreeNode")]
        public TreeList SetTreeNode(TreeList ObjTreeNode)
        {
            var cacheKey = "ProjectTreeStore";
            var sampleList = _cache.Get(cacheKey) as List<TreeList>;
            if (sampleList == null)
                sampleList = new List<TreeList>();

            sampleList.Add(ObjTreeNode);
            _cache.Set(cacheKey, sampleList);

            return ObjTreeNode;
        }

        [HttpGet("getTreeNodeAll")]
        public Object GetTreeNodeAll()
        {
            var cacheKey = "ProjectTreeStore";

            var sampleList = _cache.Get(cacheKey) as List<TreeList>;
            List<TreeList> readAllObject = null;
            Dictionary<String, Object> returnChildren = new Dictionary<String, Object>();
            List<TreeList> finishNode = new List<TreeList>();

            if(sampleList != null)
            {
                readAllObject = sampleList.ToList();
            }

            if (readAllObject != null)
            {
                count = readAllObject.Count;

                List<TreeList> childrenNode = getChildNodeByParent(readAllObject, "root", count);
                if (childrenNode.Count > 0)
                {
                    returnChildren.Add("children", childrenNode);
                }
                else
                {
                    returnChildren.Remove("children");
                }
            }
            return returnChildren;
        }

        /*
         트리 JSON 형식 가공하여 리턴
         Root를 ParentNode로 가지는 자식 폴더를 기준으로 해당하는 폴더가 가지고 있는 자식 노드를 탐색
         */
/*
        public List<TreeList> getChildNodeByParent(List<TreeList> data, String parentId, int count)
        {
            List<TreeList> finishNode = new List<TreeList>();
            List<TreeList> deepCopyFalseNode = new List<TreeList>();
            List<TreeList> temp = new List<TreeList>();

            deepCopyFalseNode = data.ConvertAll(t => t);
            foreach(TreeList searchNode in data)
            {
                if (parentId.Equals(searchNode.ParentId))
                {
                    temp.Add(searchNode);
                    deepCopyFalseNode.Remove(searchNode);
                }
            }
            finishNode = temp.ConvertAll(t => t);
            if(deepCopyFalseNode.Count > 0)
            {
                foreach(TreeList setChildrenNode in finishNode)
                {
                    --count;
                    setChildrenNode.Children = getChildNodeByParent(deepCopyFalseNode, setChildrenNode.Id.ToString(), count);
                    if(count <= 0)
                    {
                        return finishNode;
                    }
                }
            }

            return finishNode;
        }

    }
}
*/