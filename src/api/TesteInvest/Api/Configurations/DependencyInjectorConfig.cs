using Business.Interfaces;
using Business.Services;
using Microsoft.Extensions.DependencyInjection;

namespace Api.Configurations
{
    public static class DependencyInjectorConfig 
    {
        public static IServiceCollection ResolveDependencies(this IServiceCollection services)
        {
            services.AddScoped<IServicoService, ServicoService>();    

            return services;
        }
    }
}
