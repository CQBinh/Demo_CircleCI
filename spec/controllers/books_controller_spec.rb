require 'rails_helper'

RSpec.describe BooksController, type: :controller do
  describe 'GET #index' do
    it 'this test case will fail' do
      get :index
      expect(response).to be_success
      expect(response).to have_http_status(300)
    end
  end
end
