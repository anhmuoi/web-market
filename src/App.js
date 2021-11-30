
import BestProducts from './components/BestProducts/index.jsx';
import Brand from './components/Brand/index.jsx';
import Introduction from './components/Introduction/index.jsx';
import MainBanner from './components/MainBanner/index.jsx';
import Nav from './components/Nav/index.jsx';
import Products from './components/Products/index.jsx';
import Issue from './components/Issue/index.jsx';
import './styles/app.scss';
import Video from './components/Video/index.jsx';
import Footer from './components/Footer/index.jsx';

function App() {
  return (
    <div className="App">
      <Nav />
      <MainBanner />
      <Introduction />
      <BestProducts />
      <Products />
      <Brand />
      <Issue />
      <Video />
      <Footer />
    </div>
  );
}

export default App;
