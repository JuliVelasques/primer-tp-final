import logo from './assets/imagen.png';
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
              <button>Home</button>
              <button>Services</button>
              <button>Skills</button>
              <button>Experience</button>
              <button>Contact</button>
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
              <i className="biLinkedin1 bi-linkedin"></i>
              <i className="biGithub1 bi-github"></i>
              <i className="biInstagram1 bi-instagram"></i>
              <i className="biFacebook1 bi-facebook"></i>
              <i className="biTwitter1 bi-twitter"></i>
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
            <h1>Skills</h1>
            <div className='iconos-trabajo'>
            <i className="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3-alt"></i>
            <i class="bi bi-bootstrap-fill"></i>
              
            </div>
            <div className='iconos-trabajo'>
            <i class="fa-brands fa-js"></i>
            <i class="iconoReact fa-brands fa-react"></i>
            </div>
            <img  src="https://img.icons8.com/ios/50/adobe-xd--v1.png" alt="adobe-xd--v1"/>
        </section>
      </main>

    </>
  )
}

export default App
