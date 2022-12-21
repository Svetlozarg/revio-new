import { useState } from 'react';
import { Avatar, Tab, Tabs, Typography } from '@mui/material';
import { mockDataTeam } from '../../data/mockData';
import { Box, useTheme } from '@mui/system';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { tokens } from '../../theme';

const ChatTabs = ({ handleChange }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [value, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    handleChange(newValue);
  };

  return (
    <Tabs
      orientation='vertical'
      variant='scrollable'
      value={value}
      textColor='secondary'
      onChange={handleTabChange}
      sx={{
        width: '320px',
        padding: '1rem 0 1rem 1rem',
      }}
    >
      {/* Tabs */}
      {mockDataTeam.map((user, i) => {
        return (
          <Tab
            key={i}
            label={
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  textAlign='left'
                  fontSize='1rem'
                  textTransform='none'
                >
                  {user.name}
                </Typography>
                <Typography
                  textAlign='left'
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    gap: '4px',
                  }}
                >
                  <WhatsAppIcon /> {user.phone}
                </Typography>
              </Box>
            }
            icon={<Avatar src='/broken-image.jpg' loading='lazy' />}
            iconPosition='start'
            sx={{
              // borderBottom: 1,
              // borderColor: 'divider',
              backgroundColor:
                value === i && theme.palette.mode === 'dark'
                  ? '#2a3942'
                  : value === i && theme.palette.mode === 'light'
                  ? '#f0f2f5'
                  : '',
              width: '85%',
              margin: '0 auto',
              justifyContent: 'start',
              minHeight: '55px',
              fontSize: '1.5rem',
              fontWeight: '600',
              borderRadius: value === i ? '10px' : '0px',
              color: theme.palette.mode === 'dark' ? '#fff' : '#000',
            }}
          />
        );
      })}
    </Tabs>
  );
};

export default ChatTabs;
