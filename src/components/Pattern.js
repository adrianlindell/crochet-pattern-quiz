import React, { useState } from "react";
import database from '../firebase'

function Pattern(props) {
  const saveToDatabase = async (e) => {
    if (props.isResult) e.preventDefault();
    if (props.googleObj) {
      var currentRef = database.ref(`/users/${props.googleObj.googleId}/patterns`).orderByChild("result").equalTo(props.result);
      
      //wait for snapshot
      var snapshot = await currentRef.once('value');
      
      //if snapshot exists, alert saying you can't add
      if(snapshot.exists()) {
        alert("This pattern has already been saved.");
      } else {
        //if snapshot doesn't exist, push to database
        database.ref(`/users/${props.googleObj.googleId}/patterns`).push(
          {
            result: props.result,
            url: props.url,
            imgsrc: props.imgsrc,
            photographer: props.photographer
          }
        );
      }
    } else {
    alert("Please log in first.")
    }
  }

  const deleteFromDatabase = (e) => {
    if (props.isResult) e.preventDefault();
    database.ref(`/users/${props.googleObj.googleId}/patterns/${props.id}`).remove();
  }

  return (
    <div class="pattern">
      <img alt={props.result} src={props.imgsrc} />
      <div class="image-caption">{props.result}</div>
      <div class="image-credit">Photo by {props.photographer}</div>
      <a href={props.url} rel="noopener noreferrer" target="_blank">View Pattern</a>
      {props.googleObj ?
        (props.id ?
          <button onClick={(e) => deleteFromDatabase(e)}>Delete</button>
          :
          <button onClick={(e) => saveToDatabase(e)}>Save</button>)
      :<p>Please log in to save this pattern.</p>}
    </div>
  );
}

export default Pattern;