import React from 'react';
import './styles/vars.css'; // import all css variables
import './styles/global.css'; // global style

// components
import Sidebar from './components/sidebar';
import Container from './components/container';
import Content from './components/content';

function App() {
  return (
    <Container>
      <Sidebar />
      <Content />
    </Container>
  );
}

export default App;
