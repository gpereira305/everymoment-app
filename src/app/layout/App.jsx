import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import{Container} from 'semantic-ui-react';
import EventDashboard from '../../features/events/EventDashboard/EventDashboard'; 
import EventDetailedPage from '../../features/events/EventDetailed/EventDetailedPage';
import EventForm from '../../features/events/EventFrom/EventForm';
import HomePage from '../../features/events/home/HomePage';
import Navbar from '../../features/events/nav/NavBar/NavBar'; 
import PeopleDashboard from '../../features/events/user/PeopleDashboard/PeopleDashbord';
import SettingsDashboard from '../../features/events/user/settings/SettingsDasboard';
import UserDetailedPage from '../../features/events/user/UserDatailed/UserDetailedPage';
import TestComponent from '../../features/testarea/TestComponent';




 class App extends Component {
  render() {
    return (

         <Fragment> 
           <Route exact path='/' component={HomePage}/>
           <Route path='/(.+)' render={() => (
          <Fragment>
            <Navbar/> 
            <Container className='main'>
              <Switch key={this.props.location.key}>
              <Route exact path='/events' component={EventDashboard}/>
              <Route path='/events/:id' component={EventDetailedPage}/>
              <Route path='/people' component={PeopleDashboard}/>
              <Route path='/profile/:id' component={UserDetailedPage}/> 
              <Route path='/settings' component={SettingsDashboard}/> 
              <Route path={['/createEvent', '/manage/:id']} component={EventForm}/> 
              <Route path='/test' component={TestComponent}/> 
              </Switch>
            </Container>
          </Fragment>
         )}

      />
        </Fragment>

    )
  }
}


export default withRouter(App);

