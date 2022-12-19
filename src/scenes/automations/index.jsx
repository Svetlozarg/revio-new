import { Box, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Flow from '../../components/automations/Flow';

export default function Automations() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m='20px' sx={{ width: '98%', height: '89vh' }}>
      <Flow />
    </Box>
  );
}
