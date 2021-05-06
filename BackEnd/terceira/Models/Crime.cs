using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace terceira.Models
{
    public class Crime
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Penalty { get; set; }
        public int PrisonTime { get; set; }
        public int StatusId { get; set; }
        public Status Status { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime? UpdateDate { get; set; }
        public int CreateUserId { get; set; }
        public User CreateUser { get; set; }
        public int? UpdateUserId { get; set; }
        public User? UpdateUser { get; set; }
    }
}
