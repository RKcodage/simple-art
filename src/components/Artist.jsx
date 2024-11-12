import React, { useEffect, useRef } from 'react'

// bg-[url('/src/assets/frequence.jpeg')]

const Artist = () => {

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <>
    <div className=" bg-black/50 w-full min-h-[100vh] p-8 border-t-[0.5px] border-white pt-6 flex justify-center items-center" id='artiste'>

      <div className="flex justify-center md:flex-row">

        <div className="w-full md:w-1/2 lg:w-1/3 ml-8">
          <img
            src="/assets/expo1.jpeg"
            className="w-full h-auto rounded-lg shadow-lg"
            alt="Steven Roquet Exposition"
          />
        </div>

        <div className="flex-1 ml-20">
          <h2 className="text-6xl text-menuYellow mb-20 pl-8">Mon Histoire.</h2>

          <div className="flex flex-col items-center mr-6 text-white ">
            <p className="px-8 pt-[10px] text-xl text-center">Je suis Steven Roquet, un jeune homme de 26 ans cherchant à vivre plusieurs vies dans la même. Accroc au développement de soi, j’essaie de m’améliorer et de devenir meilleur chaque jour. Mon parcours est le résultat d’une suite de rencontres et de choix qui ont façonnés mon identité et mon destin.</p>
            <p className="my-12 text-menuYellow text-lg font-semibold">. . .</p>
            <p className="px-8 pt-[5px] pb-[10px] text-xl text-center">Aujourd’hui, entrepreneur - artiste - sportif, mes journées sont rythmées et chargées, mais rien ne me rend plus heureux. Que ce soit dans la gestion de mes sociétés, de mon club de jiu-		jitsu, peindre, m’entrainer, lire, apprendre ou même organiser de nouveaux projets, chaque journée est un combat que j’aime mener.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-black/50 w-full min-h-[100vh] bg-cover bg-center bg-no-repeat p-8 border-t-[0.5px] border-white pt-6 items-center">

    <div className="flex justify-center md:flex-row">
      
        <div className="flex-1 ml-8 mr-8">
          <h2 className="text-6xl text-menuYellow mb-20 pl-2">L'Art.</h2>

          <p className="px-2 pt-[10px] text-xl text-center text-white">Tout à commencé le 27 septembre 2023, j’avais alors 25 ans et je n’avais toujours pas visité un seul musée de ma vie, oui c’est une honte. Mon premier à été le musée d’Orsay qui est, et restera mon favori. En arrivant dans ce vaste édifice pour la première fois, je vis toutes sortes de merveilles et de chefs d’oeuvre, j’étais sous le choc. En marchant dans les galeries du musée je me posais cette question :</p>
          <p className="px-6 text-xl text-center text-white font-extrabold">“Steven serais-tu capable de faire de l’art ?”</p>
          <p className="px-6 pt-[10px] text-xl text-center text-white">En me comparant à ce que je voyais à coté, le courage m’avait abandonné en me disant que cette idée n’avait pas lieu d’être sans aucun talent.</p>
          <p className="px-6 py-6 text-lg text-center text-menuYellow font-semibold">. . .</p>
          <p className="px-6 pt-[5px] text-xl text-center text-white">Le 8 octobre 2023, visite du Centre Georges Pompidou. Ce n’était pas parce que l’idée de faire de l’art m’avait quittée que j’allais renoncer à découvrir les musées de Paris. En admirant à chaque étages du centre  des oeuvres de plus en plus abstraites sur les murs. Je me suis rendu compte que l’art était partout, qu’il suffisait de le voir et de le capturer. À partir de cet instant la même question reprenait place dans mon esprit :</p>
          <p className="px-6 py-6 text-lg text-center text-menuYellow font-semibold">. . .</p>
          <p className="px-6 pt-[5px] text-xl text-center text-white font-extrabold">Le 14 octobre 2023, ma Première toile, et le début d’une grande histoire.</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 pl-12">
          <video 
            muted
            autoplay 
            playsinline
            loop
            className="w-full max-w-sm rounded-lg mt-6"
            ref={videoEl}
            >
              <source src="/assets/art.webm"/>
          </video>
        </div>
      </div>
    </div>
    </>
  )
}

export default Artist