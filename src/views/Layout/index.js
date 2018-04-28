import React from 'react';


import Sidebar from './Sidebar/sidebar.js';
import './index.less';
// import Sandwich from './Sandwich';

import Breadcrumbs from './Breadcrumbs';

import { Layout, Menu, Icon } from 'antd';
import Screenfull from '../../components/Screenfull/index.js';
const { Header, Sider, Content } = Layout;

// import Screenfull from '../../components/Screenfull'



export default class extends React.Component{
	state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
	render(){
		const {state} = this.props;
		return(
			<div>
				<Sidebar/>
				<div id="container">
					<Layout>
						<Header style={{ background: '#fff', padding: 0 }}>
							<Icon
								className="trigger"
								type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
								onClick={this.toggle}
							/>
							<Breadcrumbs />
							<div className="fr r-btn">
							 <Screenfull />


							</div>
						</Header>
						<Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
							Content
						</Content>
					</Layout>

				</div>
				


			</div>
		)
	}

}