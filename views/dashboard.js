const React = require('react');

class HelloMessage extends React.Component {

    render() {
        return (
            <div>
                <h1>I am Mr. Dashboard</h1>
                <p>Yes I am Mr. {this.props.name}</p>

                <a href="/">
                    <button> Go to the Home Page</button>
                </a>

            </div>
        )
    }
}

module.exports = HelloMessage;