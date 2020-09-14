import React from 'react';
import Header from "./components/Header";
import KegList from "./components/KegList"
import AddKeg from "./components/AdKeg";
import StyledContainer from './styles';
// import KegControl from "./KegControl";


function App() {
  return (
    
    <StyledContainer>
      <Header />
      <KegList />
      <AddKeg />
      {/* <KegControl /> */}
    </StyledContainer>
    
  );
}

export default App;
