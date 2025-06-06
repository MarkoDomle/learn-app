// src/pages/Login.tsx
import React from 'react';
import {
  Container, Typography, TextField, Button, Box, Paper, Stack,
  AppBar,
  Toolbar
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, Link as RouterLink } from 'react-router-dom';

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginForm) => {
    console.log('Login data:', data);
    // handle login logic here
  };

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
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={3}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button variant="contained" type="submit" fullWidth>
              Sign In
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Container>
    </>
  );
};
export default Login;
