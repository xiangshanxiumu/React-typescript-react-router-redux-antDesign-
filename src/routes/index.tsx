/**路由组件文件 */
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../pages/home'; // home首页
import NoMatch from '../pages/404';//404页面
import Register from'../pages/register'; // 导入register注册页面
import Login from '../pages/login'; // 导入login登录页面
import User from '../pages/user'; // user用户
import List from '../pages/list'; // list页面
import DetailPage from '../pages/detail';// 详情页面

/*Switch和exact实现排他路由和浏览器路径历史*/
export default () => {
    return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/user/:name" component={User}/>
        <Route exact path="/list" component={List}/>
        <Route exact path="/detail" component={DetailPage}/>
        <Route component={NoMatch} />
    </Switch>
    )
}