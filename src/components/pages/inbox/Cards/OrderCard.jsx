import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Button,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Box } from '@mui/system';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ order }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: '100%' }}>
      {/* Card Header */}
      {/* <CardHeader title='Order No. #3' subheader='September 14, 2016' /> */}

      {/* Card Content */}
      <CardContent
        sx={{
          padding: '0',
          borderBottom: '1px solid #000',
          borderRadius: '10px',
          borderColor: 'divider',
        }}
      >
        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            borderRadius: '10px',
            padding: '10px',
          }}
        >
          {/* Ordered at */}
          <ListItem
            key='Ordered at'
            disableGutters
            secondaryAction={
              <Typography sx={{ fontSize: '1rem' }}>
                {new Date(order.createdAt).getDay() < 10
                  ? '0' + new Date(order.createdAt).getDay()
                  : new Date(order.createdAt).getDay()}
                .{new Date(order.createdAt).getDate()}.
                {new Date(order.createdAt).getFullYear()}
              </Typography>
            }
          >
            <ListItemText primary={'Ordered at'} />
          </ListItem>

          {/* Order URL */}
          <ListItem
            key='Order URL'
            disableGutters
            secondaryAction={
              <Typography sx={{ fontSize: '1rem' }}>
                <a
                  href={order?.url}
                  target='_blank'
                  rel='noreferrer'
                  style={{ color: '#25D366' }}
                >
                  Click here
                </a>
              </Typography>
            }
          >
            <ListItemText primary={'Order URL'} />
          </ListItem>

          {/* Status */}
          <ListItem
            key='Status'
            disableGutters
            secondaryAction={
              <Typography sx={{ fontSize: '1rem' }}>Open</Typography>
            }
          >
            <ListItemText primary={'Status'} />
          </ListItem>

          {/* Fullfilment */}
          <ListItem
            key='Fullfilment'
            disableGutters
            secondaryAction={
              <Typography sx={{ fontSize: '1rem' }}>Fullfiled</Typography>
            }
          >
            <ListItemText primary={'Fullfilment'} />
          </ListItem>

          {/* Payment */}
          <ListItem
            key='Payment'
            disableGutters
            secondaryAction={
              <Typography sx={{ fontSize: '1rem' }}>Paid</Typography>
            }
          >
            <ListItemText primary={'Payment'} />
          </ListItem>
        </List>
      </CardContent>

      {/* Card Action */}
      <CardActions disableSpacing>
        <Typography sx={{ fontSize: '1rem' }}>
          {order.items.length} items / {order.total} {order.currency}
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      {/* Card Collapse */}
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent sx={{ padding: '0', paddingBottom: '0 !important' }}>
          <ImageList
            sx={{ width: '100%', height: 150, padding: '0', margin: '0' }}
            cols={2}
            rowHeight={150}
          >
            {order.items.map((item, i) => (
              <ImageListItem key={i}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading='lazy'
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.price}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                    ></IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </CardContent>
      </Collapse>

      <Box
        sx={{
          padding: '.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Button variant='text' color='secondary'>
          <ContentCopyIcon />
          <Typography
            sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: '600' }}
          >
            Duplicate
          </Typography>
        </Button>

        <Button variant='text' color='secondary'>
          <EditIcon />
          <Typography
            sx={{ fontSize: '1rem', textTransform: 'none', fontWeight: '600' }}
          >
            Edit
          </Typography>
        </Button>
      </Box>
    </Card>
  );
}
