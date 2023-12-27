import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import Header from './components/Header';
import Search from './components/Search';

const App = () => {
  const [word, setWord] = useState('');
  //const [Images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
  };
  console.log(word)

  return (
    <div>
      <Header title="Weather Station"/>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
