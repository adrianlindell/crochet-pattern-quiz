import React, { useState } from "react";

function Answer(props) {
  return(
    <div role="button" class="answer-clickable" onClick={() => props.onClick(props.bucket, props.questionID)}>
      <div class="answer-image">
        <img alt={props.caption} src={props.imgsrc} />
      </div>
      <div class="image-text">
        <div class="image-caption">{props.caption}</div>
        <div class="image-credit">Photo by {props.photographer} on Unsplash</div>
      </div>
    </div>
  );
}

export default Answer;