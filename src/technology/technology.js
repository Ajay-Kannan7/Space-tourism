import NavBar from "../navigation/navigation"
import { Tab,Tabs } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';
import "./technology.css"
function TechnologyPage(){
    return(
        <div className="technology-page" id="technology-background">
            <NavBar />
            <h1 className="technology-header"><span className="marker">03</span> Space Launch!</h1>
            <div className="tech-tabs-parent-wrapper">
                <Tabs className="tech-tabs-wrapper" defaultActiveKey={1} id="uncontrolled-tab-example">
                    <Tab className="tabs" tabClassName="tech-style-tab" eventKey={1} title="1">
                        <div className="content-wrapper">
                            <div className="technology-content">
                                <h1>LAUNCH VEHICLE</h1>
                                <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                            </div>
                            <div className="technology-image">
                                <img src="/images/technology/image-launch-vehicle-landscape.jpg"></img>
                            </div>
                        </div>
                    </Tab>
                    <Tab className="tabs" tabClassName="tech-style-tab" eventKey={2} title="2">
                        <div className="content-wrapper">
                            <div className="technology-content">
                                <h1>SPACEPORT SITE</h1>
                                <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
                            </div>
                            <div className="technology-image">
                                <img src="/images/technology/image-spaceport-landscape.jpg"></img>
                            </div>
                        </div>
                    </Tab>
                    <Tab className="tabs" tabClassName="tech-style-tab" eventKey={3} title="3">
                        <div className="content-wrapper">
                            <div className="technology-content">
                                <h1>SPACE CAPSULE</h1>
                                <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
                            </div>
                            <div className="technology-image">
                                <img src="/images/technology/image-space-capsule-landscape.jpg"></img>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default TechnologyPage