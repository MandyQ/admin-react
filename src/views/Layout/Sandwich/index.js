import React from 'react';


import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

import './index.less';

class Sandwich extends React.Component{
	// state = {
  //   collapsed: false,
  // };
  // toggle = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed,
  //   });
  // };
	render(){
		return (
			<Header style={{ background: '#fff', padding: 0 }}>
					<Icon
						className="trigger"
						type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
						onClick={this.toggle}
					/>
      </Header>
		)
	}
}

export default Sandwich
