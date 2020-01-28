import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

export default function Blog() {
    return (
        <Layout>
            <h1>From the Desk of the Commish</h1>
            <ul>
                <PostLink id="and-the-winner-is" />
                <PostLink id="welcome-back" />
                <PostLink id="another-post" />
            </ul>
        </Layout>
    );
}
