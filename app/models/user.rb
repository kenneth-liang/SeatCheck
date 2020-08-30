# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :email, :password_digest,:first_name, :last_name, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    after_initialize :ensure_session_token

    attr_reader :password

    # associations

    has_many :reservations, 
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Reservation

    has_many :ratings,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Rating

    has_many :favorites, 
        primary_key: :id, 
        foreign_key: :user_id,
        class_name: :Favorite

    has_many :favorited_restaurants,
        through: :favorites, 
        source: :restaurant 
        
    # spire

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end
