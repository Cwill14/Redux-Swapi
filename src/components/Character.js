import React from "react";

const Character = props => {
  return <li><b>{props.character.name}</b>: {props.character.gender}, born in {props.character.birth_year}, {props.character.height}cm, {props.character.mass}kg? </li>;
};

export default Character;
