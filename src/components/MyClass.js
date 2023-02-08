import React, { Component } from "react";

class MyClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            attribute: 'value'
        }
    }

    render() {
        return (
            <div>
                <h1>MyClass component</h1>
            </div>
        )
    }
}

export default MyClass;