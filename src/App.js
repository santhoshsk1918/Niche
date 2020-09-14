import React from 'react';
import {Container} from 'react-bootstrap';
import IncrementList from './Components/IncrementList';
import WelcomeMessage from './Components/WelcomeMessage';
import IncrementContextProvider from "./Context/IncrementContext";

function App() {
  return (
    <React.Fragment>
      <WelcomeMessage />
      <Container>
        <IncrementContextProvider>
          <IncrementList />
        </IncrementContextProvider>
      </Container>
    </React.Fragment>
  );
}

export default App;
