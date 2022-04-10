import React from "react";
import { useGetContentsQuery } from "../graphql/generated";
import Slider from "../components/Slider";

// mock
import mocksJson from "./mocks"

/*
 * Home page
 * We display contents
 */

const Homepage = (): JSX.Element => {

  /*
  const { loading, error, data } = useGetContentsQuery;
  console.log();
  if (loading) return <p>"Loading..."</p>;

  if (error) return <p>`Error! ${error.message}`</p>;
  */

  // mock
  const data = mocksJson.data

  
  return (
    <div className="overflow-hidden">
    {data && data?.Categories?.map((row: { [field: string]: any }) => <Slider key={row.id} {...row} />)}
    </div>
  );
};

export default Homepage;
