import React from 'react'
import kanban from "./img/kanban.PNG"
import tradutor from "./img/tradutor.PNG"
import RickyAndMorty from "./img/RickyAndMorty.PNG"

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
      titulo: 'Projeto 2',
      imagem: 'https://imgs.search.brave.com/ZNjqoRbyMh-laqmbhbQWoWrMv5XsRQBJOIFDnVizWXI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE4/MTQ4NDg3My9waG90/by9nb29nbGUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTYw/SEJIT1ppWG1Ga052/QzRUb19xRl9MWnJ1/NHFhT3F0NlFKLUtE/MUFBTWM9',
      src: "https://z6scrf.csb.app/"
  },]
  return (
    <div>
        <h1>Projetos</h1>
        <div className='cards'>

          {cards.map((card)=>(
            <div className='card'>

             <a href={card.src}>{card.titulo}</a>
             <img alt="imagem do projeto"className='projeto-img'src={card.imagem}></img> 
            </div>
          ))}

        </div>
    </div>
  )
}
