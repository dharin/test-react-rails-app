FactoryBot.define do
  factory :arrivals do
    url = "https://www.cph.dk/en/flight-information/arrivals"
    scrapper_values(url)
  end
end