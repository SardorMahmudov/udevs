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

const ServicesDropdown = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className='flex header-module--itemLink cursor-pointer'>
					Services
					<ChevronDown className='w-4 pb-1 pl-1' />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-80'>
				<DropdownMenuGroup>
					<p className='header-module--title pt-2'>Services</p>
					{services.map(item => (
						<DropdownMenuItem
							key={item.route}
							className='cursor-pointer gap-6 pl-6 mb-4'
						>
							<Image
								src={`/assets/services/${item.route}.svg`}
								alt={item.label}
								width={48}
								height={48}
							/>
							<span className='ml-2 font-space-grotesk font-medium'>
								{item.label}
							</span>
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default ServicesDropdown
