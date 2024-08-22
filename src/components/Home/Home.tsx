import Image from "next/image";
import ContribuateBtn from "../_components/contribuateBtn/ContribuateBtn";

const Home = () => {
    return (
        <div className="orido_tm_hero orido_tm_section" id="home">
            <div className="container">
                <div className="content">
                    <div className="details">
                        <div className="short">
                            <h3>
                                <img className="w-[80px] h-[85px]" src="img/svg/I_noel.svg" alt="" />donne du sourire <img className="svg" src="img/svg/noel.svg" alt="" />
                            </h3>
                            <span className="job">2eme Edition</span>
                        </div>
                        <div className="text">
                            <p>
                                Apportez des sourires aux enfants défavorisés et offrez-leur un Noël inoubliable, plein {"d'amour"} et {"d'espoir"}.
                            </p>
                        </div>
                        <div className="buttons">
                            <ContribuateBtn />
                            {/* <div className="orido_tm_simple_button">
                <a className="line_effect anchor" href="#portfolio">
                  My Works{" "}
                  <img className="svg" src="img/svg/top-arrow.svg" alt="" />
                </a>
              </div> */}
                        </div>
                    </div>
                </div>
                <div className="orido_tm_follow">
                    <span>Nos médias</span>
                    <ul>
                        <li>
                            <a href="#">
                                <img className="svg" src="img/svg/social/be.svg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img className="svg" src="img/svg/social/dribbble.svg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img className="svg" src="img/svg/social/instagarm.svg" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <div className="orido_tm_down">
        <a className="anchor" href="#about">
          <img
            className="svg"
            src={`img/svg/${dark ? "down_button_light" : "down_button"}.svg`}
            alt=""
          />
        </a>
      </div> */}
            <div className="avatar">
                <div className="img">
                    <img src="img/hero/1.jpg" alt="" />
                    <div className="video_button">
                        <a
                            className="popup-youtube"
                            href="#"
                        >
                            <img className="anim_circle" src="img/hero/welcome.png" alt="" />
                            <img className="svg" src="img/svg/play.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
