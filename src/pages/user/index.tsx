import React, {Component} from 'react'

export default class User extends Component<any, any> {

    render() {
        let { match } = this.props
        const name = match.params.name
        return <div>
            <h2>user用户页面</h2>
            这是用户 {name}
        </div>
    }
}