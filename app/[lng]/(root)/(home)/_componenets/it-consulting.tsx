import Image from 'next/image'
import React from 'react'

const ItConsulting = () => {
	return (
		<div
			id='consulting'
			className='container mx-auto max-w-6xl md:py-10 my-5 md:my-10 min-h-[130vh] md:max-md:pt-40 pt-6 pb-10 hero-module'
		>
			<h1 className='primary md:text-[64px] text-[32px] font-extrabold md:mb-16 mb-4'>
				IT consulting
			</h1>
			<div className='md:flex md:justify-between gap-8 max-md:grid-cols-1'>
				<div className='flex md:hidden justify-center'>
					<Image
						src={'/assets/services/consulting.svg'}
						alt='hero'
						width={500}
						height={500}
						className='object-cover max-w-[100%]'
					/>
				</div>
				<div className='max-w-[500px]'>
					<p className='md:text-[24px] text-base md:leading-10 leading-8 font-medium text-black/80 md:pb-0 pb-10 '>
						Our experienced professionals will help you optimize your
						infrastructure
					</p>
					<div className='grid gap-4 md:py-8 grid-cols-3'>
						<div className='bg-slate-100/80 rounded-md pt-[10px] pr-[20px] pb-3 pl-3 min-w-[150px]'>
							<Image
								src={'/assets/services/front.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px]'
							/>
							<p className='md:text-[18px] text-[14px] font-semibold text-black/80'>
								Frontend
							</p>
						</div>
						<div className='bg-slate-100/80 rounded-md pt-[10px] pr-[20px] pb-3 pl-3 min-w-[150px]'>
							<Image
								src={'/assets/services/back.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px]'
							/>
							<p className='md:text-[18px] text-[14px] font-semibold text-black/80'>
								Backend
							</p>
						</div>
						<div className='bg-slate-100/80 rounded-md pt-[10px] pr-[20px] pb-3 pl-3 min-w-[150px]'>
							<Image
								src={'/assets/services/archic.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px] '
							/>
							<p className='md:text-[18px] text-[14px] font-semibold text-black/80'>
								Architecture
							</p>
						</div>
						<div className='bg-slate-100/80 rounded-md pt-[10px] pr-[20px] pb-3 pl-3 min-w-[150px]'>
							<Image
								src={'/assets/services/devops.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px]'
							/>
							<p className='md:text-[18px] text-[14px] font-semibold text-black/80'>
								Devops
							</p>
						</div>
						<div className='bg-slate-100/80 rounded-md pt-[10px] pr-[20px] pb-3 pl-3 min-w-[150px]'>
							<Image
								src={'/assets/services/ux.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px]'
							/>
							<p className='md:text-[18px] text-[14px] font-semibold text-black/80'>
								UX/UI
							</p>
						</div>
						<div className='bg-slate-100/80 rounded-md pt-[10px] pr-[20px] pb-3 pl-3 min-w-[150px]'>
							<Image
								src={'/assets/services/qa.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px]'
							/>
							<p className='md:text-[18px] text-[14px] font-semibold text-black/80'>
								QA
							</p>
						</div>
					</div>
				</div>
				<div className='max-w-[500px] hidden md:block'>
					<Image
						src={'/assets/services/consulting.svg'}
						alt='hero'
						width={500}
						height={500}
						className='object-cover'
					/>
				</div>
			</div>
		</div>
	)
}

export default ItConsulting
