using Business.Interfaces;
using Business.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Services
{
    public class ServicoService : IServicoService
    {
        private const double juros = 0.05;

        public async Task<Cadastro> RetornaValorComJuros(Cadastro item)
        {
            var valor = (Convert.ToDouble(item.Valor) * item.Parcelas);
            var porcent = (valor * juros);
            var result = valor + porcent;
            var valorFormatado = result.ToString("C", CultureInfo.CurrentCulture);
            item.ValorFinal = valorFormatado;

            return await Task.FromResult(item);
        }

        public async Task<IEnumerable<Consulta>> Consultar()
        {
            var lista = new List<Consulta>();
            lista.Add(new Consulta { Id = 1, Nome = "Bruno" });
            lista.Add(new Consulta { Id = 2, Nome = "João" });
            lista.Add(new Consulta { Id = 3, Nome = "Maria" });
            lista.Add(new Consulta { Id = 4, Nome = "Ana" });

            return await Task.FromResult<IEnumerable<Consulta>>(lista);
        }
    }
}
