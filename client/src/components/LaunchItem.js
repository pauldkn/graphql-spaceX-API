import React from "react";
import formatISO9075 from "date-fns/formatISO9075";
import { Link } from "react-router-dom";

export default function LaunchItem({
  launch: { flight_number, mission_name, launch_date_local, launch_success },
}) {
  let statusColor = launch_success ? "green" : "red";
  let date = new Date(launch_date_local);
  let formatedDate = formatISO9075(date);

  const handleClick = () => {
    console.log(mission_name, launch_date_local);
  };

  return (
    <Link to={`/launch/${flight_number}`}>
      <div className="launch-item-container">
        <div className="launch-details">
          <h2>
            Mission: <span className={statusColor}>{mission_name}</span>
          </h2>
          <p className="launch-date" >{formatedDate}</p>
        </div>
        <div className="launch-controls">
          <button className="btn" onClick={handleClick}>
            Details
          </button>
        </div>
      </div>
    </Link>
  );
}
