import React from 'react'
import { render } from 'react-router'

export default class App extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div>
                <h1>Home World</h1>
            </div>
        )
    }
}