import Image from "next/image";

import Page from "../../components/Page";

// import images to enable auto blur while loading (doesn't work for .gif?) and
// auto width/height detection.
import iHero from "../../public/images/work/cyanna-hero.jpg";
import iBrand1 from "../../public/images/work/cyanna-marketing-brand-1.jpg";
import iBrand2 from "../../public/images/work/cyanna-marketing-brand-2.jpg";
import iScreen from "../../public/images/work/cyanna-screen.gif";
import iEmail1 from "../../public/images/work/cyanna-acics-email-1.jpg";
import iEmail2 from "../../public/images/work/cyanna-acics-email-2.jpg";
import iEmailTech from "../../public/images/work/cyanna-tech-email.jpg";
import iEmailSara from "../../public/images/work/cyanna-sara-email.jpg";
import iEdvera from "../../public/images/work/cyanna-edvera-screens.png";
import iEdveraCampaign from "../../public/images/work/cyanna-edvera-value-email.gif";
import iEdveraVisible from "../../public/images/work/cyanna-edvera-visible.gif";
import iEdveraValue from "../../public/images/work/cyanna-edvera-value.gif";
import iEdveraVirtue from "../../public/images/work/cyanna-edvera-virtue.gif";
import iEdveraVoiced from "../../public/images/work/cyanna-edvera-voiced.gif";
import iEdveraValidated from "../../public/images/work/cyanna-edvera-validated.gif";
import iEdveraVolume from "../../public/images/work/cyanna-edvera-volume.gif";
import iEdveraVirtual from "../../public/images/work/cyanna-edvera-virtual.gif";
import iEdveraVetted from "../../public/images/work/cyanna-edvera-vetted.gif";
import iEdveraVerified from "../../public/images/work/cyanna-edvera-verified.gif";
import iEdveraVerity from "../../public/images/work/cyanna-edvera-verity.gif";

