// "react/jsx-indent-props": ["error", 4],

// We use 4 spaces in jsx props indent for consistency
import React from 'react'

const Foo = props => (
    <div
        className="foo"
        style={{ backgroundColor: '#f1f1f1' }}
    >
        <p>{props.text}</p>
    </div>
)
