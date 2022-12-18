import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, useTheme } from '@mui/material';
import { tokens } from '../../../theme';
import { useState } from 'react';

export default function ActionAreaCard({
  image,
  title,
  price,
  onProductSelected,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState(false);

  return (
    <Card
      sx={{
        width: '350px',
        maxWidth: 345,
        borderRadius: '10px',
        border: selected
          ? '4px solid ' + colors.greenAccent[500]
          : '4px solid transparent',
        backgroundColor: colors.primary[400],
      }}
      onClick={() => {
        setSelected(!selected);

        const selectedProductObj = {
          selected: selected,
          title: title,
          price: price,
          image: image,
        };
        onProductSelected(selectedProductObj);
      }}
    >
      <CardActionArea>
        {/* Product Image */}
        <CardMedia
          component='img'
          height='240'
          image={image + '&width=512'}
          alt='green iguana'
        />
        <CardContent>
          {/* Product Title */}
          <Typography
            gutterBottom
            variant='h4'
            component='div'
            sx={{ height: '45px' }}
          >
            {title}
          </Typography>

          {/* Product Price */}
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{ fontSize: '1rem' }}
          >
            ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
