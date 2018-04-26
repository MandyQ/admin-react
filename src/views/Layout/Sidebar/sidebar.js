import React from 'react';
import IconSvg from '../../../components/Icon-svg';

import './sidebar.less';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



class Sidebar extends React.Component{
	render(){
		return(
			<div id="sidebar_wrapper">
			<Layout>
				<Sider width={200} style={{ background: '#fff' }}>
					<div className="logo">
						<a target="_blank" style={{display:'inline-block'}} href="https://github.com/MandyQ" alt="Github MandyQ">
							<IconSvg iconName="github" className="logo_github"/>
							
						</a>
					</div>
					<Menu
						mode="inline"
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						style={{ height: '100%', borderRight: 0 }}
					>
						<SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
							<Menu.Item key="1">option1</Menu.Item>
							<Menu.Item key="2">option2</Menu.Item>
							<Menu.Item key="3">option3</Menu.Item>
							<Menu.Item key="4">option4</Menu.Item>
						</SubMenu>
						
					
					</Menu>
				</Sider>				
			</Layout>
		</div>
		)
	}

}

export default Sidebar