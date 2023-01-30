import { Box, Stack, Typography, useTheme } from '@mui/material';
import { tokens } from '../../../theme';

export default function Card({ icon, rate, title, profit }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      gridColumn='span 3'
      backgroundColor={colors.primary[400]}
      borderRadius='10px'
      p='.5rem'
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {icon}
        <Typography
          sx={{
            fontSize: '1.2rem',
            color: colors.greenAccent[500],
            fontWeight: '600',
          }}
        >
          + {profit}%
        </Typography>
      </Box>

      {/* Mid */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography sx={{ fontSize: '2rem', fontWeight: '800' }}>
          {rate}
        </Typography>
        <Typography
          sx={{
            fontSize: '1.1rem',
            fontWeight: '600',
            color: colors.greenAccent[500],
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* Bottom */}
      {/* <Box textAlign='center' pt='.5rem'>
        <Typography>Last 30 days</Typography>
      </Box> */}
    </Box>
  );
}
