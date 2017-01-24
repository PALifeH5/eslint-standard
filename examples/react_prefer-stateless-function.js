// "react/prefer-stateless-function": ["error", { "ignorePureComponents": true }],

// Stateless function is preferred if available.
// However, in some case we might use ES7 decorator to modify components,
// then we will need to take advantage of PureComponent,
// which is ignored in this rule.

// correct
import React, { PropTypes, Component, PureComponent } from 'react'

const Foo = props => (
    <div>
        <p>{props.text}</p>
    </div>
)

Foo.propTypes = {
    text: PropTypes.string.isRequired,
}

// wrong
class Bar extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
    }

    render() {
        return (
            <div>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

// corrent: ignorePureComponents
@someDecorator('foo')
export default class Root extends PureComponent {
    static propTypes = {
        children: PropTypes.node,
    }

    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}
