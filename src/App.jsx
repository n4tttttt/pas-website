import { useState } from 'react';
import './App.css';
import One from './components/1'
import Two from './components/2'
import Three from './components/3'


function App() {
  const [page ,update] = useState(localStorage.getItem('page') || null)
  return (
  <>
  <div className='nav'>
  <button onClick={() => {update('home'); localStorage.setItem('page', 'home')}}>Home</button>
  <button onClick={() => {update('BMC'); localStorage.setItem('page', 'BMC')}}>BMC</button>
  <button onClick={() => {update('buy'); localStorage.setItem('page', 'buy')}}>Buy Here!</button>
  </div>
  {page === "home" && <One />}
  {page === "BMC" && <Two />}
  {page === "buy" && <Three />}
  </>
  );
}

export default App;
