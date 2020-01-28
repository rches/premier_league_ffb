import Header from "../components/Header";

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: "1px solid #DDD"
};

const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
        <style jsx global>{`
            @import url("https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap");

            body {
                background: #ddd;
                font-family: "Bebas Neue";
            }

            .parent__ {
                display: flex;
            }
        `}</style>
    </div>
);

export default Layout;
