import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import {
  Box,
  IconButton,
  useTheme,
  Modal,
  InputAdornment,
  TextField,
  Button,
} from '@mui/material';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import SearchIcon from '@mui/icons-material/Search';
import ProductCard from '../Cards/ProductCard';
import { tokens } from '../../../../theme';
import CloseIcon from '@mui/icons-material/Close';
import { getAllProducts, searchProducts } from '../../../../services/shopify';

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
    setProducts(await getAllProducts());
  };

  // Search Products
  const handleSearch = async (e) => {
    e.preventDefault();
    setProducts(await searchProducts(search.current.value));
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
            {products?.map((item, i) => {
              return (
                <ProductCard
                  key={i}
                  image={item.images[0].src}
                  title={item.title}
                  price={item.variants[0].price}
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
