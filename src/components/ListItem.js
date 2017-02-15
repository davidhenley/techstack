import React, { Component } from 'react';
import { CardSection } from './common';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
  renderDescription() {
    const { library, selected } = this.props;
    if (library.id === selected) {
      return (
        <Text>{library.description}</Text>
      );
    }
  }

  render() {
    const { id, title, description } = this.props.library;
    const { titleStyle } = styles;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

const mapStateToProps = ({ selected }) => {
  return { selected };
}

export default connect(mapStateToProps, actions)(ListItem);
