import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface MainNavProps {

}

interface MainNavState {

}

export default class MainNav extends React.Component<MainNavProps, MainNavState> {

    constructor(props) {
        super(props);
    }

    public render() {
        return  <div id="main-nav">
                    Navigation
                </div>
    }
}