export default function Cyanna() {
  return (
    <Page>
      <div className="hero hero--work" />
      <div className="summary">
        <div className="wrapper">
          <div className="summary__photo">
            <Image src={iHero} placeholder="blur" title="Cyanna" alt="Cyanna" />
            <div className="photo__flag">
              <p>Visual Design / Front-End</p>
              <h3>Cyanna</h3>
            </div>
          </div>
          <div className="summary__title">
            <h1>Cyanna</h1>
            <p>Web-based business workflow campaign</p>
          </div>
          <div className="summary__credits">
            <ul>
              <li>
                Client:{" "}
                <a href="https://www.cyanna.com/" target="_blank">
                  Cyanna
                </a>
              </li>
              <li>Role: Visual Design, Front-End Development</li>
            </ul>
            <ul>
              <li>Team: Laura Rees, Jen Lamkin, David Grimes</li>
              <li>Creative Direction: Jen Arevalo</li>
              <li>Video: Matt Lewis</li>
            </ul>
          </div>
          <div className="summary__description">
            <p>
              Cyanna Education Services is a leading provider of customized
              software solutions and consulting advisory services to educational
              institutions & state agencies.
            </p>
            <p>
              As a consultant for Cyanna, my duties were to execute brand
              initiatives and apply digital, web development, and video
              production for educational institutions including colleges,
              universities, trade schools, career schools, K-12, and ESL
              schools.
            </p>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            It was important to create a consistent experience for the company
            to utilize, and for customers to have familiarity with a confident
            and experienced brand. The marketing brand would branch into video
            production, email campaigns, and keynotes.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iBrand1}
              placeholder="blur"
              title="Cyanna marketing icons and colors"
              alt="Cyanna marketing icons and colors"
            />
          </div>
          <div className="details__split">
            <Image
              src={iBrand2}
              placeholder="blur"
              title="Cyanna imagery and typography"
              alt="Cyanna imagery and typography"
            />
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            The marketing and consulting team collaborated to create the
            Accrediting Council of Independent Colleges and Schools (ACICS)
            campaign, to alert and notify accredited schools of the Department
            of Education's to terminate ACICS as a nationally recognized
            accrediting agency. The landing page would address the needs for
            alternative accreditors and the benefits of using Cyanna in a{" "}
            <a href="https://youtu.be/L2dvOUpZWV0" target="_blank">
              testimonial video
            </a>
            .
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iScreen}
            title="ACICS Landing Page"
            alt="ACICS Landing Page"
          />
          <div className="details__button">
            <a href="https://cyanna.com/accreditation-rescue/" target="_blank">
              <button>ACICS Landing Page</button>
            </a>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            Schools and educators would be directed to the landing page via
            email campaigns. Cyanna has seen how education can transform lives
            and is driven to be a fundamental part of delivering education to
            everyone. The team offers licensing, compliance and accreditation
            consulting, curriculum licensing and development, software licensing
            and development.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iEmail1}
              placeholder="blur"
              title="ACICS Email 1"
              alt="ACICS Email 1"
            />
            <div className="details__button">
              <a
                href="http://hosted.vresp.com/552766/bd7c2a259e/TEST/TEST/"
                target="_blank"
              >
                <button>ACICS Email #1</button>
              </a>
            </div>
          </div>
          <div className="details__split">
            <Image
              src={iEmail2}
              placeholder="blur"
              title="ACICS Email 2"
              alt="ACICS Email 2"
            />
            <div className="details__button">
              <a
                href="http://hosted.vresp.com/552766/69b32b1831/TEST/TEST/"
                target="_blank"
              >
                <button>ACICS Email #2</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            In addition to the ACICS campaign, Cyanna made an effort to keep up
            with industry trends and embark on a Let's Tech! talk at education
            conventions and state authorization basics.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iEmailTech}
              placeholder="blur"
              title="Let's Tech"
              alt="Let's Tech"
            />
          </div>
          <div className="details__split">
            <Image
              src={iEmailSara}
              placeholder="blur"
              title="Sara Email"
              alt="Sara Email"
            />
          </div>
        </div>
      </div>
      <div className="details details__callout">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iEdvera}
              placeholder="blur"
              title="EDvera dashboard"
              alt="EDvera dashboard"
            />
          </div>
          <div className="details__split">
            <h2>EDvera — bringing everything into one place.</h2>
            <p>
              With EDvera, institutions submit paperwork electronically. No
              delays, no hard copy hassles. Everyone can track process and
              documents online. The 10-part email series encouraged customers to
              schedule an EDvera demo and learn more about the system. A
              boilerplate was developed to feature a bold headline, spirited
              animation, and a descriptor on the advantages of using the
              software.
            </p>
          </div>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iEdveraCampaign}
              title="EDvera email campaign"
              alt="EDvera email campaign"
            />
          </div>
          <div className="details__split">
            <div className="split__icons">
              <Image
                src={iEdveraVisible}
                title="EDvera visible badge"
                alt="EDvera visible badge"
              />
              <Image
                src={iEdveraValue}
                title="EDvera value badge"
                alt="EDvera value badge"
              />
              <Image
                src={iEdveraVirtue}
                title="EDvera virtue badge"
                alt="EDvera virtue badge"
              />
              <Image
                src={iEdveraVoiced}
                title="EDvera voiced badge"
                alt="EDvera voiced badge"
              />
              <Image
                src={iEdveraValidated}
                title="EDvera validated badge"
                alt="EDvera validated badge"
              />
            </div>
            <div className="split__icons">
              <Image
                src={iEdveraVolume}
                title="EDvera volume badge"
                alt="EDvera volume badge"
              />
              <Image
                src={iEdveraVirtual}
                title="EDvera virtual badge"
                alt="EDvera virtual badge"
              />
              <Image
                src={iEdveraVetted}
                title="EDvera vetted badge"
                alt="EDvera vetted badge"
              />
              <Image
                src={iEdveraVerified}
                title="EDvera verified badge"
                alt="EDvera verified badge"
              />
              <Image
                src={iEdveraVerity}
                title="EDvera verity badge"
                alt="EDvera verity badge"
              />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
