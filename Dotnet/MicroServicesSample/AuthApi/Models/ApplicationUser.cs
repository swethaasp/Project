using Microsoft.AspNetCore.Identity;

namespace MicroServiceSample.Services.AuthAPI.Models
{
    public class ApplicationUser:IdentityUser
    {
        public string Name { get; set; }    
    }
}
