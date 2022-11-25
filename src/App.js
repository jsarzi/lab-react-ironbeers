import './App.css';
import Home from './components/Home'
import { Routes, Route, Navigate } from "react-router-dom";
import ListBeer from './components/ListBeer';
import RandomBeer from './components/RandomBeer';
import SingleBeer from './components/SingleBeer'
import NewBeer from './components/NewBeer';




function App() {


  return (
    <div className="App">



      <Routes>
        <Route path='/' element={<Home />} />


        <Route path='/beers' element={<ListBeer />} />
        <Route path='/beers/:id' element={<SingleBeer />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />

      </Routes>

    </div>
  );
}

export default App;
