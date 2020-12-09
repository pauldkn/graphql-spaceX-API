import React from "react";

export default function LaunchItem({
  launch: { mission_name, launch_date_local, launch_success },
}) {
  return (
    <div className="launch-item-container">
      <div className="launch-details">
        <h2>Mission: {mission_name}</h2>
        <p>Date: {launch_date_local}</p>
        <p>
          Status:
          {launch_success ? (
            <span className="green"> Succeed</span>
          ) : (
            <span className="red"> Failed</span>
          )}
        </p>
      </div>
      <div className="launch-controls">
        <button className="btn">Launch Details</button>
      </div>
    </div>
  );
}
