class AddCartPriceToLineItems < ActiveRecord::Migration[6.0]
  def change
    add_column :line_items, :cart_price, :integer
  end
end
