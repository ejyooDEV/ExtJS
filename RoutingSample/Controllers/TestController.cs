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

            ObjProject.Id = (sampleList.Count + 1).ToString();

           
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

        /**
         * status : 현재 프로젝트 리스트 상태
         * page : 몇페이지인지
         * start : 몇번째 레코드 부터인지
         * limit : 몇개 표시되는지
         */
        [HttpGet("getSampleDataAll")]
        public Object GetSampleDataAll(String status, int page, int start, int limit)
        {
            if(status == null)
            {
                status = "Ongoing";
            }
            var cacheKey = "ProjectListStore";

            var sampleList = _cache.Get(cacheKey) as List<Project>;
            List<Project> readAllObject = null;
            var readAllCnt = "";
            if (sampleList != null) 
            {
                /*전체를 가져올 때
                readAllObject = sampleList.Where(row => row.IsDeleted == false && row.Status == status).ToList();*/
                //10개만 가져오고 싶을때,totalCount 까지 세팅
                readAllObject = sampleList.Where(row => row.IsDeleted == false && row.Status == status).ToList();

                readAllCnt = sampleList.Where(row => row.IsDeleted == false && row.Status == status).ToList().Count.ToString();

                readAllObject = readAllObject.Skip( (page-1) * limit)
                                .Take(limit)
                                .ToList();
            }

            return new {  data = readAllObject, totalCount = readAllCnt };
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
            var modifyObject = sampleList.Where((row) => row.Id.ToString() == dataId && row.IsDeleted == false).FirstOrDefault();

            // data 내 수정내역 모두 뽑아오기
            if (data != null && modifyObject != null)
            {
                // Dictionary의 key 만 추출하기
                foreach (var key in data.Keys) // 수정된 값을 포문돌림
                {
                    var value = data[key]; // key 는 json key 목록
                    // 객체에 수정내역에 있는 것 넣기(리플렉션 개념) == > Object 메소드와 json data가 들어있음
                    var properties = typeof(Project).GetProperties();
                    var property = properties.FirstOrDefault(row => row.Name.ToLower() == key.ToLower());
                    /*
                    // property의 Type을 가져오기
                    var propertyTypeName = property.PropertyType.Name;
                    // 비교하기1
                    if (propertyTypeName == "String")
                    {
                        property.SetValue(modifyObject, value.ToString());
                    }
                    else if (propertyTypeName == "DateTime")
                    {
                        DateTime.TryParse(value.ToString(), out var value2);
                        property.SetValue(modifyObject, value2);
                    }
                    */
                    var propertyType = property.PropertyType;
                    if (propertyType == typeof(DateTime?)) // Model 만들 시 null을 허용했다면 typeof도 nullable 형태로 만들어주어야 함.(타입이 같아야함)
                    {
                        DateTime.TryParse(value.ToString(), out var value2); // client에서 string형식으로 
                        property.SetValue(modifyObject, value2);
                    }
                    else if(propertyType == typeof(string))
                    {
                        property.SetValue(modifyObject, value.ToString());
                    }
                    else if(propertyType == typeof(int))
                    {
                        int.TryParse(value.ToString(), out var value2);
                        property.SetValue(modifyObject, value2);
                    }
                    else if(propertyType == typeof(bool))
                    {
                        bool.TryParse(value.ToString(), out var value2);
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

        [HttpGet("getSampleData")]
        public Project GetSampleData(string Id, string Status)
        {
            var cacheKey = "ProjectListStore";
            var sampleList = _cache.Get(cacheKey) as List<Project>;
            if(sampleList == null)
            {
                sampleList = new List<Project>();
            }

            var getObject = sampleList.Where((row) => row.Id.ToString() == Id && row.IsDeleted == false && row.Status == Status).FirstOrDefault();

            return getObject;
        }
    }
}