class Api::UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def show
        render json: @user
    end

    def update 

    end

    private
    def user_params
        params.permit(:username, :password, :password_confirmation, :first_name, :last_name, :is_inventory_control, :avatar)
    end

end
