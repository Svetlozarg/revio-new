import { useState } from 'react';
import ChatTabs from '../../components/inbox/ChatTabs';
import Box from '@mui/material/Box';
import DialogTab from '../../components/inbox/DialogTab';
import { mockDataTeam } from '../../data/mockData';
import { Typography, TextField, useTheme } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { tokens } from '../../theme';

export default function Inbox() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [value, setValue] = useState(0);

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
      {/* Header */}
      <Box
        sx={{
          width: 'auto',
          height: '100%',
          borderRight: '1px solid #000',
          borderColor: 'divider',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '1rem',
          }}
        >
          {/* Title */}
          <Typography variant='h3' fontWeight='600' p='0rem 1rem'>
            Revio Inbox
          </Typography>

          {/* Search */}
          <TextField
            id='outlined-start-adornment'
            placeholder='Search...'
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

        {/* Chat Tabs */}
        <ChatTabs handleChange={pull_data} />
      </Box>

      {/* Chat Rooms */}
      {mockDataTeam.map((user, i) => {
        return <DialogTab key={user.id} value={value} user={user} />;
      })}
    </Box>
  );
}
