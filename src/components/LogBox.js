import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

function LogBox(props) {
  const Log = useRef(null);
  let obj = [];
  const clickHandle = () => {
    for (
      let index = 1;
      index < Log.current.value.split("| type:").length;
      index++
    ) {
      let id = Log.current.value
        .split(" | type: ")
        [index].split(" | position: ")[0]
        .replace(" ", "");
      let position = Log.current.value
        .split("| type: ")
        [index].split(" | position: ")[1]
        .split("<b>\n\n")[0]
        .split("\n")[0]
        .replace(" ", "");
      obj.push({
        id:parseInt(id),
        position: position.split("-"),
      });
    }
    
    props.dispatch({
      type: "SET_DATA",
      playload: obj,
    });
  };



  return (
    <div className="border-2 w-full bg-dark text-light h-full border-0 rounded-lg p-2 h-new flex flex-col gap-2">
      <div className="text-2xl px-2">Log</div>
      <div className="p-2 h-full">
        <textarea
          ref={Log}
          className="form-control bg-dark-new text-light border-0 h-full"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
        />
      </div>
      <div
        onClick={() => clickHandle()}
        className="btn btn-primary border-0 mb-2"
      >
        Find
      </div>
    </div>
  );
}

export default connect((state) => {
  return state;
})(LogBox);
