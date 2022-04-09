import React from "react";
import { useQuery, gql } from "@apollo/client";
import Row from "../components/Row"

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

    // return (
    //     data && data.map((row: {id: React.Key, content: Content}) => (
    //         <Row key={row.id} {...row} />
    //     ))
    // )
    return (
        data && data.map((row: { [field: string]: any }) => (
            <Row key={row.id} {...row} />
        ))
    )
}

export default Homepage;