import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { green, yellow, red } from '@mui/material/colors';
import Stack from '@mui/material/Stack';

const guidanceSections = [
  {
    title: '  The Basics of JavaScript',
    cards: [
      { path: '/todoo1', title: 'Var, Let & Const', description: 'Understand how variables work in JavaScript.' },
      { path: '/todoo2', title: 'Data Types', description: 'Learn about strings, numbers, booleans, objects, and more.' },
      { path: '/functionsandscope', title: 'Functions & Scope', description: 'Master JS functions and how scope works.' },
    ],
  },
  {
    title: '  React Fundamentals',
    cards: [
      { path: '/guide1', title: 'React Hooks', description: 'Discover useState, useEffect, and more.' },
      { path: '/guide2', title: 'JSX & Components', description: 'Learn how JSX works and build reusable components.' },
      { path: '/guide3', title: 'Props & State Flow', description: 'Understand how data moves between components.' },
    ],
  },
  {
    title: '  Final Level: React Mastery',
    cards: [
      { path: '/resource1', title: 'Custom Hooks', description: 'Extract and reuse logic with custom hooks.' },
      { path: '/resource2', title: 'Context API', description: 'Share state across your app like a boss.' },
      { path: '/resource3', title: 'Performance Optimizations', description: 'Improve speed with useMemo, memo & more.' },
    ],
  },
];

const sectionColors = [green[100], yellow[200], red[500]];

const Home: React.FC = () => {
  return (
    <Box  sx={{
      background: 'linear-gradient(to right, #e3f2fd, #fce4ec)',
      minHeight: '100vh',
    }}>
    <>
      {/* Top Header Bar */}
      <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #ddd', mb: 4 }}>
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
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

      {/* Existing content */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Hi, here you can learn JS
        </Typography>

        {guidanceSections.map((section, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: sectionColors[index] || 'inherit',
              py: 4,
              px: 2,
              borderRadius: 2,
              mb: 5,
              
            }}
          >
            <Typography variant="h5" component="h2" sx={{ mb: 4 }}>
              {section.title}
            </Typography>
            <Grid container spacing={4}>
              {section.cards.map((card) => (
                <Grid item key={card.path} xs={12} sm={6} md={4}>
                  <Paper
                    component={Link}
                    to={card.path}
                    elevation={3}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '60%',
                      p: 3,
                      textAlign: 'center',
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'transform 0.2s',
                      '&:hover': { transform: 'scale(1.05)' },
                        
                    }}  
                  >
                    <Typography variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      {card.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </>
    </Box>
  );
};

export default Home;
