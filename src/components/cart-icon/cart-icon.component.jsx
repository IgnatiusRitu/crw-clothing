import { useDispatch, useSelector } from "react-redux";
import ShoppingIcon from "../../assets/shopping-bag.svg?react";
import { toggleCartVisibility } from "../../redux/cart/cartSlice";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const itemCount = useSelector((state) => selectCartItemsCount(state));
  const dispatch = useDispatch();
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartVisibility())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
