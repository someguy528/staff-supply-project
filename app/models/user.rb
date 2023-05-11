class User < ApplicationRecord
    has_secure_password

    has_one_attached :avatar, dependent: :destroy do |attachable|
        attachable.variant :thumb, resize_to_limit: [100, 100]
    end

    
    # has_one_attached :avatar, service: :s3, dependent: :destroy


end
