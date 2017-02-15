import React, { Component } from 'react';
import { CardSection } from './common';
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  render() {
    const { id, title, description } = this.props.library;
    const { titleStyle, descStyle } = styles;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.props.expanded &&
            <CardSection>
              <Text style={[descStyle]}>{description}</Text>
            </CardSection>}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descStyle: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  }
});

const mapStateToProps = ({ selected }, { library }) => {
  const expanded = selected === library.id;

  return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);
