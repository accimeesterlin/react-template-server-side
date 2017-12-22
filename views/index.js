const React = require('react');

class HelloMessage extends React.Component {

    render() {
        return (
            <div>
                <h1>I am React from the Server</h1>
                <p>This is awesome</p>
                <p>By the way, I am {this.props.name}</p>

                <a href="/dashboard"> <button>Go to the Dashboard </button></a>
            </div>
    )
    }
}

module.exports = HelloMessage;