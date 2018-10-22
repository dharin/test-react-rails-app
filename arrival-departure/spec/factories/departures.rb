FactoryBot.define do
  factory :departures do
    url = "https://www.cph.dk/en/flight-information/departures"
    scrapper_values(url)
  end
end