import {BrowserRouter} from 'react-router-dom'

import AppRouter from './components/appRouter'
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter>
        
      </AppRouter>
    </BrowserRouter>
  );
}

export default App