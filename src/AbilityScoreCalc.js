import React, { Component } from 'react';

class AbilityScoreCalc extends Component {
  render() {
    this.calcRemainingPoints = this.calcRemainingPoints.bind(this);
    return( 
      <span>
        { this.calcRemainingPoints(this.props.stats) }
      </span>
    );
  }

  calcRemainingPoints(stats) {
    const totalSpent = parseInt(stats.str) +
                    parseInt(stats.dex) +
                    parseInt(stats.con) +
                    parseInt(stats.int) +
                    parseInt(stats.wis) +
                    parseInt(stats.chr);
    return 27 - totalSpent;
  }
}

export default AbilityScoreCalc;
