import * as React from "react";
const style = {
  width: "100%",
  maxWidth: 400,
  BorderCollapse: "collapse",
  fontFamily: "Arial",
};
export const PokemonCard: React.FC<any> = ({ name, height, weight }) => {
  return (
    <div>
      <h2 style={{fontFamily:'Arial', background: "#eee", padding: 10 }}>
        Viewing details of {name}
      </h2>
      <table border={1} cellPadding={6} style={style}>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{name}</td>
          </tr>
          <tr>
            <th>Height</th>
            <td>{height}</td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>{weight}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
