import React from 'react';
import './GoHome.scss';
import galera from '../../images/galera.png';
import { Link } from 'react-router-dom';


const GoHome = () => {

	return (
		<div className="go_home_2">
			<Link to={"/"}>
				<div>
					<img className="go_home_icon_2" src={galera} alt="Galera" />
				</div>
			</Link>
		</div>
	)
}

export default GoHome;


