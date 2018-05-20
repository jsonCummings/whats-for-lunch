import React, { Component } from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
        Greeting: "Hello!",
        ChosenRestaurant: "",
        RestaurantText: "Can't pick what you want for lunch?",
        ButtonText: "Pick for me"
    }
  }

  GenerateRandomNumber = () =>{
    const RestaurantChoices = ["Delmonico", "Naya Express", "Halal Cart", "Dig Inn", "Five Guys", "No 7 Sub"];

    var RandomNumber = Math.floor(Math.random() * RestaurantChoices.length);

    this.setState({
        Greeting: "",
        ChosenRestaurant: RestaurantChoices[RandomNumber],
        RestaurantText: "You're going to ",
        ButtonText: "Want something else?"
    })
  }
  render() {
    return (
      <View style={styles.MainContainer} >
        <Text>{this.state.Greeting}</Text>
        <Text>{this.state.RestaurantText}</Text>
        <Text style={{marginBottom: 10, fontSize: 20}}>{this.state.ChosenRestaurant}</Text>

        <Button title={this.state.ButtonText}
                onPress={this.GenerateRandomNumber}
                color="#5d7fa2"
                accessibilityLabel="Have the app pick your lunch spot?"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  }
});