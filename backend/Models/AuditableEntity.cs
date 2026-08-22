namespace AngularApi.Models
{
    public class AuditableEntity
    {
        public DateTime? CreatedDate { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? LastModifiedDate { get; set; }
        public string? LastModifiedBy { get; private set; }
    }
}
