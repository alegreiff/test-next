import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";

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
      {matches.map((partido) => (
        <Button key={partido.match}> {partido.estadio} </Button>
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
