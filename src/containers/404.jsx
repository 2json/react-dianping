import React from 'react'
import { render } from 'react-router'

export default class NotFound extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return (
            <div>
                <h1>Not Found What You Are Seeing</h1>
            </div>
        )
    }
}