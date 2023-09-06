import React from 'react'

export default function Cards() {
    const cards = [{
        titulo: 'Projeto 1',
        imagem: 'https://imgs.search.brave.com/ZNjqoRbyMh-laqmbhbQWoWrMv5XsRQBJOIFDnVizWXI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE4/MTQ4NDg3My9waG90/by9nb29nbGUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTYw/SEJIT1ppWG1Ga052/QzRUb19xRl9MWnJ1/NHFhT3F0NlFKLUtE/MUFBTWM9',
    },
    {
        titulo: 'Projeto 2',
        imagem: 'https://imgs.search.brave.com/ZNjqoRbyMh-laqmbhbQWoWrMv5XsRQBJOIFDnVizWXI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE4/MTQ4NDg3My9waG90/by9nb29nbGUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTYw/SEJIT1ppWG1Ga052/QzRUb19xRl9MWnJ1/NHFhT3F0NlFKLUtE/MUFBTWM9',
    },
    {
      titulo: 'Projeto 1',
      imagem: 'https://imgs.search.brave.com/ZNjqoRbyMh-laqmbhbQWoWrMv5XsRQBJOIFDnVizWXI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE4/MTQ4NDg3My9waG90/by9nb29nbGUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTYw/SEJIT1ppWG1Ga052/QzRUb19xRl9MWnJ1/NHFhT3F0NlFKLUtE/MUFBTWM9',
  },
  {
      titulo: 'Projeto 2',
      imagem: 'https://imgs.search.brave.com/ZNjqoRbyMh-laqmbhbQWoWrMv5XsRQBJOIFDnVizWXI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE4/MTQ4NDg3My9waG90/by9nb29nbGUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTYw/SEJIT1ppWG1Ga052/QzRUb19xRl9MWnJ1/NHFhT3F0NlFKLUtE/MUFBTWM9',
  },]
  return (
    <div>
        <h1>Projetos</h1>
        <div className='cards'>

          {cards.map((card)=>(
            <div className='card'>

             <a href='#'>{card.titulo}</a>
             <img alt="imagem do projeto"className='projeto-img'src={card.imagem}></img> 
            </div>
          ))}

        </div>
    </div>
  )
}
