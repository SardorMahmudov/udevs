import ContactForm from '@/components/forms/contact'
import {
	Facebook,
	Instagram,
	Send,
	Twitter,
	Youtube,
	YoutubeIcon,
} from 'lucide-react'

const Contact = () => {
	return (
		<div
			id='contact'
			className='container mx-auto max-w-6xl md:py-10 my-5 md:my-10 md:max-md:pt-40 pt-6 pb-10 hero-module'
		>
			<h1 className='primary md:text-[64px] text-[32px] font-extrabold md:mb-16 mb-4'>
				Contact us
			</h1>
			<div className='box'>
				<h3 className='text-xl pb-8 text-black/95 font-black'>
					Leave us a message
				</h3>
				<div className='flex justify-between '>
					<div className='w-[45%]'>
						<ContactForm />
					</div>
					<div className='w-[45%]'>
						<div className='flex gap-2 mb-6'>
							<img src='/assets/location.svg' />
							<p className='font-medium'>
								Ташкент, Мирзо-Улугбекский район, 5-й пр. Курган, 32 адрес
							</p>
						</div>
						<div className='flex gap-2 mb-6'>
							<img src='/assets/phone-number.svg' />
							<p className='font-medium'>+998 33 66 00 999</p>
						</div>
						<div className='flex gap-2 mb-6'>
							<img src='/assets/message.svg' />
							<p className='font-medium'>azizbek.b@udevs.io</p>
						</div>
						<div className='flex gap-2 mb-6'>
							<Send className='primary' />
							<p className='font-black primary'>t.me/azizbekbakhodirov</p>
						</div>
						<div className='flex gap-4'>
							<YoutubeIcon className='primary ' />
							<Instagram className='primary' />
							<Facebook className='primary' />
							<Twitter className='primary' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
