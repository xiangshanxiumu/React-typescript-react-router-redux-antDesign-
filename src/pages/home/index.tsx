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

    gotoUser() {
        // 路径传值
        history.push({ pathname: '/user/joeal' })
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
            <p>
                <span onClick={this.gotoDetail}>点击跳转到 detailPage</span>
            </p>
            <p onClick={this.gotoUser}>点击跳转到 user</p>
            <p>
                <Button type="danger" onClick={this.numIncrement.bind(this)} style={{ marginRight: '1rem' }}>加+</Button>
                <Button onClick={this.numReduce.bind(this)} className="button-margin-left" style={{ marginLeft: '1rem' }}>减-</Button>
            </p>
            <p>{this.props.num}</p>
        </div>
    }
}
