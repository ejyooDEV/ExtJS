using System;
using System.Collections.Generic;
using System.Linq;
using RoutingSample.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc; // ControllerBase와 ApiController,Route 어노테이션 사용
using Microsoft.Extensions.Caching.Memory; // private IMemoryCache _cache;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace RoutingSample.Controllers
{
    [Route("user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IMemoryCache _cache;
        public UserController(IMemoryCache memoryCache)
        {
            _cache = memoryCache;
        }

        [HttpPost("createUser")]
        public object CreateUser(Dictionary<string,object> data)
        {
            var errorMsg = "";
            var result = true;
            try
            {
                var cacheKey = "User";
                var dbRecords = _cache.Get(cacheKey) as List<User>;
                if (dbRecords == null)
                    dbRecords = new List<User>();

                var user = JsonConvert.DeserializeObject<User>(data["userInfo"].ToString());

                dbRecords.Add(user);
                _cache.Set(cacheKey, dbRecords);
            }
            catch(Exception e)
            {
                errorMsg = e.Message;
                result = false;
            }

            return new {ErrorMsg=errorMsg, Result=result};
        }

        [HttpPost("loginUser")]
        public object LoginUser(Dictionary<string, object> data)
        {
            var errorMsg = "";
            var result = 0;

            try
            {
                var cacheKey = "User";
                var dbRecords = _cache.Get(cacheKey) as List<User>;
                if (dbRecords == null)
                {
                    errorMsg = "해당하는 사용자가 없습니다.";
                    result = 1;
                    return new { ErrorMsg = errorMsg, Result = result };
                }
                

                var user = JsonConvert.DeserializeObject<User>(data["userInfo"].ToString());

                var getObject = dbRecords.Where((row) => row.UserName.ToString() == user.UserName).FirstOrDefault();
                if(getObject != null)
                {
                    if(user.Password != getObject.Password)
                    {
                        errorMsg = "비밀번호가 틀렸습니다.";
                        result = 2;
                        return new { ErrorMsg = errorMsg, Result = result };
                    }
                } else
                {
                    errorMsg = "해당하는 사용자가 없습니다.";
                    result = 1;
                    return new { ErrorMsg = errorMsg, Result = result };
                }
            }
            catch (Exception e)
            {
                errorMsg = e.Message;
                result = 3;
            }

            return new { ErrorMsg = errorMsg, Result = result };
        }
    }
}
