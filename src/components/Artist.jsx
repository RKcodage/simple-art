import React from 'react'
import background from '/src/assets/test.png';
// bg-[url('/src/assets/frequence.jpeg')]

const Artist = () => {
  return (
    <div className=" bg-zinc-950 w-full min-h-[100vh] bg-cover bg-center bg-no-repeat p-8 border-t-[0.5px] border-white pt-6 flex justify-center items-center">



      <div className="flex justify-center">

        <div className="bg-[url('/src/assets/expo1.jpeg')] flex-initial min-w-[650px] min-h-[750px] bg-cover bg-center">
          {/* <img src='/src/assets/expo1.jpeg' className="w-1/3 border-white b" alt='Steven Roquet Exposition'/> */}
        </div>

        <div className="flex-1 ml-8">

          <h2 className="text-4xl text-menuYellow" id='artiste'>Mon Histoire.</h2>

          <div className="flex flex-col items-center mr-8 text-white ">
          <p className="px-6 pt-[10px] text-md text-center">Je suis Steven Roquet, un jeune homme de 26 ans cherchant à vivre plusieurs vies dans la même. Accroc au développement de soi, j’essaie de m’améliorer et de devenir meilleur chaque jour. Mon parcours est le résultat d’une suite de rencontres et de choix qui ont façonnés mon identité et mon destin.</p>
          <p>. . .</p>
          <p className="px-6 pt-[5px] pb-[10px] text-md text-center">Aujourd’hui, entrepreneur - artiste - sportif, mes journées sont rythmées et chargées, mais rien ne me rend plus heureux. Que ce soit dans la gestion de mes sociétés, de mon club de jiu-		jitsu, peindre, m’entrainer, lire, apprendre ou même organiser de nouveaux projets, chaque journée est un combat que j’aime mener.</p>
        </div>
        <h2 className="text-4xl text-menuYellow text-right" id='artiste'>L'Art.</h2>

        <p className="px-4 pt-[10px] text-md text-center text-white">Tout à commencé le 27 septembre 2023, j’avais alors 25 ans et je n’avais toujours pas visité un seul musée de ma vie, oui c’est une honte. Mon premier à été le musée d’Orsay qui est, et restera mon favori. En arrivant dans ce vaste édifice pour la première fois, je vis toutes sortes de merveilles et de chefs d’oeuvre, j’étais sous le choc. En marchant dans les galeries du musée je me posais cette question :</p>
        <p className="px-6 text-md text-center text-white font-extrabold">“Steven serais-tu capable de faire de l’art ?”</p>
        <p className="px-6 pt-[10px] text-md text-center text-white">En me comparant à ce que je voyais à coté, le courage m’avait abandonné en me disant que cette idée n’avait pas lieu d’être sans aucun talent.</p>
        <p className="px-6 text-lg text-center text-white">. . .</p>
        <p className="px-6 pt-[5px] text-md text-center text-white">Le 8 octobre 2023, visite du Centre Georges Pompidou. Ce n’était pas parce que l’idée de faire de l’art m’avait quittée que j’allais renoncer à découvrir les musées de Paris. En admirant à chaque étages du centre  des oeuvres de plus en plus abstraites sur les murs. Je me suis rendu compte que l’art était partout, qu’il suffisait de le voir et de le capturer. À partir de cet instant la même question reprenait place dans mon esprit :</p>
        <p className="px-6 text-lg text-center text-white">. . .</p>
        <p className="px-6 pt-[5px] text-md text-center text-white font-extrabold">Le 14 octobre 2023, ma Première toile, et le début d’une grande histoire.</p>
        </div>
        
      </div>
      

    </div>
  )
}

export default Artist