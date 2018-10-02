using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Library.Models;

namespace Library.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        LibraryEntities db = new LibraryEntities();
        public ActionResult Index()
        {
            return View();
        }
        
        [HttpPost]
        public ActionResult Login(userInfor us)
        {
            using (db)
            {
                var userDetails = db.userInfors.Where(x => x.user == us.user && x.Password == us.Password).FirstOrDefault();
                if(userDetails==null)
                {
                    us.Error = "Error";
                    return View("Index", us);
                }
                else
                {
                    Session["user"] = userDetails.user;
                    return RedirectToAction("Index", "Test");
                }
            }
            return View();
        }

        
    }
}