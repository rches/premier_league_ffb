import Header from "../components/Header";

const Layout = props => (
    <div>
        <Header />
        {props.children}
        <style jsx global>{`
            @import url("https://fonts.googleapis.com/css?family=Noto+Serif+SC:500,700&display=swap");
            body {
                font-family: "Noto Serif SC";
                font-weight: 700;
                overflow: hidden;
            }
        `}</style>
    </div>
);

export default Layout;
