class Api::UsersController < ApplicationController

    def new 
        @user = User.new
    end

    def create
        @user = User.new(user_params)
        # debugger
        if @user.save
            login(@user)
            render "api/users/show"
        else
            # debugger
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name)
    end
end
