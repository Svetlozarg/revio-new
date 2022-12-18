import { useState } from 'react';
import { Avatar, Tab, Tabs, Typography } from '@mui/material';
import { mockDataTeam } from '../../data/mockData';
import { Box } from '@mui/system';

const ChatTabs = ({ handleChange }) => {
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
                <Typography textAlign='left' fontSize='1rem' fontWeight='600'>
                  {user.name}
                </Typography>
                <Typography textAlign='left'>{user.phone}</Typography>
              </Box>
            }
            icon={<Avatar src='/broken-image.jpg' loading='lazy' />}
            iconPosition='start'
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
              width: '85%',
              margin: '0 auto',
              justifyContent: 'start',
              minHeight: '55px',
              fontSize: '1rem',
              fontWeight: '600',
            }}
          />
        );
      })}
    </Tabs>
  );
};

export default ChatTabs;
