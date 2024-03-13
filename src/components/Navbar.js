import React from 'react';

import logo from '../images/logo.svg';
import { pageLinks, socialLinks } from '../data';
import SocialLink from './SocialLink';
import PageLink from './PageLink';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo} className="nav-logo" alt="backroads" />
					<button type="button" className="nav-toggle" id="nav-toggle">
						<i className="fas fa-bars"></i>
					</button>
				</div>

				<ul className="nav-links" id="nav-links">
					{pageLinks.map((pagelink) => (
						<PageLink key={pagelink.id} {...pagelink} itemClass="nav-link" />
					))}
				</ul>

				<ul className="nav-icons">
					{socialLinks.map((sociallink) => (
						<SocialLink
							key={sociallink.id}
							{...sociallink}
							itemClass="nav-icon"
						/>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
