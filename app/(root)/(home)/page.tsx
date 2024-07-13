import React from 'react'
import Hero from './_componenets/hero'
import Direction from './_componenets/direction'
import Command from './_componenets/command'
import Development from './_componenets/development'
import ErpSystems from './_componenets/erp-systems'
import UiDesign from './_componenets/ui-design'
import Optimization from './_componenets/optimization'
import ItConsulting from './_componenets/it-consulting'

const Page = () => {
	return (
		<>
			<Hero />
			<Direction />
			<Command />
			<Development />
			<ErpSystems />
			<UiDesign />
			<Optimization />
			<ItConsulting />
		</>
	)
}

export default Page
