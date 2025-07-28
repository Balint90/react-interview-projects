import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';
import RandomColor from './components/RandomColor';
import StarRating from './components/StarRating';
import ImageSlider from './components/ImageSlider';
import QrCodeGenerator from './components/QRCodeGenerator';
import LoadMoreData from './components/LoadMoreData';
import TreeView from './components/TreeView';
import menus from './components/TreeView/data';
import LightDarkMode from './components/LightDarkMode';
import ScrollIndicator from './components/CustomScrollIndicator';
import TabTest from './components/CustomTabs/tab-test';

function App() {
  return (
    <div className="App">
      {/* Accordion component */}
      {/* <Accordion /> */}
      {/* Random color component */}
      {/* <RandomColor /> */}
      {/* Star Rating Component */}
      {/* <StarRating /> */}
      {/* Image Slider Component */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page={'1'} /> */}
      {/* QRCode Generator Component */}
      {/* <QrCodeGenerator /> */}
      {/* Load more button */}
      {/* <LoadMoreData /> */}
      {/* Tree View */}
      {/* <TreeView menus={menus} /> */}
      {/* LightDarkMode */}
      {/* <LightDarkMode /> */}
      {/* ScrollIndicator */}
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />
      {/* Custom Tabs Component */}
      <TabTest />
    </div>
  );
}

export default App;
