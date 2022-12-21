/*
  Shopify reusable api calls 
*/

import axios from 'axios';

// Reusable function to fetch data from Storefront API
export async function storeFrontRequest({ query, variables }) {
  const { data } = await axios({
    url: `https://innowave-dev.myshopify.com/api/2022-07/graphql.json`,
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Access-Token': '1bca17155738e0ebbea11fee6f784279',
    },
    data: {
      query: query,
      variables: variables,
    },
  });

  return data;
}

// Fetch all prodcuts from Shopify
export async function getAllProducts(storeName = 'innowave-dev') {
  const data = axios
    .post('https://revio-backend.vercel.app/shopify/products/all', {
      shopName: storeName,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return console.log(error);
    });

  return data;
}
