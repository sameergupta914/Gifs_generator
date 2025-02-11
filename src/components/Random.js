import React from "react";
import Spinner from './Spinner'
import useGif from "../hooks/useGif";

const Random = () => {

    const {gif, loading, fetchData}=useGif();

  function clickHandler() {
    fetchData();
  }

  return (
    <div>
      <h1 className="randomtitle">A Random Gif</h1>
      {
        loading ? (<Spinner/>) : (<img className='randomimg' src={gif} width="450" alt="Random Gif" />)
      }
      
      <button className="randombtn" onClick={clickHandler}>Generate</button>
    </div>
  );
};

export default Random;
