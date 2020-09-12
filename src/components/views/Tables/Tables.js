import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const today = new Date();

const tables = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
];

const halfHourArray = [
  9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 18.5, 19, 19.5, 20, 20.5,
];

const demoContent = [
  { id: '1', type: 'event', duration: 2, startTime: '9', people: 4, name: 'John Smith', table: '1', status: 'waiting' },
  { id: '2', type: 'booking', duration: 1, startTime: '11', people: 4, name: 'John Smith', table: '2', status: 'waiting' },
  { id: '3', type: 'event', duration: null, startTime: '11', people: 4, name: 'John Smith', table: '3', status: 'waiting' },
  { id: '4', type: 'booking', duration: 1.5, startTime: '14', people: 4, name: 'John Smith', table: '4', status: 'waiting' },
  { id: '5', type: 'booking', duration: 2, startTime: '15', people: 4, name: 'John Smith', table: '1', status: 'waiting' },
  { id: '6', type: 'event', duration: 2, startTime: '17', people: 4, name: 'John Smith', table: '2', status: 'waiting' },
  { id: '7', type: 'event', duration: 2, startTime: '19', people: 4, name: 'John Smith', table: '3', status: 'waiting' },
];

const Tables = () => {
  const state = {
    id: 'abc',
    date: `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`,
  };

  return (
    <div className={styles.component}>
      <form className={styles.formContainer} noValidate>
        <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue={state.date}
          className={styles.dateField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      <Paper className={styles.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {tables.map(column => (
                <TableCell key={column.id}>{column.id}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {halfHourArray.map((row, i) => (
              <TableRow key={i}>
                <TableCell>
                  {row}
                </TableCell>
                {tables.map(cell => (
                  <TableCell key={cell.id}>
                    {demoContent.map(reservation => (
                      (reservation.startTime === row && reservation.table === cell.id) && (
                        <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/${reservation.type}/${reservation.id}`}>
                          {`${reservation.type} id: ${reservation.id}`}
                        </Button>
                      )
                    ))}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper >
      {/* <h2>
        Tables view
      </h2>
      <Link to={`/tables/booking/new`} className={styles.link}>New booking</Link>
      <Link to={`/tables/booking/${state.id}`} className={styles.link}>Booking number</Link>
      <Link to={`/tables/event/new`} className={styles.link}>New event</Link>
      <Link to={`/tables/event/${state.id}`} className={styles.link}>Event number</Link> */}
    </div >
  );
};

export default Tables;