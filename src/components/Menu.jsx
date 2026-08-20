import './Menu.css';

function Menu() {
  return (
    <nav className='menu'>
      <span className='logo'>&#62;&#95;</span>
      <ul>
        <li><a href="#saludo">Sobre mí</a></li>
        <li><a href="#repositorios">Proyectos</a></li>
        <li><a href="#experiencia">Experiencia</a></li>
        <li><a href="#estudios">Titulación</a></li>
      </ul>
    </nav>
  );
}

export default Menu;