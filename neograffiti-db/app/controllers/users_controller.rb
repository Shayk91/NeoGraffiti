class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  before_action :authorize_request, except: [:create, :index, :show, :update]

  # GET /users
  def index
    @users = User.all

    render json: @users, include: :posts
  end

  # GET /users/1
  def show
    render json: @user, include: :posts
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      @token = encode({ user_id: @user.id, username: @user.username })
      render json: { user: @user, token: @token }, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(username: params[:username] )
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def update_user_params
      params.require(:user).permit(:username, :email, :full_name, :image, :bio)
    end
    
    def user_params
      params.require(:user).permit(:username, :email, :password, :full_name, :image, :bio)
    end
end
