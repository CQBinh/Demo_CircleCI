class Book < ActiveRecord::Base
  # def error_method
  #   foo = 1
  # end

  def rspec_fail
    foo = "bar"
  end
end
