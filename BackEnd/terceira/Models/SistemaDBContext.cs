using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace terceira.Models
{
    public class SistemaDBContext : DbContext
    {
        public SistemaDBContext(DbContextOptions<SistemaDBContext> options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Crime> Crimes { get; set; }
        public DbSet<Status> Statuses { get; set; }
    }
}
