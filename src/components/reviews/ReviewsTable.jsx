import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import { visuallyHidden } from '@mui/utils';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, FormControl, IconButton, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useTheme } from '@emotion/react';
import { tokens } from '../../theme';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function createData(avatar, name, review, imageOrVideo, reviews, date) {
  return {
    avatar,
    name,
    review,
    imageOrVideo,
    reviews,
    date,
  };
}

// Table Columns
const headCells = [
  {
    id: 'avatar',
    numeric: false,
    disablePadding: true,
    label: 'Avatar',
  },
  {
    id: 'name',
    numeric: true,
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'review',
    numeric: true,
    disablePadding: false,
    label: 'Review',
  },
  {
    id: 'imageOrVideo',
    numeric: true,
    disablePadding: false,
    label: 'Image/Video',
  },
  {
    id: 'reviews',
    numeric: true,
    disablePadding: false,
    label: 'Reviews',
  },
  {
    id: 'date',
    numeric: true,
    disablePadding: false,
    label: 'Date',
  },
];

// Table Rows
const rows = [
  createData(
    <AccountCircleIcon sx={{ fontSize: '2rem' }} />,
    'Oana Buzatu',
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    'Yes',
    '(5) / 5.00',
    '01.01.2023'
  ),
  createData(
    <AccountCircleIcon sx={{ fontSize: '2rem' }} />,
    'Krum Ognianov',
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    'Yes',
    '(5) / 5.00',
    '01.02.2023'
  ),
  createData(
    <AccountCircleIcon sx={{ fontSize: '2rem' }} />,
    'Despina Maria',
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    'Yes',
    '(5) / 2.00',
    '01.03.2023'
  ),
  createData(
    <AccountCircleIcon sx={{ fontSize: '2rem' }} />,
    'Vlad Negrau',
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    'Yes',
    '(5) / 1.00',
    '01.04.2023'
  ),
  createData(
    <AccountCircleIcon sx={{ fontSize: '2rem' }} />,
    'Mikko Kaarela',
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    'Yes',
    '(5) / 3.00',
    '01.05.2023'
  ),
  createData(
    <AccountCircleIcon sx={{ fontSize: '2rem' }} />,
    'Valeri Duchev',
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    'Yes',
    '(5) / 4.00',
    '01.06.2023'
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// Table 1st row
function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            color='primary'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ fontSize: '1rem' }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

// Table Header
function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {/* Search and filter */}
      <Box sx={{ flex: '1 1 100%' }} id='tableTitle' component='div'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          {/* Search */}
          <FormControl
            sx={{
              m: 1,
              width: '100%',
              maxWidth: '300px',
              '& .MuiInputBase-input': {
                padding: '10px',
              },
            }}
            variant='outlined'
          >
            <OutlinedInput
              id='outlined-adornment-weight'
              aria-describedby='outlined-weight-helper-text'
              endAdornment={<SearchIcon position='end'></SearchIcon>}
            />
          </FormControl>

          {/* Filter */}
          <IconButton>
            <FilterAltIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
        </Box>
      </Box>

      {/* Selected count and export button */}
      {numSelected > 0 ? (
        <Box
          sx={{
            width: '190px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            gap: '.5rem',
          }}
        >
          <Typography
            color='inherit'
            variant='subtitle1'
            component='div'
            sx={{ fontSize: '1rem' }}
          >
            {numSelected} selected
          </Typography>
          <Tooltip title='Export'>
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: '14px',
                fontWeight: 'bold',
                padding: '8px 15px',
              }}
            >
              Export
            </Button>
          </Tooltip>
        </Box>
      ) : (
        <Box
          sx={{
            width: '190px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            gap: '.5rem',
          }}
        >
          <Typography
            color='inherit'
            variant='subtitle1'
            component='div'
            sx={{ fontSize: '1rem' }}
          >
            {numSelected} selected
          </Typography>
          <Tooltip title='Export Disabled'>
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: '14px',
                fontWeight: 'bold',
                padding: '8px 15px',
              }}
              disabled
            >
              Export
            </Button>
          </Tooltip>
        </Box>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function ReviewsTable() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper
        sx={{
          width: '100%',
          mb: 2,
          borderRadius: '10px',
          backgroundColor: colors.primary[400],
          backgroundImage: 'none',
        }}
      >
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer sx={{ height: '75vh' }}>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby='tableTitle'
            size={'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role='checkbox'
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      {/* Checkboxs */}
                      <TableCell padding='checkbox'>
                        <Checkbox
                          color='primary'
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>

                      {/* Avatar */}
                      <TableCell
                        component='th'
                        id={labelId}
                        scope='row'
                        padding='none'
                      >
                        {row.avatar}
                      </TableCell>

                      {/* Name */}
                      <TableCell align='right' sx={{ fontSize: '1rem' }}>
                        {row.name}
                      </TableCell>

                      {/* Review */}
                      <TableCell align='right' sx={{ fontSize: '1rem' }}>
                        {row.review}
                      </TableCell>

                      {/* Image/Video */}
                      <TableCell align='right' sx={{ fontSize: '1rem' }}>
                        {row.imageOrVideo}
                      </TableCell>

                      {/* Reviews */}
                      <TableCell align='right' sx={{ fontSize: '1rem' }}>
                        {row.reviews}
                      </TableCell>

                      {/* Date */}
                      <TableCell align='right' sx={{ fontSize: '1rem' }}>
                        {row.date}
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{ fontSize: '1rem' }}
          rowsPerPageOptions={[10, 25, 50]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
