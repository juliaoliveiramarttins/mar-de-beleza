import "./style.css";

const ProductCard = ({ image, title, topics }) => {
  return (
    <div className="product-card">
      <h4 className="product-title">{title}</h4>
      <img src={image} className="product-image" alt={title} />
      <ul className="product-list">
        {topics?.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
      <a href="/error" className="product-btn">
        Quero!
      </a>
    </div>
  );
};

export default ProductCard;
