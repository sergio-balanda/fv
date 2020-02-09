using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using fv.Models;
using Microsoft.AspNetCore.Mvc;

namespace fv.Controllers
{
    public class UserController : Controller
    {
        private static readonly IList<User> _users;

        static UserController()
        {
            _users = new List<User>
            {
                new User
                {
                    Id = 1,
                    Name="Juan",
                    Email="juan@mail.com",
                    Rol="Admin",
                    Password="1234",
                },                
                new User
                {
                    Id = 2,
                    Name="Pedro",
                    Email="pedro@mail.com",
                    Rol="User",
                    Password="1234",
                }
            };
        }

        [Route("users")]
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        public ActionResult Users()
        {
            return Json(_users);
        }        
        
        
        [Route("user/{email}")]
        [ResponseCache(Location = ResponseCacheLocation.None, NoStore = true)]
        public ActionResult Users(string email)
        {
            try
            {
                User user = _users.Where(u => u.Email == email).First();
                return Json(user);
            }
            catch (Exception)
            {
                return Json(null);
            }
        }
    }
}