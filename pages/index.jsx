import Image from "next/image";
import Link from "next/link";

import Page from "../components/Page";

// import images to enable auto blur while loading (doesn't work for .gif?) and
// auto width/height detection.
import iBoundless from "../public/images/work/boundlessvr-thumb.jpg";
import iLevelUp from "../public/images/work/levelup-thumb.jpg";
import iReadyForMore from "../public/images/work/rfm-thumb.jpg";
import iAlwaysSummer from "../public/images/work/always-summer-thumb.jpg";
import iCourage from "../public/images/work/courage-awards-thumb.jpg";
import iCyanna from "../public/images/work/cyanna-thumb.jpg";
import iWwpImpact from "../public/images/work/wwp-impact-thumb.jpg";
import iIld from "../public/images/work/ild-thumb.jpg";
import iOffice from "../public/images/work/the-office-thumb.jpg";
import iDoglog from "../public/images/work/doglog-thumb.jpg";
import iPortfolio from "../public/images/work/portfolio-thumb.jpg";
import iThePost from "../public/images/work/the-post-thumb.jpg";

export default function Home() {
  return (
    <Page>
      <div className="hero">
        <div className="wrapper">
          <h1>ui/x designer + developer</h1>
          <Image
            src="/images/gem.gif"
            alt="gem animation"
            title="Don't be a hard rock when you really are a gem."
            width={1132}
            height={235}
          />
        </div>
      </div>
      <div className="showcase">
        <div className="wrapper">
          <ul className="showcase__gallery">
            <li className="gallery__project">
              <Link href="/work/boundlessvr">
                <a>
                  <Image
                    src={iBoundless}
                    placeholder="blur"
                    alt="Boundless Florida VR"
                    title="Boundless Florida VR"
                  />
                  <figure>
                    <h4>Boundless VR</h4>
                    <h5>UI / UX / Mobile App Design</h5>
                  </figure>
                </a>
              </Link>
            </li>
            <li className="gallery__project">
              <Link href="/work/levelup">
                <a>
                  <Image
                    src={iLevelUp}
                    placeholder="blur"
                    title="Level Up"
                    alt="Level Up"
                  />
                  <figure>
                    <h4>Level Up</h4>
                    <h5>Visual Design / Front-End</h5>
                  </figure>
                </a>
              </Link>
            </li>
            <li className="gallery__project">
              <Link href="/work/rfm">
                <a>
                  <Image
                    src={iReadyForMore}
                    placeholder="blur"
                    title="Ready For More?"
                    alt="Ready For More?"
                  />
                  <figure>
                    <h4>Ready For More?</h4>
                    <h5>Branding / UI / UX / Front-End</h5>
                  </figure>
                </a>
              </Link>
            </li>
            <li className="gallery__project">
              <Link href="/work/alwayssummer">
                <a>
                  <Image
                    src={iAlwaysSummer}
                    placeholder="blur"
                    title="Always Summer"
                    alt="Always Summer"
                  />
                  <figure>
                    <h4>Always Summer</h4>
                    <h5>Creative Direction</h5>
                  </figure>
                </a>
              </Link>
            </li>
            <li className="gallery__project">
              <Link href="/work/courageawards">
                <a>
                  <Image
                    src={iCourage}
                    placeholder="blur"
                    title="Courage Awards"
                    alt="Courage Awards"
                  />
                  <figure>
                    <h4>Courage Awards</h4>
                    <h5>Branding / Print / UX</h5>
                  </figure>
                </a>
              </Link>
            </li>
            <li className="gallery__project">
              <Link href="/work/cyanna">
                <a>
                  <Image
                    src={iCyanna}
                    placeholder="blur"
                    title="Cyanna"
                    alt="Cyanna"
                  />
                  <figure>
                    <h4>Cyanna</h4>
                    <h5>Visual Design / Front-End</h5>
                  </figure>
                </a>
              </Link>
            </li>
            <li className="gallery__project">
              <Link href="/work/wwpimpact">
                <a>
                  <Image
                    src={iWwpImpact}
                    placeholder="blur"
                    title="Impact Campaign"
                    alt="Impact Campaign"
                  />
                  <figure>
                    <h4>WWP Impact</h4>
                    <h5>Visual Design / UI / UX</h5>
                  </figure>
                </a>
              </Link>
            </li>
            <li className="gallery__project">
              <Link href="/work/ild">
                <a>
                  <Image
                    src={iIld}
                    placeholder="blur"
                    title="I Love Design"
                    alt="I Love Design"
                  />
                  <figure>
                    <h4>I Love Design</h4>
                    <h5>Design / Motion Graphics</h5>
                  </figure>
                </a>
              </Link>
            </li>
            <li className="gallery__project">
              <Link href="/work/theoffice">
                <a>
                  <Image
                    src={iOffice}
                    placeholder="blur"
                    title="Office Mural"
                    alt="Office Mural"
                  />
                  <figure>
                    <h4>The Office</h4>
                    <h5>Video Production</h5>
                  </figure>
                </a>
              </Link>
            </li>
            <li className="gallery__project">
              <Link href="/work/doglogapp">
                <a>
                  <Image
                    src={iDoglog}
                    placeholder="blur"
                    title="DogLog"
                    alt="DogLog"
                  />
                  <figure>
                    <h4>DogLog</h4>
                    <h5>Visual Design / UI / UX</h5>
                  </figure>
                </a>
              </Link>
            </li>
            <li className="gallery__project">
              <Link href="/work/portfolio">
                <a>
                  <Image
                    src={iPortfolio}
                    placeholder="blur"
                    title="Portfolio"
                    alt="Portfolio"
                  />
                  <figure>
                    <h4>Portfolio</h4>
                    <h5>Visual Design / UI / UX</h5>
                  </figure>
                </a>
              </Link>
            </li>
            <li className="gallery__project">
              <Link href="/work/thepost">
                <a>
                  <Image
                    src={iThePost}
                    placeholder="blur"
                    title="The Post"
                    alt="The Post"
                  />
                  <figure>
                    <h4>The Post</h4>
                    <h5>UI / UX / Data Visualization</h5>
                  </figure>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Page>
  );
}
