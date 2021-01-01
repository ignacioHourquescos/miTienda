import React from 'react';
import './GoHome.scss';
import galera from '../../images/galera.png';
import { Link } from 'react-router-dom';


const CallToActionIcons = () => {

	return (
		<div className="go_home">
			<Link to={"/"}>
				<div>
					<img className="go_home_icon" src={galera} alt="Galera" />
				</div>
			</Link>
		</div>
	)
}

export default CallToActionIcons;


