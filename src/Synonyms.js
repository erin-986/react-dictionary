import React from "react";

export default function Synonyms(props) {
  console.log(props);
  if (props.synonyms.length >= 1) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
