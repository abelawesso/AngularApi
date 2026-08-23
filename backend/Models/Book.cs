using System.ComponentModel.DataAnnotations;

namespace AngularApi.Models
{
    public class Book : AuditableEntity
    {
        public Guid? Id { get; set; }
        [Required(ErrorMessage = "Title is required")]
        public string Title { get; set; }
        [Required(ErrorMessage = "Author is required")]
        public string Author { get; set; }
        public string? Description { get; set; }   
        public DateTime? PublishedOn { get; set; } = default(DateTime?);

    }
}
