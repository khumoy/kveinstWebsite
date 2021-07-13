import '../aboutApp/App.css';
import HeaderApp from '../header/headerApp';
import SectionApp from '../section/sectionApp';
import SectionCard from '../section/sectionCard';
import SectionClients from '../section/sectionClients';
import SectionAboutUs from '../section/sectionAboutUs';
import Price from '../pricing/price';
import AddressCard from '../addressCard/addressCard';

function App() {
  return (
    <div className="container-fluid App">
      <HeaderApp />
      <SectionApp />
      <SectionCard />
      <SectionClients />
      <SectionAboutUs />
      <Price />
      <AddressCard />
    </div>
  );
}
export default App;
