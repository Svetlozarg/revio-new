import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from '../../assets/revio_logo.png';
import logoLight from '../../assets/revio_logo-light.png';
import { useAuth } from '../../contexts/ContextProvider';
import { useLocation } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography sx={{ fontSize: '1.2rem' }}>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('');
  const { user, logout } = useAuth();
  const location = useLocation();
  const path = location.pathname;
  const urlAfterSlash = path.substring(1);

  useState(() => {
    setSelected(
      urlAfterSlash.slice(0, 1).toUpperCase() + urlAfterSlash.slice(1) === ''
        ? 'Dashboard'
        : urlAfterSlash.slice(0, 1).toUpperCase() + urlAfterSlash.slice(1)
    );
  }, []);

  return (
    <Box
      sx={{
        '& .pro-sidebar-inner': {
          background: `${colors.primary[400]} !important`,
        },
        '& .pro-icon-wrapper': {
          backgroundColor: 'transparent !important',
        },
        '& .pro-inner-item': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .pro-inner-item:hover': {
          color: '#868dfb !important',
        },
        '& .pro-menu-item.active': {
          color: '#6870fa !important',
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape='square'>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'
                ml='15px'
              >
                <Typography variant='h3' color={colors.grey[100]}>
                  <img
                    src={theme.palette.mode === 'dark' ? logoLight : logo}
                    loading='lazy'
                    alt='Revio Logo'
                    style={{ width: 'auto', height: '40px' }}
                  />
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb='25px'>
              <Box display='flex' justifyContent='center' alignItems='center'>
                <AccountCircleIcon style={{ fontSize: '6rem' }} />
              </Box>
              <Box textAlign='center'>
                <Typography
                  variant='h2'
                  color={colors.grey[100]}
                  fontWeight='bold'
                  sx={{ m: '10px 0 0 0', fontSize: '1.5rem' }}
                >
                  {user.displayName}
                </Typography>
                <Typography variant='h5' color={colors.greenAccent[500]}>
                  {user.email}
                </Typography>
                <Button
                  sx={{
                    backgroundColor: colors.blueAccent[700],
                    color: colors.grey[100],
                    fontSize: '14px',
                    fontWeight: 'bold',
                    padding: '5px 20px',
                    marginTop: '10px',
                  }}
                  onClick={() => logout()}
                >
                  Logout
                </Button>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            <Item
              title='Dashboard'
              to='/'
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Inbox'
              to='/inbox'
              icon={<EmailIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Broadcast'
              to='/broadcast'
              icon={<PodcastsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Integration'
              to='/integration'
              icon={<IntegrationInstructionsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Automations'
              to='/automations'
              icon={<DisplaySettingsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title='Settings'
              to='/settings'
              icon={<SettingsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
