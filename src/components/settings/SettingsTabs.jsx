import * as React from 'react';
import { Typography, useTheme, Tabs, Tab } from '@mui/material';
import { tokens } from '../../theme';
import SettingsIcon from '@mui/icons-material/Settings';
import StorefrontIcon from '@mui/icons-material/Storefront';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddCardIcon from '@mui/icons-material/AddCard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const SettingsTabs = ({ handleChangeTab }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    handleChangeTab(newValue);
  };

  return (
    <Tabs
      orientation='vertical'
      variant='scrollable'
      value={value}
      onChange={handleChange}
      textColor='secondary'
      sx={{
        borderRight: 1,
        borderColor: 'divider',
      }}
    >
      <Typography
        sx={{
          padding: '10px',
          fontSize: '1.2rem',
          fontWeight: '600',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5px',
        }}
      >
        <SettingsIcon /> Settings
      </Typography>
      <Tab
        label='Configuration'
        {...a11yProps(0)}
        icon={<ManageAccountsIcon sx={{ fontSize: '2rem' }} />}
        sx={{
          fontSize: '1rem',
          width: '100%',
        }}
      />
      <Tab
        label='Stores'
        {...a11yProps(1)}
        icon={<StorefrontIcon sx={{ fontSize: '2rem' }} />}
        sx={{
          fontSize: '1rem',
          width: '100%',
        }}
      />
      <Tab
        label='Integrations'
        {...a11yProps(2)}
        icon={<IntegrationInstructionsIcon sx={{ fontSize: '2rem' }} />}
        sx={{ fontSize: '1rem', width: '100%' }}
      />
      <Tab
        label='Notifications'
        {...a11yProps(3)}
        icon={<NotificationsIcon sx={{ fontSize: '2rem' }} />}
        sx={{ fontSize: '1rem', width: '100%' }}
      />
      <Tab
        label='Billing'
        {...a11yProps(4)}
        icon={<AddCardIcon sx={{ fontSize: '2rem' }} />}
        sx={{ fontSize: '1rem', width: '100%' }}
      />
    </Tabs>
  );
};

export default SettingsTabs;
