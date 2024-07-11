import Image from 'next/image'
import Link from 'next/link'

function Logo() {
	return (
		<Link href={'/'}>
			<Image src={'/logo.svg'} alt='logo' width={96} height={50} />
		</Link>
	)
}

export default Logo
