class Product < ApplicationRecord
  has_many :line_items
  has_many :orders, through: :line_items
  #Here we declare that a product has many line items and define a hook method
  #named ensure_not_referenced_by_any_line_item() . A hook method is a method that
  #Rails calls automatically at a given point in an object’s life. In this case, the
  #method will be called before Rails attempts to destroy a row in the database.
  #If the hook method throws :abort , the row isn’t destroyed.
  before_destroy :ensure_not_referenced_by_any_line_item

  validates :title, :description, :image_url, presence: true
  validates :title, uniqueness: true
  validates :title, length: { minimum: 10 }
  validates :image_url, allow_blank: true, format: {
    with: %r{\.(gif|jpg|png)\z}i,
    message: 'must be a URL for GIF, JPG or PNG image.'
  }
  validates :price, numericality: { greater_than_or_equal_to: 0.01 }

  private
    # ensure that there are no line items referencing this product
    def ensure_not_referenced_by_any_line_item
      unless line_items.empty?
        errors.add(:base, 'Line Items present')
        throw :abort
      end
    end
end
