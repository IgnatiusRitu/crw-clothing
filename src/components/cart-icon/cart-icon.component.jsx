import { useDispatch } from "react-redux";
import ShoppingIcon from "../../assets/shopping-bag.svg?react";
import "./cart-icon.styles.scss";
import { toggleCartVisibility } from "../../redux/cart/cartSlice";

const CartIcon = () => {
  const dispatch = useDispatch();
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartVisibility())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
