class Book < ActiveRecord::Base
  def too_long_line_method
    'too longggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg'
  end

  def useless_variable
    bar = 1
  end
end
