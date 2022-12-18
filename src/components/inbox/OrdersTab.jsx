import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import OrderCard from '../inbox/Cards/OrderCard';
import { useState } from 'react';
import { db } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Accordions() {
  const [expanded, setExpanded] = React.useState('panel1');
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [orders, setOrders] = useState([]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // Fetch Orders
  const fetchOrders = async () => {
    // TODO: Fetch store name to pass to getDocs
    let store = 'Bob';

    // Fetch information and orders for user
    const querySnapshot = await getDocs(
      collection(db, `stores/${store}/orders`)
    );
    const ordersArr = [];
    querySnapshot.forEach((doc) => {
      if (doc.data().customer.phone === '0885325849') {
        ordersArr.push(doc.data());
      }
    });

    setOrders(ordersArr);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      {orders?.map((order, i) => {
        return (
          <Accordion
            expanded={expanded === `panel${i + 1}`}
            onChange={handleChange(`panel${i + 1}`)}
            sx={{ backgroundColor: colors.primary[400] }}
            key={i}
          >
            <AccordionSummary
              aria-controls='panel1d-content'
              id='panel1d-header'
            >
              <Typography>Order #{orders.length - i}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0' }}>
              <OrderCard order={order.order} />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
