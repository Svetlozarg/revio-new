import { Typography, Box } from '@mui/material';
import Stepper from './Stepper';

const Header = ({ TabPanel, value, index }) => {
  return (
    <TabPanel value={value} index={index} style={{ width: '100%' }}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
        }}
      >
        <Typography sx={{ fontSize: '2rem', fontWeight: 600 }}>
          Configuration
        </Typography>
      </Box>

      <Stepper />
    </TabPanel>
  );
};

export default Header;
