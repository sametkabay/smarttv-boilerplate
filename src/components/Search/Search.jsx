import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Focusable } from 'react-key-navigation'
import './Search.scss'

class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            active: false
        };
    }

    onBlur() {
        this.setState({ active: false });
    }

    onFocus() {
        this.setState({ active: true });
    }

    onEnterDown(event, navigation) {
        navigation.forceFocus('sidebar');
    }

    render() {
        return (
            <Focusable 
                onFocus={() => this.onFocus()} 
                onBlur={() => this.onBlur()} 
                onEnterDown={(e, n) => this.onEnterDown(e, n)} 
                navDefault
            >
                <div className={this.state.active ? 'search-box focus' : 'search-box'}>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
            </Focusable>
        );
    }
}

export default Search