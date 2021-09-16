using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Docs.Samples;
using Microsoft.Extensions.Caching.Memory;
using RoutingSample.Models;
using System.Collections.Generic;

namespace RoutingSample.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return ControllerContext.MyDisplayRouteInfo();
        }

        public IActionResult Privacy()
        {
            return ControllerContext.MyDisplayRouteInfo();
        }

        public IActionResult Subscribe(int id)
        {
            return ControllerContext.MyDisplayRouteInfo(id);
        }
    }
}
