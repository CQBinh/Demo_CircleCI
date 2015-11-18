class BooksController < ApplicationController
  def index
    render json: { books: Book.all }
  end
end
