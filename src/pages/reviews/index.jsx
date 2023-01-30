import { Container, Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ContactsTable from '../../components/pages/reviews/ReviewsTable';

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
        <StarIcon sx={{ fontSize: '1.8rem' }} />
        <Typography sx={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
          Reviews
        </Typography>
      </Box>

      {/* Contacts Table */}
      <ContactsTable />
    </Container>
  );
}
