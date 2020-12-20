import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {withFirebase} from 'react-redux-firebase';
import { Button, Container, Menu } from 'semantic-ui-react';
import SignedInMenu from '../Menus/SignedInMenu';
import SignedOutMenu from '../Menus/SignedOutMenu';
import {openModal} from '../../../modals/modalActions';
import { connect } from 'react-redux'; 



const actions = {
  openModal,
}


const mapState = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
})

 class Navbar extends Component {

  handleSignIn = () => {
    this.props.openModal('LoginModal')
  };

  handleRegister = () => {
    this.props.openModal('RegisterModal')
  }

  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push('/');
  }


  render() {
     
       const {auth, profile} = this.props;
       const authenticated = auth.isLoaded && !auth.isEmpty;
    return (
      
              <Menu inverted fixed="top">
                <Container>
                  <Menu.Item as={NavLink} exact to='/' header>
                    <img src="/assets/logo.png" alt="logo" />
                     EveryMoment
                  </Menu.Item>
                  <Menu.Item
                     as={NavLink}
                     exact
                     to='/events'
                     name="Events"
                  />
                    {
                      authenticated &&
                      <>
                      <Menu.Item
                            as={NavLink}
                            to='/people'
                            name="People"
                          />
                          <Menu.Item
                            as={NavLink}
                            to='/test'
                            name="Test"
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
                      </>
                    }  
                    {authenticated ? 
                      <SignedInMenu
                        signOut={this.handleSignOut}
                        profile={profile}
                      /> :
                      <SignedOutMenu
                        signIn={this.handleSignIn}
                        register={this.handleRegister}
                      />
                    }
                </Container>
              </Menu>
    )
  }
}


export default withRouter(withFirebase(connect(mapState, actions)(Navbar)));