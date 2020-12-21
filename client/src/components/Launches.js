import React, { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
    }
  }
`;

const LaunchesQuery = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (loading) return <h3 className="tac">Loading...</h3>;
  if (error) return <h3 className="tac">Error :/</h3>;
  console.log(data.launches);

  return (
    <Fragment>
      {data.launches.map((launch, index) => (
        <LaunchItem launch={launch} key={index} />
      ))}
    </Fragment>
  );
};

export default function Launches() {
  return (
    <Fragment>
      <h1>Launches</h1>
      <MissionKey />
      {LaunchesQuery()}
    </Fragment>
  );
}
