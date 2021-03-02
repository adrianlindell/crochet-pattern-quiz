import React, { useState, useEffect} from "react"
import Pattern from "./Pattern"

function Browse(props) {
  const displayAll = props.RESULTS_DATA.map( pattern =>
    <Pattern
      googleObj={props.googleObj}
      result={pattern.result}
      imgsrc={pattern.imgsrc}
      photographer={pattern.photographer}
      url={pattern.url}
      isResult={false}
    />
  );

  return (
    <div className="display-patterns">
      <div className="display-grid">
        {displayAll}
      </div>
    </div>
  );
}

export default Browse;