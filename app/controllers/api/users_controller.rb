class Api::UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def index
        users = User.all 
        all_users = users.collect do |u|
            if u.avatar.attached?
                avatar = rails_blob_path(u.avatar)
                {user: u, avatar: avatar }
            else
                {user: u, avatar: null}
            end
        end
        render json: all_users
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    # def show
    #     avatar = rails_blob_path(@user.avatar)
    #     render json: {user: @user, avatar: avatar}
    # end
    def show
        if @user.avatar.attached?
            avatar = rails_blob_path(@user.avatar)
            render json: {user: @user, avatar: avatar }
        else
            render json: {user: @user, avatar: null}
        end
    end

    ## this code was moved to a separate controller in user_images for image uploads only
    # def update
    #     user = User.find(params[:id])
    #     user.update(avatar: params[:avatar])
    #     avatar_url = rails_blob_path(user.avatar)
    #     ## byebug
    #     render json: {user: user, avatar_url: avatar_url}
    # end

    private
    def user_params
        params.permit(:username, :password, :password_confirmation, :first_name, :last_name, :is_inventory_control, :avatar)
    end

end
