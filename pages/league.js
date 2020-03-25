import Layout from "../components/Layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
const cheerio = require("cheerio");

const League = props => (
    <Layout>
        <div>
            <ul>
                {props.teamData.map((el, i) => (
                    <li key={i}>
                        <a href={el.link}>
                            {" "}
                            Name: {el.name} | Rank: {el.rank}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </Layout>
);

League.getInitialProps = async function() {
    const res = await fetch("https://archive.fantasysports.yahoo.com/nfl/2019/906945?lhst=stand#lhststand");
    const data = await res.text();
    const $ = cheerio.load(data);
    const teamData = [];

    const getTeamName = $("table#standingstable tbody tr").each(function(i, el) {
        teamData[i] = {
            name: $(el)
                .children(".team")
                .text(),
            rank: $(el)
                .children(".first")
                .text(),
            link: `https://archive.fantasysports.yahoo.com${$(el)
                .children(".team")
                .children("a")
                .attr("href")}`
        };
    });

    console.log(`Show data fetched. Count: ${teamData}`);

    return {
        teamData: teamData
    };
};

export default League;
