import "./style.css";

/* passando os valores do componente */
const MainSection = () => {
  return (
    <>
      <div class="main-banner">
        <h1>Mar de Beleza</h1>
        <p>Surfe na tendência, destaque-se sempre!</p>
      </div>
      <div className="main-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80">
          <path
            fill="#c3e6fa"
            fill-opacity="1"
            d="M0,32L40,42C80,53,160,73,240,64C320,56,400,32,480,32C560,32,640,56,720,64C800,73,880,53,960,42C1040,32,1120,36,1200,42.7C1280,49,1360,53,1400,55.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};
export default MainSection;
