using Api.ViewModels;
using AutoMapper;
using Business.Models;

namespace Api.Configurations
{
    public class AutoMapperConfig : Profile
    {
        public AutoMapperConfig()
        {
            CreateMap<Cadastro, CadastroViewModel>().ReverseMap();
            CreateMap<Consulta, ConsultaViewModel>().ReverseMap();
        }
    }
}
