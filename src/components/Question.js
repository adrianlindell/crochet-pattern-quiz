import React from "react";
import Answer from "./Answer";

function Question(props) {

  const answerElements = props.answers.map(answer => (
    <Answer
      imgsrc={answer.imgsrc}
      caption={answer.caption}
      photographer={answer.photographer}
      imgcredit={answer.imgcredit}
      bucket={answer.bucket}
      onClick={props.onClick}
    />
  ));
  {/*
    when an answer is clicked, add a point to the corresponding bucket
    Answer element will report its id to Question and then Form
    Form will handle all total buckets
  */}

  return (
    <fieldset id={props.id}>
      <legend>{props.legend}</legend>
      <ul role="radiogroup" class="answer-tile">
        {answerElements}
      </ul>
    </fieldset>
  )
}

export default Question;