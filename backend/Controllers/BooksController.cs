using AngularApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private Book[] books = new Book[]
        {
            new Book { Id = Guid.NewGuid(), Title = "The Great Gatsby", Author = "F. Scott Fitzgerald" },
            new Book { Id = Guid.NewGuid(), Title = "To Kill a Mockingbird", Author = "Harper Lee" },
            new Book { Id = Guid.NewGuid(), Title = "1984", Author = "George Orwell" }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Book>> Get()
        {
            return Ok(books);
        }


    }
}
