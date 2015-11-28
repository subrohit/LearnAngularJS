using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ShoppingCart.WebApi.Controllers
{
    public class BaseApiController : ApiController
    {
        public static Dictionary<Guid, Order> _orders = new Dictionary<Guid, Order>();
    }
}
