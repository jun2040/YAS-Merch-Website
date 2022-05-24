import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

// Import CSS
import './App.css';
import Footer from './components/global/Footer.comp';
import Navbar from './components/global/Navbar.comp';
import Sidebar from './components/store/Sidebar.comp';

// Import pages
import HomePage from './pages/Home.page';
import ProductPage from './pages/Product.page';
import StorePage from './pages/Store.page';

// App function component
const App: FC = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='store' element={<StorePage />} />
                <Route path='/store/:productId' element={<ProductPage />} />
                <Route path='*' element={<h1>404 Not Found</h1>} />
            </Routes>
        </>
    )
}

// Export component
export default App;
