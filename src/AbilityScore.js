import React, { Component } from 'react';


class AbilityScore extends Component {
  render() {
    return( 
      <span>
        {this.getAbilityScore(this.props.score) } ({this.props.score})
      </span>
    );
  }

  // TODO: switch statement is an odd choice, maybe something else...
  getAbilityScore(score) {
    let result = 0;
    score = parseInt(score);
    switch(score) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        result = score + 8;
        break;
      case 6:
        result = 13;
        break;
      case 7:
        result = 14;
        break;
      case 8:
        result = 14;
        break;
      case 9:
        result = 15;
        break;
      default:
        result = 0;
    }
    return result;
  }
}

export default AbilityScore;