class Book < ActiveRecord::Base
  def too_long_line_method
    foo = 'too longggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg'
  end

  def un_use_variable
  	bar = 1
  end

  def another_error
    baz = 2
  end
end
