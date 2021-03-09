class Reservation < ApplicationRecord
  belongs_to :user
  has_many :marchandise
  has_many :review
end
