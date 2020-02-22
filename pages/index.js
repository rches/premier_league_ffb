import Layout from "../components/Layout";

export default function Index() {
    return (
        <div>
            <Layout>
                <div className="container__ prem__">
                    <h1 className="liner__">THE</h1>
                    <h1 className="header__">PREMIER</h1>
                </div>
                <div className="container__ leag__">
                    <h1 className="header__ ">LEAGUE</h1>
                    <h1 className="liner__">FFB</h1>
                </div>

                <div className="container__">
                    <div className="hero__">
                        <img
                            src="static\john-torcasio-6bAJVum2wEQ-unsplash.jpg"
                            alt="football player"
                            className="hero__img"
                        ></img>
                    </div>
                </div>
                <div className="container__">
                    <div className="quotecontainer__">
                        <div className="blockquote__">
                            <h3>
                                When you're good at something, you'll tell
                                everyone.
                                <br></br>
                                <br></br>
                                When you're great at something, they'll tell
                                you.
                            </h3>
                            <span></span>
                            <p className="attr__">-Walter Payton</p>
                        </div>
                    </div>
                </div>
                <div className="container__">
                    <div className="chartercontainer__">
                        <div className="charter__">
                            <h3>The Official Charter of The Premier League</h3>
                            <p>
                                Established the Twenty-Fourth day of July in the
                                year 2019
                            </p>

                            <br></br>
                            <br></br>
                            <p>
                                Let it be known that on completion of all
                                signatories, the formation and founding of The
                                Primier League shall be erected and established.
                                Above all else, all shall maintain good spirits
                                and recognize that the Primier League is above
                                all, a place to enjoy the atmosphere provided by
                                fellow League Managers. The purpose of this
                                group shall be as follows in the proceeding
                                outline.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg__"></div>
            </Layout>
            <style jsx>
                {`
                    @import url("https://fonts.googleapis.com/css?family=Vast+Shadow&display=swap");
                    .container__ {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 1;
                    }

                    .hero__ {
                        height: 45vh;
                        width: 75vw;
                        overflow: hidden;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: inset 0px 0px 150px 75px #212121;
                        border-radius: 15px 15px 0px 0px;
                        padding-top: 50px;
                    }

                    .hero__img {
                        width: 130%;
                        z-index: -1;
                        filter: grayscale(80%) contrast(160%);
                        margin-left: -50px;
                        margin-top: 50px;
                    }

                    .bg__ {
                        width: 110vw;
                        position: fixed;
                        color: #ff43ea;
                        z-index: -100;
                    }

                    .bg__::before {
                        content: "";
                        top: -50px;
                        left: -10px;
                        width: 110%;
                        height: 110%;
                        position: fixed;
                        box-shadow: inset 0px 20px 150px 75px #212121;
                        background-image: url("static/anders-krogh-jorgensen-sYY1FlMHOV4-unsplash.jpg");
                        background-size: cover;
                        filter: sepia(50%) saturate(2) grayscale(90%);
                        z-index: -100;
                    }

                    .header__ {
                        font-size: 6rem;
                        color: #212121;
                        font-family: "Vast Shadow", cursive;
                        transform: skewX(-25deg);
                    }

                    .prem__ {
                        margin-bottom: -10rem;
                        margin-left: -5rem;
                    }

                    .leag__ {
                        margin-bottom: -5rem;
                        margin-left: 10rem;
                    }

                    .liner__ {
                        font-size: 2rem;
                        color: #e8e8e8;
                        color: #212121;
                        font-family: "Vast Shadow", cursive;
                        transform: skewX(-25deg);
                    }

                    .quotecontainer__ {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 1;
                        width: 75vw;
                        background-color: #e8e8e8;
                        padding-top: 20px;
                        padding-bottom: 20px;
                    }

                    .blockquote__ {
                        position: relative;
                        font-family: "Montserrat", sans-serif;
                        font-weight: 800;
                        color: #212121;
                        padding: 30px 0;
                        z-index: 4;
                        align-self: center;
                        border-top: solid 1px;
                        border-bottom: solid 1px;
                        width: 50%;
                    }

                    .blockquote__ h3 {
                        position: relative;
                        color: #6b6b6b;
                        font-size: 40px;
                        font-weight: 800;
                        line-height: 1;
                        margin: 0;
                    }

                    .blockquote__::after {
                        position: absolute;
                        content: "”";
                        color: #212121;
                        font-size: 20rem;
                        line-height: 0;
                        bottom: -43px;
                        right: -40px;
                    }

                    .attr__ {
                        position: relative;
                        color: #292a2b;
                        font-size: 1.4rem;
                        font-weight: normal;
                        line-height: 1;
                        margin: 0;
                        padding-top: 20px;
                        z-index: 1;
                        left: 50%;
                    }

                    .chartercontainer__ {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: 1;
                        width: 75vw;
                        background-color: #6b6b6b;
                        z-index: -1;
                    }

                    .charter__ {
                        margin-top: 3rem;
                        width: 50%;
                    }
                `}
            </style>
        </div>
    );
}
