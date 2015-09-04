Rails.application.routes.draw do
  root 'blog_posts#index'
  get 'new_blog' => 'blog_posts#new'
  post 'create_blog' => 'blog_posts#create'
  post 'blog_posts' => 'blog_posts#create'

  #resources :blog_posts
  #get 'new_blog_post' => 'blog_posts#new'
  #get 'edit_blog_post' => ' blog_posts#edit'
  #get 'blog_post' => ' blog_posts#show'
  #patch  'blog_post' => ' blog_posts#update'
  #put    'blog_post' => ' blog_posts#update'
  #delete 'blog_post' => ' blog_posts#destroy'

  get 'about' => 'static_pages#about'
  get 'contact' => 'static_pages#contact'
end
