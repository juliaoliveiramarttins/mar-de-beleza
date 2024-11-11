import "./style.css";

/* passando os valores do componente */
const Footer = () => {

    return (
        <>
            <div className="custom-shape-divider-bottom-1683068753">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        class="shape-fill">
                    </path>
                </svg>
            </div>

            <footer className="main_footer footer_container" id="contact">
                <div className="content">
                    <div className="colfooter" id="footer">
                        <h4 className="titleFooter">Contato</h4>
                        <p>contato@mardebeleza.com.br</p>
                        <p>(11) 4002-8922</p>
                        <p>(11) 957169-3589</p>
                    </div>
                    <div className="colfooter">
                        <h4 className="titleFooter">Redes Sociais</h4>
                        <a href="https://www.instagram.com" className="botao">
                            <img src="./img/instagram.png" alt="Instagram" />
                        </a>
                        <a href="https://twitter.com" className="botao">
                            <img src="./img/twitter.png" alt="Twitter" />
                        </a>
                        <a href="https://www.tiktok.com" className="botao">
                            <img src="./img/tiktok.png" alt="TikTok" />
                        </a>
                    </div>
                    <div className="clear"></div>
                </div>
            </footer>
        </>
    );
};
export default Footer;