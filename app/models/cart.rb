class Cart < ApplicationRecord
  #The dependent: :destroy part
  #indicates that the existence of line items is dependent on the existence of the
  #cart. If we destroy a cart, deleting it from the database, we want Rails also to
  #destroy any line items that are associated with that cart.
  has_many :line_items, dependent: :destroy

  def add_product(product)
    current_item = line_items.find_by(product_id: product.id)
    if current_item
      current_item.quantity += 1
    else
      current_item = line_items.build(product_id: product.id)
      current_item.price = current_item.product.price
    end
    current_item
  end

  def total_price
    line_items.to_a.sum { |item| item.total_price }
  end

end
