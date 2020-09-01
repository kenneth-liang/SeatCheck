class Api::SessionsController < ApplicationController
    def create 
        errors = [] 
        errors << "email" if params[:user][:email] == ""
        errors << "password" if params[:user][:password] == ""

        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user 
            login(@user)
            render "api/users/show"
        elsif !errors.empty?
            render json:errors, status:401
        else 
            render json: ['Invalid email or password'], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
            render "api/users/show"
        else
            render json: ["Nobody signed in"], status: 404
        end
    end


end
