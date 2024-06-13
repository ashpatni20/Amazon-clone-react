import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (searchVal) => {

  // if(!searchVal){
  //   searchVal = "Iphones"
  // }


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: "https://real-time-amazon-data.p.rapidapi.com/search",
    params: {
      query: searchVal,
      page: "1",
      country: "US",
      sort_by: "RELEVANCE",
      product_condition: "ALL",
    },
    headers: {
      'x-rapidapi-key': '6bdb6ee9d1mshb1b939cabc2beeap140b15jsnba9fafa84862',
      'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        const products = response.data.data.products;
        console.log(products);
        setData(products);
        console.log(response.data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchVal]); 

  return [data, loading, error];
};

export default useFetch;
