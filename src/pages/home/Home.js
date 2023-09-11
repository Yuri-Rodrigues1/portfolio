import React from 'react'
import './Home.css'
import linkedinSVG from './img/linkedin.svg';
import githubSVG from './img/github.svg';


export default function Home() {
  return (
    <div>
      <div className='header-container'>
          <h3>Y</h3>
          <nav className='menu-container'>
              <a href='#sobre' className='button'>Sobre</a>
              <a href='#projetos'className='button'>Projetos</a>
          </nav>
      </div>
      <div className='main-container'>
          <h1>Olá eu sou o <span>Yuri Rodrigues</span></h1>
          <h3>Atualmente estudo Análise e Desenvolvimento de Sistemas</h3>
          <h3>Tenho como objetivo trabalhar como <span>desenvolvedor front-end</span>,<br></br>porém estou aberto para todas as áreas da técnologia.</h3>
          <div className='contato-container'>
            <h3>Contato</h3>
            <p>+55 31 9 9706-4091</p>
            <p>wyurirodrigues@gmail.com</p>
            <a href='https://www.linkedin.com/in/yuri-rodrigues-766435252/' target='_blank' rel="noreferrer"><img src={linkedinSVG} alt="LinkedIn Logo" /></a> 
            <a href='https://www.github.com/yuri-Rodrigues1/' target='_blank' rel="noreferrer"><img src={githubSVG} alt="github Logo" /></a>
          </div>
      </div>
      <div id='sobre' className='sobre'>
          <h3>Sobre</h3>
          <p>Meu nome é Yuri Rodrigues Martins tenho 22 anos e moro em Santa Luzia MG,<br></br>
            atualmente curso análise e desenvolvimento de sistemas (UNA) e ja participei
            de projetos envolvendo front-end e back-end.<br></br> Possuo conhecimentos em html, css,
            Javascript, Reactjs, banco de dados e git.
          </p>
          <button>Acessar curriculo</button>
      </div>
    </div>
  )
}
