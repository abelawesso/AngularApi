namespace AngularApi.Models
{
    public class Book : AuditableEntity
    {
        public Guid? Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string? Description { get; set; }   
        public DateTime? Created { get; set; } = default(DateTime?);

    }
}
