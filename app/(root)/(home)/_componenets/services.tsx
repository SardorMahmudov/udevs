import Image from 'next/image'
import React from 'react'

const Services = () => {
	return (
		<div className='container mx-auto max-w-6xl py-10 md:mt-0 mt-28'>
			<h1 className='primary md:text-left text-center md:text-[64px] text-[32px] font-extrabold'>
				Our services
			</h1>
			<div className='grid md:grid-cols-3 grid-cols-2 flex-wrap md:gap-7 gap-3 mt-16'>
				<div className='bg-slate-100/80 rounded-md md:p-8 p-3'>
					<Image
						src={'/assets/direction/team.svg'}
						alt='User interface'
						width={35}
						height={35}
						className='mb-6'
					/>
					<h3 className='md:text-xl text-base font-semibold text-black/80'>
						Team
					</h3>
				</div>
				<div className='bg-slate-100/80 rounded-md md:p-8 p-3'>
					<Image
						src={'/assets/direction/phone.svg'}
						alt='User interface'
						width={35}
						height={35}
						className='mb-6'
					/>
					<h3 className='md:text-xl text-base font-semibold text-black/80'>
						Development of mobile applications
					</h3>
				</div>
				<div className='bg-slate-100/80 rounded-md md:p-8 p-3'>
					<Image
						src={'/assets/direction/development.svg'}
						alt='User interface'
						width={35}
						height={35}
						className='mb-6'
					/>
					<h3 className='md:text-xl text-base font-semibold text-black/80 mb-5'>
						Development and implementation ERP systems
					</h3>
				</div>
				<div className='bg-slate-100/80 rounded-md md:p-8 p-3'>
					<Image
						src={'/assets/direction/user.svg'}
						alt='User interface'
						width={35}
						height={35}
						className='mb-6'
					/>
					<h3 className='md:text-xl text-base font-semibold text-black/80 mb-5'>
						User interface, User experience design
					</h3>
				</div>
				<div className='bg-slate-100/80 rounded-md md:p-8 p-3'>
					<Image
						src={'/assets/direction/option.svg'}
						alt='User interface'
						width={35}
						height={35}
						className='mb-6'
					/>
					<h3 className='md:text-xl text-base font-semibold text-black/80 mb-5'>
						Optimization IT consulting infrastructure
					</h3>
				</div>
				<div className='bg-slate-100/80 rounded-md md:p-8 p-3'>
					<Image
						src={'/assets/direction/consulting.svg'}
						alt='User interface'
						width={35}
						height={35}
						className='mb-6'
					/>
					<h3 className='md:text-xl text-base font-semibold text-black/80 mb-5'>
						IT consulting
					</h3>
				</div>
			</div>
		</div>
	)
}

export default Services
