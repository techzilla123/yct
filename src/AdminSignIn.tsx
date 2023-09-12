import React, { useState } from 'react';
import Frame8Image from './assets/Frame 8.png';
import IconsaxLinearArrowleImage from './assets/arrowleft.png';
import { styled } from '@mui/material/styles';
import { blue, green } from '@mui/material/colors';
import { borderRadius } from '@mui/system';







const InputField = styled("input")({
  border: `1px solid rgba(228, 228, 228, 1)`,
  boxSizing: `border-box`,
  borderRadius: `12px`,
  height: `48px`,
  width: `100%`,
  fontSize: `20px`,
  padding: `10px`,
  margin: `12px 0px 0px 0px`,
});
const ClickableButton = styled("div")({
  // Styling for the clickable button
  cursor: "pointer",
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  padding: 0,
  margin: 0,
  textDecoration: "underline",
  color: "blue",
});
const Desktop411 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  width: `1440px`,
  height: `1024px`,
  padding: `20px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  minHeight: '100vh',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const EnterYouCredentialsB = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `#7C7C7C`,
  fontStyle: `normal`,
  fontFamily: `SF Pro Display;`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `573px`,
  top: `194px`,
  margin: '20px 0',
});

const Frame8 = styled("img")({
  height: `64px`,
  width: `485px`,
  position: `absolute`,
  left: `477px`,
  top: `611px`,
  maxWidth:'100%',
  '&:hover': {
    backgroundColor: green, // Change background color on hover
    transform: 'scale(1.1)', // Apply a scale transform on hover (1.1 for 110% zoom, adjust as needed)
  },
});

const AlreadyHaveAnAccount = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(17, 17, 17, 1)`,
  fontStyle: `normal`,
  fontFamily: `SF Pro Display`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `1190px`,
  top: `37px`,
  margin: '20px 0',
  '@media (max-width: 450px)': {
    left: 'center', // Adjust the left position
    right: '20px', // Set a new right position
    textAlign: 'center', // Center-align the text
    fontSize: '14px', // Adjust font size for smaller screens
 
},
});

const LogIn = styled("div")({
  textAlign: `center`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SF Pro Display`,
  fontWeight: `500`,
  fontSize: `32px`,
  margin: '20px 0',
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `678px`,
  top: `146px`,
 
});

const IconsaxLinearArrowle = styled("img")({
  height: `32px`,
  width: `32px`,
  position: `absolute`,
  left: `60px`,
  top: `130px`,
  maxWidth: '100%',
  '&:hover': {
    backgroundColor: 'lightgreen', // Change background color on hover
    transform: 'scale(1.1)', // Apply a zoom effect on hover (1.1 for 110% zoom)
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add a subtle shadow on hover
    borderRadius: '50%',
  },
});

const Frame39999 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `100%`,
  left: `477px`,
  top: `302px`,
  height: `192px`,
});

const Frame39997 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `485px`,
  margin: `0px`,
  height: `84px`,
});

const EmailAddress = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(124, 124, 124, 1)`,
  fontStyle: `normal`,
  fontFamily: `SF Pro Display`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
});

const Rectangle13 = styled("div")({
  border: `none`,
  boxSizing: `border-box`,
  borderRadius: `12px`,
  height: `48px`,
  width: `485px`,
  margin: `12px 0px 0px 0px`,
});

const Frame39998 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `24px 0px 0px 0px`,
  height: `84px`,
  width: `485px`,
});

const Password = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(124, 124, 124, 1)`,
  fontStyle: `normal`,
  fontFamily: `SF Pro Display`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
});

const Rectangle14 = styled("div")({
  border: `none`,
  boxSizing: `border-box`,
  borderRadius: `12px`,
  height: `48px`,
  width: `485px`,
  margin: `12px 0px 0px 0px`,
});

const Frame40000 = styled("div")({
  backgroundColor: `rgba(241, 255, 244, 1)`,
  borderRadius: `10px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `10px`,
  boxSizing: `border-box`,
  left: `807px`,
  top: `506px`,
  height: `41px`,
  width: `155px`,
});

const ForgotPassword = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(124, 124, 124, 1)`,
  fontStyle: `normal`,
  fontFamily: `SF Pro Display`,
  fontWeight: `400`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
  '&:hover' :{
  color: 'blue', // Change text color on hover
    boxShadow: '0 0 7px blue', 
  }
});

function Desktop41() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleArrowClick = () => {
    // Handle the arrow click event here
    // For example, you can navigate to a different page or perform some action
    // Replace the alert with your desired behavior
    alert("Arrow clicked!");
  };

  return (
    <Desktop411>
      <EnterYouCredentialsB>
        {`Enter your credentials below to login`}
      </EnterYouCredentialsB>
      <ClickableButton onClick={() => window.location.href = '#frame-8'}> {/* Added clickable button */}
        <Frame8 src={Frame8Image} loading='lazy' alt={"Frame 8"} />
      </ClickableButton>
      <AlreadyHaveAnAccount>
      {`Already have an account? `}
      
      <a href="#">Sign in</a>

      </AlreadyHaveAnAccount>
      <LogIn>
        {`Log in`}
      </LogIn>
      <ClickableButton onClick={handleArrowClick}>
        <IconsaxLinearArrowle src={IconsaxLinearArrowleImage} loading='lazy' alt={"Iconsax/Linear/arrowleft"} />
        </ClickableButton>
          <Frame39999>
        <Frame39997>
          <EmailAddress>
            {`Email address`}
          </EmailAddress>
          <InputField
            type="email"
            id="email" // Added an 'id' for the label's 'htmlFor' attribute
            placeholder="Enter your email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
          <Rectangle13>
          </Rectangle13>
        </Frame39997>
        <Frame39998>
          <Password>
            {`Password`}
          </Password>
          
          <InputField
            type="password"
            id="password" // Added an 'id' for the label's 'htmlFor' attribute
            placeholder="Enter your password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <Rectangle14></Rectangle14>
        </Frame39998>
      </Frame39999>
      <a href="#forgot-password"> {/* Added anchor tag */}
        
      <Frame40000>
        <ForgotPassword>
          {`Forgot password?`}
        </ForgotPassword>
      </Frame40000>
      </a>
    </Desktop411>
  );
}

export default Desktop41;
