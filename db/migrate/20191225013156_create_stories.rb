class CreateStories < ActiveRecord::Migration[4.2]
  def change
    create_table :stories do |t|
      t.string :title
      t.text :text

      t.timestamps null: false
    end
  end
end
