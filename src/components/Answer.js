import React, { useState } from "react";

function Answer(props) {
  return(
    <li role="button" class="answer-clickable" onClick={() => props.onClick(props.bucket, props.questionID)}>
      {/*
      <script type="text/javascript">
        {disableButton(btn)}
      </script>
      */}

      <div class="answer-image">
        <img alt={props.caption} src={props.imgsrc} />
      </div>
      <div class="image-caption">{props.caption}</div>
      {/*LINK TO PHOTOGRAPHER {props.photographer} AND UNSPLASH.COM*/}
      <div class="image-credit">Photo by {props.photographer} on Unsplash</div>
    </li>
  );
}

export default Answer;