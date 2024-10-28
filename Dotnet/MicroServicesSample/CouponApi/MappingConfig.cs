using AutoMapper;
using MicroServicesSample.Services.CouponAPI.Models;
using MicroServicesSample.Services.CouponAPI.Models.Dto;
namespace MicroServicesSample.Services.CouponAPI
{
    public class MappingConfig
    {
        public static MapperConfiguration RegisterMaps()
        {
            var mappingConfig = new MapperConfiguration(config =>
            {
                config.CreateMap<Coupon, CouponDto>(); // Map from Coupon to CouponDto
                config.CreateMap<CouponDto, Coupon>(); // Map from CouponDto to Coupon
            });
            return mappingConfig;
        }
    }

}
