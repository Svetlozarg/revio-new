import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { tokens } from '../../theme';
import { mockTransactions } from '../../data/mockData';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import Header from '../../components/common/Header';
import LineChart from '../../components/common/LineChart';
import GeographyChart from '../../components/common/GeographyChart';
import BarChart from '../../components/common/BarChart';
import StatBox from '../../components/common/StatBox';
import ProgressCircle from '../../components/common/ProgressCircle';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Card from '../../components/pages/dashboard/Card';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import StarIcon from '@mui/icons-material/Star';
import ChartCard from '../../components/pages/dashboard/ChartCard';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [filerTimeFrame, setfilerTimeFrame] = useState(30);

  const handleChange = (event) => {
    setfilerTimeFrame(event.target.value);
  };

  return (
    <Box m='20px'>
      {/* Header */}
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        {/* Header Box */}
        <Header
          title={
            <h1
              style={{
                fontSize: '2rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <HomeIcon sx={{ fontSize: '2rem' }} /> Dashboard
            </h1>
          }
          subtitle='Welcome to your dashboard'
        />

        {/* Time Period Filter */}
        <Stack direction='row' justifyContent='center' alignItems='center'>
          {/* Calendar Icon*/}
          <CalendarMonthIcon sx={{ fontSize: '2rem' }} />

          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={filerTimeFrame}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={30}>Last 30 days</MenuItem>
              <MenuItem value={90}>Last 3 months</MenuItem>
              <MenuItem value={360}>Last year</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display='grid'
        gridTemplateColumns='repeat(12, 1fr)'
        gridAutoRows='140px'
        gap='20px'
      >
        {/* ROW 1 */}

        {/* Conversations Card */}
        <Card
          icon={
            <EmailIcon
              sx={{ fontSize: '2rem', color: colors.greenAccent[500] }}
            />
          }
          rate='675'
          title='Conversations'
          profit='30'
        />

        {/* New Users Card */}
        <Card
          icon={
            <PersonAddIcon
              sx={{ fontSize: '2rem', color: colors.greenAccent[500] }}
            />
          }
          rate='420'
          title='New Users'
          profit='15'
        />

        {/* Conversations Revenue Card */}
        <Card
          icon={
            <EmailIcon
              sx={{ fontSize: '2rem', color: colors.greenAccent[500] }}
            />
          }
          rate='$12 046.00'
          title='Conversations Revenue'
          profit='43'
        />

        {/* Reviews Received Card */}
        <Card
          icon={
            <StarIcon
              sx={{ fontSize: '2rem', color: colors.greenAccent[500] }}
            />
          }
          rate='413'
          title='Reviews Received'
          profit='26'
        />

        {/* ROW 2 */}
        <ChartCard />
        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          overflow='auto'
          borderRadius='10px'
        >
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p='15px'
          >
            <Typography color={colors.grey[100]} variant='h5' fontWeight='600'>
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              borderBottom={`4px solid ${colors.primary[500]}`}
              p='15px'
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant='h5'
                  fontWeight='600'
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p='5px 10px'
                borderRadius='4px'
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          p='30px'
          borderRadius='10px'
        >
          <Typography variant='h5' fontWeight='600'>
            Campaign
          </Typography>
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            mt='25px'
          >
            <ProgressCircle size='125' />
            <Typography
              variant='h5'
              color={colors.greenAccent[500]}
              sx={{ mt: '15px' }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          borderRadius='10px'
        >
          <Typography
            variant='h5'
            fontWeight='600'
            sx={{ padding: '30px 30px 0 30px' }}
          >
            Sales Quantity
          </Typography>
          <Box height='250px' mt='-20px'>
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          padding='30px'
          borderRadius='10px'
        >
          <Typography
            variant='h5'
            fontWeight='600'
            sx={{ marginBottom: '15px' }}
          >
            Geography Based Traffic
          </Typography>
          <Box height='200px'>
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
