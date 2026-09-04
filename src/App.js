import { useEffect, useState } from 'react';
import './App.css';
import Menu from './components/Menu';
import Footer from './components/Footer';
import HomePague from './pages/HomePague';

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
      <Footer />
    </div>
  );
}

export default App;