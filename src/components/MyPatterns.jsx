import React, { useState, useEffect } from "react";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Pattern from "./Pattern"
import database from '../firebase';
import { Link } from "react-router-dom";

function MyPatterns(props) {
    const [patterns, setPatterns] = useState([])

    useEffect(() => {
      if (props.googleObj) {
        database.ref(`/users/${props.googleObj.googleId}/patterns`).on("value", (snapshot) => {
              if (snapshot) {
                  console.log(snapshot.val());
                  let myPatterns = [];
                  snapshot.forEach( data => {
                      let pattern = {
                          id: data.key,
                          result: data.val().result,
                          imgsrc: data.val().imgsrc,
                          photographer: data.val().photographer,
                          url: data.val().url
                      }
                      myPatterns.push(pattern) 
                  });
                  setPatterns(patterns.concat(myPatterns));
              }
          })
        }
    }, [])

    function handleClick() {
      //deletes all saved patterns
      confirmAlert({
        title: 'Confirm to delete all',
        message: 'Are you sure you want to delete all saved patterns?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => database.ref(`/users/${props.googleObj.googleId}/patterns`).remove()
          },
          {
            label: 'No',
          }
        ]
      });
    }

    return(
      <div className="display-patterns">
        {patterns.length > 0 ?
          <div>
            <div className="display-grid">
              {patterns.map(pattern =>
                  <Pattern id={pattern.id} googleObj={props.googleObj} result={pattern.result} imgsrc={pattern.imgsrc} photographer={pattern.photographer} url={pattern.url}/>
              )}
            </div>
              <button onClick={() => handleClick()}>Delete all saved patterns</button>
          </div>
          :(props.googleObj ? <p>You have no patterns saved.</p> : <p>Please log in to view saved patterns.</p>)}
        <Link class="nav-link" to="/browse">
          View all patterns
        </Link>
      </div>
    )
}

export default MyPatterns;