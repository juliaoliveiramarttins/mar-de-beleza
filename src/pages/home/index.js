import Banner from "../../components/banner/index";
import Card from "../../components/card/index";
import Description from "../../components/description/index";
import MainSection from "../../components/mainSection/index";
import ProductMocks from "../../mocks/products";
import "./style.css";

function Home() {
  return (
    <main>
      <MainSection />
      <Description />
      <div className="App">
        <section className="ad-container" id="produtos">        
        <Banner/>
        <div className="famous-products">

          {ProductMocks.map((product, index) => (
            <Card
              key={index}
              image={product.image}
              title={product.name}
              topics={product.topics}
            />
          ))}
          </div>
      </section>
        </div>
    </main>
  );
}

export default Home;
