import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/global/Sidebar';
import Dashboard from './pages/dashboard';
import Contacts from './pages/contacts';
import Settings from './pages/settings';
import Inbox from './pages/inbox';
import Login from './pages/authentication/login';
import Register from './pages/authentication/register';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import { useAuth } from './contexts/ContextProvider';
import { useEffect } from 'react';
import Reviews from './pages/reviews';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    } else {
      if (window.location.pathname === '/login') {
        window.location.href = '/';
      }
    }
  }, [user]);

  if (user) {
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className='app'>
            <Sidebar isSidebar={isSidebar} />
            <main className='content' style={{ overflow: 'hidden' }}>
              {/* <Topbar setIsSidebar={setIsSidebar} /> */}
              <Routes>
                <Route path='/' element={<Dashboard />} />
              </Routes>
              <Routes>
                <Route path='/inbox' element={<Inbox />} />
              </Routes>
              <Routes>
                <Route path='/contacts' element={<Contacts />} />
              </Routes>
              <Routes>
                <Route path='/reviews' element={<Reviews />} />
              </Routes>
              <Routes>
                <Route path='/settings' element={<Settings />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  } else {
    return (
      <ColorModeContext.Provider value={colorMode}>
        <Routes>
          <Route path='/login' element={<Login />} />
        </Routes>
        <Routes>
          <Route path='/register' element={<Register />} />
        </Routes>
      </ColorModeContext.Provider>
    );
  }
}

export default App;
