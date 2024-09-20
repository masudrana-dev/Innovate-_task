import { BiCollection } from "react-icons/bi"
import Banner from "./Component/Banner"
import Collection from "./Component/Collection"
import Discover from "./Component/Discover"
import Explore from "./Component/Explore"
import Navbar from "./Component/Navbar"
import OverView from "./Component/OverView"
import Photo from "./Component/Photo"
import SimpleSlider from "./Component/SimpleSlider"

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner></Banner>
      <Photo></Photo>
      <Explore></Explore>
      <OverView></OverView>
      {/* <SimpleSlider></SimpleSlider> */}
      <Collection></Collection>
      <Discover></Discover>
    </div>
  )
}

export default App