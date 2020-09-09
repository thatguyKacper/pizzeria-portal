import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Kitchen from './components/views/Kitchen/Kitchen';
import Homepage from './components/views/Homepage/Homepage';
import Order from './components/views/Order/Order';
import NewOrder from './components/views/NewOrder/NewOrder';
import NewBooking from './components/views/NewBooking/NewBooking';
import NewEvent from './components/views/Events/Events';
import Booking from './components/views/Booking/Booking';
import Events from './components/views/Events/Events';

function App() {
  return (
    <BrowserRouter>
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
          <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/new'} component={Order} />
          <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={NewOrder} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
