import React, { Component } from 'react';
import AbilityScore from './AbilityScore';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import AbilityScoreCalc from './AbilityScoreCalc';

class StatSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPoints: 27,
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      chr: 0,
    };
    this.renderDropdown = this.renderDropdown.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.resetStats = this.resetStats.bind(this);
  }

  onClickHandler(ability, stat) {
    this.setState({ [ability]: stat });
  }

  renderDropdown(ability) {
    const values = ['1', '2', '3', '4', '5', '7', '9'];
    const dropdownValues = values.map(val => <Dropdown.Item key={val} eventKey={val} onSelect={(stat) => this.onClickHandler(ability, stat)}>{val}</Dropdown.Item>);
    return (
      <DropdownButton size="sm" id="dropdown-ability-score" title="Score" variant="secondary">
        {dropdownValues}
      </DropdownButton>
    );
  }

  resetStats() {
    this.setState({
      totalPoints: 27,
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      chr: 0
    });
  }

  render() {
    return ( 
      <div>
        <div>
          <span className='str div-inline'>{this.renderDropdown('str')}</span>
          <span> Strength: <AbilityScore score={this.state.str} /></span>
        </div>
        <div>
          <span className='dex div-inline'>{this.renderDropdown('dex')}</span>
          <span> Dexterity: <AbilityScore score={this.state.dex} /></span>
        </div>
        <div>
          <span className='con div-inline'>{this.renderDropdown('con')}</span>
          <span> Constitution: <AbilityScore score={this.state.con} /></span>
        </div>
        <div>
          <span className='int div-inline'>{this.renderDropdown('int')}</span>
          <span> Intelligence: <AbilityScore score={this.state.int} /></span>
        </div>
        <div>
          <span className='wis div-inline'>{this.renderDropdown('wis')}</span>
          <span> Wisdom: <AbilityScore score={this.state.wis} /></span>
        </div>
        <div>
          <span className='chr div-inline'>{this.renderDropdown('chr')}</span>
          <span> Charisma: <AbilityScore score={this.state.chr} /></span>
        </div>
        <div className='total-points'>Total Points Remaining: <AbilityScoreCalc stats={this.state} /></div>
        <Button className='reset-button' variant="info" onClick={() => this.resetStats()}>Reset</Button>
      </div>
    );
  }
}

export default StatSheet;