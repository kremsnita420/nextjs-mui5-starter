import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import { styled } from '@mui/system'

import IconButton from '@mui/material/IconButton'
import Home from '@mui/icons-material/Home'
import MuiNextLink from '../components/MuiNextLink'
import Fab from '@mui/material/Fab'
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp'
import BackToTop from './BackToTop'

import Navbar from './Navbar'
import SideDrawer from './SideDrawer'
import HideOnScroll from './HideOnScroll'

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

export const navLinks = [
	{ title: `home`, path: `/` },
	{ title: `about`, path: `/about-us` },
	{ title: `menu`, path: `/menu` },
	{ title: `delivery`, path: `/delivery` },
	{ title: `contact`, path: `/contact` },
]

const Header = (props) => {
	return (
		<>
			<HideOnScroll {...props}>
				<AppBar position='fixed'>
					<Toolbar>
						<Container
							maxWidth='lg'
							sx={{
								display: `flex`,
								justifyContent: `space-between`,
							}}
						>
							<IconButton edge='start' aria-label='home'>
								<MuiNextLink activeClassName='active' href='/'>
									<Home
										sx={{
											color: (theme) =>
												theme.palette.common.white,
										}}
										fontSize='large'
									/>
								</MuiNextLink>
							</IconButton>

							<Navbar navLinks={navLinks} />
							<SideDrawer navLinks={navLinks} />
						</Container>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Offset id='back-to-top-anchor' />
			<BackToTop>
				<Fab color='secondary' size='large' aria-label='back to top'>
					<KeyboardArrowUp />
				</Fab>
			</BackToTop>
		</>
	)
}

export default Header
