class BlogPostsController < ApplicationController
  before_action :set_blog_post, only: [:show, :edit, :update, :destroy]
  before_action :authenticate, only: [:new, :create]

  # GET /blog_posts
  # GET /blog_posts.json
  def index
    @blog_posts = BlogPost.all
  end

  # GET /blog_posts/new
  def new
    @blog_post = BlogPost.new
  end

  # POST /blog_posts
  # POST /blog_posts.json
  def create
    @blog_post = BlogPost.new(blog_post_params)

    if @blog_post.save
      redirect_to root_path, notice: 'Blog post was successfully created.'
    else
      render :new
    end
  end

################## CURRENTLY UNSUPPORTED OPERATIONS ############
#
#  # PATCH/PUT /blog_posts/1
#  # PATCH/PUT /blog_posts/1.json
#  def update
#    respond_to do |format|
#      if @blog_post.update(blog_post_params)
#        format.html { redirect_to @blog_post, notice: 'Blog post was successfully updated.' }
#        format.json { render :show, status: :ok, location: @blog_post }
#      else
#        format.html { render :edit }
#        format.json { render json: @blog_post.errors, status: :unprocessable_entity }
#      end
#    end
#  end
#  
#  # GET /blog_posts/1
#  # GET /blog_posts/1.json
#  def show
#  end
#
#
#  # DELETE /blog_posts/1
#  # DELETE /blog_posts/1.json
#  def destroy
#    @blog_post.destroy
#    respond_to do |format|
#      format.html { redirect_to blog_posts_url, notice: 'Blog post was successfully destroyed.' }
#      format.json { head :no_content }
#    end
#  end
#
#  # GET /blog_posts/1/edit
#  def edit
#  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_blog_post
      @blog_post = BlogPost.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def blog_post_params
      params.require(:blog_post).permit(:title, :body, :tagline)
    end

    def authenticate
    end
end
