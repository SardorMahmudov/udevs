'use client'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'

const Hero = () => {
	return (
		<div className='hero-module md:mt-44'>
			<div className='container mx-auto grid min-h-[80vh] max-w-6xl grid-cols-2 gap-8 max-md:grid-cols-1 max-md:pt-40'>
				<div className='flex flex-col md:text-left md:items-start text-center items-center'>
					<Image
						src={'/logo.svg'}
						alt='hero'
						width={267}
						height={24}
						className='object-cover md:block hidden'
					/>

					<Image
						src={'/logo.svg'}
						alt='hero'
						width={125}
						height={24}
						className='object-cover md:hidden'
					/>

					<h1 className='my-5 opacity-100 transform-none md:text-[40px] text-[24px] font-bold md:font-extrabold text-black/70'>
						IT-Outsourcing Company
					</h1>
					<h1 className='md:text-[40px] text-[24px] font-extrabold primary'>
						<Typewriter
							options={{
								strings: [
									'Optimization IT consulting infrastructure',
									'Development of mobile applications',
									'Development and implementation ERP systems',
									'User interface, User experience design',
								],
								autoStart: true,
								loop: true,
							}}
						/>
					</h1>

					<div className='hidden md:block mt-12 call-to-action min-w-[248px]  py-2'>
						<a className='header-module--itemLink text-xl' href='/contact'>
							Contact
						</a>
					</div>
				</div>
				<Image
					src={'/assets/hero.svg'}
					alt='hero'
					width={520}
					height={520}
					className='object-cover'
				/>
			</div>
		</div>
	)
}

export default Hero
