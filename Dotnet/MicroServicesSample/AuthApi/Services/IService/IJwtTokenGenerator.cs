using MicroServiceSample.Services.AuthAPI.Models;

namespace MicroServiceSample.Services.AuthAPI.Service.IService
{
    public interface IJwtTokenGenerator
    {
     string GenerateToken(ApplicationUser applicationUser);
    }
}
