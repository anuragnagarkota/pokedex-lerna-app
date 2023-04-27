import * as React from "react";
const style = {
  width: "100%",
  maxWidth: 400,
  fontFamily: "Arial",
  "border-collapse": "collapse",
};
const styleDiv = {
  maxWidth: 400,
  marginTop: 50,
  padding: 20,
  paddingTop: 2,
  boxShadow: `0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)`,
  borderRadius: 20,
};
const styleLink = {
  borderRadius: 5,
  backgroundColor: "teal",
  color: "#fff",
  padding: 5,
  textDecoration: "none",
paddingLeft:20,
paddingRight:20
};
export const PokemonCard: React.FC<any> = ({
  name,
  height,
  weight,
  base_experience,
  location_area_encounters,
}) => {
  return (
    <center>
      <div style={styleDiv}>
        <h2 style={{ fontFamily: "Arial", background: "#eee", padding: 10 }}>
          Viewing details of {name}
        </h2>
        <table border={1} cellPadding={8} style={style}>
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
            <tr>
              <th>Base Experience</th>
              <td>{base_experience}</td>
            </tr>
            <tr>
              <th>Location area encounters</th>
              <td>
                <a
                  target="_blank"
                  style={styleLink}
                  href={`${location_area_encounters}`}
                >
                  View
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </center>
  );
};
