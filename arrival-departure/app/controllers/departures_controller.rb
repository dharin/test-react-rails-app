class DeparturesController < ApplicationController
  # GET /departures
  def index
    def index
      begin
        year = params[:date].split('-')[0]
        month = params[:date].split('-')[1]
        date = params[:date].split('-')[2]
        url = "https://www.cph.dk/en/flight-information/departures?q=&date="+date+"%20-%20"+month+"%20-%20"+year+"&time=00"
        @departures = scrapper_values(url).to_a
      rescue Exception => e
        @departures = Departure.all
      end
    end
  end
end
