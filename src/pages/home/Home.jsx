
import "./home.scss"
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"
import {originals,action,trending,popular} from '../../config/url';

const Home = () => {
  
 
  return (
    <div className="home">
        <Navbar />
      <Featured type="movie"/>
      <List title='Netflix Originals' url={originals}/>
      <List title='Action' url={action}/>
      <List title='Trending' url={trending}/>
      <List title='Popular' url={popular}/>
    </div>
  )
}

export default Home
