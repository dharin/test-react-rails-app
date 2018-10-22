require 'rails_helper'

RSpec.describe ArrivalsController, type: :controller do

  describe "GET #index" do
    it "returns a success response" do
      get :index, params: {},format: :json
      expect(response).to be_successful
      expect(response).to have_http_status(200)
      expect(response).to be_ok
    end
  end
end
