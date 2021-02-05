import React from "react";
import Answer from "./Answer";

function Question(props) {
  const answerElements = props.answers.map(answer => (
    <Answer
      questionID={answer.questionID}
      imgsrc={answer.imgsrc}
      caption={answer.caption}
      photographer={answer.photographer}
      imgcredit={answer.imgcredit}
      bucket={answer.bucket}
      onClick={props.onClick}
    />
  ));

  return (
    <fieldset id={props.id} style={{backgroundColor: "#f9ecf2"}}>
      <legend>{props.legend}</legend>
      <ul role="radiogroup" class="answer-tile">
        {answerElements}
      </ul>
    </fieldset>
  )
}

export default Question;