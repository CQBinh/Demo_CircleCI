class Book < ActiveRecord::Base
  def too_long_line_method
    foo = 'too longggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg'
  end
end
