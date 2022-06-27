import React, { useState, useEffect } from "react";
import { range } from "../../js/range";
import { Link } from "react-router-dom";

 // TODOs
  // Order and segregate N buses
  // Order letter buses
  // Redesign bus filter buttons 
  // Add Asc & Desc buttons to filter

const busFilter = ({ data, name }) => {
  const asc = (a, b) => {return a-b};
  const desc = (a, b) => {return b-a};
  let busArr = [];
  data && data.map((ind) => {
      busArr.push(ind.id);
    });
  const sortedBusArr = busArr.sort(asc);

  const filter = (x, y) => {
    const sl = sortedBusArr.slice(x, y);
    return sl;
  };

  const all = filter(0, 676);
  const zero_NineNine = filter(0, 95).sort(asc);
  const hundreds = filter(95, 195);
  const two_hundreds = filter(195, 294);
  const three_hundreds = filter(294, 379);
  const four_hundreds = filter(379, 442);
  const five_hundreds = filter(442, 446);
  const six_hundreds = filter(446, 515);
  const seven_hundreds = filter(0, 0);
  const eight_hundreds = filter(0, 0);
  const nine_hundreds = filter(515, 516);
  const A = filter(516, 517);
  const B = filter(517, 523);
  const C = filter(523, 527);
  const D = filter(527, 531);
  const E = filter(531, 541);
  const EL = filter(541, 544);
  const G = filter(544, 545);
  const H = filter(545, 565);
  const K = filter(565, 570);
  const n099 = filter(570, 631);
  const nHundreds = filter(516, 517);
  const nTwoHundreds = filter(516, 517);
  const nThreeHundreds = filter(516, 517);
  const nFourHundreds = filter(516, 517);
  const nFiveHundreds = filter(516, 517);
  const P = filter(631, 635);
  const R = filter(635, 648);
  const S = filter(648, 651);
  const U = filter(651, 659);
  const W = filter(659, 673);
  const X = filter(673, 676);

  const [routes, setRoutes] = React.useState(null);

  const routeArrData = [
    {
      filter: all,
      name: "All",
    },
    {
      filter: zero_NineNine,
      name: "0-99",
    },
    {
      filter: hundreds,
      name: "100's",
    },
    {
      filter: two_hundreds,
      name: "200's",
    },
    {
      filter: three_hundreds,
      name: "300's",
    },
    {
      filter: four_hundreds,
      name: "400's",
    },
    {
      filter: five_hundreds,
      name: "500's",
    },
    {
      filter: six_hundreds,
      name: "600's",
    },
    {
      filter: seven_hundreds,
      name: "700's",
    },
    {
      filter: eight_hundreds,
      name: "800's",
    },
    {
      filter: nine_hundreds,
      name: "900's",
    },
    {
      filter: A,
      name: "A",
    },
    {
      filter: B,
      name: "B",
    },
    {
      filter: C,
      name: "C",
    },
    {
      filter: D,
      name: "D",
    },
    {
      filter: E,
      name: "E",
    },
    {
      filter: EL,
      name: "EL",
    },
    {
      filter: G,
      name: "G",
    },
    {
      filter: H,
      name: "H",
    },
    {
      filter: K,
      name: "K",
    },
    {
      filter: n099,
      name: "N 0-99",
    },
    {
      filter: nHundreds,
      name: "N100s",
    },
    {
      filter: nTwoHundreds,
      name: "N200s",
    },
    {
      filter: nThreeHundreds,
      name: "N300s",
    },
    {
      filter: nFourHundreds,
      name: "N400s",
    },
    {
      filter: nFiveHundreds,
      name: "N500s",
    },
    {
      filter: P,
      name: "P",
    },
    {
      filter: R,
      name: "R",
    },
    {
      filter: S,
      name: "S",
    },
    {
      filter: U,
      name: "U",
    },
    {
      filter: W,
      name: "W",
    },
    {
      filter: X,
      name: "X",
    },
  ];

  const busFilterBtn =
    routeArrData && routeArrData.map((ea, i) => {
        // console.log(ea.filter)
        return(
            <button key={i} onClick={() => setRoutes(ea.filter)}>
                {ea.name}
            </button>
        ) 
    });

    const btnA = 
    routes && routes.map((ind, i) => {
        // console.log(ind)
        return (
            <Link className={`btn ${name}`} key={i} to={`/${name}/${ind}`}>
            {ind}
            </Link>
        );
    })

  return (
    <>
      <p>Bus Filter</p>
      {busFilterBtn}
      <br />
      { btnA }
    </>
  );
};

export default busFilter;
