# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_17_091800) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "arrivals", force: :cascade do |t|
    t.time "time"
    t.string "airline_company"
    t.string "airline_info"
    t.string "flight_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "departures", force: :cascade do |t|
    t.time "time"
    t.string "airline_company"
    t.string "airline_info"
    t.string "flight_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end