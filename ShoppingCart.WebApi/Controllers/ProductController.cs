using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ShoppingCart.WebApi.Controllers
{
    public class ProductController : ApiController
    {
        private static Dictionary<Guid, Order> _orders = new Dictionary<Guid, Order>();
        [Route("api/GetAllProducts")]
        public IEnumerable<Product> GetProducts()
        {
            return new List<Product>
            {
                new Product { Category = "Watersports", Description = "A boat for one person", Name = "Kayak", Price = 275, Id = "05af70919155f8fc"},
                new Product { Category = "Watersports", Description = "Protective and fashionable", Name = "Lifejacket", Price = 48.95m, Id = "3d31d81b218c98ef"},
                new Product { Category = "Soccer", Description = "FIFA-approved size and weight", Name = "Soccer Ball", Price = 19.5m, Id = "437615faf1d38815"},
                new Product { Category = "Soccer", Description = "Give your playing field a professional touch", Name = "Corner Flags", Price = 34.95m, Id = "93c9cc08ac2f28d4"},
                new Product { Category = "Soccer", Description = "Flat-packed 35,000-seat stadium", Name = "Stadium", Price = 79500, Id = "ad4e64b38baa088f"},
                new Product { Category = "Chess", Description = "Improve your brain efficiency by 75%", Name = "Thinking Cap", Price = 16, Id = "b9e8e55c1ecc0b63"},
                new Product { Category = "Chess", Description = "Secretly give your opponent a disadvantage", Name = "Unsteady Chair", Price = 29.95m, Id = "32c2355f9a617bbd"},
                new Product { Category = "Chess", Description = "A fun game for the family", Name = "Human Chess Board", Price = 75, Id = "5241512218f73a26"},
                new Product { Category = "Chess", Description = "Gold-plated, diamond-studded King", Name = "Bling-Bling King", Price = 1200, Id = "59166228d70f8858"}
            };
        }

        [Route("api/PostProducts")]
        [AcceptVerbs("OPTIONS")]
        public Guid PostProducts(Order order)
        {
            var orderId = Guid.NewGuid();
            _orders.Add(orderId, order);
            return orderId;
        }

        [Route("api/GetOrders")]
        public Dictionary<Guid, Order> GetOrders()
        {
            return _orders;
        }
    }

    public class Product
    {
        public string Category { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Id { get; set; }
    }

    public class Order
    {
        public List<Product> Products { get; set; }
        public string Name { get; set; }
        public string Street { get; set; }
        public string Zip { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
    }
}
