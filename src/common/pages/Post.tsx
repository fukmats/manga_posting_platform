import React, { useEffect, useState } from 'react'
import Row from "../components/Row";

import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { listCategories } from '../../graphql/queries'
import awsExports from "../../aws-exports";

// mock
import mocksJson from "../../book/mocks"

Amplify.configure(awsExports);

/*
 * Home page
 * We display contents
 */

const Homepage = (): JSX.Element => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchCategories()
  }, [])

  async function fetchCategories() {
    try {

      const categoriesData = await API.graphql(graphqlOperation(listCategories))
      const categories = categoriesData.data.listCategories.items
      setCategories(categories)
    } catch (err) { 
      console.log('error fetching categories') 
      console.log(err)
    }
  }

  // mock
  // const categories = mocksJson.data

  return (
    <div className="overflow-hidden">
    {categories && categories?.map((row: { [field: string]: any }) => <Row key={row.id} {...row} />)}

    </div>
  );
};

export default Homepage;
