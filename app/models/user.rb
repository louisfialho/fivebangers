class User < ApplicationRecord

  has_many :user_track_relationships, dependent: :delete_all
  has_many :tracks, through: :user_track_relationships

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  before_create do
    catch :missingyear do  #:missingyear acts as a label
      for a in ("a".."z")
        for b in ("a".."z")
          for c in (0..9)
            for d in (0..9)
              for e in (0..9)
                proposed_username = "#{a}#{b}#{c}#{d}#{e}".upcase()
                if User.find_by(username: proposed_username).nil?
                  self.username = proposed_username
                  throw :missingyear
                end
              end
            end
          end
        end
      end
    end
  end

end
