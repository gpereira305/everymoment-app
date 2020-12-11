import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import SignedInMenu from '../Menus/SignedInMenu';
import SignedOutMenu from '../Menus/SignedOutMenu';
 



 class Navbar extends Component {

  state = {
    authenticated: false
  }

  handleSignIn = () => this.setState({ authenticated: true})
  handleSignOut = () => {
    this.setState({ authenticated: false})
    this.props.history.push('/');
  }


  render() {
     
       const {authenticated} = this.state;


    return (
      
              <Menu inverted fixed="top">
                <Container>
                  <Menu.Item as={NavLink} exact to='/' header>
                    <img src="/assets/logo.png" alt="logo" />
                     EveryMoment
                  </Menu.Item>
                  <Menu.Item
                     as={NavLink}
                     to='/events'
                     name="Events"
                  />
                  <Menu.Item
                     as={NavLink}
                     to='/people'
                     name="People"
                />
                  <Menu.Item>
                    <Button
                       as={Link}
                       to='/createEvent'
                       floated="right"
                       positive
                       inverted 
                       content="Create Event"
                    />
                  </Menu.Item>
                    {authenticated ? 
                      <SignedInMenu
                        signOut={this.handleSignOut}
                      /> :
                      <SignedOutMenu
                        signIn={this.handleSignIn}
                      />
                    }
                </Container>
              </Menu>
    )
  }
}


export default withRouter(Navbar);