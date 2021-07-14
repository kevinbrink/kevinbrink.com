class StaticPagesController < ApplicationController
  def about
  end

  def contact
  end

  def stories
  end

  def rsvp
    redirect_to "https://docs.google.com/forms/d/16x3CY4kcOYJCLgTLL0wINF090kHHltj8-QCn6CLAVuA/viewform?edit_requested=true"
  end

  def registry
    redirect_to "https://www.myregistry.com/wedding-registry/kevin-brink-and-kendra-malskaitis-aylmer-on/2865129"
  end

  def funregistry
    redirect_to "https://www.myregistry.com/wishlist/kevin-brink-aylmer-on/2881413"
  end

  def weddingmeal
    redirect_to "https://forms.gle/LuCJTFhQAQenVE7S9"
  end

  def wedding
    redirect_to "https://fb.me/e/2zJ96jTpj"
  end
end
