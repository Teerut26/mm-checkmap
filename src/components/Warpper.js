import React from "react";
import LogBox from "./LogBox";
import MatchBox from "./MatchBox";

export default function Warpper() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 p-1">
      <LogBox />
      <MatchBox />
    </div>
  );
}
