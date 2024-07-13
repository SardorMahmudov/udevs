import Logo from '@/components/shared/logo'
import { Separator } from '@/components/ui/separator'
import { Instagram, Twitter, TwitterIcon, Youtube } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
	return (
		<div className='container mx-auto max-w-6xl md:py-10 mt-5 md:mt-10 md:max-md:pt-40 bg-slate-100/80 pt-6'>
			<div className='text-center flex justify-center mb-10'>
				<Image src={'/logo.svg'} alt='logo' width={96} height={50} />
			</div>
			<div className='md:flex md:justify-between'>
				<div className='primary'>
					<h3 className='md:text-[18px] text-[22px] font-bold text-black/70 py-3'>
						About us
					</h3>
					<div className='grid row-span-1 md:text-[18px] text-[16px] font-medium'>
						<a href='/directs' className='pb-2'>
							Direction
						</a>
						<a href='/directs' className='pb-2'>
							Command
						</a>
						<a href='/directs' className='pb-2'>
							Tools
						</a>
						<a href='/directs' className='pb-2'>
							Clients
						</a>
					</div>
				</div>
				<div className='primary'>
					<h3 className='md:text-[18px] text-[22px] font-bold text-black/70 py-3'>
						Services
					</h3>
					<div className='grid row-span-1 md:text-[18px] text-[16px] font-medium'>
						<a href='/directs' className='pb-2'>
							Development of mobile applications
						</a>
						<a href='/directs' className='pb-2'>
							Development and implementation ERP systems
						</a>
						<a href='/directs' className='pb-2'>
							User interface, User experience design
						</a>
						<a href='/directs' className='pb-2'>
							Optimization IT consulting infrastructure
						</a>
					</div>
				</div>
				<div className='primary'>
					<h3 className='md:text-[18px] text-[22px] font-bold text-black/70 py-3'>
						Portfolio
					</h3>
					<div className='grid row-span-1 md:text-[18px] text-[16px] font-medium'>
						<a href='/directs' className='pb-2'>
							Delever
						</a>
						<a href='/directs' className='pb-2'>
							Sms.uz
						</a>
						<a href='/directs' className='pb-2'>
							Goodzone
						</a>
						<a href='/directs' className='pb-2'>
							Iman
						</a>
					</div>
				</div>
			</div>
			<div className='hidden md:block'>
				<Separator className='primary my-5' />
			</div>
			<div className='md:flex md:justify-between'>
				<p className='md:block hidden primary text-[14px] font-medium'>
					© 2024 Udevs. All rights reserved
				</p>
				<div className='flex justify-center gap-3 primary md:my-0 my-5'>
					<div className='rounded-full bg-slate-400/30 p-[6px]'>
						<Instagram />
					</div>
					<div className='rounded-full bg-slate-400/30 p-[6px]'>
						<TwitterIcon />
					</div>
					<div className='rounded-full bg-slate-400/30 p-[6px]'>
						<Youtube />
					</div>
				</div>
				<p className='md:hidden text-center primary text-[14px] md:font-medium font-semibold md:pb-0 pb-8'>
					© 2024 Udevs. All rights reserved
				</p>
			</div>
		</div>
	)
}

export default Footer
