import * as $ from 'jquery';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainNav from './components/main-nav';
import Footer from './components/footer';

export default class App extends React.Component<void, void> {

    constructor(props) {
        super(props);
    }

    public render() {
        return  <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <MainNav />
                        </div>
                        <div className="col-8">
                            <h1>Content</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Footer />
                        </div>
                    </div>
                </div>
    }
}

$(document).ready(function() {
    ReactDOM.render(<App />, document.getElementById("main-container"));
});