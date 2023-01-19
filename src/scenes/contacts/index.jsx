import { Container, Box, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ContactsTable from '../../components/contacts/ContactsTable';

export default function Inbox() {
  return (
    <Container maxWidth='100%' sx={{ margin: '20px 10px' }}>
      {/* Contacts Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          columnGap: '.5rem',
          marginBottom: '1rem',
        }}
      >
        <PersonIcon sx={{ fontSize: '1.8rem' }} />
        <Typography sx={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
          Contacts
        </Typography>
      </Box>

      {/* Contacts Table */}
      <ContactsTable />
    </Container>
  );
}
