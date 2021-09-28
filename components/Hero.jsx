import Image from 'next/image'

import { Grid, Typography } from '@mui/material'

const Hero = ({ imgSrc, imgAlt, title, subtitle }) => {
	return (
		<Grid
			component='section'
			container
			sx={{
				position: 'relative',
				height: '100vh',
				width: '100vw',
				overflow: 'hidden',
				zIndex: -100,
				mb: 15,
			}}
		>
			<Image src={imgSrc} alt={imgAlt} layout='fill' objectFit='cover' />

			<Grid
				container
				item
				sx={{
					position: 'absolute',
					inset: 0,
					backgroundColor: 'rgba(0,0,0, .5)',
				}}
				flexDirection='column'
				justifyContent='center'
				alignItems='center'
			>
				<Typography
					variant='h1'
					align='center'
					gutterBottom
					sx={{
						color: 'secondary.main',
						fontWeight: 400,
						zIndex: 100,
						maxWidth: 300,
					}}
				>
					{title}
				</Typography>
				<Typography
					component='p'
					variant='h3'
					align='center'
					color='common.white'
					sx={{
						mb: 10,
						zIndex: 100,
						maxWidth: 600,
						padding: 2.3,
					}}
				>
					{subtitle}
				</Typography>
			</Grid>
		</Grid>
	)
}

export default Hero
