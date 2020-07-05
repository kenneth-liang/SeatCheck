class Api::ReservationsController < ApplicationController
    def index 
        # @reservations = Reservation.all 

        user = User.find_by(id: params[:userId])
        if user 
            @reservations = user.reservations.order(:date)
        else 
            render json: ["No User"], status: 404
        end
    end 

    def show 
        @reservation = Reservation.find(params[:id])
    end 


    def create 
        @reservation = Reservation.new(reservation_params)

        if @reservation.save
            render 'api/reservations/show'
        else 
            render json: @reservation.errors.full_messages, status: 422
        end 

    end 

    def destroy 
        @reservation = Reservation.find(params[:id])

        if @reservation.destroy 
            render json: @reservation
        else 
            render json: ["You can't destroy what's not there."], status: 404
        end

    end 


    private 

    def reservation_params 
        params.require(:reservation).permit(:restaurant_id, :user_id, :party, :time, :date)
    end 
end
