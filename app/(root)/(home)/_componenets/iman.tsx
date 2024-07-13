import Image from 'next/image'
import React from 'react'

const Iman = () => {
	return (
		<div
			id='iman'
			className='container mx-auto max-w-6xl md:py-10 my-5 md:my-10 min-h-[130vh] md:max-md:pt-40 hero-module mt-32'
		>
			<div className='md:flex md:justify-between items-center gap-8 max-md:grid-cols-1'>
				<div className='max-w-[550px]'>
					<div className=''>
						<Image
							src={'/assets/portfolio/iman1.svg'}
							alt='hero'
							width={169}
							height={64}
							className='object-cover max-w-[100%]'
						/>
						<div className='car iman msg w-[120px] my-4 '>
							<Image
								src={'/assets/portfolio/finance.svg'}
								alt='hero'
								width={25}
								height={25}
								className='object-cover mr-2'
							/>
							Finance
						</div>
					</div>

					<div className='max-w-[530px] py-1 md:hidden '>
						<Image
							src={'/assets/portfolio/imanPh.png'}
							alt='hero'
							width={530}
							height={500}
							className='z-10 w-[100%] relative rounded-3xl'
						/>
					</div>

					<p className='md:text-[20px] text-base md:leading-10 leading-8 font-semibold text-black/70'>
						Iman - It is a mutual financing platform based on the principles of
						Islamic Finance. Buyers, sellers and investors meet here.
					</p>
					<h3 className='text-[24px] leading-10 font-semibold text-black/80 md:py-4 py-6'>
						What we did?
					</h3>
					<div className='md:flex md:flex-wrap grid grid-cols-3 md:gap-0 gap-4'>
						<div className='bg-slate-100/80 rounded-md md:p-4 p-2 min-w-[160px] md:mr-[30px] md:mb-4'>
							<Image
								src={'/assets/portfolio/web.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px] '
							/>
							<p className='md:text-[18px] text-[14px] font-semibold text-black/80'>
								Website
							</p>
						</div>
						<div className='bg-slate-100/80 rounded-md md:p-4 p-2 min-w-[160px] md:mr-[30px] md:mb-4'>
							<Image
								src={'/assets/portfolio/admin.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px]'
							/>
							<p className='md:text-[18px] text-[14px] font-semibold text-black/80'>
								Admin panel
							</p>
						</div>
						<div className='bg-slate-100/80 rounded-md md:p-4 p-2 min-w-[160px] md:mr-[30px] md:mb-4'>
							<Image
								src={'/assets/portfolio/cros.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px]'
							/>
							<p className='md:text-[18px] text-[14px] font-semibold text-black/80'>
								Crossplatform
							</p>
						</div>
					</div>
				</div>
				<div className='max-w-[530px] py-1 md:block hidden'>
					<Image
						src={'/assets/portfolio/imanPh.png'}
						alt='hero'
						width={530}
						height={500}
						className='z-10 w-[100%] relative rounded-3xl'
					/>
				</div>
			</div>
		</div>
	)
}

export default Iman
