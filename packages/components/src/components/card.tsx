import * as React from "react";
const style = {
  width: "100%",
  maxWidth: 400,
  fontFamily: "Arial",
  "border-collapse":"collapse"
};
const styleDiv = {
  maxWidth: 400,
  marginTop: 50,
  padding: 20,
  paddingTop: 2,
  boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
};
export const PokemonCard: React.FC<any> = ({ name, height, weight }) => {
  return (
    <center>
      <div style={styleDiv}>
        <h2 style={{ fontFamily: "Arial", background: "#eee", padding: 10 }}>
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
    </center>
  );
};
