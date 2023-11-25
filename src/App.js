// src/App.js
import React from 'react';
import styled from 'styled-components';
import GoogleMap from './GoogleMap';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <GoogleMap />
    </AppContainer>
  );
}

export default App;
