import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NavBar from "../navigation/navigation"
import "./crew.css"
function CrewPage(){

    const settings = {
        dots: false,
        infinite: true,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false
      };
    
    return(
        <div className="crew-page" id="crew-background">
            <NavBar />
            <h1 className="crew-header"><span className="marker">02</span> Meet your crew!</h1>
                <Slider className="carousel" {...settings}>
                    <div className="carousel-page">
                        <img className="carousel-image" src="/images/crew/image-anousheh-ansari.png" />
                        <div className="carousel-content">
                            <h3>FLIGHT ENGINEER</h3>
                            <h1>ANOUSHEH ANSARI</h1>
                            <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari 				was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and 				the first Iranian in space.</p>
                        </div>
                    </div>
                    <div className="carousel-page">
                        <img className="carousel-image" src="/images/crew/image-mark-shuttleworth.png" />
                        <div className="carousel-content">
                            <h3>MISSION SPECIALIST</h3>
                            <h1>MARK SHUTTLEWORTH</h1>
                            <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
                        </div>
                    </div>
                    <div className="carousel-page">
                        <img className="carousel-image" src="/images/crew/image-douglas-hurley.png" />
                        <div className="carousel-content">
                            <h3>COMMANDER</h3>
                            <h1>DOUGLAS HURLEY</h1>
                            <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                        </div>
                    </div>
                    <div className="carousel-page">
                        <img className="carousel-image" src="/images/crew/image-victor-glover.png" />
                        <div className="carousel-content">
                            <h3>PILOT</h3>
                            <h1>VICTOR GLOVER</h1>
                            <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
                        </div>
                    </div>
                </Slider>
        </div>
    )
}

export default CrewPage