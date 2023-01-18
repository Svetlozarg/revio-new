import { useState } from 'react';
import ChatTabs from '../../components/inbox/ChatTabs';
import Box from '@mui/material/Box';
import DialogTab from '../../components/inbox/DialogTab';
import { mockDataTeam } from '../../data/mockData';
import { IconButton, Tab, Tabs, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Container } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

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
                  <FavoriteIcon />
                  <Typography sx={{ fontSize: '1rem' }}>Unassigned</Typography>
                </Box>
                <Typography sx={{ fontSize: '1rem' }}>(0)</Typography>
              </Box>
            }
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
                  <FavoriteIcon />
                  <Typography sx={{ fontSize: '1rem' }}>My chats</Typography>
                </Box>
                <Typography sx={{ fontSize: '1rem' }}>(9)</Typography>
              </Box>
            }
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
                  <FavoriteIcon />
                  <Typography sx={{ fontSize: '1rem' }}>Team</Typography>
                </Box>
                <Typography sx={{ fontSize: '1rem' }}>(18)</Typography>
              </Box>
            }
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
                  <FavoriteIcon />
                  <Typography sx={{ fontSize: '1rem' }}>WhatsApp</Typography>
                </Box>
                <Typography sx={{ fontSize: '1rem' }}>(9)</Typography>
              </Box>
            }
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
                  <FavoriteIcon />
                  <Typography sx={{ fontSize: '1rem' }}>Messanger</Typography>
                </Box>
                <Typography sx={{ fontSize: '1rem' }}>(5)</Typography>
              </Box>
            }
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
                  <FavoriteIcon />
                  <Typography sx={{ fontSize: '1rem' }}>Instagram</Typography>
                </Box>
                <Typography sx={{ fontSize: '1rem' }}>(2)</Typography>
              </Box>
            }
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
                  <FavoriteIcon />
                  <Typography sx={{ fontSize: '1rem' }}>Viber</Typography>
                </Box>
                <Typography sx={{ fontSize: '1rem' }}>(8)</Typography>
              </Box>
            }
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
                  <FavoriteIcon />
                  <Typography sx={{ fontSize: '1rem' }}>Telegram</Typography>
                </Box>
                <Typography sx={{ fontSize: '1rem' }}>(6)</Typography>
              </Box>
            }
          />
        </Tabs>
      </Container>

      {/* Chat Tabs */}
      <Box
        sx={{
          width: 'auto',
          height: '100%',
          borderRight: '1px solid #000',
          borderColor: 'divider',
          backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#1f2a40',
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
  );
}
