// src/components/description/Services.js
import React from 'react';
import './style.css';

const Services = () => {
    return (
        <section className="services-container" id="desc-produtos">
            <ul>
                <li>
                    <img src="./img/maquiagens.png" alt="Maquiagens" />
                    <h3>Maquiagens</h3>
                    <p>
                        Descubra nossa linha de maquiagens que oferecem fórmulas de alta qualidade e uma variedade de produtos,
                        desenvolvidos com tecnologia avançada para que atendamos a todos os estilos e ocasiões. Nossas embalagens
                        elegantes e funcionais não apenas protegem os produtos, mas também facilitam o transporte, tornando-as
                        perfeitas para onde você for. Sinta-se confiante e radiante, com longa duração e acabamento profissional.
                    </p>
                </li>
                <li>
                    <img src="./img/pinceis.png" alt="Pincéis" />
                    <h3>Pincéis</h3>
                    <p>
                        Descubra nossa linha de pincéis de maquiagem que foram projetados para proporcionar uma aplicação perfeita
                        e profissional. Feitos com cerdas macias e duráveis, eles garantem que cada produto deslize suavemente sobre
                        a pele, formando um ótimo acabamento para sua maquiagem. Com uma variedade de formatos e tamanhos, você
                        encontrará o pincel ideal para cada passo da sua maquiagem.
                    </p>
                </li>
                <li>
                    <img src="./img/estojo.png" alt="Nécessaires" />
                    <h3>Nécessaires</h3>
                    <p>
                        Mantenha sua rotina de beleza sempre organizada com nossas nécessaires elegantes e funcionais, feitas de material
                        reciclável e resistente. Disponíveis em diversos tamanhos e estilos, são ideais para armazenar seus produtos de
                        maquiagem e acessórios de forma prática. Perfeitas para viagens ou para o dia a dia, elas combinam design sofisticado
                        e sustentabilidade, elevando ainda mais seu ritual de beleza.
                    </p>
                </li>
            </ul>
        </section>
    );
};

export default Services;
