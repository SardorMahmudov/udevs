'use client'
import React from 'react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { services } from '@/constants'
import { useTranslation } from '@/i18n/client'
import { useParams } from 'next/navigation'
const ServicesDropdown = () => {
	const { lng } = useParams()
	const { t } = useTranslation(lng as string)
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className='flex header-module--itemLink cursor-pointer'>
					{t('services')}
					<ChevronDown className='w-4 pb-1 pl-1' />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-80'>
				<DropdownMenuGroup>
					<p className='header-module--title pt-2'>Services</p>
					{services.map(item => (
						<a href={`#${item.route}`}>
							<DropdownMenuItem
								key={item.route}
								className='cursor-pointer gap-6 pl-6 mb-4'
							>
								<Image
									src={`/assets/service/${item.route}.svg`}
									alt={item.label}
									width={48}
									height={48}
								/>
								<span className='ml-2 font-space-grotesk font-medium'>
									{item.label}
								</span>
							</DropdownMenuItem>
						</a>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default ServicesDropdown
