using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using MicroServicesSample.Services.AuthAPI.Data;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using MicroServiceSample.Services.AuthAPI.Models;

namespace MicroServicesSample.Services.AuthAPI.Data
{
    public class AppDbContext : IdentityDbContext<ApplicationUser>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
         
        }

      public DbSet<ApplicationUser> ApplicationUsers {  get; set; }     
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
        }
        
    }

}

