import React, { useEffect } from "react";
import dataJson from "../data.json"
var _ = require("lodash");
export default function MatchItem({ index, id, position }) {
  // useEffect(() => {
  //   let name = _.find(dataJson.data.nft.wild_object, { "id": id}).name
  //   let result2 = _.find(dataJson.data.nft.nft_list, { "name": name});
  //   console.log(name);
  //   console.log(result2);
  //   // console.log(dataJson.data.nft.nft_list);
  // }, [id])
  return (
    <div className="w-full rounded-md bg-dark-new flex items-center justify-center">
      <div className="text-3xl">{index})</div>
      <div className="p-3">
        {_.find(dataJson.data.nft.wild_object, { "id": id}).name}
        {/* <img src={image} width="60" height="60" /> */}
      </div>
      <div className="text-3xl">{position[0]}-{position[1]}</div>
    </div>
  );
}
