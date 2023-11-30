import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SearchBar from './components/SearchBar/SearchBar';
import AdminUIDashboard from './components/AdminUIDashboard/AdminUIDashboard';

function App() {
  return (
    <div>
      <Header/>
      <AdminUIDashboard/>
      <Footer/>
    </div>
  );
}

export default App;
