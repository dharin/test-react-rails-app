class ArrivalsController < ApplicationController
  # GET /arrivals
  def index
    begin
      url = "https://www.cph.dk/en/flight-information/arrivals"
      @arrivals = scrapper_values(url).to_a
    rescue Exception => exc
      @arrivals = Arrival.all
    end
  end
end
