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
    if (loading) return <h3>Loading ...</h3>;
    if (error) console.log(error);
    console.log(data);

    return <h3>Test</h3>;
  };

  return (
    <Fragment>
      <h1>Launch</h1>
      <Fragment>{LaunchQuery()}</Fragment>
    </Fragment>
  );
}
