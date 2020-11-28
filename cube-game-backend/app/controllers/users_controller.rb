class UsersController < ApplicationController

    def index 
        @users = User.all 
        render json: @users, include: :games
    end

    def show
        @user = User.find(params[:id])
        render json: @user, include: :games
    end

    def create
        @user = User.find_or_create_by(username: params[:username])
        render json: @user, include: :games
    end

    
    # private

    # def user_params
    #     params.require(:user).permit(:username)
    # end


end
