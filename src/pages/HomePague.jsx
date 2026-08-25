import { Typer, MultiTyper } from '../components/Typer';
import './HomePague.css';

function HomePague() {
  const saludos = [
    "¡Hola, mundo!",
    "Hello, world!",
    "Bonjour, monde!",
    "Ciao, mondo!",
    "Hallo, Welt!",
    "Olá, mundo!",
    "Hola, món!",
    "Hallo, wereld!",
    "Привет, мир!",
    "你好，世界！"
  ];

  return (
    <main>
      {/* Sección de Saludos */}
      <section className='typer'>
        <h1>
          <MultiTyper texts={saludos} repeat={true} />
        </h1>
      </section>
      {/* Sección de Presentación / Saludo */}
      <section id='saludo' className='saludo'>
        <h1>Guillermo Lavado</h1>
        <h2>Técnico Superior en Desarrollo de Aplicaciones Web (DAW)</h2>
        <p>
          Desarrollador Web Fullstack con base técnica en sistemas y redes. Apasionado por la resolución 
          de problemas, adaptable y con experiencia en tecnologías como Next.js, Node.js, PHP, Java y Python.
        </p>
        <div className='contacto-rapido'>
          <a href="mailto:lavadoguille@gmail.com">lavadoguille@gmail.com</a> | <span>633 105 772</span>
        </div>
      </section>

      {/* Sección de Repositorios / Habilidades / Gits */}
      <section id='repositorios' className='repositorios'>
        <h2>Mis Gits y Proyectos</h2>
        <p>
          Puedes revisar mis proyectos y código fuente en mi perfil de GitHub:
        </p>
        <a href="https://github.com/Guille-Lavado" className="btn-github">
          Ver perfil de GitHub (Guille-Lavado)
        </a>
      </section>

      {/* Sección de Experiencia Laboral */}
      <section id='experiencia' className='experiencia'>
        <h2>Experiencia</h2>

        <div className='item-experiencia'>
          <h3>Prácticas FP DAW2 — Viewnext</h3>
          <span className='fecha'>Marzo 2026 - Mayo 2026</span>
          <p>Desarrollo Fullstack con Next.js de una aplicación de gestión de proyectos.</p>
        </div>

        <div className='item-experiencia'>
          <h3>Prácticas FP DAW1 — TIA Portal</h3>
          <span className='fecha'>Mayo 2025 - Junio 2025</span>
          <p>Programación de software para PLCs de sistemas Siemens con TIA Portal.</p>
        </div>

        <div className='item-experiencia'>
          <h3>Prácticas FP SMR — Geoqubidy (Proyecto Universitario)</h3>
          <span className='fecha'>Marzo 2024 - Mayo 2024</span>
          <p>
            Desarrollo de funciones de teledetección con Python para el proyecto Geoqubidy (UPM). 
            <br />
            <a href="https://blogs.upm.es/dynamicland">
              Más información del proyecto
            </a>
          </p>
        </div>
      </section>

      {/* Sección de Estudios y Titulación */}
      <section id='estudios' className='estudios'>
        <h2>Titulación</h2>

        <div className='item-estudio'>
          <h3>Grado Superior - DAW (Desarrollo de Aplicaciones Web)</h3>
          <p>Instituto Laguna de Joatzel | 2024 - 2026</p>
        </div>

        <div className='item-estudio'>
          <h3>Grado Medio - SMR (Sistemas Microinformáticos y Redes)</h3>
          <p>Instituto La Salle Griñón | 2022 - 2024</p>
        </div>

        <div className='item-estudio'>
          <h3>Educación Secundaria Obligatoria (ESO)</h3>
          <p>IES Griñón | 2015 - 2019</p>
        </div>
      </section>
    </main>
  );
}

export default HomePague;