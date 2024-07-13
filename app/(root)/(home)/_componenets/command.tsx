import Image from 'next/image'
import React from 'react'

const Command = () => {
	return (
		<div
			id='command'
			className='container mx-auto max-w-6xl md:py-10 md:mt-20 mt-28 min-h-[130vh] md:max-md:pt-40 pt-10 bg-slate-100/80'
		>
			<h1 className='primary md:text-[64px] text-[32px] font-extrabold mb-16 md:mt-8 mt-0'>
				Team
			</h1>
			<div className='md:flex md:justify-between gap-8 max-md:grid-cols-1'>
				<div className='flex md:hidden justify-center'>
					<Image
						src={'/assets/team.svg'}
						alt='hero'
						width={500}
						height={500}
						className='object-cover max-w-[300px]'
					/>
				</div>
				<div className='max-w-[500px]'>
					<p className='md:text-xl text-base md:leading-10 leading-8 font-medium text-black/80 md:pb-0 pb-10  pt-5'>
						For each project, we form a team that includes a project manager,
						business analyst, UI / UX designer, DevOps, QA engineer, backend and
						front-end developers.
					</p>
					<span className='font-bold md:text-[120px] text-[80px] primary'>
						100+
					</span>
					<p className='font-extrabold md:text-[40px] text-2xl text-black/70 md:leading-[0] md:pb-0 pb-14'>
						Dedicated team
					</p>
				</div>
				<div className='max-w-[500px] hidden md:block'>
					<Image
						src={'/assets/team.svg'}
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

export default Command
