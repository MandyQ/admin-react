import React from 'react';
import IconSvg from '../../../components/Icon-svg';

import {Link, withRouter} from 'react-router-dom';


import './sidebar.less';

import { Layout, Menu, Icon } from 'antd';
const { SubMenu, Item } = Menu;
const { Content, Sider } = Layout;

const creatSubMenuComponents=(route, pathname, history)=>{
	return(
		<SubMenu key={route.path} title={<span><Icon type={route.icon} />{route.name}</span>}>
			{children.map( item =>{
				let names = [route.name],
						paths = [route.path]
				return !item.children ?
				(<Menu.Item key={item.path}>
				<Link to={item.path} onClick={e => {
					if (pathname !== item.path) {history.push(item.path)}
					e.preventDefault()
					}}>{item.name}</Link>
				
				</Menu.Item>	): creatSubMenuComponents(route, pathname, history)
			})

			}
						
		</SubMenu>

	)
}

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
						{routes.filter(route => !route.hidden).map(route => {
							if(!route.children){
								return (
									<Menu.Item key={route.path}>
									  <Link to={route.path} onClick={e => {
										  if(pathname !==route.path) history.push(route.path)
										  e.preventDefault()
									  }}>
											<Icon type={route.icon} />
											<span>{route.name}</span>
									  </Link>								
									</Menu.Item>									
								)
							}
							return creatSubMenuComponents(route, pathname, history)
						})}			
					</Menu>
				</Sider>				
			</Layout>
		</div>
		)
	}

}

export default Sidebar