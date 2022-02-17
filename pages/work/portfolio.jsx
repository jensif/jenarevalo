import Image from "next/image";

import Page from "../../components/Page";

// import images to enable auto blur while loading (doesn't work for .gif?) and
// auto width/height detection.
import iHero from "../../public/images/work/portfolio-hero.jpg";
import iSketches from "../../public/images/work/portfolio-sketches.jpg";
import iScreens from "../../public/images/work/portfolio-screens.jpg";
import iAtom from "../../public/images/work/portfolio-atom.jpg";
import iGithub from "../../public/images/work/portfolio-github.jpg";

export default function Portfolio() {
  return (
    <Page>
      <div className="hero hero--work"></div>
      <div className="summary">
        <div className="wrapper">
          <div className="summary__photo">
            <Image
              src={iHero}
              placeholder="blur"
              title="Portfolio"
              alt="Portfolio"
            />
            <div className="photo__flag">
              <p>Visual Design / UI / UX</p>
              <h3>Portfolio</h3>
            </div>
          </div>
          <div className="summary__title">
            <h1>Portfolio</h1>
            <p>Built with HAML and Sass, mixed with Bourbon and Neat</p>
          </div>
          <div className="summary__credits">
            <ul>
              <li>Role: Visual Design / UI / UX</li>
            </ul>
          </div>
          <div className="summary__description">
            <p>
              Using a templated, content management website builder is great to
              use for quick site setups, but it doesn't allow you to customize
              or represent coding skills. The WYSIWYG format can deter and often
              handicap your role as a designer.
            </p>
            <p>
              Over the past few months, I spent time honing my skills in the
              development track by taking refresher courses with Code School and
              Treehouse with an emphasis in Ruby on Rails and version control. I
              decided to recreate my portfolio as a static site, a Middleman
              portfolio built using Rails, Bourbon, Neat, Sass, Haml, and
              following the BEM syntax. The site is a work in progress and I
              plan to continue making improvements as I experiment and learn new
              techniques.
            </p>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            Knowing the amount content I wanted to feature, I began sketching
            out the grids and functionality of each page. How would the projects
            be laid out? Where would the navigation go? Making mentions of
            whether the navigator was fixed or the photo was set in a container
            made it easier to communicate this into Sketch. The idea of
            showcasing the project with an emphasis on the role would enable a
            viewer to see the range of skillsets.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iSketches}
            placeholder="blur"
            title="sketches"
            alt="sketches"
          />
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            I transferred my sketches into Sketch to prototype the flow and how
            the layout would appear in different screen scales. This is one of
            the many advantages of building a custom site versus a blogging
            platform.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iScreens}
            placeholder="blur"
            title="portfolio screens"
            alt="portfolio screens"
          />
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            Middleman's ease of use made the project beneficial with rapid
            prototyping and streamlining the development process. I had years of
            HTML/CSS experience under my belt, but I needed to push my skills
            further by working in Haml and Sass to keep up with industry trends.
            Another perk of creating my site was the open-source feature.
            Designers and developers could check out the code on{" "}
            <a
              href="http://github.com/jensif/jenarevalo"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iAtom}
              placeholder="blur"
              title="Using Atom"
              alt="Using Atom"
            />
          </div>
          <div className="details__split">
            <Image
              src={iGithub}
              placeholder="blur"
              title="portfolio GitHub"
              alt="portfolio GitHub"
            />
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            Key takeaways were creating markup in one place without the hassle
            of going into other pages to update the nav and footer. Yay for
            components and adding partials to compartmentalize code! So, where
            would I like to take this next?
          </p>
        </div>
      </div>
    </Page>
  );
}
