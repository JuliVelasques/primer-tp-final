import logo from './assets/imagen.png';
import iconoUno from './assets/icono-fotoshop.svg';
import './App.css'

function App() {

  return (
    <>
      <header className='fondo'>
        <h3 className='primerTitulo'>WEB DESIGN / 2020</h3>
        <section className='comienzo'>
          <nav className='contenedorUno'>
            <div className='contenedoIconoYTexto'>
              <div>
                <i className="bi bi-list"></i>
              </div>
              <ul className='menuTexto'>
                <p className='menu'>Home</p>
                <p className='menu'>Services</p>
                <p className='menu'>Skills</p>
                <p className='menu'>Experience</p>
                <p className='menu'>Contact</p>
              </ul>
            </div>
            <div className='padrePrimeraParte'>
              <div className='medioPrimeraParte'>
                <h1 className='tituloMedioPrimeraParte'>I'm <b className='textoNegro'> Mehmet Eren Olgum</b></h1>
                <p className='textoMedioSegundaParte'>Entrepreneur, front-end developer, UI & UX designer and student.</p>
              </div>
              <div className='miImagen'>
                <img className='imagen' src={logo} alt="Imagen" />
              </div>
            </div>

            <div className='divPadreInicio'>
              <div className='iconosParteFinalInicio'>
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-github"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter"></i>

              </div>
              <div className='finalParteInicial'>
                <p>eren@jairida.com</p>
              </div>
            </div>
          </nav>
        </section>
      </header>
      <main>
        <section>
          <nav className='menu-Inico-De-Pagina'>
            <div>
              <i className=" Icono-bi bi-list"></i>
            </div>
            <div className='menu-Opciones'>
              <a className='a-menu' href="" id='#Home'>Home</a>
              <a className='a-menu' href="" id='#Servicio'>Servicio</a>
              <a className='a-menu' href="" id='#Skills'>Skills</a>
              <a className='a-menu' href="" id='#Experience'>Experience</a>
              <a className='a-menu' href="" id='#Contact'>Contact</a>
            </div>
          </nav>
          <div className='textoEImagen'>
            <div className='texto-h'>
              <h1 className='tituloTexto'>
                I'm <b className='distincionDeLetra'>Mehmet Eren Olgum</b>
              </h1>
              <h3 className='textoSubtitulo'>Entrepreneur, front-end developer, UI & UX designer and student.</h3>
            </div>
            <div className='miImagen1'>
              <img className='imagen1' src={logo} alt="Imagen" />
            </div>
          </div>
          <div className='finaParteInicial'>
            <div className='ubicacionIconos'>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <i className="biLinkedin1 bi-linkedin"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="biGithub1 bi-github"></i>
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="biInstagram1 bi-instagram"></i>
              </a>

              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="biFacebook1 bi-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="biTwitter1 bi-twitter"></i>
              </a>
            </div>
            <div className='ubicacionTexto'>
              <p className='tamañoTexto'>eren@jairida.com</p>
            </div>
          </div>
        </section>
        <section className='seccion-WhatIdo'>
          <h1 className='titulo-whatido'>What I do?</h1>
          <nav className='div-texto-que-hago'>
            <div className='divs'>
              <i className="bi-icono-display bi-display"></i>
              <h2>UI & UX Design</h2>
              <p>Curabitur quis interdum augue, sed convallis nunc. Praesent finibus turpis eu urna cursus, porttitor facilisis odio ultrices. Pellentesque malesuada mi eget interdum rhoncus dictum.</p>
            </div>
            <div className='divs'>
              <i className="bi-icono-display bi-display"></i>
              <h2>Webside</h2>
              <p>Curabitur quis interdum augue, sed convallis nunc. Praesent finibus turpis eu urna cursus, porttitor facilisis odio ultrices. Pellentesque malesuada mi eget interdum rhoncus dictum.</p>
            </div>
            <div className='divs'>
              <i class="bi-icono-telefono bi-phone"></i>
              <h2>Mobile Aplication</h2>
              <p>Curabitur quis interdum augue, sed convallis nunc. Praesent finibus turpis eu urna cursus, porttitor facilisis odio ultrices. Pellentesque malesuada mi eget interdum rhoncus dictum.</p>
            </div>
          </nav>
        </section>
        <section className='padre-iconos'>
          <h1 className='tituloSkills'>Skills</h1>
          <ul className='iconos-trabajo'>
            <i className="icono fa-brands fa-html5"><p className='texto-iconos-skills'>HTML 5</p></i>
            <i className="icono fa-brands fa-css3-alt"><p className='texto-iconos-skills'>CSS 3</p></i>
            <i className="icono bi bi-bootstrap-fill"><p className='texto-iconos-skills'>BOOTSTRAP</p></i>
            <i className="icono fa-brands fa-js"><p className='texto-iconos-skills'>JS</p></i>
            <i className="icono fa-brands fa-react"><p className='texto-iconos-skills'>REACT</p></i>
            <i className='icono'></i>
            <div class="linea-negra"></div>
            <div>
              {/* <img className='icono-de-abajo' src={iconoUno} alt="icono" /> <p>Photoshop</p> */}
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                <path d="M 6 4 C 4.9069372 4 4 4.9069372 4 6 L 4 44 C 4 45.093063 4.9069372 46 6 46 L 44 46 C 45.093063 46 46 45.093063 46 44 L 46 6 C 46 4.9069372 45.093063 4 44 4 L 6 4 z M 6 6 L 44 6 L 44 44 L 6 44 L 6 6 z M 34.5 14 L 34.5 21.867188 L 34.5 21.875 C 33.893 20.564 32.823125 20 31.703125 20 C 29.303125 20 27 22.372 27 27.875 C 27 32.996 28.856469 36.3125 31.480469 36.3125 C 33.111469 36.3125 34.02 35.463 34.5 34.375 L 34.5 36 L 37 36 C 36.968 35.104 37 33.681 37 32.625 L 37 14 L 34.5 14 z M 13.035156 15 L 18.517578 25.5 L 13.035156 36 L 15.5 36 L 19.755859 27.873047 L 24 36 L 26.5 36 L 21 25.5 L 26.5 15 L 24 15 L 19.755859 23.126953 L 15.5 15 L 13.035156 15 z M 32.246094 22.111328 C 33.430094 22.111328 34.358328 23.525 34.486328 25.125 C 34.518328 25.476 34.486328 25.8685 34.486328 26.1875 L 34.486328 30.75 C 34.486328 30.75 34.457328 31.337 34.361328 31.625 C 33.817328 33.864 32.824641 34.263672 32.056641 34.263672 C 30.264641 34.263672 29.462891 31.139 29.462891 27.875 C 29.462891 24.772 30.198094 22.111328 32.246094 22.111328 z"></path>
              </svg>
              {/* <img className='icono-de-abajo' src={iconoUno} alt="icono" /> <p>Photoshop</p>*/}
            </div> 
          </ul>
        </section>
        <section className='seccion-de-experiencia'>
          <h1>Experience</h1>
          <div className='h2-y-p'>
          <h2>Founder-jayrida(August 2020-Present)</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis esse itaque illo quia ducimus labore nisi delectus molestias at assumenda nulla in fugiat et sed excepturi quibusdam ea a fugit exercitationem amet id, cupiditate magnam non? Sequi quo dolorum molestiae porro quidem deserunt itaque error inventore, deleniti eaque perferendis ipsum amet non tempora veniam consequatur rerum explicabo aliquam suscipit omnis nobis cupiditate doloribus voluptatibus provident. Cum asperiores in dolorem nesciunt consequatur est, reprehenderit perspiciatis?</p>
          <div class="linea-negra"></div>
          <h2>Voluntary Internship-Albatros Yazilim</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perspiciatis esse itaque illo quia ducimus labore nisi delectus molestias at assumenda nulla in fugiat et sed excepturi quibusdam ea a fugit exercitationem amet id, cupiditate magnam non? Sequi quo dolorum molestiae porro quidem deserunt itaque error inventore, deleniti eaque perferendis ipsum amet non tempora veniam consequatur rerum explicabo aliquam suscipit omnis nobis cupiditate doloribus voluptatibus provident. Cum asperiores in dolorem nesciunt consequatur est, reprehenderit perspiciatis?</p>
          </div>
        </section>
      </main>

    </>
  )
}

export default App
