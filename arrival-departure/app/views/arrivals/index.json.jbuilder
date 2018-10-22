json.array! @arrivals do |arrival|
	json.time arrival.time.strftime("%H:%M") 
	json.airline_info arrival.airline_info
	json.airline_company arrival.airline_company
	json.flight_number arrival.flight_number
end