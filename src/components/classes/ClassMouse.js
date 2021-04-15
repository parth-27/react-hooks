import React, { Component } from 'react'

export class ClassMouse extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
    }

    logMousePointer = (e) => {
        console.log(e);
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    componentDidMount()
    {
        window.addEventListener('mousemove',this.logMousePointer)
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove',this.logMousePointer)
    }

    render() {
        return (
            <div>
                X - {this.state.x} Y - {this.state.y}
            </div>
        )
    }
}
