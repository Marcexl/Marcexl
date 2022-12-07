import React from "react";
import "./squares.css";

function Squares ({id}){
    
    function beforeExplode(id) {
        const squares = document.getElementById("squareslist" + id);
        squares.classList.add("beforeexplode");
      
        setTimeout(() => {
          explode(id);
        }, 150);
    }

    function explode(id){
        var navul = document
          .getElementById("squareslist" + id)
          .getElementsByTagName("li");
        for (let i = 0; i < navul.length; i++) {
          navul[i].classList.add("explode-" + i);
        }
    }

    const numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const listItems = numbers.map((number) =>
      <li key={number}></li>
    )

    
    return (<ul id={'squareslist'+id} onClick={()=>{beforeExplode(id)}}>
                {listItems}
            </ul>);
}

export default Squares;