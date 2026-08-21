import './Menu.css';

function Menu({theme, toggleTheme}) {
  return (
    <nav className='menu'>
      <span className='logo'>&#62;&#95;</span>
      <ul>
        <li><a href="#saludo">Sobre mí</a></li>
        <li><a href="#repositorios">Proyectos</a></li>
        <li><a href="#experiencia">Experiencia</a></li>
        <li><a href="#estudios">Titulación</a></li>
        <li>
          <button className="btn-theme" onClick={toggleTheme}>
            {theme === 'dark' ? 'Claro' : 'Oscuro'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;