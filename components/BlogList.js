import Link from "next/link";
import ReactMarkdown from "react-markdown";

const BlogList = props => {
    let leadText;
    return (
        <div>
            <ul>
                <div className="card__grid__">
                    {props.allBlogs
                        .map(post => (
                            <Link
                                key={post.slug}
                                href={{ pathname: `/blog/${post.slug}` }}
                                date={post.document.data.date}
                            >
                                <a className="link__">
                                    <div className="card__">
                                        <li>
                                            <div>
                                                <h3>
                                                    {post.document.data.title}
                                                </h3>
                                                <h6>
                                                    {
                                                        post.document.data
                                                            .category
                                                    }
                                                </h6>
                                                <div>
                                                    <ReactMarkdown
                                                        source={`${post.document.content.slice(
                                                            0,
                                                            150
                                                        )}...`}
                                                    />
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                </a>
                            </Link>
                        ))
                        .sort(function(a, b) {
                            return (
                                new Date(b.props.date) - new Date(a.props.date)
                            );
                        })}
                </div>
            </ul>
            <style jsx>{`
                .card__grid__ {
                    display: flex;
                    flex-wrap: wrap;
                    align-content: space-evenly;
                    justify-content: center;
                    list-style: none;
                    margin-left: -5rem;
                }

                a.link__ {
                    text-decoration: none;
                    width: 20vw;
                    height: 50vh;
                    margin: 5rem;
                }

                .card__ {
                    position: relative;
                    background: #333;
                    width: 20vw;
                    height: 50vh;
                    border-radius: 6px;
                    padding: 2rem;
                    color: #aaa;
                    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.2),
                        0 0 1rem rgba(0, 0, 0, 0.2);
                    overflow: hidden;
                }
            `}</style>
        </div>
    );
};

export default BlogList;
