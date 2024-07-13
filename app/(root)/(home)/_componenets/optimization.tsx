import Image from 'next/image'
import React from 'react'

const Optimization = () => {
	return (
		<div className='container mx-auto max-w-6xl md:py-10 my-5 md:my-10 min-h-[130vh] md:max-md:pt-40 bg-slate-100/80 pt-6 pb-10'>
			<h1 className='primary md:text-[64px] text-[32px] font-extrabold md:mb-16 mb-4'>
				Optimization Infrastructure
			</h1>
			<div className='md:flex md:justify-between gap-8 max-md:grid-cols-1'>
				<div className='max-w-[500px]'>
					<div className='relative w-[100%] h-[100%] flex justify-center items-center rounded-3xl overflow-hidden md:py-14 py-1'>
						<Image
							src={'/assets/services/bg.png'}
							alt='hero'
							width={500}
							height={500}
							className='object-cover absolute top-0 ring-0 left-0 bottom-0 w-[100%] h-[100%]'
						/>
						<Image
							src={'/assets/services/desktop.png'}
							alt='hero'
							width={500}
							height={500}
							className='z-10 w-[100%] relative'
						/>
					</div>
				</div>
				<div className='max-w-[500px]'>
					<p className='md:text-[24px] text-base md:leading-10 leading-8 font-medium text-black/80 md:pb-0 pb-10 '>
						Our experienced professionals will help you optimize your
						infrastructure
					</p>
					<div className='grid gap-4 md:py-8 grid-cols-3'>
						<div className='bg-slate-200 rounded-md pt-[10px] pr-[20px] pb-3 pl-3 min-w-[150px]'>
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
						<div className='bg-slate-200 rounded-md pt-[10px] pr-[20px] pb-3 pl-3 min-w-[150px]'>
							<Image
								src={'/assets/services/auto.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px]'
							/>
							<p className='md:text-[18px] text-[14px] font-semibold text-black/80'>
								Auto testing
							</p>
						</div>
						<div className='bg-slate-200 rounded-md pt-[10px] pr-[20px] pb-3 pl-3 min-w-[150px]'>
							<Image
								src={'/assets/services/strees.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px]'
							/>
							<p className='md:text-[18px] text-[14px] font-semibold text-black/80'>
								Stress testing
							</p>
						</div>
						<div className='bg-slate-200 rounded-md pt-[10px] pr-[20px] pb-3 pl-3 min-w-[150px]'>
							<Image
								src={'/assets/services/load.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px]'
							/>
							<p className='md:text-[18px] text-[14px] font-semibold text-black/80'>
								Load testing
							</p>
						</div>
						<div className='bg-slate-200 rounded-md pt-[10px] pr-[20px] pb-3 pl-3 min-w-[150px]'>
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
						<div className='bg-slate-200 rounded-md pt-[10px] pr-[20px] pb-3 pl-3 min-w-[150px]'>
							<Image
								src={'/assets/services/cloud.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px]'
							/>
							<p className='md:text-[18px] text-[14px] font-semibold text-black/80'>
								Cloud
							</p>
						</div>
						<div className='bg-slate-200 rounded-md pt-[10px] pr-[20px] pb-3 pl-3 min-w-[150px]'>
							<Image
								src={'/assets/services/ci.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px]'
							/>
							<p className='md:text-[18px] text-[14px] font-semibold text-black/80'>
								CI / CD
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Optimization
