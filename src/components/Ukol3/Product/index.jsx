import './style.css';

export const Product = ({ image, name, price, onSelectPrice }) => {
  const handleClick = () => {
    onSelectPrice(price);
  };

  return (
    <div className="product" onClick={handleClick}>
      <img src={image} className="product__image" />
      <div className="product__body">
        {name}: {price} Kč
      </div>
    </div>
  );
};
