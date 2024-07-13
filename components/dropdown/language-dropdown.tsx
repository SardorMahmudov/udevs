'use client'
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
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useTranslation } from '@/i18n/client'

const LanguageDropdown = () => {
	const { lng } = useParams()
	const { t } = useTranslation(lng as string)
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div className='flex header-module--itemLink cursor-pointer'>
					{t('language')}
					<ChevronDown className='w-4 pb-1 pl-1' />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-11'>
				<DropdownMenuGroup>
					{lngs.map(item => (
						<Link key={item.route} href={`/${item.route}`}>
							<DropdownMenuItem
								key={item.route}
								className='cursor-pointer gap-1'
							>
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
						</Link>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default LanguageDropdown
