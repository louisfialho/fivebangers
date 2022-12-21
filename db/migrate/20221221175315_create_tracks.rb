class CreateTracks < ActiveRecord::Migration[6.0]
  def change
    create_table :tracks do |t|
      t.string :youtube_url

      t.timestamps
    end
  end
end
