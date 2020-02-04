import Link from "next/link";

const Header = () => (
    <div className="navbar__">
        <div className="linkitem__">
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
        <div className="linkitem__">
            <Link href="/about">
                <a>About</a>
            </Link>
        </div>
        <div className="linkitem__">
            <Link href="/blog">
                <a>Blog</a>
            </Link>
        </div>
        <style jsx>{`
            .navbar__ {
                width: 100vw;
                position: -webkit-sticky;
                position: sticky;
                top: 0px;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                text-decoration: none;
                background: #212121;
                margin-top: -1rem;
                margin-left: -0.5rem;
                margin-right: 0rem;
                padding: 1rem;
                z-index: 5;
            }

            .linkitem__ {
                padding-left: 2rem;
                padding-right: 5rem;
            }

            a {
                text-decoration: none;
            }
        `}</style>
    </div>
);

export default Header;
