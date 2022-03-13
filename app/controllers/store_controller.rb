class StoreController < ApplicationController
  skip_before_action :authorize
  include CurrentCart
  before_action :set_cart
  def index
    @counter = store_counter
    @counterMessage = "You have accessed this page #{@counter}" if @counter > 5 #gjør om denne til spansk senere?
    if params[:set_locale]
      redirect_to store_index_url(locale: params[:set_locale])
    else
      @products = Product.order(:title)
    end
  end

  private
    def store_counter
      if session[:counter].nil?
        session[:counter] = 0
      end
      session[:counter] += 1
    end

end
