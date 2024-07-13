import Image from 'next/image'
import React from 'react'

const HowToWork = () => {
	return (
		<div className='container mx-auto max-w-6xl md:py-10 my-5 md:my-10 md:max-md:pt-40 pt-6 pb-10 '>
			<h1 className='primary md:text-[64px] text-[32px] font-extrabold md:mb-16 mb-4'>
				How we work!
			</h1>

			<div className='md:steps-module '>
				<img
					src='/assets/portfolio/dot.svg'
					className='steps-module--line md:hidden'
					width='100%'
					alt='line'
				/>
				<div className='md:step-module step-module-sm'>
					<img src='/assets/phone.svg' className='w-[56px] md:w-[81px]' />
					<div className='md:steps-module--step steps-module--step-sm'>
						<h3 className='text-[18px] font-bold leading-7 md:ml-0 ml-5'>
							Сontact
						</h3>
						<span className='steps-module--steps'>
							Send us your project request or project idea.
						</span>
					</div>
				</div>

				<div className='md:step-module step-module-sm'>
					<img src='/assets/analays.svg' className='w-[56px] md:w-[81px]' />
					<div className='md:steps-module--step steps-module--step-sm'>
						<h3 className='text-[18px] font-bold leading-7 md:ml-0 ml-5'>
							Analysis
						</h3>
						<span className='steps-module--steps'>
							We will contact you to clarify your project requirements.
						</span>
					</div>
				</div>
				<div className='md:step-module step-module-sm'>
					<img src='/assets/offer.svg' className='w-[56px] md:w-[81px]' />
					<div className='md:steps-module--step steps-module--step-sm'>
						<h3 className='text-[18px] font-bold leading-7 md:ml-0 ml-5'>
							Offer
						</h3>
						<span className='steps-module--steps'>
							We will provide you with our free, non-binding application.
						</span>
					</div>
				</div>
				<div className='md:step-module step-module-sm'>
					<img src='/assets/team1.svg' className='w-[56px] md:w-[81px]' />
					<div className='md:steps-module--step steps-module--step-sm'>
						<h3 className='text-[18px] font-bold leading-7 md:ml-0 ml-5'>
							Team
						</h3>
						<span className='steps-module--steps'>
							We provide a team for your requirements.
						</span>
					</div>
				</div>
				<div className='md:step-module step-module-sm'>
					<img src='/assets/start.svg' className='w-[56px] md:w-[81px]' />
					<div className='md:steps-module--step steps-module--step-sm'>
						<h3 className='text-[18px] font-bold leading-7 md:ml-0 ml-5'>
							Start
						</h3>
						<span className='steps-module--steps'>
							You will get to know the team and we'll get started.
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HowToWork
