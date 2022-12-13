import React from "react";
import "./squares.css";


var count = 0;

function Squares ({id}){

    /* function to fire explode with id */
    function beforeExplode(id) {
      const squares = document.getElementById("squareslist" + id);
      squares.classList.add("beforeexplode");
      count++;
      
      if(count >= 8){
        const elem = document.getElementById("squarescontainer");
        const elem2 = document.querySelectorAll(".section");
        const elem3 = document.querySelector('.playarround');
        elem.classList.remove('front');
        elem3.style.display = 'none';
        document.getElementById("follower").style.display = 'none';
        for (const div of elem2) {
          div.classList.remove('filter');
        }
      }

      localStorage.setItem('count',count);
      setTimeout(() => {
        explode(id);
      }, 150);
    }

    /* explode box*/
    function explode(id){
        var navul = document
          .getElementById("squareslist" + id)
          .getElementsByTagName("li");
        for (let i = 0; i < navul.length; i++) {
          navul[i].classList.add("explode-" + i);
        }
    }

    /* elements inside box */
    const numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const listItems = numbers.map((number) =>
      <li key={number}></li>
    )

    return (<>
              <ul id={'squareslist' + id} onClick={() => { beforeExplode(id); } }>
                {listItems}
              </ul>
            </>);
}

export default Squares;