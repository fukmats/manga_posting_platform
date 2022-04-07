import React from "react";
import { useQuery, gql } from "@apollo/client";

const CONTENTS = gql`
    query getContents {
        contentForHome {
            id
            title
            thumbnail
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

    return (
        <p>{ JSON.stringify(data) }</p>
    );
};

export default Homepage;