import React,{Component} from 'react';
import { history } from '../../App';

export default class Register extends Component<any>{
    state = {
        isRegister:"",
    }
    componentDidMount(){
        let isRegister = history.location.state.isRegister;
        this.setState({
            isRegister
        })
    }
    render(){
        let msg = null;
        if(this.state.isRegister){
            msg = <h3 style={{color:'green'}}>已经注册</h3>
        }else{
            msg = <h3 style={{color:'red'}}>未注册</h3>
        }
        return <div>
            <h2>register 注册页面</h2>
            <main>{msg}</main>
        </div>
    }
}