import React from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { logout } from '../actions/session'

const LogOutButtonContainer = props => (
  <Button onClick={props.logout}>
    {props.logoutText}
  </Button>
);

const mapStateToProps = state => ({
  logoutText: state.session.logoutText
});

const mapDispatchToProps = {
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogOutButtonContainer);
