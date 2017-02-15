import React, { Component } from 'react';
import { CardSection } from './common';
import { Text, StyleSheet } from 'react-native';

class ListItem extends Component {
  render() {
    const { library: { title, description } } = this.props;
    const { titleStyle } = styles;
    return (
      <CardSection>
        <Text style={titleStyle}>
          {title}
        </Text>
      </CardSection>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

export default ListItem;
