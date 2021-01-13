import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
	const navLinks = [
		{ path: '/', text: 'Home' },
		{ path: '/presale', text: 'Presale' },
		{ path: '/agora', text: 'Agora' },
		{ path: '/faq', text: 'Faq' }
	];

	return (
		<div className="fixed w-full top-0 bg-white">
			{/* Announcement */}
			<div className="bg-black h-16 flex justify-center items-center">
				<span className="text-white">
					<strong className="uppercase">Announcement: </strong>
					New region is opened 0Xa34...A334
				</span>
			</div>
			<nav className="bg-black bg-opacity-80">
				<div className="w-full mx-auto px-4">
					<div className="flex items-center h-16">
						<div className="w-full flex justify-between items-center">
							<NavLink
								className="flex-shrink-0"
								exact
								to="/"
							>
								<span className="font-mono font-bold text-white uppercase">Rome Finance</span>
							</NavLink>
							<div>
								<div className="flex items-center">
									{navLinks.map((link) => (
										<NavLink
											key={link.path}
											className="font-mono font-bold uppercase text-white mx-4"
											activeClassName="font-mono font-bold uppercase text-yellow-400 mx-4"
											exact
											to={link.path}
										>
											{link.text}
										</NavLink>
									))}
								</div>
							</div>
							<button
								type="button"
								className="btn"
							>
								Connect
							</button>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Header;
