import Image from "next/image";
import Link from "next/link";

import Page from "../components/Page";

// import images to enable auto blur while loading (doesn't work for .gif?) and
// auto width/height detection.
import iHeadshot from "../public/images/about/headshot.jpg";
import iCompanies from "../public/images/about/companies.png";

function About() {
  return (
    <Page>
      <div className="hero hero--compact" />
      <div className="profile">
        <div className="wrapper">
          <div className="info__split">
            <div className="profile__photo">
              <Image src={iHeadshot} placeholder="blur" title="Jen" alt="Jen" />
              <figcaption>Photography: Shane Santiago</figcaption>
            </div>
          </div>
          <div className="info__split">
            <h2>
              Hello! I'm Jen <span title="(ar-eh-vah-lo)">Arevalo</span>,
              mononymously known as Homey, and I'm a UI/X designer + developer.
            </h2>
            <p>
              I am currently a senior digital designer at TIAA Bank developing
              tools to help customers reach their financial goals through online
              and mobile app experiences.
            </p>
            <p>
              In addition to designing user-centered digital products and being
              a champion of accessibility, I also serve as President for{" "}
              <a href="https://jacksonville.aiga.org/" target="_blank">
                AIGA Jacksonville
              </a>
              &mdash; a local chapter of the nation’s largest community of
              design advocates.
            </p>
            <p>
              A lover of learning and advancing design, you can find me deep in
              research as I'm presently pursuing an MA in Communication at Johns
              Hopkins University to bridge the gap between human behavior and
              interactions with technology.
            </p>
            <h1>A few of my favorite things.</h1>
            <p>
              Art Direction / Animation / Branding / Content Generation / Coding
              (HTML/CSS Frameworks/JS/Haml/Sass) / Design Thinking / Git /{" "}
              <Link href="/work/illustrations">
                <a>Illustration</a>
              </Link>{" "}
              / Information Architecture / Interface Design /{" "}
              <Link href="/work/lettering">
                <a>Lettering </a>
              </Link>{" "}
              / Motion Graphics /{" "}
              <Link href="/work/posters">
                <a>Poster Design</a>
              </Link>{" "}
              / Rapid Prototyping / Social Media Strategy / User Flows /{" "}
              <Link href="/work/theoffice">
                <a>Video Editing</a>
              </Link>{" "}
              / Visual Design / Web Accessibility, Usability, and Inclusion /
              Wireframing
            </p>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <div className="cappout__companies">
            <h1>In great company!</h1>
            <p>
              A collective of amazing people and teams I've connected with and
              learned from along the way.
              <Image
                src={iCompanies}
                placeholder="blur"
                title="companies"
                alt="companies"
              />
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default About;
