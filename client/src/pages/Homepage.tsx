import React from "react";
import { useQuery, gql } from "@apollo/client";
import Row from "../components/Row";

const CONTENTS = gql`
  query getContents {
    Categories {
      categoryId
      categoryName
      contents {
        contentId
        thumbnail
      }
    }
  }
`;

/*
 * Home page
 * We display contents
 */

const Homepage = (): JSX.Element => {
  const { loading, error, data } = useQuery(CONTENTS);
  console.log();
  if (loading) return <p>"Loading..."</p>;

  if (error) return <p>`Error! ${error.message}`</p>;

  // return (
  //     data && data.map((row: {id: React.Key, content: Content}) => (
  //         <Row key={row.id} {...row} />
  //     ))
  // )
  return (
    <div className="overflow-hidden">
    {data && data?.Categories?.map((row: { [field: string]: any }) => <Row key={row.id} {...row} />)}
    </div>
  );
};

export default Homepage;
