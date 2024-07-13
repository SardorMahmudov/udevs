import Image from 'next/image'

const Development = () => {
	return (
		<div
			id='mobil'
			className='container mx-auto max-w-6xl md:py-10 my-0 md:mt-20 min-h-[130vh] md:max-md:pt-40 mb-16 hero-module'
		>
			<h1 className='primary md:text-[64px] text-[32px] font-extrabold md:mb-16 mb-4 md:max-w-[1200px] max-w-[270px] md:leading-none leading-10'>
				Development of mobile applications
			</h1>
			<div className='md:flex md:justify-between gap-8 max-md:grid-cols-1'>
				<div className='relative w-[100%] h-[100%] flex justify-center items-center rounded-3xl overflow-hidden md:hidden'>
					<Image
						src={'/assets/services/bg.png'}
						alt='hero'
						width={500}
						height={500}
						className='object-cover absolute top-0 ring-0 left-0 bottom-0 w-[100%] h-[100%]'
					/>
					<Image
						src={'/assets/services/statistik.png'}
						alt='hero'
						width={500}
						height={500}
						className='z-10 w-[100%] relative'
					/>
				</div>
				<div className='max-w-[500px]'>
					<p className='md:text-[24px] text-base md:leading-10 leading-8 font-medium text-black/80 md:pb-0 pb-10 '>
						In collaboration with startups, we have learned how to create a
						creative and functional user interface for mobile applications.
					</p>
					<div className='flex gap-4 md:py-8'>
						<div className='bg-slate-100/80 rounded-md pt-[10px] pr-[20px] pb-3 pl-3 min-w-[150px]'>
							<Image
								src={'/assets/services/apple.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px]'
							/>
							<p className='md:text-[18px] text-[14px] font-semibold text-black/80'>
								IOS
							</p>
						</div>
						<div className='bg-slate-100/80 rounded-md pt-[10px] pr-[20px] pb-3 pl-3 min-w-[150px]'>
							<Image
								src={'/assets/services/android.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px]'
							/>
							<p className='md:text-[18px] text-[14px] font-semibold text-black/80'>
								Android
							</p>
						</div>
						<div className='bg-slate-100/80 rounded-md pt-[10px] pr-[20px] pb-3 pl-3 min-w-[150px]'>
							<Image
								src={'/assets/services/phone.svg'}
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
					<p className='text-[32px]  md:leading-10 leading-8 font-extrabold text-black/70 py-8 '>
						Technologies
					</p>
					<div className='flex gap-4'>
						<div className='md:min-w-[68px] min-w-[60px] md:mr-[48px] mr-[16px]'>
							<Image
								src={'/assets/services/swift.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px]'
							/>
							<p className='md:text-[20px] text-[18px] font-semibold text-black/80'>
								Swift
							</p>
						</div>
						<div className='md:min-w-[68px] min-w-[60px] md:mr-[48px] mr-[16px]'>
							<Image
								src={'/assets/services/kotlin.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px] '
							/>
							<p className='md:text-[20px] text-[18px] font-semibold text-black/80'>
								Kotlin
							</p>
						</div>
						<div className='md:min-w-[68px] min-w-[60px] md:mr-[48px] mr-[16px]'>
							<Image
								src={'/assets/services/flutter.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px]'
							/>
							<p className='md:text-[20px] text-[18px] font-semibold text-black/80'>
								Flutter
							</p>
						</div>
					</div>
				</div>
				<div className='max-w-[500px] hidden md:block'>
					<div className='relative w-[100%] h-[100%] flex justify-center items-center rounded-3xl overflow-hidden py-14'>
						<Image
							src={'/assets/services/bg.png'}
							alt='hero'
							width={500}
							height={500}
							className='object-cover absolute top-0 ring-0 left-0 bottom-0 w-[100%] h-[100%]'
						/>
						<Image
							src={'/assets/services/statistik.png'}
							alt='hero'
							width={500}
							height={500}
							className='z-10 w-[100%] relative'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Development
