import { useEffect, useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import HomePague from './components/HomePague';

function App() {
  // UseState para controlar el tema
  const [theme, setTheme] = useState('dark');

  // Actualiza el atributo data-theme en el HTML cuando cambia el estado
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme]);

  // Función para alternar entre claro y oscuro
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="App">
      <Menu theme={theme} toggleTheme={toggleTheme} />
      <HomePague />
    </div>
  );
}

export default App;