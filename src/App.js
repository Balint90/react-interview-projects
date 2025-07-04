import logo from './logo.svg';
import './App.css';
import Accordion from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import QrCodeGenerator from './components/qr-code-generator';

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      <Accordion />
      {/* Random color component */}
      <RandomColor />
      {/* Star Rating Component */}
      <StarRating />
      {/* Image Slider Component */}
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page= {'1'} />
      {/* QRCode Generator Component */}
      <QrCodeGenerator />
    </div>
  );
}

export default App;
