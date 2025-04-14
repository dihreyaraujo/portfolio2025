import React, { useState } from "react";
import "./App.css";
import PerfilImage from "./images/perfil.jpg";
import CurriculoDownload from "./curriculo/currículo-2025.pdf";
import Certificado1 from "./images/certificado1.png";
import Certificado2 from "./images/certificado2.png";
import Certificado3 from "./images/certificado3.png";

const App = () => {
  const certificados = [
    { id: 1, src: Certificado1, alt: 'Certificado 1' },
    { id: 2, src: Certificado2, alt: 'Certificado 2' },
    { id: 3, src: Certificado3, alt: 'Certificado 3' },
  ];
  
  const [indexAtual, setIndexAtual] = useState(0);

  const mostrarAnterior = () => {
    setIndexAtual((prev) => (prev === 0 ? certificados.length - 1 : prev - 1));
  };

  const mostrarProximo = () => {
    setIndexAtual((prev) => (prev === certificados.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="container">
      <header className="header">
      <div className="header-container">
        <div className="logo">dihrey.</div>
        <nav>
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Hard Skills</a></li>
            <li><a href="#certificados">Certificados</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#redes">Redes</a></li>
          </ul>
        </nav>
      </div>
    </header>
        <section className="section-wrapper">
          <section id="home" className="home">
            <div className="intro">
              <div className="profile-image-wrapper">
                <img
                  src={PerfilImage}
                  alt="Foto de Perfil"
                  className="profile-image"
                />
              </div>
              <h2>Programming <span>& Developing</span></h2>
              <p className="frase">Criação de sites modernos, responsivos e otimizados.</p>
              <a href={CurriculoDownload} download="Currículo_Dihrey_Araujo.pdf" className="btn">Baixar Currículo</a>
            </div>
          </section>
        </section>

      <section className="section-wrapper">
        <section id="skills" className="section dark">
          <h2>Hard Skills</h2>
          <div className="skills">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="logo"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="logo"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="logo"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="logo"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="logo"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="logo"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="logo"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="logo"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="logo"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="logo" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg" alt="logo"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" alt="logo"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="logo"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="logo"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="logo"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="logo"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="logo"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="logo"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-plain-wordmark.svg" alt="logo"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="logo" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" alt="logo"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" alt="logo"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg" alt="logo"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" alt="logo"/>
          </div>
        </section>
      </section>

      <section className="section-wrapper">
        <section id="certificados" className="section">
          <h2>Certificados</h2>
          <div className="carrossel">
            <button className="seta" onClick={mostrarAnterior}>&lt;</button>
            <ul className="certificados-lista">
              <li>
                <img
                  src={certificados[indexAtual].src}
                  alt={certificados[indexAtual].alt}
                />
              </li>
            </ul>
            <button className="seta" onClick={mostrarProximo}>&gt;</button>
          </div>
        </section>
      </section>

      <section className="section-wrapper">
        <section id="projetos" className="section dark">
          <h2>Projetos</h2>
          <div className="projetos">
            <div className="card">
              <h3>App Delivery</h3>
              <p>Este projeto é um aplicativo de delivery desenvolvido em Javascript (React e Node) onde o cliente pode fazer seu pedido de forma online e o vendedor pode gerenciar seus pedidos e seu histórico através do app.</p>
              <a href="https://github.com/dihreyaraujo/App-Delivery" target="_blank" rel="noreferrer">Ver projeto</a>
            </div>
            <div className="card">
              <h3>Farm Management System</h3>
              <p>Este projeto é um sistema de gerenciamento agrícola desenvolvido em Java. Ele auxilia no controle de atividades agrícolas, gerenciamento de culturas e monitoramento de recursos.</p>
              <a href="https://github.com/dihreyaraujo/farm-java-project" target="_blank" rel="noreferrer">Ver projeto</a>
            </div>
            <div className="card">
              <h3>Hotel Management System</h3>
              <p>Este é um sistema de gerenciamento de hotel desenvolvido em C# com Windows Forms. Ele permite o gerenciamento de reservas, quartos e informações de hóspedes de forma eficiente.</p>
              <a href="https://github.com/dihreyaraujo/hotel-csharp-project" target="_blank" rel="noreferrer">Ver projeto</a>
            </div>
            <div className="card">
              <h3>Taxxer</h3>
              <p>Este projeto é um aplicativo que gerencia corridas feitas por aplicativo desenvolvido em Typescript (React e Node). Ele oferece funcionalidades como autenticação de usuários, gerenciamento de processos e visualização de dados.</p>
              <a href="https://github.com/dihreyaraujo/process-project-fullstack-002" target="_blank" rel="noreferrer">Ver projeto</a>
            </div>
          </div>
        </section>
      </section>

      <section className="section-wrapper">
        <section id="redes" className="section">
          <h2>Redes Sociais</h2>
          <ul className="redes">
            <li><a href="https://www.linkedin.com/in/dihrey-araujo/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/dihreyaraujo" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://www.instagram.com/dihreyaraujo/" target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </section>
      </section>

      <footer>
        <p>&copy; 2025 - Dihrey Araujo</p>
      </footer>
    </div>
  );
};

export default App;
