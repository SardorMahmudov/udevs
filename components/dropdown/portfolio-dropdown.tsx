'use client'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { portfolio } from '@/constants'
import { useParams } from 'next/navigation'
import { useTranslation } from '@/i18n/client'

const PortfolioDropdown = () => {
	const { lng } = useParams()
	const { t } = useTranslation(lng as string)
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className='flex header-module--itemLink cursor-pointer'>
					{t('portfolio')}
					<ChevronDown className='w-4 pb-1 pl-1' />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-80'>
				<DropdownMenuGroup>
					<p className='header-module--title pt-2'>Portfolio</p>
					{portfolio.map(item => (
						<a href={`#${item.route}`}>
							<DropdownMenuItem
								key={item.route}
								className='cursor-pointer gap-6 pl-6 mb-4'
							>
								<Image
									src={`/assets/portfolio/${item.route}.svg`}
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

export default PortfolioDropdown
