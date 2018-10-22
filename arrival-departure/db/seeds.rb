# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
['arrivals', 'departures'].each do |flight_type|
  url = "https://www.cph.dk/en/flight-information/#{flight_type}"
  unparsed_page = HTTParty.get(url)
  parsed_page = Nokogiri.HTML(unparsed_page)
  data_listing = parsed_page.css('div.stylish-table__row--body')
  data_listing.each do |flight_data|
    flight_type.titleize.singularize.constantize.create(
      time: flight_data.css('div.flights__table__col--time div span em').text,
      airline_company: flight_data.css('div.v--desktop-only span span').text,
      airline_info: flight_data.css('div.flights__table__col--destination div span strong span').text,
      flight_number: flight_data.css('div.flights__table__col--destination div span small').text)
  end    
end