import { useState } from 'react';
import ChatTabs from '../../components/inbox/ChatTabs';
import Box from '@mui/material/Box';
import DialogTab from '../../components/inbox/DialogTab';
import { mockDataTeam } from '../../data/mockData';
import {
  IconButton,
  OutlinedInput,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from '@mui/material';
import { tokens } from '../../theme';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Container } from '@mui/system';
import InboxIcon from '@mui/icons-material/Inbox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GroupIcon from '@mui/icons-material/Group';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SearchIcon from '@mui/icons-material/Search';

export default function Inbox() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [value, setValue] = useState(0);
  const [ticketsFilter, setTicketsFilter] = useState('open');
  const [chatCategorie, setChatCategorie] = useState(1);

  const handlechatCategorie = (event, newValue) => {
    setChatCategorie(newValue);
  };

  const handleChange = (event) => {
    setTicketsFilter(event.target.value);
  };

  const pull_data = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      {/* Inbox Header */}
      <Box
        sx={{
          width: '100%',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '20px',
        }}
      >
        <Typography
          sx={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
          }}
        >
          Revio Inbox
        </Typography>
        <Box sx={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
          <FormControl
            sx={{
              m: 1,
              width: '100%',
              maxWidth: '500px',
            }}
            variant='outlined'
          >
            <OutlinedInput
              id='outlined-adornment-weight'
              aria-describedby='outlined-weight-helper-text'
              endAdornment={<SearchIcon position='end'></SearchIcon>}
            />
          </FormControl>
        </Box>
      </Box>

      {/* Inbox */}
      <Box
        m='20px'
        sx={{
          width: 'calc(100% - 370px)',
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
          height: '856px',
          borderRadius: '10px',
          border: '1px solid #000',
          borderColor: 'divider',
          backgroundColor: colors.primary[400],
        }}
      >
        {/* Chat Tabs Categories */}
        <Container
          sx={{
            maxWidth: '225px !important',
            borderRight: '1px solid #000',
            borderColor: 'divider',
            borderRadius: '10px',
          }}
        >
          <Box>
            {/* Conversation */}
            <Typography sx={{ fontSize: '1.3rem', padding: '1rem 0' }}>
              Conversations
            </Typography>

            {/* Conversations Tabs */}
            <Tabs
              value={chatCategorie}
              onChange={handlechatCategorie}
              orientation='vertical'
            >
              <Tab
                value={1}
                label={
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '.5rem',
                      }}
                    >
                      <InboxIcon
                        sx={{
                          color:
                            theme.palette.mode === 'dark' ? '#fff' : '#000',
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: '1rem',
                          color:
                            theme.palette.mode === 'dark' ? '#fff' : '#000',
                        }}
                      >
                        Unassigned
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                      }}
                    >
                      (0)
                    </Typography>
                  </Box>
                }
                sx={{
                  backgroundColor:
                    1 === chatCategorie && theme.palette.mode === 'dark'
                      ? '#2a3942'
                      : 1 === chatCategorie && theme.palette.mode === 'light'
                      ? '#f0f2f5'
                      : '',
                }}
              />
              <Tab
                value={2}
                label={
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '.5rem',
                      }}
                    >
                      <QuestionAnswerIcon
                        sx={{
                          color:
                            theme.palette.mode === 'dark' ? '#fff' : '#000',
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: '1rem',
                          color:
                            theme.palette.mode === 'dark' ? '#fff' : '#000',
                        }}
                      >
                        My chats
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                      }}
                    >
                      (9)
                    </Typography>
                  </Box>
                }
                sx={{
                  backgroundColor:
                    2 === chatCategorie && theme.palette.mode === 'dark'
                      ? '#2a3942'
                      : 2 === chatCategorie && theme.palette.mode === 'light'
                      ? '#f0f2f5'
                      : '',
                }}
              />
              <Tab
                value={3}
                label={
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '.5rem',
                      }}
                    >
                      <GroupIcon
                        sx={{
                          color:
                            theme.palette.mode === 'dark' ? '#fff' : '#000',
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: '1rem',
                          color:
                            theme.palette.mode === 'dark' ? '#fff' : '#000',
                        }}
                      >
                        Team
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                      }}
                    >
                      (18)
                    </Typography>
                  </Box>
                }
                sx={{
                  backgroundColor:
                    3 === chatCategorie && theme.palette.mode === 'dark'
                      ? '#2a3942'
                      : 3 === chatCategorie && theme.palette.mode === 'light'
                      ? '#f0f2f5'
                      : '',
                }}
              />
            </Tabs>

            {/* Channels */}
            <Typography sx={{ fontSize: '1.3rem', padding: '1rem 0' }}>
              Channels
            </Typography>

            {/* Channel Tabs */}
            <Tabs
              value={chatCategorie}
              onChange={handlechatCategorie}
              orientation='vertical'
            >
              <Tab
                value={4}
                label={
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '.5rem',
                      }}
                    >
                      <WhatsAppIcon
                        sx={{
                          color:
                            theme.palette.mode === 'dark' ? '#fff' : '#000',
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: '1rem',
                          color:
                            theme.palette.mode === 'dark' ? '#fff' : '#000',
                        }}
                      >
                        WhatsApp
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                      }}
                    >
                      (9)
                    </Typography>
                  </Box>
                }
                sx={{
                  backgroundColor:
                    4 === chatCategorie && theme.palette.mode === 'dark'
                      ? '#2a3942'
                      : 4 === chatCategorie && theme.palette.mode === 'light'
                      ? '#f0f2f5'
                      : '',
                }}
              />
              <Tab
                value={5}
                label={
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '.5rem',
                      }}
                    >
                      <FavoriteIcon
                        sx={{
                          color:
                            theme.palette.mode === 'dark' ? '#fff' : '#000',
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: '1rem',
                          color:
                            theme.palette.mode === 'dark' ? '#fff' : '#000',
                        }}
                      >
                        Messenger
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                      }}
                    >
                      (5)
                    </Typography>
                  </Box>
                }
                sx={{
                  backgroundColor:
                    5 === chatCategorie && theme.palette.mode === 'dark'
                      ? '#2a3942'
                      : 5 === chatCategorie && theme.palette.mode === 'light'
                      ? '#f0f2f5'
                      : '',
                }}
              />
              <Tab
                value={6}
                label={
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '.5rem',
                      }}
                    >
                      <InstagramIcon
                        sx={{
                          color:
                            theme.palette.mode === 'dark' ? '#fff' : '#000',
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: '1rem',
                          color:
                            theme.palette.mode === 'dark' ? '#fff' : '#000',
                        }}
                      >
                        Instagram
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                      }}
                    >
                      (2)
                    </Typography>
                  </Box>
                }
                sx={{
                  backgroundColor:
                    6 === chatCategorie && theme.palette.mode === 'dark'
                      ? '#2a3942'
                      : 6 === chatCategorie && theme.palette.mode === 'light'
                      ? '#f0f2f5'
                      : '',
                }}
              />
              <Tab
                value={7}
                label={
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '.5rem',
                      }}
                    >
                      <FavoriteIcon
                        sx={{
                          color:
                            theme.palette.mode === 'dark' ? '#fff' : '#000',
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: '1rem',
                          color:
                            theme.palette.mode === 'dark' ? '#fff' : '#000',
                        }}
                      >
                        Viber
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                      }}
                    >
                      (8)
                    </Typography>
                  </Box>
                }
                sx={{
                  backgroundColor:
                    7 === chatCategorie && theme.palette.mode === 'dark'
                      ? '#2a3942'
                      : 7 === chatCategorie && theme.palette.mode === 'light'
                      ? '#f0f2f5'
                      : '',
                }}
              />
              <Tab
                value={8}
                label={
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '.5rem',
                      }}
                    >
                      <TelegramIcon
                        sx={{
                          color:
                            theme.palette.mode === 'dark' ? '#fff' : '#000',
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: '1rem',
                          color:
                            theme.palette.mode === 'dark' ? '#fff' : '#000',
                        }}
                      >
                        Telegram
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: '1rem',
                        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
                      }}
                    >
                      (6)
                    </Typography>
                  </Box>
                }
                sx={{
                  backgroundColor:
                    8 === chatCategorie && theme.palette.mode === 'dark'
                      ? '#2a3942'
                      : 8 === chatCategorie && theme.palette.mode === 'light'
                      ? '#f0f2f5'
                      : '',
                }}
              />
            </Tabs>
          </Box>
        </Container>

        {/* Chat Tabs */}
        <Box
          sx={{
            width: 'auto',
            height: '100%',
            borderRight: '1px solid #000',
            borderColor: 'divider',
            backgroundColor:
              theme.palette.mode === 'light' ? '#fff' : '#1f2a40',
            borderRadius: '10px',
          }}
        >
          {/* Header */}
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '1rem .5rem 0 2rem',
            }}
          >
            <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
              <Select
                labelId='demo-select-small'
                id='demo-select-small'
                value={ticketsFilter}
                onChange={handleChange}
              >
                <MenuItem value='open'>Open</MenuItem>
                <MenuItem value='closed'>Closed</MenuItem>
              </Select>
            </FormControl>

            <IconButton>
              <FilterAltIcon sx={{ fontSize: '1.8rem' }} />
            </IconButton>
          </Box>

          <ChatTabs handleChange={pull_data} />
        </Box>

        {/* Chat Rooms */}
        {mockDataTeam.map((user, i) => {
          return <DialogTab key={user.id} value={value} user={user} />;
        })}
      </Box>
    </Box>
  );
}
