import { MouseEvent } from "react";


function ListGroup(){
interface Props {
    items: string[];
    heading: string;
}
function ListGroup(props: Props) {}
 let items = [
        'Re-strategize Techzilla.inc Plan',
        'Complete Current Projects',
        'Get 20 new Jobs before 2024',
        'Learn More',
        'Apply for Internships'
    ];

    //even handler
    const handlClick = (event: MouseEvent) => console.log(event)
    
    return (
    <>
    <h1 className="here">Here's Your <i className="todo">TodoList</i></h1>
    {items.length === 0 && <p>No item found</p>}
     <ul className="list-group">
     {items.map((item, index) => (
     <button><li key={item} 
     onClick={handlClick}
     >
        {item}</li></button>))}
    </ul>
  

    </>

    


   ) }
   import React from 'react';

import VectorImage from 'src/assets/images/Desktop41_Vector.png';

import {
  styled
} from '@mui/material/styles';

const Desktop411 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `1440px`,
  height: `1024px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const EnterYouCredentialsB = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(135, 135, 135, 1)`,
  fontStyle: `normal`,
  fontFamily: `SF Pro Display`,
  fontWeight: `400`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `573px`,
  top: `194px`,
});

const Frame8 = styled("div")({
  backgroundColor: `rgba(52, 168, 83, 1)`,
  borderRadius: `10px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `20px`,
  boxSizing: `border-box`,
  width: `485px`,
  height: `64px`,
  left: `477px`,
  top: `611px`,
  overflow: `hidden`,
});

const Next = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `SF Pro Display`,
  fontWeight: `500`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
});

const AlreadyHaveAnAccount = styled("div")({
  textAlign: `right`,
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
});

const LogIn = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `SF Pro Display`,
  fontWeight: `500`,
  fontSize: `32px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `678px`,
  top: `146px`,
});

const IconsaxLinearArrowle = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `32px`,
  height: `32px`,
  left: `60px`,
  top: `130px`,
  overflow: `hidden`,
});

const Vector = styled("img")({
  height: `16.19px`,
  width: `22.67px`,
  position: `absolute`,
  left: `5px`,
  top: `8px`,
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
  width: `485px`,
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
  border: `1px solid rgba(228, 228, 228, 1)`,
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
  border: `1px solid rgba(228, 228, 228, 1)`,
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
});


function Desktop41() {
  return (
    <Desktop411>
      <EnterYouCredentialsB>
        {`Enter you credentials below to login`}
      </EnterYouCredentialsB>
      <Frame8>
        <Next>
          {`Next`}
        </Next>
      </Frame8>
      <AlreadyHaveAnAccount>
        {`Already have an account? Sign in`}
      </AlreadyHaveAnAccount>
      <LogIn>
        {`Log in`}
      </LogIn>
      <IconsaxLinearArrowle>
        <Vector src={VectorImage} loading='lazy' alt={"Vector"}/>
      </IconsaxLinearArrowle>
      <Frame39999>
        <Frame39997>
          <EmailAddress>
            {`Email address`}
          </EmailAddress>
          <Rectangle13>
          </Rectangle13>
        </Frame39997>
        <Frame39998>
          <Password>
            {`Password`}
          </Password>
          <Rectangle14>
          </Rectangle14>
        </Frame39998>
      </Frame39999>
      <Frame40000>
        <ForgotPassword>
          {`Forgot password?`}
        </ForgotPassword>
      </Frame40000>
    </Desktop411>);

  }

//export default ;

  
 
  export default ListGroup;