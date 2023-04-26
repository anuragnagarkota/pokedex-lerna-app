import * as React from "react";

export const PokemonCard: React.FC<any> = ({ name, height, weight }) => {
  return (
    <div>
      <b>Name:</b>
      {name}
      <br />
      <b>Height:</b>
      {height}
      <br />
      <b>Weight:</b> {weight}
    </div>
  );
};
