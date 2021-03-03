class CreateMarchandises < ActiveRecord::Migration[6.0]
  def change
    create_table :marchandises do |t|
      t.string :name
      t.integer :quantity
      t.integer :cost
      t.references :reservation, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
