class Reservation < ApplicationRecord
  belongs_to :user
  has_many :marchandise, dependent: :destroy
  has_many :review, dependent: :destroy

  validates :name, presence: true
  validates :start_day, presence: true
end
