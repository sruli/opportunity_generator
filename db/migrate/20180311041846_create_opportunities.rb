class CreateOpportunities < ActiveRecord::Migration[5.1]
  def change
    create_table :opportunities do |t|
      t.string :uuid
      t.text :content

      t.timestamps
    end
  end
end
