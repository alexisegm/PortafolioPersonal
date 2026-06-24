import React from 'react';
import { MainLayout } from './components/layout/MainLayout';
import { ToolDetail } from './features/devtools/ToolDetail';

function App() {
  return (
    <MainLayout>
      <ToolDetail />
    </MainLayout>
  );
}

export default App;