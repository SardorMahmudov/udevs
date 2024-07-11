import React from 'react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { lngs } from '@/constants'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

const LanguageDropdown = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className='flex header-module--itemLink cursor-pointer'>
					Language
					<ChevronDown className='w-4 pb-1 pl-1' />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-11'>
				<DropdownMenuGroup>
					{lngs.map(item => (
						<DropdownMenuItem key={item.route} className='cursor-pointer gap-1'>
							<Image
								src={`/assets/locales/${item.route}.svg`}
								alt={item.label}
								width={30}
								height={30}
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

export default LanguageDropdown
