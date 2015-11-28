using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ShoppingCart.WebApi.Controllers
{
    public class OrdersController : BaseApiController
    {
        [Route("api/GetAllOrders")]
        public Dictionary<Guid,Order> GetOrders()
        {
            return _orders;
        }
    }
}
