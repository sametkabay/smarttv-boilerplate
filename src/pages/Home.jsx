import React, { Component } from 'react'

import Sidebar from '../components/Sidebar/Sidebar.jsx'
import List from '../components/List/List.jsx'
import Search from '../components/Search/Search.jsx'

import { VerticalList, HorizontalList } from 'react-key-navigation'

class HomePage extends Component {
    constructor() {
        super();

        this.state = {
            active: null,
        }

        this.lists = ["Title 1", "Title 2", "Title 3", "Title 4"]
    }

    changeFocusTo(index) {
        this.setState({ active: index });
    }

    onBlurLists() {
        this.setState({ active: null });
    }

    render() {
        return (
            <div className="container">
                <HorizontalList>
                    <Sidebar />
                    <div className="mainbox">
                        <VerticalList navDefault>
                            <Search />
                            <VerticalList className="content" onBlur={() => this.onBlurLists()}>
                                {this.lists.map((list, i) =>
                                    <List key={i} title={list} onFocus={() => this.changeFocusTo(i)} visible={this.state.active !== null ? i >= this.state.active : true} />
                                )}
                            </VerticalList>
                        </VerticalList>
                    </div>
                </HorizontalList>
            </div>
        );
    }
}

export default HomePage