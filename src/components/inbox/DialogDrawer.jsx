import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { tokens } from '../../theme';
import { useTheme } from '@emotion/react';
import { Button, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import OrdersTab from '../../components/inbox/OrdersTab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StarIcon from '@mui/icons-material/Star';

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
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '.5rem',
        }}
      >
        {/* Name */}
        <Typography
          sx={{
            fontSize: '1rem',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '4rem',
          }}
        >
          <PersonIcon sx={{ fontSize: '1.5rem' }} />
          {name}
        </Typography>

        {/* Email */}
        <Typography
          sx={{
            fontSize: '1rem',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '4rem',
          }}
        >
          <EmailIcon sx={{ fontSize: '1.5rem' }} />
          {email}
        </Typography>

        {/* Phone */}
        <Typography
          sx={{
            fontSize: '1rem',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '4rem',
          }}
        >
          <LocalPhoneIcon sx={{ fontSize: '1.5rem' }} />
          {phone}
        </Typography>

        {/* WA Phone */}
        <Typography
          sx={{
            fontSize: '1rem',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '4rem',
          }}
        >
          <WhatsAppIcon sx={{ fontSize: '1.5rem' }} />
          {waPhone}
        </Typography>

        {/* Total Reviews */}
        <Typography
          sx={{
            fontSize: '1rem',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '4rem',
          }}
        >
          <StarIcon sx={{ fontSize: '1.5rem' }} />3 reviews
        </Typography>

        {/* Tags */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignContent: 'center',
            margin: '.2rem 0',
          }}
        >
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
            Add Tag
          </Button>
          <Box
            sx={{
              width: '180px',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              margin: '0 5px',
              gap: '10px',
              overflowX: 'auto',
            }}
          >
            <Typography sx={{ fontSize: '1rem' }}>Loyalty</Typography>
            <Typography sx={{ fontSize: '1rem' }}>VIP</Typography>
          </Box>
        </Box>

        {/* Draft Order Button */}
        <Box>
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
            Create Draft Order
          </Button>
        </Box>

        {/* Total Spent */}
        <Typography
          sx={{
            fontSize: '1rem',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '4rem',
          }}
        >
          Total Spent: $2340.00
        </Typography>

        {/* Orders */}
        <Typography
          sx={{
            fontSize: '1rem',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '4rem',
          }}
        >
          Orders: 5
        </Typography>
      </Box>

      {/* Orders Tab */}
      <Box sx={{ height: '510px', overflow: 'auto' }}>
        <OrdersTab />
      </Box>
    </Box>
  );

  return (
    <div>
      <Box
        sx={{
          height: '856px',
          position: 'fixed',
          backgroundColor: colors.primary[400],
          right: '1%',
          bottom: '18px',
          top: '88px',
          borderRadius: '10px',
          border: '1px solid #000',
          borderColor: 'divider',
          // overflowY: 'auto',
          // overflowX: 'hidden',
        }}
        anchor={'right'}
      >
        {drawerContent()}
      </Box>
    </div>
  );
}
