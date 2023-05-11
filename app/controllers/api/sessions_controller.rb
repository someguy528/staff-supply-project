class Api::SessionsController < ApplicationController
    skip_before_action :authorize, only: :create
    
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            # render json: user, status: :created
            avatar = rails_blob_path(user.avatar)
            render json: {user: user, avatar: avatar }, status: :created
        else render json: {errors: ["Wrong username/password"]}, status: :unauthorized
        end
    end
    def destroy
        session.delete :user_id
        head :no_content
    end
end
