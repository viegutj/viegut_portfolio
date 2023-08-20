import './App.css'
import { Box, Grid, Typography, Link, Toolbar, Card, CardContent, CardMedia, CardActionArea } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function App() {

  return (
    <>
      <Grid
        container spacing={2}
        display={'flex'}
      >
        <Grid
          item xs={6}
        // display={'flex'}
        >

          <Toolbar>
            <Link
              className={'link'}
              style={{ marginRight: 25 }} href="https://www.linkedin.com/in/jonathan-viegut" color="inherit">
              <LinkedInIcon fontSize='large' />
            </Link>
            <Link
              className={'link'} style={{ marginRight: 25 }} href="https://github.com/viegutj" color="inherit">
              <GitHubIcon fontSize='large' />
            </Link>
            <Link className={'link'} style={{ marginRight: 25 }} component="a" href="mailto:viegutj@gmail.com" color="inherit">
              <EmailIcon fontSize='large' />
            </Link>
          </Toolbar>
          <Box
            margin={8}
            textAlign={'center'}
            alignItems={'center'}
            alignContent={'center'}
            alignSelf={'center'}
          >
            <Typography
              marginBottom={4}
              textAlign={'center'}
              alignItems={'center'}
              alignContent={'center'}
              alignSelf={'center'}
              variant='h1'
            >
              Hi, I'm Jon!
            </Typography>
            <Typography
              textAlign={'left'}
            >
              I am passionate about learning and grateful to have found an industry that fosters it. I use my background in education and drive for collaborative learning to help our team solve complex problems. I am comfortable being creative and sharing my work with large audiences. My ideal professional life: intellectually challenging problems that keep me growing on a daily basis, with a positive culture and ambitious team
            </Typography>
            <Typography
            variant='h2'
            >
              Recent Projects
            </Typography>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                {/* <CardMedia
                  component="img"
                  height="700"
                  image="src/assets/Screenshot 2023-08-17 at 8.13.40 PM.png"
                  alt="MN Fitness"
                /> */}
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    MN Fitness
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  MN Fitness is a mobile-first web application that allows clients to generate random workouts, via an API request, for a specific body part. Resistance training often becomes repetitive; this is a way to add variation and keep the client engaged in their fitness habits!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>

        </Grid>
        <Grid item xs={6}
        >
          <img src="src/assets/DSC00014.jpg" className="portrait" alt="portrait photo"
          />
        </Grid>
      </Grid>
    </>
  )
}

export default App
