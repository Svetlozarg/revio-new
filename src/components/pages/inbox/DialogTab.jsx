import { useRef, useState } from 'react';
import {
  Box,
  IconButton,
  Typography,
  FormControl,
  Input,
  useTheme,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Button,
  ClickAwayListener,
  Skeleton,
  MenuItem,
  Select,
  FormControlLabel,
  Switch,
  Tooltip,
  Zoom,
} from '@mui/material';
import PropTypes from 'prop-types';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InputAdornment from '@mui/material/InputAdornment';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { tokens } from '../../../theme';
import InsertCommentRoundedIcon from '@mui/icons-material/InsertCommentRounded';
import ChatBubble from './ChatBubble';
import DialogDrawer from './DialogDrawer';
import ProductsModal from './Modal/ProductsModal';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
import Alert from '../../common/Alert';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Picker from '@emoji-mart/react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SmartToyIcon from '@mui/icons-material/SmartToy';

// TabPanel Component
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{
        width: '100%',
      }}
    >
      {value === index && (
        <Box sx={{ width: '100%' }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

// PropTypes
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const DialogTab = ({ value, user }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { id, name, phone } = user;
  const message = useRef('');
  const [messages, setMessages] = useState([]);
  const [alert, setAlert] = useState({ text: '', show: false });
  const [attachedProducts, setAttachedProducts] = useState([]);
  const scrollBottom = useRef();
  const [showEmoji, setShowEmoji] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ticket, setTicket] = useState('unassigned');

  const handleChange = (event) => {
    setTicket(event.target.value);
  };

  // Fetch Emoji List
  const data = async () => {
    const response = await fetch(
      'https://cdn.jsdelivr.net/npm/@emoji-mart/data'
    );

    return response.json();
  };

  // Handle send message
  const handleSendMessage = () => {
    // Handle Empty Message
    if (message.current.value === '') {
      if (attachedProducts.length <= 0) {
        setAlert({ text: 'error', show: true });
        setTimeout(() => {
          setAlert({ text: '', show: false });
        }, 5000);
        return;
      }
    }

    if (localStorage.getItem('msgArray')) {
      // if there are messages sent
      let msgArray = JSON.parse(localStorage.getItem('msgArray'));
      let msgObj = {
        message: message.current.value,
        products: attachedProducts.length !== 0 ? attachedProducts : [],
      };
      msgArray.push(msgObj);

      localStorage.setItem('msgArray', JSON.stringify(msgArray));

      setMessages((prevMsgs) => [...prevMsgs, msgArray]);
    } else {
      // if no messages are sent
      let msgArray = [
        {
          message: message.current.value,
          products: attachedProducts.length !== 0 ? attachedProducts : [],
        },
      ];

      localStorage.setItem('msgArray', JSON.stringify(msgArray));
      setMessages(msgArray);
    }

    setAlert({ text: 'success', show: true });
    setTimeout(() => {
      setAlert({ text: '', show: false });
    }, 5000);

    setTimeout(() => {
      if (scrollBottom.current) {
        scrollBottom.current.scrollTop = scrollBottom.current.scrollHeight;
      }

      if (message.current.value !== '') {
        message.current.value = '';
      }
    }, 1);
    setAttachedProducts([]);
    setMessages(JSON.parse(localStorage.getItem('msgArray')));
  };

  // Handle on enter pressed
  const handleOnButtonSendMessage = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Handle on attached button clicked
  const handleOnHandleButtonClicked = (data) => {
    setLoading(true);
    setTimeout(() => {
      message.current.focus();
    }, 100);

    setAttachedProducts(data);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  // Handle remove attached products
  const handleRemoveAttachedProduct = (product) => {
    const updatedArray = attachedProducts.filter(
      (attachedProduct) => attachedProduct.title !== product.title
    );
    setAttachedProducts(updatedArray);
  };

  useEffect(() => {
    setMessages(JSON.parse(localStorage.getItem('msgArray')));
  }, []);

  useEffect(() => {
    if (scrollBottom.current) {
      scrollBottom.current.scrollTop = scrollBottom.current.scrollHeight;
    }
  }, [scrollBottom.current]);

  return (
    <TabPanel value={value} index={id - 1}>
      {/* Header */}
      <Box
        sx={{
          width: '100%',
          borderBottom: '1px solid #000',
          borderColor: 'divider',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
          backgroundColor: colors.primary[400],
          borderRadius: '10px',
        }}
      >
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          gap='.5rem'
        >
          <WhatsAppIcon sx={{ fontSize: '2.5rem' }} />
          <Box>
            <Typography variant='h4'>{name}</Typography>
            <Typography variant='h5'>{phone}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '.5rem',
          }}
        >
          <IconButton>
            <SmartToyIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
          <Box sx={{ minWidth: 120 }}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
              <Select
                labelId='demo-select-small'
                id='demo-select-small'
                value={ticket}
                onChange={handleChange}
              >
                <MenuItem value='unassigned'>Unassigned</MenuItem>
                <MenuItem value='assigned'>Assigned</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '5px 20px',
              borderRadius: '10px',
              textTransform: 'none',
            }}
          >
            Close
          </Button>
        </Box>
      </Box>

      {/* Chat SideMenu */}
      <DialogDrawer user={user} />

      {/* ChatFlow */}
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Dialog Box */}
        <Box
          className={
            theme.palette.mode === 'dark'
              ? 'dialog-box-dark'
              : 'dialog-box-light'
          }
          sx={{
            padding: '2rem',
            height:
              attachedProducts?.length === 0 && attachedProducts !== undefined
                ? '660px'
                : '483px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            overflow: 'auto',
          }}
          ref={scrollBottom}
        >
          <ChatBubble
            variant='start'
            color='white'
            text='Hello, how are you?'
          />
          <ChatBubble
            variant='end'
            color='green'
            text='Hello, I am fine thank you?'
          />
          <ChatBubble
            variant='start'
            color='white'
            text='Would you recommend me some good deals?'
          />
          <ChatBubble
            variant='end'
            color='green'
            text='Yes, here are some limited time offers!'
          />

          {messages?.map((msg, i) => {
            if (msg.products?.length === 0) {
              return (
                <ChatBubble
                  key={i}
                  variant='end'
                  color='green'
                  text={msg.message}
                  products=''
                />
              );
            } else {
              return (
                <Box sx={{ width: '100%' }}>
                  {msg.message && (
                    <ChatBubble
                      key={i}
                      variant='end'
                      color='green'
                      text={msg.message}
                      products=''
                    />
                  )}

                  {msg.products && (
                    <ChatBubble
                      key={i + 1}
                      variant='end'
                      color='green'
                      text=''
                      products={msg.products}
                    />
                  )}
                </Box>
              );
            }
          })}

          {alert.show && (
            <Alert
              variant={alert.text}
              text={
                alert.text === 'success'
                  ? 'Your message has been set!'
                  : "You can't send empty messages!"
              }
            />
          )}
        </Box>

        {/* Chat Bottom */}
        <Box
          sx={{
            height: 'auto',
            borderTop: '1px solid #000',
            borderColor: 'divider',
            p: 3,
          }}
        >
          {/* Attached Products */}
          {attachedProducts.length !== 0 && (
            <ImageList
              sx={{
                width: '100%',
                height: '150px',
                borderRadius: '10px',
              }}
              cols={6}
              rowHeight={140}
              orientation='horizontal'
            >
              {attachedProducts.map((product) => {
                if (loading) {
                  return (
                    <Skeleton
                      animation='wave'
                      variant='rectangle'
                      width={150}
                      height={150}
                      sx={{ borderRadius: '10px' }}
                    >
                      <ImageListItem key={product.image}>
                        <img
                          src={`${product.image}&width=450`}
                          alt={product.title}
                          loading='lazy'
                        />
                        <ImageListItemBar
                          title={product.title}
                          subtitle={'$' + product.price}
                        />
                        <Button
                          style={{
                            minWidth: 'auto',
                            position: 'absolute',
                            right: '0',
                            top: '0',
                            padding: '0',
                          }}
                          onClick={() => handleRemoveAttachedProduct(product)}
                        >
                          <CloseIcon
                            sx={{
                              fontSize: '1.5rem',
                              borderRadius: '10px',
                              color: colors.grey[500],
                            }}
                          />
                        </Button>
                      </ImageListItem>
                    </Skeleton>
                  );
                } else {
                  return (
                    <ImageListItem
                      key={product.image}
                      sx={{ overflow: 'hidden' }}
                    >
                      <img
                        src={`${product.image}&width=450`}
                        alt={product.title}
                        loading='lazy'
                      />
                      <ImageListItemBar
                        title={product.title}
                        subtitle={'$' + product.price}
                      />
                      <Button
                        style={{
                          minWidth: 'auto',
                          position: 'absolute',
                          right: '0',
                          top: '0',
                          padding: '0',
                        }}
                        onClick={() => handleRemoveAttachedProduct(product)}
                      >
                        <CloseIcon
                          sx={{
                            fontSize: '1.5rem',
                            borderRadius: '10px',
                            color: colors.grey[500],
                          }}
                        />
                      </Button>
                    </ImageListItem>
                  );
                }
              })}
            </ImageList>
          )}

          {/* Send Message */}
          <FormControl
            variant='standard'
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            {/* Action Bar */}
            <Box pt='5px' display='flex'>
              {/* Products Modal */}
              <ProductsModal
                onHandleButtonClicked={handleOnHandleButtonClicked}
              />
              {/* Macros Modal */}
              <IconButton disabled>
                <InsertCommentRoundedIcon sx={{ fontSize: '1.5rem' }} />
              </IconButton>

              {/* Files Button  */}
              <IconButton>
                <AttachFileIcon />
              </IconButton>

              {/* Emoji Button  */}
              <IconButton onClick={() => setShowEmoji(!showEmoji)}>
                <EmojiEmotionsIcon />
              </IconButton>

              {/* Emoji Tab */}
              {showEmoji && (
                <ClickAwayListener onClickAway={() => setShowEmoji(!showEmoji)}>
                  <Box sx={{ position: 'absolute', bottom: '55px' }}>
                    <Picker
                      data={data}
                      previewPosition='none'
                      theme={theme.palette.mode === 'dark' ? 'dark' : 'light'}
                      onEmojiSelect={(emoji) => {
                        message.current.value += emoji.native;
                        setShowEmoji(!showEmoji);
                        message.current.focus();
                      }}
                    />
                  </Box>
                </ClickAwayListener>
              )}
            </Box>

            {/* Message Field */}
            <Input
              placeholder='Type your message...'
              sx={{ fontSize: '1rem', p: '1rem', width: '100%' }}
              inputRef={message}
              onKeyDown={handleOnButtonSendMessage}
              endAdornment={
                <InputAdornment position='end'>
                  <Tooltip
                    title={
                      <p
                        style={{
                          fontSize: '1rem',
                          width: '40px',
                          margin: '0',
                          padding: '0',
                          height: '24px',
                          textAlign: 'center',
                        }}
                      >
                        Note
                      </p>
                    }
                    followCursor={true}
                    TransitionComponent={Zoom}
                  >
                    <FormControlLabel
                      value='bottom'
                      control={<Switch color='primary' />}
                      sx={{ width: '35px' }}
                    />
                  </Tooltip>

                  <IconButton
                    sx={{ borderRadius: '10px' }}
                    onClick={handleSendMessage}
                  >
                    <SendRoundedIcon sx={{ fontSize: '2rem' }} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
      </Box>
    </TabPanel>
  );
};

export default DialogTab;
