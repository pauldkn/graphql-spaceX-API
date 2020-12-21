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
    <section className="launches-section" >
      <h1>Launches</h1>
      <MissionKey />
      {data.launches.map((launch, index) => (
        <LaunchItem launch={launch} key={index} />
      ))}
    </section>
  );
};

export default function Launches() {
  return <Fragment>{LaunchesQuery()}</Fragment>;
}
