import Layout from "../components/Layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
const cheerio = require("cheerio");

const HOF = props => (
    <Layout>
        <div>
            <ul>
                {props.teamData.map((el, i) => (
                    <li key={i}>
                        <a href={el.link}>
                            {" "}
                            Name: {el.name} | Rank: {el.rank} | Record: {el.record}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </Layout>
);

HOF.getInitialProps = async function() {
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
                .text()
                .replace(/\.|\*/g, ""),
            link: `https://archive.fantasysports.yahoo.com${$(el)
                .children(".team")
                .children("a")
                .attr("href")}`,
            record: $(el)
                .children(":nth-child(3)")
                .text()
        };
    });

    console.log(`Show data fetched. Count: ${teamData}`);

    return {
        teamData: teamData
    };
};

export default HOF;
