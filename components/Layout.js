import Header from "../components/Header";

const Layout = props => (
    <div>
        <Header />
        {props.children}
        <div className="bg__"></div>

        <style jsx global>{`
            @import url("https://fonts.googleapis.com/css?family=Muli:300,400,600&display=swap");

            body {
                font-family: "Muli", sans-serif;
                overflow-x: hidden;
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
        `}</style>
    </div>
);

export default Layout;
