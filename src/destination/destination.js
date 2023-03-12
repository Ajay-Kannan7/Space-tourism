import "./destination.css"
import NavBar from "../navigation/navigation"
import { Tab,Tabs } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';
function DestinationPage(){
    return(
        <div className="destination-page" id="destination-background">
            <NavBar />
            <h1 className="destination-header"><span className="marker">01</span> Pick your destination!</h1>
            <Tabs className="tabs-wrapper" defaultActiveKey={1} id="uncontrolled-tab-example">
                <Tab className="tabs" tabClassName="style-tab" eventKey={1} title="Moon">
                    <div className="content-wrapper">
                        <div className="destination-image">
                            <img src="/images/destination/image-moon.png"></img>
                        </div>
                        <div className="destination-content">
                            <div className="planet-content">
                                <h1>Moon</h1>
                                <p>See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                            </div>
                            <div className="planet-numbers">
                                <div className="numbers">
                                    <h3>AVG. DISTANCE</h3>
                                    <p>384,400 KM</p>
                                </div>
                                <div className="numbers">
                                    <h3>EST. TRAVEL TIME</h3>
                                    <p>3 DAYS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab className="tabs" tabClassName="style-tab" eventKey={2} title="Mars">
                <div className="content-wrapper">
                        <div className="destination-image">
                            <img src="/images/destination/image-mars.png"></img>
                        </div>
                        <div className="destination-content">
                            <div className="planet-content">
                                <h1>MARS</h1>
                                <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
                            </div>
                            <div className="planet-numbers">
                                <div className="numbers">
                                    <h3>AVG. DISTANCE</h3>
                                    <p>225 MIL.KM</p>
                                </div>
                                <div className="numbers">
                                    <h3>EST. TRAVEL TIME</h3>
                                    <p>9 MONTHS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab className="tabs" tabClassName="style-tab" eventKey={3} title="Europa">
                <div className="content-wrapper">
                        <div className="destination-image">
                            <img src="/images/destination/image-europa.png"></img>
                        </div>
                        <div className="destination-content">
                            <div className="planet-content">
                                <h1>EUROPA</h1>
                                <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
                            </div>
                            <div className="planet-numbers">
                                <div className="numbers">
                                    <h3>AVG. DISTANCE</h3>
                                    <p>628 MIL.KM</p>
                                </div>
                                <div className="numbers">
                                    <h3>EST. TRAVEL TIME</h3>
                                    <p>3 YEARS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
                <Tab className="tabs" tabClassName="style-tab" eventKey={4} title="Titan">
                <div className="content-wrapper">
                        <div className="destination-image">
                            <img src="/images/destination/image-titan.png"></img>
                        </div>
                        <div className="destination-content">
                            <div className="planet-content">
                                <h1>TITAN</h1>
                                <p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
                            </div>
                            <div className="planet-numbers">
                                <div className="numbers">
                                    <h3>AVG. DISTANCE</h3>
                                    <p>1.6 BIL.KM</p>
                                </div>
                                <div className="numbers">
                                    <h3>EST. TRAVEL TIME</h3>
                                    <p>7 YEARS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default DestinationPage