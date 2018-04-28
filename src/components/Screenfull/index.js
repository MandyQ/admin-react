import React from 'react';
import screenfull from 'screenfull';
import {Icon} from 'antd';

import './index.less'
const screenfullStyle={
	display:'inline-block',
	width:'40px',
	height:'40px',
	backgroundColor:'rgba(0,0,0,.15)',
	lineHeight:'40px'
}


export default class extends React.Component{
	click = ()=>{
		if(!screenfull.enabled) {
			message.error('your browser can not work')
			return false
		}
		screenfull.toggle()

	}
	render(){
		return(			
				<Icon className="arrows-alt " type="arrows-alt" onClick={this.click} style={screenfullStyle} />
		)
	}
}

