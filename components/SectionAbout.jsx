import Image from 'next/image'
import MuiNextLink from '../components/MuiNextLink'
import { Container, Grid, Typography, Button } from '@mui/material'

const SectionAbout = () => {
	return (
		<Container component='section' maxWidth='md' sx={{ mb: 15 }}>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<Image
						src='/chef.svg'
						alt='A Chef'
						layout='responsive'
						width={800}
						height={600}
					/>
				</Grid>

				<Grid
					item
					xs={12}
					sm={6}
					container
					flexDirection='column'
					justifyContent='center'
					alignItems='center'
				>
					<Typography
						component='h2'
						variant='h4'
						textAlign='center'
						gutterBottom
					>
						A Japanese Chef Who Love Western Food
					</Typography>
					<Typography textAlign='center'>
						{`We mix Japanese and Western ingredients and cooking methods. Provide you
                        with a different tasting dimension with the fusion food in our restaurant.
                        Don't miss the chance to surprise your tongue!`}
					</Typography>
					<MuiNextLink href='/about-us'>
						<Button
							variant='outlined'
							size='large'
							sx={{ marginTop: '2rem' }}
						>
							About Us
						</Button>
					</MuiNextLink>
				</Grid>
			</Grid>
		</Container>
	)
}

export default SectionAbout
