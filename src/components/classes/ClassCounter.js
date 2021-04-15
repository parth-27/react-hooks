import React, { Component } from 'react'

export default class ClassCounter extends Component {
    
    constructor(props)
    {
        super(props);
        this.state = {
            count: 0,
            name:''
        }
    }

    incrementCounter = () => {
        this.setState(prevState => {
            return {
                count:prevState.count+1
            }
        })
    }
    
    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        // run the code only if the count changes
        if (prevState.count !== this.state.count)
        {
            console.log("Update");
            document.title = `Clicked ${this.state.count} times`
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={e => {
                    this.setState({
                        name: e.target.value
                    })
                } }/>
                <button onClick={this.incrementCounter}> Class Count { this.state.count }</button>
            </div>
        )
    }
}
