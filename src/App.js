import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';import './App.css';
import Register from './User/Register';
import LoginScreen from './User/Login';
import ChatUI from './User/Chat';
import UsersList from './User/getusers';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/chat" element={<ChatUI />} />
        <Route path="/users" element={<UsersList />} />

      </Routes>
    </Router>
  );
}

export default App;