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
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                text-decoration: none;
            }

            .linkitem__ {
                padding-left: 0.5rem;
                padding-right: 3rem;
            }

            a {
                text-decoration: none;
            }
        `}</style>
    </div>
);

export default Header;
