import React from 'react'

const Contact = () => {
  return (
    <div className="w-full flex justify-center bg-black/60 py-12 gap-36" id='contact'>
      <div className="w-full md:w-1/2 lg:w-1/3">
        <img src="/assets/drawn33.jpg" className="w-3/4 h-auto rounded-lg shadow-lg"/>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-6xl text-menuYellow mb-8">Pour me contacter.</h2>
        <ul>
          <div className="flex items-center justify-center gap-12">
            <li className="icon-bubble">
              <img src="/assets/icons/mail.svg"/>
            </li>
            <a href="mailto:simple.art.paris@gmail.com">
              <p className="text-white text-3xl">simple.art.paris@gmail.com</p>
            </a>
          </div>
          <div className="flex items-center justify-start gap-12">
            <li className="icon-bubble">
              <img src="/assets/icons/phone.svg"/>
            </li>
            <p className="text-white text-3xl">06.02.18.07.70</p>
          </div>
          
          <div className="flex items-center justify-start gap-12">
            <li className="icon-bubble">
              <img src="/assets/icons/instagram.svg"/>
            </li>
            <a href="https://www.instagram.com/art_by_steven_roquet/" target='_blank'>
              <p className="text-white text-3xl">art_by_steven_roquet</p>
            </a>
          </div>
          <div className="flex items-center justify-start gap-12">
            <li className="icon-bubble">
              <img src="/assets/icons/localisation.svg"/>
            </li>
            <p className="text-white text-3xl">Le Plessis-Robinson</p>
          </div>
        </ul>
        
      </div>
    </div>
  )
}

export default Contact