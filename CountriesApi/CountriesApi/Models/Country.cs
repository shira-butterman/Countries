namespace CountriesApi.Models
{
    public class Country
    {
        public string Name { get; set; }
        public string Region { get; set; }
        public string Capital { get; set; }
        public string Flag { get; set; }
        public List<Currency> Currencies { get; set; }
    }
}
