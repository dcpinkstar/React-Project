import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import './App.css';
import CampsitesList from './features/campsites/CampsitesList';

function App() {
    return (
        <div className='App'>
            <Header />
            <CampsitesList />
            <Footer />
        </div>
    );
};

export default App;