import axios from "axios";
import { useState } from "react";

const options = {
  method: "GET",
  url: "https://real-time-amazon-data.p.rapidapi.com/search",
  params: {
    query: "Women",
    page: "1",
    country: "US",
    sort_by: "RELEVANCE",
    product_condition: "ALL", 
    // asin: 'B07ZPKBL9V',
    // country: 'US'
  },
  headers: {
    "x-rapidapi-key": "97f553c1damsh133ea1ad9e85900p12a5cejsn28c991955b1f",
    "x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com",
  },
};

const useFetch = async () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  try {
    const response = await axios.request(options);
    // let products = await response.data.data.products;
    // console.log(products);
    // setData(products);
    console.log(response.data);
  } catch (error) {
    console.error(error);
    setError(error);
  } finally {
    setLoading(false);
  }
  return [data, loading, error];
};

export default useFetch;
//products-by-category
//product-details
//product-offers
//product-reviews
//best-sellers
//deals-v2
//deal-products
//asin-to-gtin
//deals
//product-category-list
