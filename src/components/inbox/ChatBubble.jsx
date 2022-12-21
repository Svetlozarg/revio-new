import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  useTheme,
} from '@mui/material';
import { tokens } from '../../theme';
import PersonIcon from '@mui/icons-material/Person';
import avatar from '../../assets/small_logo.png';

const ChatBubble = ({ variant, color, text, products, time = '8:21 pm' }) => {
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
      {/* Avatar */}
      {/* <Box
        sx={{
          backgroundColor: 'background.paper',
          borderRadius: '50%',
          padding: '5px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {variant === 'end' ? (
          <img
            style={{ width: 'auto', height: '25px', objectFit: 'cover' }}
            src={avatar}
            alt=''
          />
        ) : (
          <PersonIcon
            sx={{ width: 'auto', height: '25px', objectFit: 'cover' }}
          />
        )}
      </Box> */}

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
          padding: '.5rem 4rem .5rem 1rem',
          borderRadius: '10px',
          position: 'relative',
        }}
      >
        {/* Prodcuts */}
        {products && (
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
        {text}

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
