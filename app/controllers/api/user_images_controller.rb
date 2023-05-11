# class Api::UserImagesController < ApplicationController
class Api::UserImagesController < Api::UsersController
    def update
        user = User.find(params[:id])
        user.update(avatar: params[:avatar])
        avatar_url = rails_blob_path(user.avatar)
        ## cant access vips image processor, maybe find how to use thumbnail resize variant one day
        # avatar_url = rails_blob_path(user.avatar.variant(:thumb))
        # byebug
        render json: {user: user, avatar_url: avatar_url}
    end

end
