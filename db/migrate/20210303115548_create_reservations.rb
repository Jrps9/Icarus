class CreateReservations < ActiveRecord::Migration[6.0]
  def change
    create_table :reservations do |t|
      t.string :name
      t.datetime :start_day
      t.datetime :end_day
      t.integer :nb_place
      t.string :destination

      t.timestamps
    end
  end
end
