import { useDispatch } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import { addedItem } from "../../redux/cart/cartSlice";

import "./collection-item.styles.scss";
const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={() => dispatch(addedItem(item))}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
