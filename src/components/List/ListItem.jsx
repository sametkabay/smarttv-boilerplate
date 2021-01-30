import React from 'react';
import { Focusable } from 'react-key-navigation';

class ListItem extends React.Component {
    constructor() {
        super();

        this.state = {
            active: false
        }
    }

    render() {
        return (
            <Focusable onFocus={() => this.setState({ active: true })}
                onBlur={() => this.setState({ active: false })}>
                <div className={'item ' + (this.state.active ? 'item-focus' : '')}></div>
            </Focusable>
        );
    }
};

export default ListItem