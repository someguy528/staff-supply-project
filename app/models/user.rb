class User < ApplicationRecord
    has_secure_password

    # has_one_attached :avatar, dependent: :destroy
    has_one_attached :avatar, service: :s3, dependent: :destroy


end
