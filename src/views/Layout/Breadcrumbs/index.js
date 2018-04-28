import React from 'react';
import { Link } from 'react-router';
import { Breadcrumb, Icon } from 'antd';
import BreadcrumbItem from 'antd/lib/breadcrumb/BreadcrumbItem';


const Item = Breadcrumb.Item;

class Breadcrumbs extends React.Component{
	render(){
		// let breadcrumbs=this.props.state;
		return (
			<Breadcrumb>
		{/* //		{breadcrumbs.map( (route,index)=>{
		// 			return index == breadcrumbs.length-1?	<Item key={route.path}> <Icon type={route.Icon} />{route.name}</Item>:
		// 			(<Item key={route.path}><Link><Icon type={route.Icon} />{route.name}</Link></Item>)			
		// 		})
		// 		}						 */}
		  </Breadcrumb> 
		)
	}


}

export default Breadcrumbs

