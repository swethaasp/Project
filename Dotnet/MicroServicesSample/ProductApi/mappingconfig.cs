using AutoMapper;

using MicroServicesSample.Services.ProductAPI.Models;

using MicroServicesSample.Services.ProductAPI.Models.Dto;

namespace MicroServiceSample.Services.ProductAPI

{

    public class MappingConfig

    {

        public static MapperConfiguration RegisterMaps()

        {

            var mappingConfig = new MapperConfiguration(config =>

            {

                config.CreateMap<ProductDto, Product>().ReverseMap();

            });

            return mappingConfig;

        }

    }

}