Rails.application.routes.draw do
  devise_for :users
  root 'blog_posts#index'
  get 'new_blog' => 'blog_posts#new'
  post 'create_blog' => 'blog_posts#create'
  post 'blog_posts' => 'blog_posts#create'
  get 'blog/:id' => 'blog_posts#show'

  #get 'new_story' => 'story_posts#new'
  #post 'create_story' => 'story_posts#create'
  #post 'story_posts' => 'story_posts#create'
  #get 'story/:id' => 'story_posts#show'

  get 'about' => 'static_pages#about'
  get 'contact' => 'static_pages#contact'
  get 'stories' => 'static_pages#stories'
  get 'rsvp' => 'static_pages#rsvp'
  get 'registry' => 'static_pages#registry'
  get 'fun-registry' => 'static_pages#fun_registry'
  get 'wedding' => 'static_pages#wedding'
end
