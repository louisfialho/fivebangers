class CreateUserTrackRelationships < ActiveRecord::Migration[6.0]
  def change
    create_table :user_track_relationships do |t|
      t.references :user, foreign_key: true
      t.references :track, foreign_key: true
      t.string :position
      t.timestamps
    end
  end
end
