import React, { Component } from 'react';
import AbilityScore from './AbilityScore';

class StatSheet extends Component {

  constructor(props) {
    super(props);
    this.state = {
      totalPoints: 27,
      str: 2,
      dex: 3,
      con: 0,
      int: 5,
      wis: 1,
      chr: 9,
    }
  }

  render() {
    return ( 
      <div>
        <div>Strength: <AbilityScore score={this.state.str} /></div>
        <div>Dexterity: <AbilityScore score={this.state.dex} /></div>
        <div>Constitution: <AbilityScore score={this.state.con} /></div>
        <div>Intelligence: <AbilityScore score={this.state.int} /></div>
        <div>Wisdom: <AbilityScore score={this.state.wis} /></div>
        <div>Charisma: <AbilityScore score={this.state.chr} /></div>
      </div>
    );
  }
}

export default StatSheet;