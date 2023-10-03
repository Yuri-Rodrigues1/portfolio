import React from 'react'
import kanban from "./img/kanban.PNG"
import tradutor from "./img/tradutor.PNG"
import RickyAndMorty from "./img/RickyAndMorty.PNG"
import Login from "./img/Login.PNG"

export default function Cards() {
    const cards = [{
        titulo: 'Kanban',
        imagem: kanban,
        src: "https://z6scrf.csb.app/"
    },
    {
        titulo: 'Tradutor',
        imagem: tradutor,
        src: "https://x9mt8x.csb.app/"
    },
    {
      titulo: 'Ricky & Morty',
      imagem: RickyAndMorty,
      src: "https://yzdy8n.csb.app/"
  },
  {
      titulo: 'Login',
      imagem: Login,
      src: "https://x5wqp5.csb.app/"
  },]
  return (
    <div>
        <h1>Projetos</h1>
        <div className='cards'>

          {cards.map((card)=>(
            <div className='card'>
             <a target='_blank' href={card.src}>{card.titulo}</a>
             <img alt="imagem do projeto"className='projeto-img'src={card.imagem}></img> 
            </div>
          ))}

        </div>
    </div>
  )
}
