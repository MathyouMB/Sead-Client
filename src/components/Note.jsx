import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../style/Note.scss';


const Note = (props) => {

  const cutShortText = (text) =>{
      if(text.length>310){
        return text.slice(0, 310)+"...";
      }else{
        return(text)
      }
     
  }  

  return (
    <div className="note hvr-float">
       
        <div className="note-container">
            <span className="note-title"><h1>{props.title}</h1></span>
            <p className="note-paragraph">{cutShortText(props.text)}</p>
            <Link to={'/read?id=' + props.id}><input className="note-button" type="button" value="Read"></input></Link>
        </div>
        
    </div>
  );
}

export default Note;
