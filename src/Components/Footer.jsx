import React from 'react'

const Footer = () => {
  return (
    <footer className=" pt-[4.5rem] pb-10 bg-[#333333] w-full h-full">
    <div >
      <div className="flex flex-col justify-center items-center gap-4 ">
        <picture>
          <img className="w-[112px]" src="/images/logo-dentista.png" alt="" />
        </picture>
        <div className="w-full flex justify-center">
          <a className="w-full flex justify-center items-center gap-4" href="mailto: juancarlosvigar@gmail.com" target="_blank" rel="noopener noreferrer">
            <picture>
              <img className="" src="/images/mail.svg" alt="mail" />
            </picture>
            <span className="text-white"> juancarlosvigar@gmail.com</span>
          </a>
        </div>

        <div className="flex gap-8 pb-2">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <picture>
              <img className='w-10' src="/images/ico-facebook.png" alt="" />
            </picture>
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <picture>
              <img className='w-10' src="/images/ico-instagram.png" alt="" />
            </picture>
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <picture>
              <img className='w-10' src="/images/ico-tiktok.png" alt="" />
            </picture>
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <picture>
              <img className='w-10' src="/images/ico-whatsapp.png" alt="" />
            </picture>
          </a>
        </div>
        
        <span className="!text-white label-mediun whitespace-nowrap">Juan Carlos Vivas - 2024 © Copyrights. All rights reserved.</span>
      </div>
    </div>
  </footer>
  )
}

export default Footer
