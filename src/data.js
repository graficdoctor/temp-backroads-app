import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pageLinks = [
	{ id: 11, href: '#home', text: 'home' },
	{ id: 21, href: '#about', text: 'about' },
	{ id: 31, href: '#services', text: 'services' },
	{ id: 41, href: '#tours', text: 'tours' }
];

export const socialLinks = [
	{ id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
	{ id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
	{ id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' }
];

export const services = [
	{
		id: 1,
		icon: 'fas fa-wallet fa-fw',
		title: 'saving money',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
	},
	{
		id: 2,
		icon: 'fas fa-tree fa-fw',
		title: 'endless hiking',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
	},
	{
		id: 3,
		icon: 'fas fa-socks fa-fw',
		title: 'amazing comfort',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'
	}
];

export const tours = [
	{
		id: 1,
		src: tour1,
		date: 'august 26th, 2020',
		title: 'Tibet Adventure',
		info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
		location: 'China',
		duration: 6,
		price: 2100
	},
	{
		id: 2,
		src: tour2,
		date: 'october 1th, 2020',
		title: 'best of java',
		info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
		location: 'Indonesia',
		duration: 11,
		price: 1400
	},
	{
		id: 3,
		src: tour3,
		date: 'september 15th, 2020',
		title: 'explore hong kong',
		info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
		location: 'Hong Kong',
		duration: 8,
		price: 5000
	},
	{
		id: 4,
		src: tour4,
		date: 'december 5th, 2019',
		title: 'kenya highlights',
		info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
		location: 'Kenya',
		duration: 20,
		price: 3300
	}
];
