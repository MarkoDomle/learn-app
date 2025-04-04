import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

// Import distinct images for each hook
// import useStateImage from '../assets/useState.jpg';
// import useStateExample from '../assets/useState-example.jpg';
// import useEffectImage from '../assets/useEffect.jpg';
// import useEffectExample from '../assets/useEffect-example.jpg';
// import useContextImage from '../assets/useContext.jpg';
// import useContextExample from '../assets/useContext-example.jpg';
// import useRefImage from '../assets/useRef.jpg';
// import useRefExample from '../assets/useRef-example.jpg';
// import useMemoImage from '../assets/useMemo.jpg';
// import useMemoExample from '../assets/useMemo-example.jpg';
// import useCallbackImage from '../assets/useCallback.jpg';
// import useCallbackExample from '../assets/useCallback-example.jpg';

const Hooks: React.FC = () => {
  // Define React hooks with explanations and images
  const hooksData = [
    {
      title: 'useState',
      definition:
        'useState is a hook that allows you to manage state in a functional component. It returns an array with the current state and a function to update it.',
    //   image: useStateImage,
    //   additionalImage: useStateExample,
    },
    {
      title: 'useEffect',
      definition:
        'useEffect lets you perform side effects in function components, such as fetching data, updating the DOM, or setting up subscriptions.',
    //   image: useEffectImage,
    //   additionalImage: useEffectExample,
    },
    {
      title: 'useContext',
      definition:
        'useContext provides an easy way to access values from React context without needing to wrap components in a Consumer.',
    //   image: useContextImage,
    //   additionalImage: useContextExample,
    },
    {
      title: 'useRef',
      definition:
        'useRef creates a mutable reference that persists across renders, commonly used for accessing DOM elements and maintaining state without re-renders.',
    //   image: useRefImage,
    //   additionalImage: useRefExample,
    },
    {
      title: 'useMemo',
      definition:
        'useMemo optimizes performance by memoizing the result of a function so that it doesn’t recompute unnecessarily on re-renders.',
    //   image: useMemoImage,
    //   additionalImage: useMemoExample,
    },
    {
      title: 'useCallback',
      definition:
        'useCallback memoizes a function reference to prevent it from being recreated on every render, improving performance in callback-heavy components.',
    //   image: useCallbackImage,
    //   additionalImage: useCallbackExample,
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
        React Hooks Overview
      </Typography>
      <Grid container spacing={4}>
        {hooksData.map((hook) => (
          <Grid item key={hook.title} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 2 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {hook.title}
                </Typography>
                <Typography variant="body2">
                  {hook.definition}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                // image={hook.image}
                alt={`${hook.title} image`}
                sx={{
                  mt: 2,
                  width: '100%',
                  objectFit: 'contain',
                }}
              />
              <CardMedia
                component="img"
                    // image={hook.additionalImage}
                alt={`${hook.title} additional image`}
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
    </>
  );
};

export default Hooks;
