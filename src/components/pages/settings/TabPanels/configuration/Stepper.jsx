import * as React from 'react';
import {
  Box,
  useTheme,
  Stepper,
  Step,
  StepButton,
  Button,
  Typography,
} from '@mui/material';

import { tokens } from '../../../../../theme';

const steps = ['Shopify Integration', 'WhatsApp Integration', 'Preferences'];

export default function HorizontalNonLinearStepper() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '65vh',
        position: 'relative',
      }}
    >
      {/* Stepper Progress Header */}
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color='inherit' onClick={handleStep(index)}>
              <Typography sx={{ fontSize: '1.2rem' }}>{label}</Typography>
            </StepButton>
          </Step>
        ))}
      </Stepper>

      {/* Stepper Body */}
      <div>
        {allStepsCompleted() ? (
          // Stepper Completed
          <React.Fragment>
            <Typography
              sx={{
                mt: 2,
                mb: 1,
                fontSize: '2rem',
                textAlign: 'center',
                marginTop: '12rem',
              }}
            >
              Configuration completed
            </Typography>
            <Box
              sx={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                pt: 2,
                position: 'absolute',
                bottom: '0',
              }}
            >
              <Box sx={{ flex: '1 1 auto' }} />
              <Button
                onClick={handleReset}
                sx={{
                  backgroundColor: colors.blueAccent[700],
                  color: colors.grey[100],
                  fontSize: '14px',
                  fontWeight: 'bold',
                  padding: '10px 20px',
                  mr: 1,
                }}
              >
                Reset
              </Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1, fontSize: '1.5rem' }}>
              Step {activeStep + 1}
            </Typography>

            {/* Stepper Action Bar */}
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                pt: 2,
                position: 'absolute',
                bottom: '0',
              }}
            >
              {/* Back Button */}
              <Button
                color='inherit'
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{
                  backgroundColor: colors.blueAccent[700],
                  color: colors.grey[100],
                  fontSize: '14px',
                  fontWeight: 'bold',
                  padding: '10px 20px',
                  mr: 1,
                }}
              >
                Back
              </Button>

              <Box sx={{ flex: '1 1 auto' }} />

              {/* Next Button */}
              <Button
                onClick={handleNext}
                sx={{
                  backgroundColor: colors.blueAccent[700],
                  color: colors.grey[100],
                  fontSize: '14px',
                  fontWeight: 'bold',
                  padding: '10px 20px',
                  mr: 1,
                }}
              >
                Next
              </Button>

              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant='caption'
                    sx={{
                      display: 'inline-block',
                      backgroundColor: colors.blueAccent[900],
                      color: colors.grey[100],
                      fontSize: '14px',
                      fontWeight: 'bold',
                      padding: '10px 20px',
                      mr: 1,
                    }}
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button
                    onClick={handleComplete}
                    sx={{
                      backgroundColor: colors.blueAccent[700],
                      color: colors.grey[100],
                      fontSize: '14px',
                      fontWeight: 'bold',
                      padding: '10px 20px',
                      mr: 1,
                    }}
                  >
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
