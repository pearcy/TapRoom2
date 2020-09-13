import React from 'react';
import Header from "./components/Header";
import KegList from "./components/KegList"
import Footer from "./components/Footer";
import SignInForm from "./components/SignInForm";
import StyledContainer from './styles';
// import StyledBody from './styles';

function App() {
  return (
    
    <StyledContainer>
      <Header />

      <KegList />
      <SignInForm />
      <Footer /> 

    </StyledContainer>
    // <Footer />


  );
}

export default App;
