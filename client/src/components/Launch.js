import React, { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_TYPE
      }
    }
  }
`;

export default function Launch(props) {
  let { flight_number } = props.match.params;
  flight_number = parseInt(flight_number);

  const LaunchQuery = () => {
    const { loading, error, data } = useQuery(LAUNCH_QUERY, {
      variables: { flight_number },
    });
    if (loading) return <h3 className="tac">Loading ...</h3>;
    if (error) console.log(error);
    console.log(data);

    const {
      mission_name,
      launch_year,
      launch_success,
      rocket: { rocket_id, rocket_name, rocket_TYPE },
    } = data.launch;

    return (
      <div className="single-launch-details">
        <h1>
          <span className="md-grey">Mission:</span> {mission_name}
        </h1>
        <h2>Launch Details</h2>
        <ul>
          <li>Flight number: {flight_number}</li>
          <li>Launch Year: {launch_year}</li>
          <li>
            Launch Successful:{" "}
            <span className={launch_success ? "green" : "red"}>
              {launch_success ? "Yes" : "No"}
            </span>
          </li>
        </ul>
        <h2>Rocket Details</h2>
        <ul>
          <li>Rocket ID: {rocket_id}</li>
          <li>Rocket Name: {rocket_name}</li>
          <li>Rocket Type: {rocket_TYPE}</li>
        </ul>
      </div>
    );
  };

  return (
    <Fragment>
      <Fragment>{LaunchQuery()}</Fragment>
      <Link to="/" className="btn" style={{ margin: "0 auto" }}>
        Back
      </Link>
    </Fragment>
  );
}
