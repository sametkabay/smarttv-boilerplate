import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Focusable } from 'react-key-navigation';

class SidebarItem extends React.Component {
    constructor() {
        super();

        this.state = {
            active: false
        }
    }

    render() {
        return (
            <Focusable
                onFocus={() => this.setState({ active: true })}
                onBlur={() => this.setState({ active: false })}
            >
                <div className={'item' + (this.state.active ? ' focus' : '')}>
                    <FontAwesomeIcon className="sidebar-icon" icon={this.props.icon} />
                    {this.props.children}
                </div>
            </Focusable>
        );
    }
};


export default SidebarItem