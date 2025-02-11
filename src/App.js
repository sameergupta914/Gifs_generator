import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className="maindiv">
      <p className='titlepara'>RANDOM GIFS</p>
      <div className='makeflex'>
      <div className='randomdiv'>
        <Random/>
      </div>
      <div className='tagdiv'>
        <Tag/>
      </div>
      </div>
    </div>
  );
}

export default App;


// https://developers.giphy.com/dashboard/