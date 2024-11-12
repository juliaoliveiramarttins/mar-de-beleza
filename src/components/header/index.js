import { useRef, useState, useEffect } from "react";
import "./style.css";

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);
    const menuIconRef = useRef(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Fecha o sidebar ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                menuIconRef.current &&
                !menuIconRef.current.contains(event.target)
            ) {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="container">
            <div className="navbar-container">

                <nav>
                    <ul className="navbar-itens"> 
                       {/* <div className="logo">                
                            <img src="img/beleza.svg" alt="Imagem de Beleza" className="logo-svg"/>
                        </div> */}.
                            <div className="navbar-mobile">
                                <li><a href="/">Home</a></li>
                                <li><a href="#produtos">Favoritos</a></li>
                                <li><a href="#footer">Contato</a></li>
                            </div>
                        <li><a href="/error" className="btn"><span>Entrar</span></a></li>
                    </ul>
                    <div
                        id="menu_icon"
                        className="menu-icon"
                        onClick={toggleSidebar}
                        ref={menuIconRef}
                    >
                        <img src="./img/menu-icon.png" alt="Menu" />
                    </div>
                    <aside
                        id="sidebar"
                        className={`sidebar ${isSidebarOpen ? 'active' : ''}`}
                        ref={sidebarRef}
                    >
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#produtos">Favoritos</a></li>
                            <li><a href="#footer">Contato</a></li>
                            <li><a href="/error" className="btn-sidebar"><span>Entrar</span></a></li>
                        </ul>
                    </aside>
                </nav>
            </div>
        </div>
    );
};
export default Header
