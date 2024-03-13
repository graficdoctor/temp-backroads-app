import React from 'react';

import { pageLinks, socialLinks } from '../data';
import SocialLink from './SocialLink';
import PageLink from './PageLink';

const Footer = () => {
	return (
		<footer className="section footer">
			<ul className="footer-links">
				{pageLinks.map((pagelink) => (
					<PageLink 
            key={pagelink.id} 
            {...pagelink} 
            itemClass="footer-link" />
				))}
			</ul>

			<ul className="footer-icons">
				{socialLinks.map((sociallink) => (
					<SocialLink
						key={sociallink.id}
						{...sociallink}
						itemClass="footer-icon"
					/>
				))}
			</ul>

			<p className="copyright">
				copyright &copy; Backroads travel tours company
				<span id="date">{new Date().getFullYear()}</span> all rights reserved
			</p>
		</footer>
	);
};

export default Footer;
