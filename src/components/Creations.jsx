import React from 'react'

const Creations = () => {
  return (
    <div className="bg-black/60 w-full min-h-[100vh] bg-cover bg-center bg-no-repeat px-12 items-center" id='creations'>

      <div className="flex justify-center md:flex-row px-4 pt-[80px]">

        <div className="w-full md:w-1/2 lg:w-1/3">
          <img
            src="/assets/frequence-monster.jpg"
            className="w-full h-auto rounded-lg shadow-lg"
            alt="Steven Roquet Exposition"
          />
        </div>

        <div className="flex-1 ml-20">
          <h2 className="text-6xl text-menuYellow mb-12 pl-2">Collection Fréquence.</h2>

          <div className="flex flex-col items-center text-white ">
            <p className="pt-[10px] text-xl text-center"> Fréquence a vu le jour à partir de moments d’émotions intenses qui ont créés une image dans mon esprit. Un concept flou et irrégulier que je me devais de réaliser et de développer afin d’avoir une idée réelle de cette image si imperceptible.</p>
            <p className="text-xl text-center mt-4">“De vie, de mort”</p>
            <p className="text-xl text-center">“D’arrivée, de départ”</p>
            <p className="text-xl text-center mb-4">“De positif, de négatif”</p>
            <p className="text-xl text-center mb-2">Fréquence est le fruit d’émotions qui ont travaillées librement dans mon imagination pour vous offrir une expérience unique.</p>
            <p className="pb-[10px] text-xl text-center">Observez l’éclat de la feuille d’or usée par le temps. Prenez attention à la texture qui vient recouvrir ou fuir la feuille d’or. Contemplez les formes créées de l’imaginaire et de l’histoire de cette oeuvre.</p>
            <p className="pb-[10px] text-xl text-center">Voyez le chemin d’or comme la vie, voyez la texture comme les obstacles, voyez ce tableau comme votre Fréquence de vie. C’est en regardant devant soit, se concentrant sur la vie, le chemin et le positif, sans prendre note des obstacles et du négatif que la vie nous fait affronter.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:flex-row px-4 pt-[80px] pb-8">

      <div className="flex-1 mr-20">
          <h2 className="text-6xl text-menuYellow mb-12 pl-2">Collection Première.</h2>

          <div className="flex flex-col items-center text-white ">
            <p className="pt-[10px] text-xl text-center"> Le 14 octobre 2023 lors de mon premier essai de peinture sur toile j’avais une sorte de boule au ventre, l’envie de m’exprimer mais la peur d’être jugé et critiqué des regards extérieurs, ou bien même de mon propre jugement personnel.</p>
            <p className="text-xl text-center pt-2">
            J’avais une idée en tête, une vague lueur artistique qui sommeillait. L’idée était d’avoir une base noire sur la toile,  la base était texturée, comprenant des aspérités, défauts et une profondeur. Cette base noire était ensuite accompagnée d’une touche de doré pour rajouter de la noblesse et de la pureté dans l’âme de cette oeuvre. Cette image était ancrée en moi, Je me devais de la faire jaillir un jour ou l’autre.</p>
            <p className="text-xl text-center pt-2">Lorsque que le courage me vint, je déposa une couche de texture noire sur la toile, l’étala et la sculptant à la main, en étirant la matière sur cette toile, je parvins à voir des reliefs, des lignes de lumière et d’ombre, des courants, comme la surface d’une eau en mouvement.</p>
            <p className="text-xl text-center pt-2">Après le temps de sèche de cette texture, je déposa alors le premier coup de pinceau d’or sur cette toile, je cherchait à augmenter l’impression de reflet de “l’eau en mouvement” avec de légers traits dorés qui ajouteraient de la lumière à cette oeuvre. </p>
            <p className="pb-[10px] text-xl text-center pt-2">
            Par inadvertance et un excès de trait doré, “entre deux” à vu le jour, l’envie de vouloir trop briller à donné un autre rendu à l’oeuvre. Cette “erreur” fut l’une des meilleurs  choses qui puissent arriver, car elle m’inspira pour le tableau d’après, celui d’après et d’encore après.</p>
          </div>
        </div>
        
        {/* // Image */}
        <div className="w-full md:w-1/2 lg:w-1/3">
          <img
            src="/assets/empreinte-modif.jpg"
            className="w-full h-auto rounded-lg shadow-lg pt-16"
            alt="Steven Roquet Exposition"
          />
        </div>
      </div>
    </div>
  )
}

export default Creations