import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MatchItem from "./MatchItem";

let listCheck = [
  {
    name: "Primrose",
    id: 24,
  },
  {
    name: "Tulip",
    id: 25,
  },
  {
    name: "Beehive",
    id: 36,
  },
  {
    name: "Beehive Tree",
    id: 5,
  },
  {
    name: "Red Apple",
    id: 58,
  },
  {
    name: "Green Apple",
    id: 57,
  },
  {
    name: "The Crossing Chest",
    id: 41,
  },
  {
    name: "FloralWoodsChest",
    id: 42,
  },
  {
    name: "PineValleyChest",
    id: 43,
  },
  {
    name: "Wood Chest",
    id: 49,
  },
  {
    name: "Barrel",
    id: 35,
  },
  {
    name: "Banana",
    id: 59,
  },
  {
    name: "Green Herb",
    id: 18,
  },
  {
    name: "Red Herb",
    id: 19,
  },
  {
    name: "Blue Herb",
    id: 20,
  },
  {
    name: "White Button Mushroom",
    id: 21,
  },
  {
    name: "Shiitake Mushroom",
    id: 22,
  },
  {
    name: "King Trumpet Mushroom",
    id: 23,
  },
];

var _ = require("lodash");

function MatchBox(props) {
  const [Data3, setData3] = useState(null);
  useEffect(() => {
    if (props.Find === null) return;
    let result = _.intersectionWith(
      props.Find,
      listCheck,
      (a, b) => a.id == b.id
    );
    // listCheck.map(item => {
    //   console.log(props.Find.filter(item2 => item2.id == item.id));
    //   console.log(props.Find);
    // })

    
    setData3(result);
  }, [props]);
  return (
    <div className="border-2 w-full bg-dark text-light h-full border-0 rounded-lg p-2 h-new flex flex-col gap-2">
      <div className="text-2xl px-2">Object Match</div>
      <div className="p-2 h-full flex flex-col gap-3 overflow-auto">
        {Data3 !== null ? Data3.map((item, index) => (
          <MatchItem {...item} index={index + 1} />
        )) : ""}
      </div>
    </div>
  );
}

export default connect((state) => {
  return state;
})(MatchBox);
