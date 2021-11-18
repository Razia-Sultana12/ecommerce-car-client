import { Container,Grid,Typography,Card,CardActionArea,CardMedia,CardContent } from '@mui/material';
import React from 'react';
import oil from '../../../servicingImage/oilcar.jpg';
import alignment from '../../../servicingImage/alignment.jpg.crdownload';
import engine from '../../../servicingImage/engine.webp';
import repair from '../../../servicingImage/repair.jpeg';
import car from '../../../servicingImage/car.jpg';
import bgimage from '../../../flaticons/blackimg.jpg';


const OurService = () => {
    const bannerbg = {
        backgroundImage: `url(${bgimage})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height:"100vh",
        marginTop: '15px',
        marginBottom: '35px'
    }
    return (
        <div style={bannerbg}>
            <br></br>
            <br></br>
            <Container>
            <Typography sx={{fontWeight:'500',color:'white',textAlign:'center'}} variant="h4">Our Services</Typography>
            <Typography color='lightgray' textAlign='center'>Our Talented Cleaner Team Works Hard Everyday To Provide One Of the Best Services For You. Our Team Goes Above and Beyond To Cater To Each Project’s Specific Needs.Call Us Now. 24/7 Emergency Service. Grease Pumping. Septic Tank Cleaning. Services: Residential Service, Commercial Service, Municipality Service, Restaurant Service.
            </Typography>
            </Container>
            <Grid my='55px' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={12} md={2}>
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={oil}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Oil Change Service
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={12} md={2}>
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={alignment}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Alignment
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={12} md={2}>
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={engine}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Engines & Transmissions

          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={12} md={2}>
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="110"
          image={car}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          30 000 / 60 000 / 90 000
SERVICE
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={12} md={2}>
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={repair}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Break Repair & Service
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item xs={12} md={2}>
  <Card sx={{ maxWidth: 345,height:245,bgcolor:'lightgray',textAlign:'center',":hover":{bgcolor:'rebeccapurple',color:'white'} }}>
      <CardActionArea>
      
        <CardContent>
        
          <Typography marginY="50px" gutterBottom variant="h5" component="div">
           SEE ALL <Typography variant="h4">SERVICES</Typography>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  </Grid>

        
        </div>
    );
};

export default OurService;