import "./home.css"
import { Link } from "react-router-dom"
import NavBar from "../navigation/navigation"
function HomePage(){
    return(
        <div className="home-page"  id="home-background">
            <NavBar />
            <div className="content">
                <div className="home-banner">
                    <h3>SO, YOU WANT TO TRAVEL TO</h3>
                    <h1>SPACE</h1>
                    <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className="explore">
                    <Link className="link" to="/destination">Explore</Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage