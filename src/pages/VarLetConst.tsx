import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, AppBar, Toolbar, Stack } from '@mui/material';
import { Link, Link as RouterLink } from 'react-router-dom';

// Import distinct images for each card
import myVarImage from '../assets/Var_image.png' 
import myLetImage from '../assets/Let_image.png';
import myConstImage from '../assets/Const_image.png';

const Todoo1: React.FC = () => {
  // Define the three blocks for var, let, and const with their own images
  const cards = [
    {
      title: 'var',
      definition:
        'var declares a variable that is function-scoped (or globally-scoped) and can be re-declared and updated. It is hoisted.',
      image: myVarImage,
    },
    {
      title: 'let',
      definition:
        'let declares a block-scoped variable that can be updated but not re-declared within the same scope. It is not hoisted like var.',
       image: myLetImage,
    },
    {
      title: 'const',
      definition:
        'const declares a block-scoped variable that cannot be re-assigned after its initial assignment, ensuring immutability.',
      image: myConstImage,
    },
  ];

  return (
    <>
      <AppBar
  position="static"
  color="transparent"
  elevation={0}
  sx={{ borderBottom: '1px solid #ddd', mb: 4 }}
>
  <Toolbar sx={{ justifyContent: 'space-between' }}>
    {/* Home*/}
    <Button color="primary" variant="text" component={Link} to="/">
      Home
    </Button>

    {/* Sign In */}
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
    maxHeight: 200, 
    objectFit: 'contain', 
  }}
/>
   <CardMedia
               
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </>
  );
};

export default Todoo1;
