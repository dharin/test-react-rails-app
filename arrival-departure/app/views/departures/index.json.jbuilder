json.array! @departures do |departure|
	json.time departure.time.strftime("%H:%M") 
	json.airline_info departure.airline_info
	json.airline_company departure.airline_company
	json.flight_number departure.flight_number
end