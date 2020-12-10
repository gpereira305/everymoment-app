import React, { Component } from 'react';
import{Container} from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard'; 
import Navbar from '../../features/event/nav/NavBar/NavBar';






 class App extends Component {
  render() {
    return (
<>
       <Navbar/>
       <Container className='main'>
        <EventDashboard/>
      </Container>
</>
    )
  }
}


export default App;

