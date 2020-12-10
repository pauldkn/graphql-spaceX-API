import React from "react";

export default function MissionKey() {
  return (
    <div className="legend">
      <p className="row">
        <span className="box bg-green" /> = Success
      </p>
      <p className="row">
        <span className="box bg-red" /> = Fail
      </p>
    </div>
  );
}
