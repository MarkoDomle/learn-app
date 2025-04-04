import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Link } from '@mui/material';

// Import distinct images for each card
import myVarImage from '../assets/Var_image1.png' 
import myVarImage2 from '../assets/Var_image2.png'
// import myLetImage from '../assets/my-let-image.jpg';
// import myConstImage from '../assets/my-const-image.jpg';

const Todoo1: React.FC = () => {
  // Define the three blocks for var, let, and const with their own images
  const cards = [
    {
      title: 'var',
      definition:
        'var declares a variable that is function-scoped (or globally-scoped) and can be re-declared and updated. It is hoisted.',
      image: myVarImage,
      additionalImage: myVarImage2,

    },
    {
      title: 'let',
      definition:
        'let declares a block-scoped variable that can be updated but not re-declared within the same scope. It is not hoisted like var.',
      // image: myLetImage,
    },
    {
      title: 'const',
      definition:
        'const declares a block-scoped variable that cannot be re-assigned after its initial assignment, ensuring immutability.',
      // image: myConstImage,
    },
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Understanding var, let, and const
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
              <CardMedia
  component="img"
  image={card.image}
  alt={`${card.title} image`}
  sx={{
    display: 'block',
    mt: 2,
    width: '100%',
    maxHeight: 200, // limits the height, but won't force crop
    objectFit: 'contain', // ensures the entire image is visible
  }}
/>
   {/* Additional image below the first one */}
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
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Todoo1;
