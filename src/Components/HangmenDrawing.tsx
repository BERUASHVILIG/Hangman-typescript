import React from "react";

const head = (
  <div
    style={{
      width: "40px",
      height: "40px",
      borderRadius: "100%",
      border: "6px solid black",
      position: "absolute",
      top: "25px",
      left: "57px",
    }}
  />
);
const body = (
  <div
    style={{
      width: "10px",
      height: "50px",
      background: "black",
      position: "absolute",
      left: "79px",
      top: "72px",
    }}
  />
);
const right_hand = (
  <div
    style={{
      width: "10px",
      height: "30px",
      rotate: "50deg",
      background: "black",
      marginLeft: "90px",
      marginTop: "60px",
    }}
  />
);
const left_hand = (
  <div
    style={{
      width: "10px",
      height: "30px",
      rotate: "-50deg",
      background: "black",
      marginLeft: "68px",
      marginTop: "-28px",
    }}
  />
);
const right_leg = (
  <div
    style={{
      width: "10px",
      height: "30px",
      background: "black",
      marginLeft: "70px",
      rotate: "40deg",
      marginTop: "10px",
    }}
  />
);
const left_leg = (
  <div
    style={{
      width: "10px",
      height: "30px",
      background: "black",
      marginLeft: "85px",
      rotate: "-40deg",
      marginTop: "-30px",
    }}
  />
);

const bodyPart = [head, body, right_hand, left_hand, right_leg, left_leg];

type HangmenDrawingProps = {
  numberOfGuesses: number;
};

function HangmenDrawing({ numberOfGuesses }: HangmenDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          width: "10px",
          height: "30px",
          background: "black",
          top: "10px",
          marginLeft: "80px",
        }}
      />
      <div
        style={{
          width: "90px",
          height: "10px",
          background: "black",
          marginTop: "-30px",
        }}
      />
      <div
        style={{
          width: "10px",
          height: "200px",
          position: "absolute",
          top: "0",
          left: "0",
          background: "black",
        }}
      />
      <div
        style={{
          width: "80px",
          height: "10px",
          background: "black",
          marginLeft: "-35px",
          position: "absolute",
          top: "200px",
        }}
      />
      {bodyPart.slice(0, numberOfGuesses)}
    </div>
  );
}

export default HangmenDrawing;
