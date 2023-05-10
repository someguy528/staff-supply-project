class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :password_digest, :is_admin, :is_inventory_control, :avatar
end
