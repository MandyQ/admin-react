import React from 'react';
import IconSvg from '../../../components/Icon-svg';

import {Link, withRouter} from 'react-router-dom';


import './sidebar.less';

import { Layout, Menu, Icon } from 'antd';
const { SubMenu, Item } = Menu;
const { Content, Sider } = Layout;

class Sidebar extends React.Component{
	
	
	render(){
		return(
			<div id="sidebar_wrapper">
			<Layout>
				<Sider>
					<div className="logo">
						<a target="_blank" style={{display:'inline-block'}} href="https://github.com/MandyQ" alt="Github MandyQ">
							<IconSvg iconName="github" className="logo_github"/>							
						</a>
					</div>
					<Menu
						mode="inline"
						theme="dark"
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}						
					>
						<Menu.Item key="1">
							<Icon type="user" />
							<span>首页</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="lock" />
							<span>权限管理</span>
						</Menu.Item>         
						<SubMenu key="sub1" title={<span><Icon type="calendar" /><span>react知识点</span></span>}>
							<Menu.Item key="3">常用语法</Menu.Item>
							<Menu.Item key="4">生命周期</Menu.Item>
							<Menu.Item key="5">组件写法</Menu.Item>
							<Menu.Item key="6">双向绑定</Menu.Item>
							<Menu.Item key="7">Redux</Menu.Item>
							<Menu.Item key="8">按需加载</Menu.Item>
							<Menu.Item key="9">网络请求</Menu.Item>						
						</SubMenu>
						<SubMenu key="sub2" title={<span><Icon type="database" /><span>组件</span></span>}>
							<Menu.Item key="10">Github</Menu.Item>
							<Menu.Item key="11">svg图标</Menu.Item>          
						</SubMenu>
						<SubMenu key="sub3" title={<span><Icon type="smile-o" /><span>react动画</span></span>}>
							<Menu.Item key="11">渐变</Menu.Item>
							<Menu.Item key="12">列表渐变</Menu.Item>  
							<Menu.Item key="13">滑动</Menu.Item>
							<Menu.Item key="14">路由过渡动画</Menu.Item>        
						</SubMenu>
						<SubMenu key="sub4" title={<span><Icon type="layout" /><span>CSSModule</span></span>}>
							<Menu.Item key="15">常规用法</Menu.Item>
							<Menu.Item key="16">react-css-modules</Menu.Item>          
						</SubMenu>
						<SubMenu key="sub5" title={<span><Icon type="edit" /><span>编辑器</span></span>}>
							<Menu.Item key="17">Markdown</Menu.Item>
							<Menu.Item key="18">富文本</Menu.Item>          
						</SubMenu>
						<SubMenu key="sub6" title={<span><Icon type="area-chart" /><span>图表</span></span>}>
							<Menu.Item key="19">Echarts</Menu.Item>
							<Menu.Item key="20">Recharts</Menu.Item>          
						</SubMenu>
						<SubMenu key="sub7" title={<span><Icon type="question-circle-o" /><span>ErrorPage</span></span>}>
							<Menu.Item key="21">404</Menu.Item>
							<Menu.Item key="22">401</Menu.Item>          
						</SubMenu>
					</Menu>
				</Sider>				
			</Layout>
		</div>
		)
	}

}

export default Sidebar