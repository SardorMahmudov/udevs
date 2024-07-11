import type { Metadata } from 'next'
import { Manrope, Space_Grotesk as SpaceGrotesk } from 'next/font/google'
import './globals.css'
import { ChildProps } from '@/types'

const monrope = Manrope({
	subsets: ['latin', 'cyrillic'],
	weight: ['300', '400', '500', '700'],
	variable: '--font-monrope',
})

// const spaceGrotesk = SpaceGrotesk({
// 	weight: ['300', '400', '500', '600', '700'],
// 	subsets: ['latin'],
// 	variable: '--font-space-grotesk',
// })

export const metadata: Metadata = {
	title:
		'IT-Аутсорсинг компания Udevs - IT консалтинг, разработка и внедрение ERP систем, разработка мобильных приложений, UI / UX дизайн, оптимизация инфраструктуры',
	description:
		'IT консалтинг, разработка и внедрение ERP систем, разработка мобильных приложений, UI / UX дизайн, оптимизация инфраструктуры, создание сайта, разработка сайтов ташкент, тестирование, проектирование, аутсорсинг, коммерческая разработка, разработка на заказ, разработка программного обеспечения, ИТ аутсорсинг, тестирование ПО, разработка программ, центр разработки программного обеспечения, it consulting, development and implementation of ERP systems, mobile app development, UI / UX design, infrastructure optimization, software agency, software development agency, web design, mobile application development, software companies near me, website design, software development company, app development, web development software, manufacturing, web design, best web design, web page design, udevs uz, udevs, design',
	icons: { icon: '/logo.png' },
}

function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en'>
			<body className={`${monrope.variable}  overflow-x-hidden`}>
				{children}
			</body>
		</html>
	)
}

export default RootLayout
