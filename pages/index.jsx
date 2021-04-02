import Image from "next/image";
import Link from "next/link";

import Page from "../components/Page";

function Home() {
  return (
    <Page title="Jen Arevalo UI/X Designer + Developer">
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
                    src="/images/work/boundlessvr-thumb.jpg"
                    alt="Boundless Florida VR"
                    width={500}
                    height={500}
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
                    src="/images/work/levelup-thumb.jpg"
                    title="Level Up"
                    alt="Level Up"
                    width={500}
                    height={500}
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
                    src="/images/work/rfm-thumb.jpg"
                    title="Ready For More?"
                    alt="Ready For More?"
                    width={500}
                    height={500}
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
                    src="/images/work/always-summer-thumb.jpg"
                    title="Always Summer"
                    alt="Always Summer"
                    width={500}
                    height={500}
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
                    src="/images/work/courage-awards-thumb.jpg"
                    title="Courage Awards"
                    alt="Courage Awards"
                    width={500}
                    height={500}
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
                    src="/images/work/cyanna-thumb.jpg"
                    title="Cyanna"
                    alt="Cyanna"
                    width={500}
                    height={500}
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
                    src="/images/work/wwp-impact-thumb.jpg"
                    title="Impact Campaign"
                    alt="Impact Campaign"
                    width={500}
                    height={500}
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
                    src="/images/work/ild-thumb.jpg"
                    title="I Love Design"
                    alt="I Love Design"
                    width={500}
                    height={500}
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
                    src="/images/work/the-office-thumb.jpg"
                    title="Office Mural"
                    alt="Office Mural"
                    width={500}
                    height={500}
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
                    src="/images/work/doglog-thumb.jpg"
                    title="DogLog"
                    alt="DogLog"
                    width={500}
                    height={500}
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
                    src="/images/work/portfolio-thumb.jpg"
                    title="Portfolio"
                    alt="Portfolio"
                    width={500}
                    height={500}
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
                    src="/images/work/the-post-thumb.jpg"
                    title="The Post"
                    alt="The Post"
                    width={500}
                    height={500}
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

export default Home;

// = partial "shared/contact"
