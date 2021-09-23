/*using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Docs.Samples;
using Microsoft.Extensions.Caching.Memory;
using RoutingSample.Models;
using System.Collections.Generic;

namespace RoutingSample.Controllers
{
	[Route("projectList")]
	[ApiController]
	public class ProjectListController : ControllerBase
	{
		private IMemoryCache _cache;
		public ProjectListController(IMemoryCache memoryCache)
		{
			_cache = memoryCache;
		}
	

		[HttpGet("setSampleData1")]
		public bool SetSampleData(string title, string status)
		{
			var cacheKey = "ProjectListStore";

			var sampleList = _cache.Get(cacheKey) as List<ProjectList>;
			if (sampleList == null)
				sampleList = new List<ProjectList>();

			sampleList.Add(projectList);

			_cache.Set(casheKey, sampleList);

			return true;
		}

		[HttpGet("getSampleData2")]
		public List<ProjectListController> GetSampleData()
		{
			var cacheKey = "ProjectListStore";
			var sampleList = _cache.Get(cacheKey) as List<ProjectList>;

			return sampleList;

		}
	}
}

*/