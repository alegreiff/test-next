import React, { useEffect, useState } from "react";
import { MenuSuperior } from "../../components/UI/MenuSuperior";

export default function Partidos() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    partidos();
  }, []);
  const partidos = () => {
    fetch("/api/partidos")
      .then((res) => res.json())
      .then((json) => {
        setMatches(json);
      });
  };
  return (
    <>
      <div>
        <MenuSuperior />{" "}
      </div>
      {matches.map((partido) => (
        <button key={partido.match}> {partido.estadio} </button>
      ))}
    </>
  );
}

/* 
  {
    fecha: "21-11-22",
    team1: "Qatar",
    match: 1,
    team2: "A2",
    hour: 13,
    estadio: "Al Bayt Stadium",
    fase: 1,
    grupo: "A",
  },
*/
