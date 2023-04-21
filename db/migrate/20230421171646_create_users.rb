class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :first_name
      t.string :last_name
      t.string :password_digest
      t.boolean :is_admin
      t.boolean :is_inventory_control

      t.timestamps
    end
  end
end
