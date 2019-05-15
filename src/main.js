import { createElement, render, Component, Fragment } from 'preact';
class Home extends Component {
    render() {
        return (
            <div>
            <h1>Hello</h1>
            </div>
    );
    }
}
render(<Home />, document.body);
