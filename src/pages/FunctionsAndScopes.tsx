import React from 'react';
import {
  Container,
  Grid,
  Card,
  Box,
  CardContent,
  CardMedia,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Stack,
  Dialog,
 DialogTitle,
 DialogContent, 
 DialogActions
  
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// Optional image imports (you can add your own)
// import funcDeclarationImg from '../assets/func-declaration.jpg';
// import arrowFuncImg from '../assets/arrow-function.jpg';
// import scopeImg from '../assets/scope.jpg';

const FunctionsAndScope: React.FC = () => {
    const handleOpenQuiz = () => setQuizOpen(true);

    const [quizOpen, setQuizOpen] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [feedbackColor, setFeedbackColor] = useState<'success' | 'error' | null>(null);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    
    const handleAnswerClick = (selected: string) => {
        setSelectedOption(selected);

        const currentQuestion = quizData[currentQuestionIndex];
        const isCorrect = selected === currentQuestion.answer;
        setFeedbackColor(isCorrect ? 'success' : 'error');
      
        setTimeout(() => {
          if (isCorrect) {
            if (currentQuestionIndex < quizData.length - 1) {
              setCurrentQuestionIndex((prev) => prev + 1);
            } else {
              setQuizOpen(false);
              setCurrentQuestionIndex(0);
            }
          }
      
          setSelectedOption(null);
          setFeedbackColor(null);
        }, 500);
      };
      

  const topics = [
    {
      title: 'Function Declarations',
      definition:
        'Function declarations define named functions. They are hoisted, meaning you can use them before they are defined in the code.',
      // image: funcDeclarationImg,
    },
    {
      title: 'Function Expressions',
      definition:
        'Function expressions can be anonymous or named, and are assigned to variables. They are not hoisted like function declarations.',
    },
    {
      title: 'Arrow Functions',
      definition:
        'Arrow functions are a shorthand syntax for writing functions. They do not bind their own `this` context and are ideal for inline callbacks.',
      // image: arrowFuncImg,
    },
    {
      title: 'Global vs. Local Scope',
      definition:
        'Variables defined inside a function are locally scoped, while variables defined outside are globally scoped.',
    },
    {
      title: 'Block Scope (let/const)',
      definition:
        '`let` and `const` are block-scoped, meaning they only exist within the block they are defined in. Useful in loops and conditionals.',
    },
    {
      title: 'Lexical Scope & Closures',
      definition:
        'JavaScript uses lexical scoping, meaning inner functions can access variables from their outer functions. This is the foundation of closures.',
      // image: scopeImg,
    },
  ];

  const quizData = [
    {
      question: 'What is true about function declarations?',
      options: ['They are anonymous', 'They are hoisted', 'They are arrow functions', 'They require let'],
      answer: 'They are hoisted',
    },
    {
      question: 'What is a key difference with function expressions?',
      options: ['They are hoisted', 'They cannot be named', 'They are assigned to variables', 'They use the `class` keyword'],
      answer: 'They are assigned to variables',
    },
    {
      question: 'What is unique about arrow functions?',
      options: ['They bind their own `this`', 'They must be async', 'They have shorter syntax and no `this` binding', 'They are only used in classes'],
      answer: 'They have shorter syntax and no `this` binding',
    },
    {
      question: 'Where does a locally scoped variable exist?',
      options: ['Anywhere in the file', 'Only within the block', 'Only in arrow functions', 'Inside the function it’s declared in'],
      answer: 'Inside the function it’s declared in',
    },
    {
      question: 'Which of these are block scoped?',
      options: ['var', 'const', 'let', 'Both const and let'],
      answer: 'Both const and let',
    },
    {
      question: 'What is lexical scope?',
      options: ['Scope based on execution order', 'Scope based on file size', 'Scope based on how code is written', 'Inner functions accessing outer variables'],
      answer: 'Inner functions accessing outer variables',
    },
  ];
  

  return (
    <>
      {/* Header */}
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ borderBottom: '1px solid #ddd', mb: 4 }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Button color="primary" variant="text" component={Link} to="/">
            Home
          </Button>
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

      {/* Content */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          JavaScript Functions & Scope
        </Typography>
        <Grid container spacing={4}>
          {topics.map((topic) => (
            <Grid item key={topic.title} xs={12} sm={6} md={4} py={5}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 2 }}>
                <CardContent>
                    
                  <Typography gutterBottom variant="h5" component="h2">
                    {topic.title}
                  </Typography>
                  <Typography variant="body2">{topic.definition}</Typography>

                </CardContent>

                {/* Main image */}
                { (
                  <CardMedia
                    component="img"
                    // image={topic.image}
                    alt={`${topic.title} image`}
                    sx={{
                      mt: 4,
                      width: '100%',
                      objectFit: 'contain',
                    }}
                  />
                )}

                {/* Optional second image */}
                { (
                  <CardMedia
                    component="img"
                    // image={topic.additionalImage}
                    alt={`${topic.title} additional image`}
                    sx={{
                      mt: 2,
                      width: '100%',
                      objectFit: 'contain',
                    }}
                  />
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box textAlign="center" sx={{ my: 2 }}>
  <Button variant="contained" color="secondary" onClick={handleOpenQuiz}>
    Get Your Test!
  </Button>
</Box>
<Dialog open={quizOpen} onClose={() => setQuizOpen(false)} maxWidth="sm" fullWidth>
  <DialogTitle>Quick Quiz</DialogTitle>
  <DialogContent dividers>
    <Typography variant="subtitle1" fontWeight={600}>
      {currentQuestionIndex + 1}. {quizData[currentQuestionIndex].question}
    </Typography>
    <Stack spacing={1} mt={2}>
      {quizData[currentQuestionIndex].options.map((opt) => (
        <Button
          key={opt}
          variant="outlined"
          onClick={() => handleAnswerClick(opt)}
          sx={{
            textTransform: 'none',
            justifyContent: 'flex-start',
            borderColor:
              feedbackColor &&  selectedOption === opt
                ? feedbackColor === 'success'
                  ? 'green'
                  : 'red'
                : undefined,
            color:
              feedbackColor && selectedOption === opt
                ? feedbackColor === 'success'
                  ? 'green'
                  : 'red'
                : undefined,
          }}
          
        >
          {opt}
        </Button>
      ))}
    </Stack>
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setQuizOpen(false)}>Close</Button>
  </DialogActions>
</Dialog>


    </>
  );
};

export default FunctionsAndScope;
