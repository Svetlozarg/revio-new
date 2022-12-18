import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material';
import Modal from '@mui/material/Modal';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import { InputAdornment, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ProductCard from '../Cards/ProductCard';
import { tokens } from '../../../theme';
import CloseIcon from '@mui/icons-material/Close';
import { storeFrontRequest } from '../../../utils/shopify';

export default function BasicModal({ onHandleButtonClicked }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const search = useRef('');

  // Fetch 9 Products On Load
  const fetchProducts = async () => {
    // Fetch first 9 products
    const products = await storeFrontRequest({
      query: `{
      products(first: 12) {
        edges {
          node {
            id
            title
            handle
            priceRange {
              minVariantPrice {
                amount
              }
            }
            images(first: 1) {
              edges {
                node {
                  transformedSrc
                  altText
                }
              }
            }
          }
        }
      }
    }`,
      variables: {},
    });

    setProducts(products.data.products.edges);
  };

  // Search Products
  const handleSearch = async (e) => {
    e.preventDefault();

    if (search.current.value === '') {
      const products = await storeFrontRequest({
        query: `{
        products(first: 12) {
          edges {
            node {
              id
              title
              handle
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 1) {
                edges {
                  node {
                    transformedSrc
                    altText
                  }
                }
              }
            }
          }
        }
      }`,
        variables: {},
      });
      setProducts(products.data.products.edges);
    } else {
      const products = await storeFrontRequest({
        query: `{
          products(first: 20, query: "title_contains_whole:${search.current.value}") {
            edges {
            node {
              id
              title
              handle
              priceRange {
                minVariantPrice {
                  amount
                }
              }
              images(first: 1) {
                edges {
                  node {
                    transformedSrc
                    altText
                  }
                }
              }
            }
          }
          }
        }`,
        variables: {},
      });

      setProducts(products.data.products.edges);
    }
  };

  // Handle on Product Clicked
  const handleProductSelected = (value) => {
    if (!value.selected) {
      setSelectedProducts((prevProducts) => [...prevProducts, value]);
    } else {
      const index = selectedProducts.findIndex(
        (product) => product.title === value.title
      );

      setSelectedProducts(selectedProducts.splice(index, 1));
    }
  };

  // Handle Attach Button
  const handleAttachButton = () => {
    onHandleButtonClicked(selectedProducts);
    setSelectedProducts([]);
    handleClose();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {/* Button */}
      <IconButton onClick={handleOpen} sx={{ minWidth: 'auto' }}>
        <AddShoppingCartRoundedIcon sx={{ fontSize: '1.5rem' }} />
      </IconButton>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80vw',
            bgcolor: 'background.paper',
            border: '1px solid #000',
            boxShadow: 24,
            p: 4,
            backgroundColor: colors.primary[400],
          }}
          style={{ height: '80vh', borderRadius: '10px' }}
        >
          {/* Search */}
          <Box>
            <TextField
              id='outlined-start-adornment'
              placeholder='Search for products...'
              inputRef={search}
              onChange={handleSearch}
              sx={{
                m: 1,
                width: '100%',
                height: '40px',
                padding: '11.5px',
                fontSize: '1rem',
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Close Button */}
          <Button
            style={{
              position: 'absolute',
              right: '0',
              top: '0',
            }}
            onClick={handleClose}
          >
            <CloseIcon
              sx={{
                fontSize: '2rem',
                borderRadius: '10px',
                color: colors.grey[500],
              }}
            />
          </Button>

          {/* Products */}
          <Box
            sx={{
              height: '560px',
              display: 'flex',
              justifyContent: 'spece-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              marginLeft: '1.5%',
              overflow: 'auto',
              marginTop: '3rem',
            }}
          >
            {products.map((item, i) => {
              const product = item.node;
              const image = product.images.edges[0].node;

              return (
                <ProductCard
                  key={i}
                  image={image.transformedSrc}
                  title={product.title}
                  price={product.priceRange.minVariantPrice.amount}
                  onProductSelected={handleProductSelected}
                />
              );
            })}
          </Box>

          {/* Attach Products Button */}
          <Box
            sx={{
              margin: '1rem auto 0 auto',
              textAlign: 'center',
            }}
          >
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: '14px',
                fontWeight: 'bold',
                padding: '10px 20px',
              }}
              onClick={handleAttachButton}
            >
              Attach Products
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
