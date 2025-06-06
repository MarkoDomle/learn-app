import React from 'react';
import {
  Container,
  Box,
  TextField,
  Typography,
  Button,
  Paper,
  AppBar,
  Toolbar,
  Stack,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, Link as RouterLink } from 'react-router-dom';

// Zod validation schema
const schema = z
  .object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
    repeatPassword: z.string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Passwords do not match',
    path: ['repeatPassword'],
  });

type RegisterFormData = z.infer<typeof schema>;

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log('Registration successful:', data);
    // Here you'd handle registration logic
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
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 10 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Register
        </Typography> 
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField
            label="Email"
            type="email"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
            fullWidth
          />
          <TextField
            label="Repeat Password"
            type="password"
            {...register('repeatPassword')}
            error={!!errors.repeatPassword}
            helperText={errors.repeatPassword?.message}
            fullWidth
          />
          <Button type="submit" variant="contained" fullWidth>
            Create Account
          </Button>
        </Box>
      </Paper>
    </Container>
    </>
  );
};

export default Register;
