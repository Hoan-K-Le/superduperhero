import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

 import Home from './components/pages/Home'
 import Superhero from './components/pages/Superhero'
 import SuperheroType from './components/pages/superherotype';

function App() {
  return (
    <Router>
      <main>
        <Routes>

        <Route path='/' 
        element={<Home/>} 
        />

        <Route path='/superhero/:id'
         element={<Superhero/>} 
        />
        <Route
         path='/superherotype/:id'
        element={<SuperheroType/>}
        />


        </Routes>

      </main>
    </Router>
  );
}

export default App;
