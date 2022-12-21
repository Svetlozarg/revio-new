import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { tokens } from '../../theme';
import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import OrdersTab from '../../components/inbox/OrdersTab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Drawer({ user }) {
  const { name, email, phone, waPhone } = user;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const drawerContent = () => (
    <Box
      sx={{
        width: '320px',
        padding: '0',
      }}
    >
      {/* User Info */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        <PersonIcon
          sx={{
            fontSize: '4rem',
            borderRadius: '50%',
            backgroundColor: 'background.paper',
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '1rem',
          }}
        />
        <Typography
          sx={{
            fontSize: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          <AccountCircleIcon />
          {name}
        </Typography>
        <Typography
          sx={{
            fontSize: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          <EmailIcon />
          {email}
        </Typography>
        <Typography
          sx={{
            fontSize: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          <LocalPhoneIcon />
          {phone}
        </Typography>
        <Typography
          sx={{
            fontSize: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          <WhatsAppIcon />
          {waPhone}
        </Typography>
      </Box>

      <Divider sx={{ margin: '1rem 0' }} />

      {/* Orders Tab */}
      <Box sx={{ height: '580px', overflow: 'auto' }}>
        <OrdersTab />
      </Box>
    </Box>
  );

  return (
    <div>
      <Box
        sx={{
          height: '89%',
          position: 'fixed',
          backgroundColor: colors.primary[400],
          right: '1%',
          bottom: '18px',
          top: '88px',
          borderRadius: '10px',
          border: '1px solid #000',
          borderColor: 'divider',
        }}
        anchor={'right'}
      >
        {drawerContent()}
      </Box>
    </div>
  );
}
