const Contact = () => {
    return (
        <div className="orido_tm_section" id="contact">
            <div className="orido_tm_contact">
                <div className="container">
                    <div className="infobox">
                        <div className="video_button">
                            <a
                                className="popup-youtube"
                                href="https://www.youtube.com/watch?v=7e90gBu4pas"
                            >
                                <img
                                    className="anim_circle"
                                    src="img/contact/video.png"
                                    alt=""
                                />
                                <img className="svg" src="img/svg/play.svg" alt="" />
                            </a>
                        </div>
                        <div className="text">
                            <h3>Devenez un héros de Noël !</h3>
                            <p>
                                Contribuez pour apporter des sourires aux enfants dans le besoin. Chaque don, chaque geste compte pour créer des souvenirs magiques et inoubliables.
                            </p>
                        </div>
                        <div className="orido_tm_boxed_button">
                            <a href="#">
                                Contribuez !
                            </a>
                        </div>
                    </div>
                    <div className="connect">
                        <div className="left">
                            <ul>
                                <li>
                                    <span className="name">Téléphone:</span>
                                    <p>
                                        <a className="line_effect" href="#">
                                            +225 07 57 63 22 16
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <span className="name">Email:</span>
                                    <p>
                                        <a className="line_effect" href="#">
                                            support@smith.com
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="right">
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
                                            <img
                                                className="svg"
                                                src="img/svg/social/dribbble.svg"
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img
                                                className="svg"
                                                src="img/svg/social/instagarm.svg"
                                                alt=""
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="element">
                    <img className="svg" src="img/svg/elements.svg" alt="" />
                </span>
                <span className="element2">
                    <img className="svg" src="img/svg/element-2.svg" alt="" />
                </span>
            </div>
        </div>
    );
};
export default Contact;
