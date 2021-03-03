class Reservation < ApplicationRecord
  has_many :marchandise
  has_many :review
end
