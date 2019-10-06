import React, {Component} from 'react'
import { history } from '../../App';
import {connect} from 'react-redux'

interface Props {
    num: number
}

const mapStateToProps = (state: any) => {
    return {
      num: state.calculate.num
    };
  };
@(connect(mapStateToProps) as any)
export default class DetailPage extends Component<Props> {

    state = {
        number: ''
    }

    componentDidMount() {
        let number = history.location.state.number
        console.log(`number: ${number}`);
        this.setState({
            number 
        })
    }

    render() {
        
        return <div>
            <h2>detailpage详情页面</h2>
            <p>路由传参：{this.state.number}</p>
            <p>home：{this.props.num}</p>
        </div>
    }
}