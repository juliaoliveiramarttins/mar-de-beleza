import "./style.css";

const Banner = () => {
  return (
    <div  >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80">
        <path
          fill="#F6E7D7"
          fill-opacity="1"
          d="M0,40C80,70,160,10,240,40C320,70,400,10,480,40C560,70,640,10,720,40C800,70,880,10,960,40C1040,70,1120,10,1200,40C1280,70,1360,10,1440,40L1440,80L0,80Z">
      </path>
      </svg>
      <div className="container-banner">
        <div className="container-anuncio" >
          <img src="img/concha-azul.png" className="concha" />
          Confira nossos produtos mais populares!
          <img src="img/concha-rosa.png" alt="" className="concha" />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80">
        <path
          fill="#F6E7D7"
          fill-opacity="1"
          d="M0,40C80,10,160,70,240,40C320,10,400,70,480,40C560,10,640,70,720,40C800,10,880,70,960,40C1040,10,1120,70,1200,40C1280,10,1360,70,1440,40L1440,0L0,0Z">  
          </path>
      </svg>
    </div>
  );
};
export default Banner;
