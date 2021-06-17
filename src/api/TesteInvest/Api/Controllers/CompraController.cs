using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.ViewModels;
using AutoMapper;
using Business.Interfaces;
using Business.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api")]
    [ApiController]
    public class CompraController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IServicoService _service;

        public CompraController(IMapper mapper, IServicoService compraService)
        {
            _mapper = mapper;
            _service = compraService;
        }
        [EnableCors("MinhaPolitica")]
        [HttpPost("salvar")]
        public async Task<ActionResult<CadastroViewModel>> Salvar(CadastroViewModel item)
        {
            if (item.Valor <= 0 || item.Parcelas <= 0) return CustomError();

            var model = _mapper.Map<Cadastro>(item);
            item = _mapper.Map<CadastroViewModel>(await _service.RetornaValorComJuros(model));

            return Ok(item);
        }

        [EnableCors("MinhaPolitica")]
        [HttpGet("consultar")]
        public async Task<IEnumerable<ConsultaViewModel>> Consulta()
        {
            return _mapper.Map<IEnumerable<ConsultaViewModel>>(await _service.Consultar());
        }

        protected ActionResult CustomError(object result = null)
        {
            return BadRequest(new
            {
                success = false,
                errors = "Valores fornecidos inválidos"
            });
        }
    }
}
