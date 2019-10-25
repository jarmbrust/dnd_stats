import React, { Component } from 'react';
import AbilityScore from './AbilityScore';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

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
    // this.renderDropdown = this.renderDropdown.bind(this);
    // this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(ability, event) {
    this.setState({ [ability]: event });
  }

  // TODO duplicated code, put in a loop
  renderDropdown(ability) {
    return (<DropdownButton size="sm" id="dropdown-ability-score" title="Score" variant="secondary">
        <Dropdown.Item eventKey="0" onSelect={(e) => this.onClickHandler(ability, e)}>0</Dropdown.Item>
        <Dropdown.Item eventKey="1" onSelect={(e) => this.onClickHandler(ability, e)}>1</Dropdown.Item>
        <Dropdown.Item eventKey="2" onSelect={(e) => this.onClickHandler(ability, e)}>2</Dropdown.Item>
        <Dropdown.Item eventKey="3" onSelect={(e) => this.onClickHandler(ability, e)}>3</Dropdown.Item>
        <Dropdown.Item eventKey="4" onSelect={(e) => this.onClickHandler(ability, e)}>4</Dropdown.Item>
        <Dropdown.Item eventKey="5" onSelect={(e) => this.onClickHandler(ability, e)}>5</Dropdown.Item>
        <Dropdown.Item eventKey="7" onSelect={(e) => this.onClickHandler(ability, e)}>7</Dropdown.Item>
        <Dropdown.Item eventKey="9" onSelect={(e) => this.onClickHandler(ability, e)}>9</Dropdown.Item>
      </DropdownButton>);
  }

  render() {
    return ( 
      <div>
        <div><span className='str'>{this.renderDropdown('str')}</span> <span> Strength: <AbilityScore score={this.state.str} /></span></div>
        <div><span className='dex'>{this.renderDropdown('dex')}</span> <span> Dexterity: <AbilityScore score={this.state.dex} /></span></div>
        <div><span className='con'>{this.renderDropdown('con')}</span> <span> Constitution: <AbilityScore score={this.state.con} /></span></div>
        <div><span className='int'>{this.renderDropdown('int')}</span> <span> Intelligence: <AbilityScore score={this.state.int} /></span></div>
        <div><span className='wis'>{this.renderDropdown('wis')}</span> <span> Wisdom: <AbilityScore score={this.state.wis} /></span></div>
        <div><span className='chr'>{this.renderDropdown('chr')}</span> <span> Charisma: <AbilityScore score={this.state.chr} /></span></div>
      </div>
    );
  }
}

export default StatSheet;