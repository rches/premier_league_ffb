import Layout from "../components/Layout";
import fetch from "node-fetch";

const league_id = "906945";

const League = info => {
    return (
        <Layout>
            <h1>
                The value of info is:
                {info[0]}
            </h1>
        </Layout>
    );
};

export async function getStaticProps() {
    // Call an external API endpoint to get data.
    //TODO - need to understand how to pass tokens/oauth information along with node-fetch

    const res = await fetch(`https://fantasysports.yahooapis.com/fantasy/v2/league/nfl.l.${league_id}`);
    const info = await res.json();

    console.log(info);

    return {
        props: {
            info
        }
    };
}

export default League;
