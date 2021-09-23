using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Docs.Samples;
using Microsoft.Extensions.Caching.Memory;
using RoutingSample.Models;
using System.Collections.Generic;
using System.Linq;
using System;
using System.Reflection;


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
        public Project ModifySampleData(Dictionary<string, object> data)
        {
            var cacheKey = "ProjectListStore";

            var sampleList = _cache.Get(cacheKey) as List<Project>;
            if (sampleList == null)
                sampleList = new List<Project>();

           
            string dataId = data["id"].ToString();
            // 수정할 객체 가져오기
            var modifyObject = sampleList.Where((row) => row.Id == dataId && row.IsDeleted == false).FirstOrDefault();

            // data 내 수정내역 모두 뽑아오기
            if (data != null)
            {
                ;
                foreach (KeyValuePair<string, object> item in data) // 수정된 값을 포문돌림
                {
                    string key = item.Key;
                    object value = item.Value;
                    // 객체에 수정내역에 있는 것 넣기
                    var properties = typeof(Project).GetProperties();
                    var property = properties.FirstOrDefault(row => row.Name.ToLower() == key.ToLower());

                    var test = property.Name;
                    var test2 = property.PropertyType.Name;

                    // property의 Type을 가져오기
                    var propertyType = property.PropertyType.Name;

                    //switch (property.PropertyType)
                    //{
                    //    case typeof(DateTime):
                    //        break;
                    //    case typeof(string):
                    //        break;
                    //}

                    // 비교하기
                    if(propertyType == "String")
                    {
                        property.SetValue(modifyObject, value.ToString());
                    }
                    else if(propertyType == "DateTime")
                    {
                        DateTime.TryParse(value.ToString(), out var value2);
                        property.SetValue(modifyObject, value2);
                    }
                    
                }
            }
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