import BrandBar from "../components/BrandBar";
import TypeBar from "../components/TypeBar";
import DeviceList from "../components/DeviceList";
import '../styles/shop.scss'

const Shop = () => {
  return (
    <main className="shop">
      <TypeBar />
      <BrandBar />
      <DeviceList />
    </main>
  );
}

export default Shop