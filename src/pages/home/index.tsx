import React, { Component } from 'react';
import { Button } from 'antd';
import { history } from '../../App';
import { incrementAction, reduceAction } from '../../reducers/calculate';
import { connect } from 'react-redux'
import './index.less';
interface Props {
    num: number
    increment: () => any,
    decrement: () => any,
}

const mapStateToProps = (state: any) => {
    return {
        num: state.calculate.num
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    increment: () => dispatch(incrementAction),
    decrement: () => dispatch(reduceAction)
});

@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class Home extends Component<Props, any> {

    gotoDetail() {
        // 普通传值
        history.push({
            pathname: '/detail',
            state: { number: 123 },
        })
    }
    gotoRegister(){
        history.push({
            pathname:'/register',
            state:{isRegister:true}
        })
    }
    gotoLogin(){
        history.push({
            pathname:'/login',
            state: { isLogin: false,count:100 },
        })
    }
    gotoList(){
        history.push({
            pathname:'/list',
        })
    }
    gotoUser() {
        // 路径传值
        history.push({ pathname: '/user/xiangshanxiumu' })
    }
    numIncrement() {
        this.props.increment()
    }

    numReduce() {
        this.props.decrement()
    }

    render() {
        return <div>
            <h1>React+typescript+react-router+redux+antDesign项目搭建</h1>
            <p onClick={this.gotoRegister}>点击跳转到register</p>
            <p onClick={this.gotoLogin}>点击跳转到 Login</p>
            
            <p onClick={this.gotoUser}>点击跳转到 user用户页面</p>
            <p onClick={this.gotoList}>点击跳转到list列表页面</p>
            <p>
                <span onClick={this.gotoDetail}>点击跳转到 detailPage详情页面</span>
            </p>
            <p>
                <Button type="danger" onClick={this.numIncrement.bind(this)} style={{ marginRight: '1rem' }}>加+1</Button>
                <Button onClick={this.numReduce.bind(this)} className="button-margin-left" style={{ marginLeft: '1rem' }}>减-1</Button>
            </p>
            <p>{this.props.num}</p>
        </div>
    }
}
