import React, { useState } from "react";
import Spinner from './Spinner'
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag]= useState('');

  const {gif, loading, fetchData}=useGif(tag);

  return (
    <div>
      <h1 className="tagtitle" >Random {tag} Gif</h1>
      {
        loading ? (<Spinner/>) : (<img className="tagimg" src={gif} width="450" alt="Random Gif" />)
      }
      
      <input className="taginput" type="text" onChange={(event)=>setTag(event.target.value)} value={tag} />

      <button className="tagbtn" onClick={()=> fetchData(tag)}>Generate</button>
    </div>
  )
};

export default Tag;
