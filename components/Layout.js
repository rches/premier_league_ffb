import Header from "../components/Header";

const Layout = props => (
    <div>
        <Header />
        {props.children}
        <style jsx global>{`
            @import url("https://fonts.googleapis.com/css?family=Muli:300,400,600&display=swap");

            body {
                font-family: "Muli", sans-serif;
                overflow-x: hidden;

                 {
                    /* background: #1f1f1f; */
                }
            }
        `}</style>
    </div>
);

export default Layout;
