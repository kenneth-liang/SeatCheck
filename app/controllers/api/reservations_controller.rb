class Api::ReservationsController < ApplicationController
    def index 
        @reservations = Reservation.all 
    end 

    def show 
        @reservation = Reserveration.find(params[:id])
    end 


    def create 
        @reservation = Reservation.new(reservation_params)

        if @reservation 
            render :show 
        else 
            render json: @reservation.errors.full_messages, status: 422
        end 

    end 

    def destroy 
        @reservation = Rservation.find(params[:id])

        if @reservation.destroy 
            render json: reservation
        else 
            render json: ["You can't destroy what's not there."], status: 404
        end

    end 


    private 

    def reservation_params 
        params.require(:reservation).permit(:restaurant_id, :user_id, :party, :time, :date)
    end 
end
