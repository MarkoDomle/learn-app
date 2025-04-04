import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

// Import distinct images for each data type
// import stringImage from '../assets/string_image1.png';
// import stringImage2 from '../assets/string_image2.png';
// import numberImage from '../assets/number_image1.png';
// import booleanImage from '../assets/boolean_image1.png';

const DataTypes: React.FC = () => {
  const cards = [
    {
      title: 'String',
      definition:
        'Strings are used to represent text. They are sequences of characters enclosed in single or double quotes.',
     // image: stringImage,
    //  additionalImage: stringImage2,
    },
    {
      title: 'Number',
      definition:
        'Numbers represent both integer and floating-point values. JavaScript does not differentiate between int and float.',
   //   image: numberImage,
    },
    {
      title: 'Boolean',
      definition:
        'Boolean values represent true or false. They are often used in conditional statements.',
   //   image: booleanImage,
    },
  ];

  return (
    
    <>
      {/* Top Header Bar */}
      <AppBar
  position="static"
  color="transparent"
  elevation={0}
  sx={{ borderBottom: '1px solid #ddd', mb: 4 }}
>
  <Toolbar sx={{ justifyContent: 'space-between' }}>
    {/* Home on the left */}
    <Button color="primary" variant="text" component={Link} to="/">
      Home
    </Button>

    {/* Sign In and Register on the right */}
    <Stack direction="row" spacing={2}>
      <Button color="primary" variant="text" component={Link} to="/login">
        Sign In
      </Button>
      <Button color="primary" variant="contained" component={Link} to="/register">
        Register
      </Button>
    </Stack>
  </Toolbar>
</AppBar>

    <Container sx={{ py: 8 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Understanding JavaScript Data Types
      </Typography>
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card.title} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 2 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.title}
                </Typography>
                <Typography variant="body2">
                  {card.definition}
                </Typography>
              </CardContent>
{/* 
              {card.image && (
                <CardMedia
                  component="img"
                  image={card.image}
                  alt={`${card.title} image`}
                  sx={{
                    display: 'block',
                    mt: 2,
                    width: '100%',
                    maxHeight: 200,
                    objectFit: 'contain',
                  }}
                />
              )}

              {card.additionalImage && (
                <CardMedia
                  component="img"
                  image={card.additionalImage}
                  alt={`${card.title} additional image`}
                  sx={{
                    mt: 2,
                    width: '100%',
                    objectFit: 'contain',
                  }}
                />
              )} */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </>
  );
};

export default DataTypes;
