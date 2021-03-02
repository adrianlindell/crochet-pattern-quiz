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
    <fieldset id={props.id} className="flex-question" >
      <legend>{props.legend}</legend>
      <div role="radiogroup" className="answer-tile" >
        {answerElements}
      </div>
    </fieldset>
  )
}

export default Question;