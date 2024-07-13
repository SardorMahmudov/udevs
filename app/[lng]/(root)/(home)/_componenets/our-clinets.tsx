import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

const OurClinets = () => {
	return (
		<div className='container mx-auto max-w-6xl md:py-10 my-5 md:my-10 min-h-[130vh] md:max-md:pt-40 bg-slate-100/80 pt-6 pb-10'>
			<h1 className='primary md:text-[64px] text-[32px] font-extrabold md:mb-16 mb-4'>
				Our clients
			</h1>
			<Carousel
				opts={{ align: 'start' }}
				className='mt-6 hidden w-full md:flex'
			>
				<CarouselContent className='w-full'>
					<CarouselItem className='md:basis-1/2 lg:basis-1/3'>1</CarouselItem>
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}

export default OurClinets
