import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  useTheme,
} from '@mui/material';
import { tokens } from '../../theme';

const ChatBubble = ({ variant, color, text, products, time = '20:21' }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '.5rem 0',
        gap: '.5rem',
        flexDirection: variant === 'end' ? 'row-reverse' : 'row',
      }}
    >
      {/* Message */}
      <Typography
        sx={{
          maxWidth: '28vw',
          fontSize: '1rem',
          backgroundColor:
            color === 'white'
              ? 'background.paper'
              : color === 'green' && theme.palette.mode === 'dark'
              ? '#046a62'
              : '#d9fdd3',
          padding: '.5rem 3rem .5rem 1rem',
          borderRadius: '10px',
          position: 'relative',
        }}
      >
        {text}

        {/* Prodcuts */}
        {products?.length > 0 && (
          <ImageList
            sx={{
              width: '100%',
              maxWidth: products.length === 1 ? 200 : 500,
              height: 200,
              display: products.length === 0 ? 'none' : '',
              borderRadius: '10px',
            }}
            cols={products.length === 1 ? 1 : products.length === 2 ? 2 : 3}
            rowHeight={200}
          >
            {products?.map((product) => (
              <ImageListItem key={product.img}>
                <img
                  src={`${product.image}&width=500`}
                  alt={product.title}
                  loading='lazy'
                />
                <ImageListItemBar
                  title={product.title}
                  sx={{ textAlign: 'center' }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        )}

        {products?.length > 0 && (
          <Typography>
            {products.map((product, i) => {
              if (i === products.length - 1) {
                return product.title;
              } else {
                return product.title + ', ';
              }
            })}
          </Typography>
        )}

        {/* Time */}
        <Box
          sx={{
            fontSize: '.9rem',
            position: 'absolute',
            right: '8px',
            bottom: '7px',
          }}
        >
          {time}
        </Box>

        {/* Green Triangle */}
        {color === 'green' && (
          <Box
            sx={{
              position: 'absolute',
              border:
                theme.palette.mode === 'dark'
                  ? '8px solid #046a62'
                  : '8px solid #d9fdd3',
              borderColor:
                theme.palette.mode === 'dark'
                  ? '#046a62 transparent transparent #046a62'
                  : '#d9fdd3 transparent transparent #d9fdd3',
              right: '-8px',
              top: '0',
            }}
          ></Box>
        )}

        {/* White Triangle */}
        {color === 'white' && (
          <Box
            sx={{
              position: 'absolute',
              border:
                theme.palette.mode === 'dark'
                  ? '8px solid #121212'
                  : '8px solid #fff',
              borderColor:
                theme.palette.mode === 'dark'
                  ? '#121212 #121212 transparent transparent'
                  : '#fff #fff transparent transparent',
              left: '-8px',
              top: '0',
            }}
          ></Box>
        )}
      </Typography>
    </Box>
  );
};

export default ChatBubble;
