const CopyRight = () => {
    return (
        <div className="orido_tm_section">
            <div className="orido_tm_copyright">
                <div className="container">
                    <div className="copyright_inner">
                        <div className="logo">
                            <img src="img/logo/logo.png" alt="" />
                        </div>
                        <div className="copy">
                            <p>
                                © {new Date().getFullYear()} by{" "}
                                <a href="#">
                                    YoannWilson.
                                </a>{" "}
                                Tous droits réservés
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CopyRight;
