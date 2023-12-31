import logo from './assets/imagen.png';
import iconodos from './assets/logo-design.svg';
import iconotres from './assets/code-square.svg';
import iconocuatro from './assets/icon-phono.svg';
import React, { useState } from "react";
import './App.css'

function App() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <section className='fondo'>

        <h3 className='primerTitulo' id='Home'>WEB DESIGN / 2020</h3>
        <section className='comienzo'>
          <nav className='contenedorUno'>
            <div className='contenedoIconoYTexto'>
              <div>
                <svg className='bi-list' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m24 30-8-4-8 4V10h16v20z" fill="#ffffff" class="fill-ffc661"></path><path d="M24 31a1 1 0 0 1-.45-.11L16 27.12l-7.55 3.77A1 1 0 0 1 7 30V10a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v20a1 1 0 0 1-.47.85A1 1 0 0 1 24 31Zm-8-6a1 1 0 0 1 .45.11L23 28.38V11H9v17.38l6.55-3.27A1 1 0 0 1 16 25Z" fill="#333131" class="fill-6d6daa"></path><circle cx="16" cy="12" r="10" fill="#ffffff" class="fill-eef5fd"></circle><path d="M16 23a11 11 0 1 1 11-11 11 11 0 0 1-11 11Zm0-20a9 9 0 1 0 9 9 9 9 0 0 0-9-9Z" fill="#333131" class="fill-6d6daa"></path></svg>
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
                <h1 className='tituloMedioPrimeraParte'>I'm  Mehmet Eren Olgum</h1>
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
      </section>
      <header>
        <div className="Navbar">
          <div className="nav_logo">
            <svg className='i hamburguesa' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m24 30-8-4-8 4V10h16v20z" fill="#ffffff" class="fill-ffc661"></path><path d="M24 31a1 1 0 0 1-.45-.11L16 27.12l-7.55 3.77A1 1 0 0 1 7 30V10a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v20a1 1 0 0 1-.47.85A1 1 0 0 1 24 31Zm-8-6a1 1 0 0 1 .45.11L23 28.38V11H9v17.38l6.55-3.27A1 1 0 0 1 16 25Z" fill="#333131" class="fill-6d6daa"></path><circle cx="16" cy="12" r="10" fill="#ffffff" class="fill-eef5fd"></circle><path d="M16 23a11 11 0 1 1 11-11 11 11 0 0 1-11 11Zm0-20a9 9 0 1 0 9 9 9 9 0 0 0-9-9Z" fill="#333131" class="fill-6d6daa"></path></svg>
          </div>
          <div className={`nav_items ${isOpen && "open"}`}>
            <a href="#Home">Home</a>
            <a href="#Servicio">Services</a>
            <a href="#Skills">Skills</a>
            <a href="#Experience">Experience</a>
            <a href="#Contact">Contact</a>
          </div>
          <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)} >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className='textoEImagen'>
          <div className='texto-h'>
            <h1 className='tituloTexto'>I'm Mehmet Eren Olgum</h1>
            <h3 className='textoSubtitulo'>Entrepreneur, front-end developer, UI & UX designer and student.</h3>
          </div>
          <div className='miImagen1'>
            <img className='imagen1' src={logo} alt="Imagen" />
          </div>
        </div>
        <div className='finaParteInicial'>
          <div className='ubicacionIconos'>
            <a href="https://www.linkedin.com/in/julian-rodrigues-velasques-bb4376279/" target="_blank" rel="noopener noreferrer">
              <i className="biLinkedin1 bi-linkedin"></i>
            </a>
            <a href="https://github.com/JuliVelasques" target="_blank" rel="noopener noreferrer">
              <i className="biGithub1 bi-github"></i>
            </a>

            <a href="https://www.instagram.com/julian.04v/" target="_blank" rel="noopener noreferrer">
              <i className="biInstagram1 bi-instagram"></i>
            </a>

            <a href="https://www.facebook.com/julian.velasques.71" target="_blank" rel="noopener noreferrer">
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
      </header>
      <main>
        <section className='seccion-WhatIdo'>
          <h1 className='titulo-whatido' id='Servicio'>What I do?</h1>
          <nav className='div-texto-que-hago'>
            <div className='divs'>
              <img className="bi-icono-display" src={iconodos} alt="logo" />
              <h2 className='titulos-de-que-hago'>UI & UX Design</h2>
              <p>Curabitur quis interdum augue, sed convallis nunc. Praesent finibus turpis eu urna cursus, porttitor facilisis odio ultrices. Pellentesque malesuada mi eget interdum rhoncus dictum.</p>
            </div>
            <div className='divs'>
            <img className="bi-icono-display" src={iconotres} alt="logo" />
              <h2 className='titulos-de-que-hago'>Webside</h2>
              <p>Curabitur quis interdum augue, sed convallis nunc. Praesent finibus turpis eu urna cursus, porttitor facilisis odio ultrices. Pellentesque malesuada mi eget interdum rhoncus dictum.</p>
            </div>
            <div className='divs'>
              <img className="bi-icono-display" src={iconocuatro} alt="logo" />
              <h2 className='titulos-de-que-hago'>Mobile Aplication</h2>
              <p>Curabitur quis interdum augue, sed convallis nunc. Praesent finibus turpis eu urna cursus, porttitor facilisis odio ultrices. Pellentesque malesuada mi eget interdum rhoncus dictum.</p>
            </div>
          </nav>
        </section>
        <section className='padre-iconos' id='Skills'>
          <h1 className='tituloSkills'>Skills</h1>
          <ul className='iconos-trabajo'>
            <i className="icono icono1 fa-brands fa-html5"><p className='texto-iconos-skills'>HTML 5</p></i>
            <i className="icono icono2 fa-brands fa-css3-alt"><p className='texto-iconos-skills'>CSS 3</p></i>
            <i className="icono icono3 bi bi-bootstrap-fill"><p className='texto-iconos-skills'>Bootstrap</p></i>
            <i className="icono icono4 fa-brands fa-js"><p className='texto-iconos-skills'>Javascript</p></i>
            <i className="icono icono5 fa-brands fa-react"><p className='texto-iconos-skills'>React</p></i>
            <i className='icono'></i>
            <div class="linea-negra"></div>
            <div className='iconos-abajo-linea'>
              <div className='icono-adobe'>
                <svg id='mi-svg' className='sub-icono' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 50 50">
                  <path d="M 6 4 C 4.9069372 4 4 4.9069372 4 6 L 4 44 C 4 45.093063 4.9069372 46 6 46 L 44 46 C 45.093063 46 46 45.093063 46 44 L 46 6 C 46 4.9069372 45.093063 4 44 4 L 6 4 z M 6 6 L 44 6 L 44 44 L 6 44 L 6 6 z M 34.5 14 L 34.5 21.867188 L 34.5 21.875 C 33.893 20.564 32.823125 20 31.703125 20 C 29.303125 20 27 22.372 27 27.875 C 27 32.996 28.856469 36.3125 31.480469 36.3125 C 33.111469 36.3125 34.02 35.463 34.5 34.375 L 34.5 36 L 37 36 C 36.968 35.104 37 33.681 37 32.625 L 37 14 L 34.5 14 z M 13.035156 15 L 18.517578 25.5 L 13.035156 36 L 15.5 36 L 19.755859 27.873047 L 24 36 L 26.5 36 L 21 25.5 L 26.5 15 L 24 15 L 19.755859 23.126953 L 15.5 15 L 13.035156 15 z M 32.246094 22.111328 C 33.430094 22.111328 34.358328 23.525 34.486328 25.125 C 34.518328 25.476 34.486328 25.8685 34.486328 26.1875 L 34.486328 30.75 C 34.486328 30.75 34.457328 31.337 34.361328 31.625 C 33.817328 33.864 32.824641 34.263672 32.056641 34.263672 C 30.264641 34.263672 29.462891 31.139 29.462891 27.875 C 29.462891 24.772 30.198094 22.111328 32.246094 22.111328 z"></path>
                </svg>
                <p className='texto-icono-abajo'>Adobe Xd</p>
              </div>
              <div className='icono-photoshop'>
                <svg id='mi-svg-2' className='sub-icono' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="60" viewBox="0 0 50 50">
                  <path d="M 6 4 C 4.9069372 4 4 4.9069372 4 6 L 4 44 C 4 45.093063 4.9069372 46 6 46 L 44 46 C 45.093063 46 46 45.093063 46 44 L 46 6 C 46 4.9069372 45.093063 4 44 4 L 6 4 z M 6 6 L 44 6 L 44 44 L 6 44 L 6 6 z M 18.585938 14 C 17.145937 14 15.993953 14.160016 15.001953 14.416016 L 15 36 L 17.464844 36 L 17.464844 26.830078 C 17.816844 26.861078 18.136734 26.861328 18.552734 26.861328 C 20.472734 26.861328 22.488625 26.062891 23.640625 24.462891 C 24.473625 23.374891 24.951172 22.030875 24.951172 20.046875 C 24.951172 18.159875 24.407766 16.590406 23.384766 15.566406 C 22.264766 14.478406 20.568938 14 18.585938 14 z M 18.976562 15.640625 C 21.727562 15.640625 22.623047 17.622078 22.623047 19.830078 C 22.623047 22.870078 20.990797 24.470703 18.591797 24.470703 C 18.175797 24.470703 17.887609 24.439203 17.599609 24.408203 L 17.599609 15.800781 C 17.919609 15.703781 18.400562 15.640625 18.976562 15.640625 z M 31.716797 20 C 29.225797 20 27.300781 21.768641 27.300781 24.306641 C 27.300781 26.073641 28.427531 27.423234 30.519531 28.740234 C 32.145531 29.768234 32.576172 30.603969 32.576172 31.792969 C 32.576172 33.173969 31.648703 34.041016 30.220703 34.041016 C 29.190703 34.041016 28.194859 33.591281 27.630859 33.238281 L 27 35.099609 C 27.697 35.645609 28.992297 36 30.154297 36 C 32.810297 36 35 34.490047 35 31.373047 C 35 29.221047 33.540594 27.774188 31.683594 26.617188 C 30.089594 25.590188 29.691406 24.979172 29.691406 23.951172 C 29.691406 22.924172 30.387047 21.960938 31.748047 21.960938 C 32.611047 21.960937 33.27625 22.249969 33.90625 22.667969 L 34.570312 20.802734 C 33.906312 20.385734 32.978797 20 31.716797 20 z"></path>
                </svg>
                <p className='texto-icono-abajo'>Photoshop</p>
              </div>
            </div>
          </ul>
        </section>
        <section className='seccion-de-experiencia' id='Experience'>
          <h1 className='titulo-experiencia'>Experience</h1>
          <div className='h2-y-p'>
            <h2 className='subtitulo-experiencia'>Founder-jayrida (August 2020-Present)</h2>
            <p className='texto-founder'>
              Duis pharetra turpis, in ullamcorper lacus vulputate a. Ut tincidunt dolor id placerat accumsan. Aenean eget arcu ut libero vehicula bibendum rhoncus et tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam imperdiet luctus lectus. Pellentesque habitant morbi tristique senectus et malesuada fames ac turpis egestas. In elementum urna vel purus volutpat blandit. Integer efficitur, libero at finibus mattis, diam justo dictum orci, nec lobortis nunc risus eu enim. Proin quis turpis dui. Donec quis condimentus sem, a malesuada lorem. Dius egestas dolor turpis, ut aliquet elit lacinia ut. Donec tincidunt tincidunt facilisis. Fusce eu dolor nulla. Phasellus ullamcorper dui libero, nec malesuada meuris semper convallis.
            </p>
            <div class="linea-gris"></div>
            <h2 className='subtitulo-experiencia'>Voluntary Internship-Albatros Yazilim (July 2020)</h2>
            <p className='texto-founder'>
              Duis pharetra turpis, in ullamcorper lacus vulputate a. Ut tincidunt dolor id placerat accumsan. Aenean eget arcu ut libero vehicula bibendum rhoncus et tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam imperdiet luctus lectus. Pellentesque habitant morbi tristique senectus et malesuada fames ac turpis egestas. In elementum urna vel purus volutpat blandit. Integer efficitur, libero at finibus mattis, diam justo dictum orci, nec lobortis nunc risus eu enim. Proin quis turpis dui. Donec quis condimentus sem, a malesuada lorem. Dius egestas dolor turpis, ut aliquet elit lacinia ut. Donec tincidunt tincidunt facilisis. Fusce eu dolor nulla. Phasellus ullamcorper dui libero, nec malesuada meuris semper convallis.
            </p>
          </div>
        </section>
        <section className='parte-contactame' id='Contact'>
          <div className='parte-di-hola'>
            <h1 className='titulo-di-hola'>Just say hi.</h1>
            <p className='texto-di-hola'>I'm always open discuss your project and talk about new things.</p>
            <div className='texto-icono-dihola'>
              <div>
                <h5>Mail me at</h5>
                <p >eren@jayrida.com</p>
              </div>
              <div className='iconos-sigueme'>
                <h5>Folow me</h5>
                <nav className='iconos-redes-sociales'>
                  <a className='red-icono' href="https://www.linkedin.com/in/julian-rodrigues-velasques-bb4376279/">
                    <i className="bi bi-linkedin iconolinkedin2"></i>
                  </a>
                  <a className='red-icono' href="https://github.com/JuliVelasques">
                    <i className="bi bi-github"></i>
                  </a>
                  <a className='red-icono' href="https://www.instagram.com/julian.04v/">
                    <i className="bi bi-instagram iconoinstagram2"></i>
                  </a>
                  <a className='red-icono' href="https://www.facebook.com/julian.velasques.71/about_overview">
                    <i className="bi bi-facebook iconofacebook2"></i>
                  </a>
                  <a className='red-icono' href="">
                    <i className="bi bi-twitter iconotwitter2"></i>
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <div className='sub-cuerpo'>
            <form className='cuerpo' action="https://formsubmit.co/julirodriguesvelasques@gmail.com" method="POST">
              <label htmlFor="Nombre"></label>
              <input className='formulario-datos' type="text" name='name' placeholder='Your Name' />

              <label className='label-descripcion' htmlfor="email"></label>
              <input className='formulario-datos' type="email" name='email' placeholder='Your email address' />

              <label className='label-descripcion' htmlfor="subject"></label>
              <input className='formulario-datos' type="text" name='subject' placeholder='Your budget (opcional)' />

              <label className='label-descripcion' htmlfor="comments">Your project description</label>
              <textarea className='descripcion' name="comments" cols="15" rows="5"></textarea>

              <div className='espacio-enviar'>
                <input className='boton-enviar' type="submit" value="Submit" />
              </div>

              <input type="hidden" name='_next' value="http://localhost:5173/" />
              <input type="hidden" name='_captcha' value="false" />

            </form>
          </div>
        </section>
        <p className='Copyright'>Copyright © 2020. All rights reserved.</p>
        <section className='tipografia'>
          <h1 className='titulo-tipografia'>Typography</h1>
          <nav className='forma-tipografica'>
            <div className='Aa'>
              <p className='letras-a'>Aa</p>
            </div>
            <div className='abcdario'>
              <h1 className='titulo-abcdario'>Rubik</h1>
              <p className='abecedario-letras'>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Vv Ww Xx Yy Zz</p>
              <p className='numeros-tipografia'>1 2 3 4 5 6 7 8 9 0</p>
            </div>
          </nav>

          <h1 className='titulo-colores'>Colors</h1>
          <ul className='posicion-colores'>
            <div className='posicion-colores1'>
              <p className='colorblanco'></p>
              <h2 className='textoColor'>#f8f8f8</h2>
            </div>
            <div className='posicion-colores2'>
              <p className='colornegro'></p>
              <h2 className='textoColor'>#212121</h2>
            </div>
          </ul>
        </section>
      </main>
      <footer className='estructura-ultima-parte'>
        <h1 className='titulo-ultima-parte'>Thanks for watching</h1>
        <h3 className='sub-titulo-ultima-parte'>Available for new projects</h3>
        <p className='pagina-com'>eren@jayrida.com</p>
        <p className='texto-gmail'>mehmeterenolgun@gmail.com</p>
      </footer>
    </>
  )
}

export default App
