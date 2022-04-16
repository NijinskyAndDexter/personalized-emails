import './Overview.scss';
import '../../App.css'
import { Step, StepConnector, StepLabel, Stepper } from "@mui/material";
import UploadIcon from '@mui/icons-material/Upload';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import SendIcon from '@mui/icons-material/Send';


const Overview = () => {
  const steps = [{
    label: 'upload custom images', 
    icon: UploadIcon
  }, {
    label: 'assemble a scene',
    icon: ColorLensIcon
  }, {
    label: 'send your letter',
    icon: SendIcon
  }];

  return (
    <div className="Overview__container">
        <h1  className="Overview__title">
          email made personal
        </h1>
      <Stepper 
        sx={{alignSelf: 'start'}} 
        alternativeLabel 
        activeStep={1} 
        connector={
          <StepConnector 
            sx={{
              left: 'calc(-50% + 3rem)',
              right: 'calc(50% + 3rem)',
              top: 'calc(30%)',
            }}
          />
        }
      >
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel 
              sx={{fontFamily: 'Poiret One'}}
              StepIconProps={{
                sx: {
                  color: 'white', 
                  backgroundImage: 'linear-gradient(to bottom right, #520476, #FFC2E8)', 
                  padding: '1rem', 
                  borderRadius: '3rem' 
                }
              }}
              StepIconComponent={step.icon}
            >
              <div className="Overview__stepLabel">{step.label}</div>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}

export default Overview