class CreateDepartures < ActiveRecord::Migration[5.2]
  def change
    create_table :departures do |t|
      t.time :time
      t.string :airline_company
      t.string :airline_info
      t.string :flight_number

      t.timestamps
    end
  end
end
