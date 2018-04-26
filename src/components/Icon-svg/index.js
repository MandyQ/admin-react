import React from 'react';

// 类型检查
import PropTypes from 'prop-types';



class IconSvg extends React.Component{
	render(){
		let{className, iconName}=this.props
		return(
			<svg className={`icon ${className}`} aria-hidden="true">
			    <use xlinkHref={`#icon-${iconName}`}></use>
			</svg>
		)
	}
}

// 使用 `isRequired' 以确保在没有提供 prop 的情况下显示警告。
IconSvg.propTypes={
	iconName:PropTypes.string.isRequired
}

export default IconSvg

// svg的用法
/*<svg className={`icon ${className}`}>
		<use xlinkHref={`#icon-${iconName}`}></use>
	</svg> */