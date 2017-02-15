import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    console.log(this.props);
    return (
      <View />
    );
  }
}

const mapStateToProps = ({ libraries }) => {
  return { libraries };
};

export default connect(mapStateToProps)(LibraryList);
