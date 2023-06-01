import './App.css'
import './types/types';
import Gallery from './components/Gallery/Gallery';

const App = () => {

  return (
    <>
      <nav className='navbar'>
        <h1 className='navbar-brand'>THE MILK STORE</h1>
      </nav>

      <Gallery />
    </>
  )
}

export default App;
