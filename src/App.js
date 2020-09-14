import React from 'react';
import Header from "./components/Header";
import StyledContainer from './styles';
import KegControl from "./components/KegControl";


function App() {
  return (
    
    <StyledContainer>
      <Header />
      {/* <KegList /> */}
      {/* <AddKeg /> */}
      <KegControl />
    </StyledContainer>
    
  );
}

export default App;
