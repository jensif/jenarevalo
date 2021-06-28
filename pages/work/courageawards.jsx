import Image from "next/image";

import Page from "../../components/Page";

// import images to enable auto blur while loading (doesn't work for .gif?) and
// auto width/height detection.
import iHero from "../../public/images/work/courageawards-hero.jpg";
import iSite from "../../public/images/work/courageawards-screen.gif";
import iLogo1 from "../../public/images/work/courageawards-logo-1.jpg";
import iLogo2 from "../../public/images/work/courageawards-logo-2.jpg";
import iLogo3 from "../../public/images/work/courageawards-logo-3.jpg";
import iStation1 from "../../public/images/work/courageawards-stationery-1.jpg";
import iStation2 from "../../public/images/work/courageawards-stationery-2.jpg";
import iOnsite1 from "../../public/images/work/courageawards-onsite-1.jpg";
import iOnsite2 from "../../public/images/work/courageawards-onsite-2.jpg";
import iGala1 from "../../public/images/work/courageawards-gala-1.jpg";
import iGala2 from "../../public/images/work/courageawards-gala-2.jpg";
import iGala3 from "../../public/images/work/courageawards-gala-3.jpg";
import iGala4 from "../../public/images/work/courageawards-gala-4.jpg";
import iGala5 from "../../public/images/work/courageawards-gala-5.jpg";
import iGala6 from "../../public/images/work/courageawards-gala-6.jpg";
import iGala7 from "../../public/images/work/courageawards-gala-7.jpg";
import iGala8 from "../../public/images/work/courageawards-gala-8.jpg";
import iEmail from "../../public/images/work/courageawards-post-event.jpg";

export default function CourageAwards() {
  return (
    <Page>
      <div className="hero hero--work"></div>
      <div className="summary">
        <div className="wrapper">
          <div className="summary__photo">
            <Image
              src={iHero}
              placeholder="blur"
              title="Courage Awards"
              alt="Courage Awards"
            />
            <div className="photo__flag">
              <p>Branding / Print / UX</p>
              <h3>Courage Awards</h3>
            </div>
          </div>
          <div className="summary__title">
            <h1>Courage Awards</h1>
            <p>Fundraising gala and benefit dinner</p>
          </div>
          <div className="summary__credits">
            <ul>
              <li>Client: Wounded Warrior Project</li>
              <li>Role: Branding, Print, UX</li>
            </ul>
            <ul>
              <li>Marketing: Lindsay Garrity</li>
              <li>RD: Lindsey Kronforst, Ashby Barth</li>
              <li>Printing: Drummond Press</li>
              <li>Photography: Sade Malloy</li>
            </ul>
          </div>
          <div className="summary__description">
            <p>
              Wounded Warrior Project celebrated the 10th anniversary of the
              Courage Awards & Benefit Dinner commemorating the mission of
              honoring injured service members, their caregivers, and most
              influential supporters. The layers of teams involved in this
              project played an integral role and set a precedent for charitable
              benefit galas. The memorable night garnered $1.5 million in
              donations for programs and services to honor and empower wounded
              warriors.
            </p>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            The 2015 event brought together more than 850 attendees, including
            more than 180 wounded warriors and their family members, and raised
            more than $1.5 million. The event also honored actor Mark Wahlberg,
            Bank of America, and Billy Casper Golf for their contributions to
            the organization.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iSite}
            title="Courage Awards site"
            alt="Courage Awards site"
          />
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            Modifying the existing identity of this system was built upon rich
            storytelling, a balance of minimalism, and attention to detail to
            typography for both print and web. Applying a minimalist identity
            would not compete with the rest of the visual assets. The mark
            elevated the gala and redefined charitable benefit dinners.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iLogo1}
            placeholder="blur"
            title="logo drafts"
            alt="logo drafts"
          />
          <Image
            src={iLogo2}
            placeholder="blur"
            title="logo drafts"
            alt="logo drafts"
          />
          <Image
            src={iLogo3}
            placeholder="blur"
            title="logo drafts"
            alt="logo drafts"
          />
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            The identity was applied to various materials as a strategy to
            communicate to a wide target audience based on sponsors and donors
            preferred methods of communication detailed in the database. From
            personal invitations printed in metallic silver to linen-pressed
            note cards, and branded hotel key cards, the event would leave a
            lasting impression on the individuals. The 8 x 8 32-page program was
            filled with extensive statistics and inspirational stories from
            veterans who have received help from the organization.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iStation1}
              placeholder="blur"
              title="stationery"
              alt="stationery"
            />
          </div>
          <div className="details__split">
            <Image
              src={iStation2}
              placeholder="blur"
              title="stationery"
              alt="stationery"
            />
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            The hallways and ballroom of the Waldorf Astoria in New York City
            featured "up close and personal" banners. The alumni are real people
            with real stories. The Courage Awards set to honor and empower them
            all and present to the sponsors and donors how each dollar donated
            benefits the veterans and their families.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iOnsite1}
            placeholder="blur"
            title="onsite banners"
            alt="onsite banners"
          />
          <Image
            src={iOnsite2}
            placeholder="blur"
            title="onsite banners"
            alt="onsite banners"
          />
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            This fundraising gala brought together injured service members,
            their caregivers and families, and the most influential WWP
            supporters. The celebratory event included a silent auction,
            text-to-pledge, and moving veteran stories.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image src={iGala1} placeholder="blur" title="gala" alt="gala" />
          <Image src={iGala2} placeholder="blur" title="gala" alt="gala" />
          <div className="details__split">
            <Image src={iGala3} placeholder="blur" title="gala" alt="gala" />
          </div>
          <div className="details__split">
            <Image src={iGala4} placeholder="blur" title="gala" alt="gala" />
          </div>
          <Image src={iGala5} placeholder="blur" title="gala" alt="gala" />
        </div>
      </div>
      <div className="callout callout--quote">
        <div className="wrapper">
          <p>
            Such an amazing evening last night at #WWPCourageAwards - so honored
            to have been a part of the event!
          </p>
          <cite>Courage Awards attendee</cite>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iEmail}
              title="post-event email"
              alt="post-event email"
            />
          </div>
          <div className="details__split">
            <Image src={iGala6} title="gala" alt="gala" />
            <Image src={iGala7} title="gala" alt="gala" />
            <Image src={iGala8} title="gala" alt="gala" />
          </div>
        </div>
      </div>
    </Page>
  );
}
