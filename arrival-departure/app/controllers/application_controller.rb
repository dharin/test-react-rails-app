class ApplicationController < ActionController::API
  include ActionController::Helpers

  def scrapper_values(url)
    @flight_info = Hash.new
    unparsed_page = HTTParty.get(url)
    parsed_page = Nokogiri.HTML(unparsed_page)
    data_listing = parsed_page.css('div.stylish-table__row--body')
    data_listing.each do |flight_data|
      flight_hash = {
          time: flight_data.css('div.flights__table__col--time div span em').text,
          airline_company: flight_data.css('div.v--desktop-only span span').text,
          airline_info: flight_data.css('div.flights__table__col--destination div span strong span').text,
          flight_number: flight_data.css('div.flights__table__col--destination div span small').text
        }
      @flight_info << flight_hash
    end
    return @flight_info
  end

  helper_method :scrapper_values
end
