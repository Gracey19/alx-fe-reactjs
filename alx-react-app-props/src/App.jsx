import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext';

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com"
  };

  return (
    <UserContext.Provider value={userData}>
      <Header />
      <MainContent />
      <WelcomeMessage />
      <ProfilePage />
      <Footer />
    </UserContext.Provider>
  );
}

export default App;

