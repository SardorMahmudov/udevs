'use client'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { tools } from '@/constants'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const Tools = () => {
	const [radioValue, setRadioValue] = useState<string>('')
	const [toggle, setToggle] = useState<boolean>(false)
	return (
		<div
			id='tools'
			className='container mx-auto max-w-6xl md:py-10 my-5 md:my-0 min-h-[130vh] md:max-md:pt-40 pt-6 pb-10 bg-slate-100/80'
		>
			<h1 className='primary md:text-[64px] text-[32px] font-extrabold md:mb-16 mb-4'>
				Tools
			</h1>

			<div>
				<RadioGroup
					onValueChange={setRadioValue}
					value={radioValue}
					className='md:flex grid grid-cols-2 md:gap-6 gap-4'
				>
					<div className='flex items-center space-x-2 '>
						<RadioGroupItem
							value='Frontend'
							id='Frontend'
							aria-checked={true}
							aria-controls='checked'
							onClick={() => setToggle(!toggle)}
						/>
						<Label
							htmlFor='Frontend'
							className='text-[15px] font-[900!important] '
						>
							Frontend
						</Label>
					</div>
					<div className='flex items-center space-x-2'>
						<RadioGroupItem value='Backend' id='Backend' />
						<Label
							className='text-[15px] font-[900!important]'
							htmlFor='Backend'
						>
							Backend
						</Label>
					</div>
					<div className='flex items-center space-x-2'>
						<RadioGroupItem value='Devops' id='Devops' />
						<Label
							className='text-[15px] font-[900!important]'
							htmlFor='Devops'
						>
							Devops
						</Label>
					</div>
					<div className='flex items-center space-x-2'>
						<RadioGroupItem value='Testing' id='Testing' />
						<Label
							className='text-[15px] font-[900!important]'
							htmlFor='Testing'
						>
							Testing
						</Label>
					</div>
					<div className='flex items-center space-x-2'>
						<RadioGroupItem value='UX/UI' id='UX/UI' />
						<Label className='text-[15px] font-[900!important]' htmlFor='UX/UI'>
							UX/UI
						</Label>
					</div>
					<div className='flex items-center space-x-2'>
						<RadioGroupItem value='Infrastructure' id='Infrastructure' />
						<Label
							className='text-[15px] font-[900!important]'
							htmlFor='Infrastructure'
						>
							Infrastructure
						</Label>
					</div>
					<div className='flex items-center space-x-2'>
						<RadioGroupItem value='Mobile' id='Mobile' />
						<Label
							className='text-[15px] font-[900!important]'
							htmlFor='Mobile'
						>
							Mobile
						</Label>
					</div>
				</RadioGroup>
				<div className='grid md:grid-cols-12 grid-cols-5 md:mt-12 mt-4 gap-2'>
					{tools.map(tool => (
						<div
							className={cn(
								'w-[100%] md:h-[90px] h-[54px] flex items-center justify-center flex-col rounded-sm',
								radioValue === '' && tool.cn === 'Frontend' && 'bg-[#c6d6ff]',
								radioValue === '' && tool.cn === 'Backend' && 'bg-[#bddaed]',
								radioValue === '' && tool.cn === 'Testing' && 'bg-[#e1e9fe]',
								radioValue === '' && tool.cn === 'UX/UI' && 'bg-[#ced6ee]',
								radioValue === '' && tool.cn === 'Devops' && 'bg-[#a8bfff]',
								radioValue === '' &&
									tool.cn === 'Infrastructure' &&
									'bg-[#d1dde8]',
								radioValue === '' && tool.cn === 'Mobile' && 'bg-[#dbe5ff]',
								tool.cn === radioValue &&
									radioValue === 'Frontend' &&
									'bg-[#c6d6ff]',
								tool.cn === 'Backend' &&
									radioValue === 'Backend' &&
									'bg-[#bddaed]',
								tool.cn === 'Testing' &&
									radioValue === 'Testing' &&
									'bg-[#e1e9fe]',
								tool.cn === 'UX/UI' && radioValue === 'UX/UI' && 'bg-[#ced6ee]',
								tool.cn === 'Devops' &&
									radioValue === 'Devops' &&
									'bg-[#a8bfff]',
								tool.cn === 'Infrastructure' &&
									radioValue === 'Infrastructure' &&
									'bg-[#d1dde8]',
								tool.cn === 'Mobile' &&
									radioValue === 'Mobile' &&
									'bg-[#dbe5ff]'
							)}
						>
							<img
								className='md:w-6 w-[15px] md:h-6 h-[15px]'
								src={`assets/tools/${tool.label}.svg`}
							/>
							<span className='md:max-w-[90px] max-w-[50px] md:text-[11px] text-[9px] md:mt-4 mt-[5px]'>
								{tool.label}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Tools
