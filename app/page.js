import Carosel from "./components/Carosel";
import Dasboard from "./components/Dasboard";
import Navbar from "./components/Navbar";
import Products from "./components/Products";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Dasboard />
      <Carosel />
      <Products />
    </div>
  )
}
