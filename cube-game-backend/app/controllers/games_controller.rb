class GamesController < ApplicationController

    def index
        @games = Game.all
        render json: @games, include: :user
    end

    def destroy
        @game = Game.find(params[:id])
        @game.destroy
        render json: @game
    end

end
