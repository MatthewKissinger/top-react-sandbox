import React, { Component } from 'react';

class ExampleClass extends Component {
    
    render() {
        return (
            <div>
                <h1>The names of students are: {this.props.names.map((name, i) => name + ((i !== 2) ? ', ' : '.'))}</h1>
            </div>
        )
    }
}

ExampleClass.defaultProps = {
    names: ['Ram', 'Shyam', 'Raghav']
}

export default ExampleClass;