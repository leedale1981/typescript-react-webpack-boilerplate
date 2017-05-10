import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface FooterProps {

}

interface FooterState {

}

export default class Footer extends React.Component<FooterProps, FooterState> {

    constructor(props) {
        super(props);
    }

    public render() {
        return  <div id="footer">
                    Footer
                </div>
    }
}