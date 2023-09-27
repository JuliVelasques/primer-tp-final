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
                I'm <b>Mehmet Eren Olgum</b>
              </h1>
              <h3 className='texto-p'>Entrepreneur, front-end developer, UI & UX designer and student.</h3>
            </div>
            <div className='miImagen1'>
              <img className='imagen' src={logo} alt="Imagen" />
            </div>
          </div>
          <div>
            <div>
              <link rel="stylesheet" href="" />
              <link rel="stylesheet" href="" />
              <link rel="stylesheet" href="" />
              <link rel="stylesheet" href="" />
              <link rel="stylesheet" href="" />
            </div>
            <div>
              <p>eren@jairida.com</p>
            </div>
          </div>
        </section>
        <h1>What I do?</h1>
        <section className='div-whatIDo'>

          <div className='divs'>
            <h2>UI & UX Design</h2>
            <p>Curabitur quis interdum augue, sed convallis nunc. Praesent finibus turpis eu urna cursus, porttitor facilisis odio ultrices. Pellentesque malesuada mi eget interdum rhoncus dictum.</p>
          </div>
          <div className='divs'>
            <h2>Webside</h2>
            <p>Curabitur quis interdum augue, sed convallis nunc. Praesent finibus turpis eu urna cursus, porttitor facilisis odio ultrices. Pellentesque malesuada mi eget interdum rhoncus dictum.</p>
          </div>
          <div className='divs'>
            <h2>Mobile Aplication</h2>
            <p>Curabitur quis interdum augue, sed convallis nunc. Praesent finibus turpis eu urna cursus, porttitor facilisis odio ultrices. Pellentesque malesuada mi eget interdum rhoncus dictum.</p>
          </div>

        </section>
      </main>

    </>
  )
}

export default App
