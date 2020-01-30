import Layout from "../components/Layout";

export default function Index() {
    return (
        <div>
            <Layout>
                <div className="page__">
                    <div className="container__">
                        <img
                            src="static\dave-adamson-XXqNsborcjU-unsplash.jpg"
                            alt="football on grass"
                            className="hero__"
                        ></img>
                        <div className="header__">
                            <h1>PREMIER LEAGUE FFB</h1>
                        </div>
                    </div>
                </div>
                {/* <div className="second__container__"></div> */}
            </Layout>
            <style jsx>
                {`
                     {
                        /* .second__container__ {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: -3;
                    } */
                    }

                    .page__ {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .container__ {
                        display: flex;
                        flex-direction: row-reverse;
                        height: 80vh;
                        width: 70vw;
                        overflow: hidden;
                        background: #2f2f2f;
                        z-index: -2;
                    }

                    .hero__ {
                        align-self: end;
                        max-width: 65%;
                        z-index: -1;
                    }

                    .header__ {
                        width: 70%;
                        background: #fff;
                        z-index: 1;
                    }

                    h1 {
                    }
                `}
            </style>
        </div>
    );
}
