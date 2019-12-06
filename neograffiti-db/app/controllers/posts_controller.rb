class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  before_action :authorize_request, except: %i[index show index_by_user]
  include ActionView::Helpers::DateHelper

  # GET /posts
  def index
    @posts = Post.all
    @posts=@posts.map do |post|
      post.timedistance =  distance_of_time_in_words(post.created_at, Time.now)
      post
    end

    render json: @posts, include: [:user, :comments]
  end

  def index_by_user
    @user = User.find(params[:user_id])
    posts = @user.posts
    render json: posts, include: [:user, :comments], status: :ok
  end

  # GET /posts/1
  def show
    @post.timedistance =  distance_of_time_in_words(@post.created_at, Time.now)
    render json: @post, include: [:user, :comments]
  end

  # POST /posts
  # def create
  #   @post = Post.new(post_params)

  #   if @post.save
  #     render json: @post, status: :created, location: @post
  #   else
  #     render json: @post.errors, status: :unprocessable_entity
  #   end
  # end

  def create_by_user
    user = User.find(params[:user_id])
    post = user.posts.new(post_params)
    # post = Post.new(post_params)
    if post.save
      render json: post, status: :created
    else
      render json: post.errors, status: :unprocessible_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:user_id, :image, :content)
    end
end
