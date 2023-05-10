class Api::UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def show
        # byebug
        avatar = rails_blob_path(@user.avatar)
        # render json: @user
        render json: {user: @user, avatar: avatar}
    end

    def update
        user = User.find(params[:id])
        user.update(avatar: params[:avatar])
        avatar_url = rails_blob_path(user.avatar)
        # byebug
        render json: {user: user, avatar_url: avatar_url}
    end

    private
    def user_params
        params.permit(:username, :password, :password_confirmation, :first_name, :last_name, :is_inventory_control, :avatar)
    end

end
