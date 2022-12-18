import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Topbar from './components/global/Topbar';
import Sidebar from './components/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Settings from './scenes/settings';
import Inbox from './scenes/inbox';
import Login from './scenes/authentication/login';
import Register from './scenes/authentication/register';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import { useAuth } from './contexts/ContextProvider';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const { user } = useAuth();

  if (user) {
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className='app'>
            <Sidebar isSidebar={isSidebar} />
            <main className='content' style={{ overflow: 'hidden' }}>
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path='/' element={<Dashboard />} />
              </Routes>
              <Routes>
                <Route path='/inbox' element={<Inbox />} />
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
