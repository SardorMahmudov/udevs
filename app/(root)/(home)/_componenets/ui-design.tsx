import Image from 'next/image'

const UiDesign = () => {
	return (
		<div className='container mx-auto max-w-6xl md:py-10 md:mt-5 min-h-[130vh] md:max-md:pt-40 hero-module'>
			<h1 className='primary md:text-[64px] text-[32px] font-extrabold md:mb-16 mb-4'>
				UI / UX design
			</h1>
			<div className='md:flex md:justify-between gap-8 max-md:grid-cols-1'>
				<div className='max-w-[500px]'>
					<div className='relative w-[100%] h-[100%] flex justify-center items-center rounded-3xl overflow-hidden md:hidden'>
						<Image
							src={'/assets/services/bg.png'}
							alt='hero'
							width={500}
							height={500}
							className='object-cover absolute top-0 ring-0 left-0 bottom-0 w-[100%] h-[100%]'
						/>
						<Image
							src={'/assets/services/IMAN.png'}
							alt='hero'
							width={500}
							height={500}
							className='z-10 w-[100%] relative'
						/>
					</div>
					<p className='md:text-[24px] text-base md:leading-10 leading-8 font-medium text-black/80 md:py-0 py-5 '>
						Our company takes a human-centered approach to design
					</p>
					<div className='grid gap-4 md:py-8 grid-cols-3'>
						<div className='bg-slate-100/80 rounded-md pt-[10px] pr-[20px] pb-3 pl-3 min-w-[150px]'>
							<Image
								src={'/assets/services/ux.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px]'
							/>
							<p className='md:text-[18px] text-[14px] font-semibold text-black/80'>
								UX
							</p>
						</div>
						<div className='bg-slate-100/80 rounded-md pt-[10px] pr-[20px] pb-3 pl-3 min-w-[150px]'>
							<Image
								src={'/assets/services/ui.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px]'
							/>
							<p className='md:text-[18px] text-[14px] font-semibold text-black/80'>
								UI
							</p>
						</div>
						<div className='bg-slate-100/80 rounded-md pt-[10px] pr-[20px] pb-3 pl-3 min-w-[150px]'>
							<Image
								src={'/assets/services/proto.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px]'
							/>
							<p className='md:text-[18px] text-[14px] font-semibold text-black/80'>
								Prototyping
							</p>
						</div>
						<div className='bg-slate-100/80 rounded-md pt-[10px] pr-[20px] pb-3 pl-3 min-w-[150px]'>
							<Image
								src={'/assets/services/mobil.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px]'
							/>
							<p className='md:text-[18px] text-[14px] font-semibold text-black/80'>
								Mobile Design
							</p>
						</div>
						<div className='bg-slate-100/80 rounded-md pt-[10px] pr-[20px] pb-3 pl-3 min-w-[150px]'>
							<Image
								src={'/assets/services/desktop.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px]'
							/>
							<p className='md:text-[18px] text-[14px] font-semibold text-black/80'>
								Web Design
							</p>
						</div>
						<div className='bg-slate-100/80 rounded-md pt-[10px] pr-[20px] pb-3 pl-3 min-w-[150px]'>
							<Image
								src={'/assets/services/atomik.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px]'
							/>
							<p className='md:text-[18px] text-[14px] font-semibold text-black/80'>
								Atomic Design
							</p>
						</div>
					</div>
					<p className='text-[32px]  md:leading-10 leading-8 font-extrabold text-black/70 py-8 '>
						Technologies
					</p>
					<div className='flex gap-4'>
						<div className='md:min-w-[68px] min-w-[60px] md:mr-[48px] mr-[16px]'>
							<Image
								src={'/assets/services/figma.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px]'
							/>
							<p className='md:text-[20px] text-[18px] font-semibold text-black/80'>
								Figma
							</p>
						</div>
						<div className='md:min-w-[68px] min-w-[60px] md:mr-[48px] mr-[16px]'>
							<Image
								src={'/assets/services/skecht.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px] '
							/>
							<p className='md:text-[20px] text-[18px] font-semibold text-black/80'>
								Sketch
							</p>
						</div>
						<div className='md:min-w-[68px] min-w-[60px] md:mr-[48px] mr-[16px]'>
							<Image
								src={'/assets/services/lottie.svg'}
								alt='hero'
								width={40}
								height={56}
								className='mb-3 md:w-[40] w-[30px] md:h-[56px] h-[42px]'
							/>
							<p className='md:text-[20px] text-[18px] font-semibold text-black/80'>
								Lottie
							</p>
						</div>
						<div className='md:min-w-[68px] min-w-[60px] md:mr-[48px] mr-[16px]'>
							<Image
								src={'/assets/services/ai.svg'}
								alt='hero'
								width={56}
								height={56}
								className='mb-3 md:w-[56px] w-[42px] md:h-[56px] h-[42px]'
							/>
							<p className='md:text-[20px] text-[18px] font-semibold text-black/80'>
								Illustrator
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
							src={'/assets/services/IMAN.png'}
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

export default UiDesign
