import React, {Component} from 'react';
import { history } from '../../App';
import {connect} from 'react-redux';
// 接口 接收props属性申明
interface Props {
    num: number
}
// 获取 store state 数据
const mapStateToProps = (state: any) => {
    return {
      num: state.calculate.num
    };
  };
@(connect(mapStateToProps) as any) // connect 把redux store 和组件连接起来
export default class Login extends Component<Props>{
    // 组件 state 更新会导致渲染 类似VUE的data
    state = {
        isLogin: "",
        count:"",
    }
    // 组件已经挂载 钩子
    componentDidMount() {
        let isLogin = history.location.state.isLogin // 接收路由传参
        let count = history.location.state.count // 接收路由count
        // 通知React数据变化的方法 合并数据到this.state 
        this.setState({ // 路由接收到的参数要setState
            isLogin,
            count
        })
    }
    render(){
        let colorRed = {
            color:'red'
        }
        let colorGreen ={
            color:'green'
        }
        return <div>
            <h2>login页面</h2>
            {this.state.isLogin?(<h3 style={colorGreen}>已经登录</h3>):(<h3 style={colorRed}>未登录</h3>)}
            <p>路由传参count:{this.state.count}</p>
            <p>home：{this.props.num}</p>
        </div>
    }
}