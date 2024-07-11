import LanguageDropdown from '@/components/dropdown/language-dropdown'
import Logo from '@/components/shared/logo'
import React from 'react'
import PortfolioDropdown from '@/components/dropdown/portfolio-dropdown'
import ServicesDropdown from '@/components/dropdown/services-dropdown'
import Mobile from './mobile'

const Navbar = () => {
	return (
		<div className='fixed inset-0 z-40 h bg-background/70 backdrop-blur-xl'>
			<div className='container mx-auto flex h-full max-w-7xl items-center justify-between border-b'>
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
					<a className='header-module--itemLink' href='/directs'>
						Direction
					</a>
					<a className='header-module--itemLink' href='/directs'>
						Command
					</a>

					<ServicesDropdown />

					<a className='header-module--itemLink' href='/directs'>
						Tools
					</a>
					<a className='header-module--itemLink' href='/directs'>
						Clients
					</a>

					<PortfolioDropdown />
					<LanguageDropdown />

					<div className='call-to-action min-w-[112px] max-w-[248px]'>
						<a className='header-module--itemLink' href='/contact'>
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
