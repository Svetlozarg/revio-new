/*
  Shopify reusable api calls 
*/

import axios from 'axios';

// Reusable function to fetch data from Storefront API
// export async function storeFrontRequest({ query, variables }) {
//   const { data } = await axios({
//     url: `https://innowave-dev.myshopify.com/api/2022-07/graphql.json`,
//     method: 'POST',
//     headers: {
//       'X-Shopify-Storefront-Access-Token': '1bca17155738e0ebbea11fee6f784279',
//     },
//     data: {
//       query: query,
//       variables: variables,
//     },
//   });

//   return data;
// }

/* ================================================================= */

// Products

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

// Search for prodcuts from Shopify
export async function searchProducts(query) {
  const data = axios
    .post('https://revio-backend.vercel.app/shopify/products/search', {
      query: query,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return console.log(error);
    });

  return data;
}

/* ================================================================= */

// Customers

// Search for customers from Shopify
export async function getCustomers() {
  const data = axios
    .post('https://revio-backend.vercel.app/shopify/customers/all', {})
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return console.log(error);
    });

  return data;
}

/* ================================================================= */

// Orders

// Get all orders from customer by phone from Shopify
export async function getOrdersByCustomerPhone(phone) {
  const data = axios
    .post('https://revio-backend.vercel.app/shopify/orders/phone', {
      phone: phone,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return console.log(error);
    });

  return data;
}

// Draft Orders

// Create draft order with payment provider and custom note
export async function createDraftOrder(
  shippingAddress,
  billingAddress,
  products,
  gateway,
  note
) {
  const data = axios
    .post('https://revio-backend.vercel.app/shopify/draftorder/create', {
      shippingAddress: shippingAddress,
      billingAddress: billingAddress,
      products: products,
      gateway: gateway,
      note: note,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return console.log(error);
    });

  return data;
}

/* ================================================================= */

// Webhooks

// Fetch all webhooks list
export async function webhookList() {
  const data = axios
    .post('https://revio-backend.vercel.app/shopify/webhook/list', {})
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return console.log(error);
    });

  return data;
}

// Delete webhook
export async function webhookDelete(webhookAddress) {
  const data = axios
    .post('https://revio-backend.vercel.app/shopify/webhook/delete', {
      webhookAddress: webhookAddress,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return console.log(error);
    });

  return data;
}

// Create webhook for order creation
export async function webhookCreate(webhookAddress) {
  const data = axios
    .post('https://revio-backend.vercel.app/shopify/webhook/order/creation', {
      webhookAddress: webhookAddress,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return console.log(error);
    });

  return data;
}

/* ================================================================= */
