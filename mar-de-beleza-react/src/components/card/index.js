import "./style.css";

/* passando os valores do componente */
const Card = ({ image, title, topics }) => {
    return (
        <div className="products">
            <ul className="product-list">
                <h4 className="products-name">{title}</h4>
                <img src={image} className="products-img" alt="" />
                {topics?.map((topic, index) => (
                    <li><strong>{topic}</strong></li>
                ))}
                <a href="/error" className="product-btn">Quero!</a>
            </ul>
        </div>
    );
};
export default Card;
