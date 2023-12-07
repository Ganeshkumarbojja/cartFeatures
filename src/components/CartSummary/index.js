import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalItems = cartList.length
      let totalPrice = 0

      cartList.forEach(item => {
        totalPrice += item.price * item.quantity
      })

      return (
        <div className="cart-summary-main">
          <div className="cart-summary-container">
            <div className="cart-summary-content">
              <div className="order-total">
                <h1 className="order-total-text">Order Total:</h1>
                <p className="total-price">Rs {totalPrice}/- </p>
              </div>
              <p className="items-in-cart">
                {totalItems} {totalItems > 1 ? `Items in cart` : `Item in Cart`}
              </p>
            </div>
            <button type="button" className="checkout-btn">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
