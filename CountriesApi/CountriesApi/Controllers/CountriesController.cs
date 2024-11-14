using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using CountriesApi.Models;

namespace AsiaCountriesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CountriesController : ControllerBase
    {
        private readonly HttpClient _httpClient;

        public CountriesController(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        [HttpGet]
        public async Task<ActionResult<List<Country>>> GetCountries()
        {
            try
            {
                var response = await _httpClient.GetStringAsync("https://restcountries.com/v2/all");

                var countries = JsonConvert.DeserializeObject<List<Country>>(response);

                var asianCountries = countries?.Where(country => country.Region == "Asia").ToList();

                return Ok(asianCountries);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error retrieving data: {ex.Message}");
            }
        }

        [HttpGet("asia")]
        public async Task<ActionResult<List<Country>>> GetCountriesInAsia()
        {
            try
            {
                var response = await _httpClient.GetStringAsync("https://restcountries.com/v2/region/asia");

                var asianCountries = JsonConvert.DeserializeObject<List<Country>>(response);

                return Ok(asianCountries);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error retrieving data: {ex.Message}");
            }
        }
    }
}
