import { faFilm, faHome, faMusic, faSearch, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { VerticalList } from 'react-key-navigation';
import SidebarItem from './SidebarItem';
import './Sidebar.scss'

class Sidebar extends React.Component {
  constructor() {
    super();

    this.state = {
      active: false
    }
  }

  setActive(status) {
    this.setState({ active: status });
  }

  render() {
    return (
      <div class={this.state.active ? 'sidebar focus' : 'sidebar'}>
        <div className="icons">
          <div><FontAwesomeIcon icon={faHome} /></div>
          <div><FontAwesomeIcon icon={faStar} /></div>
          <div><FontAwesomeIcon icon={faMusic} /></div>
          <div><FontAwesomeIcon icon={faFilm} /></div>
        </div>
        <div className="menu">
          <VerticalList
            onFocus={() => this.setActive(true)}
            onBlur={() => this.setActive(false)} focusId="sidebar" retainLastFocus={true}
          >
            <SidebarItem icon={faUser}>Login</SidebarItem>
            <SidebarItem icon={faSearch}>Search</SidebarItem>
            <SidebarItem icon={faHome}>Home</SidebarItem>
            <SidebarItem icon={faStar}>Star</SidebarItem>
            <SidebarItem icon={faMusic}>Music</SidebarItem>
            <SidebarItem icon={faFilm}>Film</SidebarItem>
          </VerticalList>
        </div>
      </div>
    );
  }
}

export default Sidebar