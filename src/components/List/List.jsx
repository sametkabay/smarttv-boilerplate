import React from 'react'
import { HorizontalList } from 'react-key-navigation'
import ListItem from './ListItem';
import './List.scss'

export default class List extends React.Component {
  constructor() {
    super();
    this._lastFocus = null;
  }

  componentDidMount() {
    // const width = (Math.floor(this.content.scrollWidth / this.content.clientWidth) * this.content.clientWidth) + this.content.clientWidth + 30;
    // console.log('W',width)
    console.log(this.content)
    // debugger
    if (this.content.getElementsByClassName('hz-list')[0]) {
      this.content.getElementsByClassName('hz-list')[0].style.width = this.content.firstElementChild.scrollWidth * 2 + 'px';
    }
  }

  onFocus(index) {
    if (this._lastFocus === index) {
      return;
    }

    if (this.props.onFocus) {
      this.props.onFocus();
    }

    if (this.content) {
      const items = this.content.getElementsByClassName('item');
      const offsetWidth = items[0].offsetWidth + 30;
      this.content.scrollLeft = offsetWidth * index;
    }

    this._lastFocus = index;
  }

  render() {
    return (
      <div className={"contentgroup " + (this.props.visible ? '' : 'fading-out')}>
        <h1>{this.props.title}</h1>
        <div className="list-content" ref={(content) => { this.content = content }}>
          <HorizontalList className="hz-list"
            style={{ overflow: 'hidden', display: 'block' }}
            onFocus={(index) => this.onFocus(index)}
            onBlur={() => { this._lastFocus = null }}>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
          </HorizontalList>
        </div>
      </div>
    );
  }
}
