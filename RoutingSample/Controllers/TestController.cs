using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Docs.Samples;
using Microsoft.Extensions.Caching.Memory;
using RoutingSample.Models;
using System.Collections.Generic;
using System.Linq;

namespace RoutingSample.Controllers
{
    [Route("projectList")]
    [ApiController]
    public class TestController : ControllerBase
    {
        private IMemoryCache _cache;

        public TestController(IMemoryCache memoryCache)
        {
            _cache = memoryCache;
        }

        [HttpPost("setSampleData")]
        public Project SetSampleData(Project ObjProject)
        {
            var cacheKey = "ProjectListStore";

            var sampleList = _cache.Get(cacheKey) as List<Project>;
            if(sampleList == null)
                sampleList = new List<Project>();

            //var Id = sampleList.Count + 1;

           
           // var project = new Project()
           //{
           //     //Id= Id.ToString(),
           //     Id = ObjProject.Id,
           //    Title = ObjProject.Title,
           //    Status = ObjProject.Status,
           //    Description = ObjProject.Description,
           //    MenuTemplate = ObjProject.MenuTemplate,
           //    StartDate = ObjProject.StartDate,
           //    EndDate = ObjProject.EndDate
           //}; 
           


            sampleList.Add(ObjProject);

            _cache.Set(cacheKey, sampleList);

            return ObjProject;
        }

        [HttpGet("getSampleData")]
        public List<Project> GetSampleData()
        {
            var cacheKey = "ProjectListStore";

            var sampleList = _cache.Get(cacheKey) as List<Project>;
            List<Project> readAllObject = null;
            if (sampleList != null)
            {
                readAllObject = sampleList.Where(row => row.IsDeleted == false).ToList();
            }

            return readAllObject;
        }

        [HttpPost("modifySampleData")]
        //public bool SetSampleData(Project project)
        public Project ModifySampleData(Project ObjProject)
        {
            var cacheKey = "ProjectListStore";

            var sampleList = _cache.Get(cacheKey) as List<Project>;
            if (sampleList == null)
                sampleList = new List<Project>();

            var modifyObject = sampleList.Where((row) => row.Id == ObjProject.Id).FirstOrDefault();
            modifyObject.Title = ObjProject.Title;
            modifyObject.Status = ObjProject.Status;
            modifyObject.Description = ObjProject.Description;
            modifyObject.MenuTemplate = ObjProject.MenuTemplate;
            modifyObject.StartDate = ObjProject.StartDate;
            modifyObject.EndDate = ObjProject.EndDate;

            _cache.Set(cacheKey, sampleList);

            return modifyObject;
        }

        [HttpPost("removeSampleData")]
        //public bool SetSampleData(Project project)
        public Project RemoveSampleData(Project ObjProject)
        {
            var cacheKey = "ProjectListStore";

            var sampleList = _cache.Get(cacheKey) as List<Project>;
            if (sampleList == null)
                sampleList = new List<Project>();

            var removeObject = sampleList.Where((row) => row.Id == ObjProject.Id).FirstOrDefault();
            removeObject.IsDeleted = true;

            _cache.Set(cacheKey, sampleList);

            return removeObject;
        }
    }
}