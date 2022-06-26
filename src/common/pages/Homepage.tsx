import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import Row from "../components/Row";
import { listCategories } from '../../graphql/queries'

// mock
import mocksJson from "../../book/mocks"

/*
 * Home page
 * We display contents
 */

const Homepage = (): JSX.Element => {

  
  // const { loading, error, data } = useGetContentsQuery;
  // const [formState, setFormState] = useState(initialState)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchCategories()
  }, [])

  async function fetchCategories() {
    try {
      const categoriesData = await API.graphql(graphqlOperation(listCategories))
      const data = categoriesData.data.listCategories.items
      setCategories(categories)
    } catch (err) { console.log('error fetching todos') }
  }

  // console.log();
  // if (loading) return <p>"Loading..."</p>;

  // if (error) return <p>`Error! ${error.message}`</p>;


  // mock
  const data = mocksJson.data


  
  return (
    <div className="overflow-hidden">
    {data && data?.Categories?.map((row: { [field: string]: any }) => <Row key={row.id} {...row} />)}
    </div>
  );
};

export default Homepage;
