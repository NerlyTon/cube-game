class GamesController < ApplicationController

    def index
        @games = Game.all
        render json: @games, include: :user
    end

    def create
        @user = User.find(params[:user_id])
        @game = Game.create(score: params[:score], user_id: params[:user_id])
        render json: @game, include: :user
        # @user = User.new(user_params)
        # if @user.save
        #     render json: @user
        # else
        #     render json:{ errors: @user.errors.full_messages} 
        # end
    end

    def destroy
        @game = Game.find(params[:id])
        @game.destroy
        render json: @game, include: :user
    end

end
