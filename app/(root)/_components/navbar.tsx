import LanguageDropdown from '@/components/dropdown/language-dropdown'
import Logo from '@/components/shared/logo'
import React from 'react'
import PortfolioDropdown from '@/components/dropdown/portfolio-dropdown'
import ServicesDropdown from '@/components/dropdown/services-dropdown'
import Mobile from './mobile'

const Navbar = () => {
	return (
		<div className='fixed inset-0 z-40 h bg-white border-b'>
			<div className='container mx-auto flex h-[64px] max-w-7xl items-center justify-between pt-3'>
				<Logo />
				<div className='hidden items-center gap-8 pl-2 md:flex'>
					{/* {navLinks.map(nav => (
						<Link
							href={`/${nav.route}`}
							key={nav.route}
							className='header-module--itemLink '
						>
							{nav.name}
						</Link>
					))} */}
					<a className='header-module--itemLink' href='#directs'>
						Direction
					</a>
					<a className='header-module--itemLink' href='#command'>
						Command
					</a>
					<a href='#mobil'>
						<ServicesDropdown />
					</a>

					<a className='header-module--itemLink' href='#tools'>
						Tools
					</a>
					<a className='header-module--itemLink' href='#clients'>
						Clients
					</a>

					<PortfolioDropdown />
					<LanguageDropdown />

					<div className='call-to-action min-w-[112px] max-w-[248px]'>
						<a className='header-module--itemLink' href='#contact'>
							Contact
						</a>
					</div>
				</div>
				<Mobile />
			</div>
		</div>
	)
}

export default Navbar
