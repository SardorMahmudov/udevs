import Logo from '@/components/shared/logo'
import SocialMedia from '@/components/shared/social-media'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet'
import { AlignCenter } from 'lucide-react'
import React from 'react'

const Mobile = () => {
	return (
		<Sheet>
			<SheetTrigger asChild className='md:hidden'>
				<AlignCenter />
			</SheetTrigger>
			<SheetContent side={'right'}>
				<SheetHeader className=''>
					<Logo />
				</SheetHeader>
				<div className='responsiveHeader-module--list'>
					<a href='/directs'>Services</a>
					<a href='/directs'>Clients</a>
					<a href='/directs'>Command</a>
				</div>

				<div className='call-to-action py-2'>
					<a className='header-module--itemLink text-xl' href='/contact'>
						Contact
					</a>
				</div>
				<div className='flex items-center justify-center mt-10'>
					<SocialMedia />
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default Mobile
