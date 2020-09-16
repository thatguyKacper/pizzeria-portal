import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import store from './redux/store';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/WaiterContainer';
import Kitchen from './components/views/Kitchen/Kitchen';
import Homepage from './components/views/Homepage/Homepage';
import Order from './components/views/Order/Order';
import NewOrder from './components/views/NewOrder/NewOrder';
import NewBooking from './components/views/NewBooking/NewBooking';
import NewEvent from './components/views/Events/Events';
import Booking from './components/views/Booking/Booking';
import Events from './components/views/Events/Events';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2b4c6f',
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Homepage} />
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
                <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={NewBooking} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/event/:id'} component={NewEvent} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={Booking} />
                <Route exact path={process.env.PUBLIC_URL + '/tables/event/new'} component={Events} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={Order} />
                <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={NewOrder} />
                <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
