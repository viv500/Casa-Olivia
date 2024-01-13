import React from 'react'
import {Button} from "./Button";
import "./Handle.css"
import "../App.css"

function Handle() {
  return (
    <div className="Handle-container">      
        <video src="/videos/vjdinerbg.mp4" muted autoPlay loop/>
        <h1> VJ DINER </h1>
        <p> Authentic Italian Cuisine </p>
        <div className="Handle-btns">
            <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                ABOUT US <i className="fas fa-fork-knife" />
            </Button>
        </div>
      
    </div>
  )
}

export default Handle
