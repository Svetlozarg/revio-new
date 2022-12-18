import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SettingsTab from '../../components/settings/SettingsTabs';
import ConfigurationPanel from '../../components/settings/TabPanels/configuration/ConfigurationPanel';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography sx={{ fontSize: '1.5rem' }}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function Settings() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [showPassword, setShowPassword] = React.useState(false);
  const [value, setValue] = React.useState(1);

  const pull_data = (newValue) => {
    setValue(newValue);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      m='20px'
      sx={{
        flexGrow: 1,
        display: 'flex',
        height: '80vh',
        backgroundColor: colors.primary[400],
      }}
    >
      {/* Tabs */}
      <SettingsTab handleChangeTab={pull_data} />

      {/* Panels */}

      {/* Configuration */}
      <ConfigurationPanel value={value} index={1} TabPanel={TabPanel} />

      {/* Stores */}
      <TabPanel value={value} index={2} style={{ width: '100%' }}>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ fontSize: '2rem', fontWeight: 600 }}>
            Stores
          </Typography>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
          >
            Save
          </Button>
        </Box>

        <Box>
          <FormControl sx={{ m: 1, width: '40%' }} variant='filled'>
            <InputLabel htmlFor='filled-adornment-password'>
              Store Key
            </InputLabel>
            <FilledInput
              id='filled-adornment-password'
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
      </TabPanel>

      {/* Integrations */}
      <TabPanel value={value} index={3} style={{ width: '100%' }}>
        <Box
          className='123'
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ fontSize: '2rem', fontWeight: 600 }}>
            Integrations
          </Typography>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
          >
            Save
          </Button>
        </Box>
      </TabPanel>

      {/* Notifications */}
      <TabPanel value={value} index={4} style={{ width: '100%' }}>
        <Box
          className='123'
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ fontSize: '2rem', fontWeight: 600 }}>
            Notifications
          </Typography>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
          >
            Save
          </Button>
        </Box>
      </TabPanel>

      {/* Billing */}
      <TabPanel value={value} index={5} style={{ width: '100%' }}>
        <Box
          className='123'
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ fontSize: '2rem', fontWeight: 600 }}>
            Billing
          </Typography>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
          >
            Save
          </Button>
        </Box>
      </TabPanel>
    </Box>
  );
}
