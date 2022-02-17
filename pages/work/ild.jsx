import Image from "next/image";

import Page from "../../components/Page";

// import images to enable auto blur while loading (doesn't work for .gif?) and
// auto width/height detection.
import iHero from "../../public/images/work/ild-hero.jpg";
import iKCMarvel from "../../public/images/work/ild-kc-marvel.jpg";
import iKCSeven from "../../public/images/work/ild-kc-seven.jpg";
import iBokeh from "../../public/images/work/ild-bokeh.jpg";
import iStairs from "../../public/images/work/ild-stairs.jpg";
import iElements from "../../public/images/work/ild-elements.jpg";
import iScreen from "../../public/images/work/ild-screen.jpg";
import iEffects from "../../public/images/work/ild-effects.jpg";

export default function Ild() {
  return (
    <Page>
      <div className="hero hero--work"></div>
      <div className="summary">
        <div className="wrapper">
          <div className="summary__photo">
            <Image
              src={iHero}
              placeholder="blur"
              title="I Love Design"
              alt="I Love Design"
            />
            <div className="photo__flag">
              <p>Visual Design / Motion Graphics</p>
              <h3>I Love Design</h3>
            </div>
          </div>
          <div className="summary__title">
            <h1>I Love Design</h1>
            <p>Annual Valentine to the Jacksonville creative community</p>
          </div>
          <div className="summary__credits">
            <ul>
              <li>Client: AIGA Jacksonville</li>
              <li>Role: Visual Design / Motion Design / Event</li>
            </ul>
            <ul>
              <li>Content Writer: Beth Nabi</li>
            </ul>
          </div>
          <div className="summary__description">
            <p>
              I Love Design is AIGA Jacksonville's most prestigious speaking
              event of the year. The focus of the event is to lead local
              designers and businesses to the next level. In years past, the
              pantheon of speakers included Louise Fili, Michael Bierut, and
              House Industries. The speaker, generally a tenured designer who
              has been in the industry for more than 20 years, is invited to
              present their inspiring work and insights on why they continue to
              work in design. For 2017, AIGA Jacksonville invited title sequence
              and motion designer Kyle Cooper.
            </p>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            Chances are your favorite movie, TV show or video game is a title
            sequence Kyle Cooper has worked on:{" "}
            <em>
              The Walking Dead, American Horror Story, Mission: Impossible,
              X-Men, Iron Man, Spider-Man Dawn of the Dead Argo, Donnie Brasco
              The Mummy, Twister&hellip;
            </em>{" "}
            His IMDB entry is so amazingly long and varied, we can’t do it
            justice here. You may know his name, but you’ve definitely seen his
            work.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iKCMarvel}
              placeholder="blur"
              title="the Marvel Logo sequence"
              alt="the Marvel Logo sequence"
            />
            <div className="details__button">
              <a
                href="http://oldsite.prologue.com/media/whats-past/projects/marvel"
                target="_blank"
              >
                <button>Marvel Logo Sequence</button>
              </a>
            </div>
          </div>
          <div className="details__split">
            <Image
              src={iKCSeven}
              placeholder="blur"
              title="the seven title sequence"
              alt="the seven title sequence"
            />
            <div className="details__button">
              <a
                href="http://oldsite.prologue.com/media/whats-past/projects/se7en"
                target="_blank"
              >
                <button>Se7en Title Sequence</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            With the title sequence for <em>Se7en</em>,{" "}
            <em>Island of Dr. Moreau</em>, and <em>Mimic</em>, borrowing his
            signature elements of perfecting the imperfect with layered images,
            hidden messages, and stretched type, I embraced his work ethics into
            the promotional material with I Love Design. Living in the heart of
            downtown Jacksonville, material for the brand was abundant. Heavy on
            collage, I used an out-of-focus image of the city of Jacksonville,
            in addition to the rare fire escapes peppering the industrial
            buildings. I also experimented with raw textures, different weights
            of brush pens, and adjusting font weights from the Knockout HTF
            collection.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <Image
              src={iBokeh}
              placeholder="blur"
              title="bokeh night"
              alt="bokeh night"
            />
          </div>
          <div className="details__split">
            <Image
              src={iStairs}
              placeholder="blur"
              title="fire escape"
              alt="fire escape"
            />
          </div>
          <Image
            src={iElements}
            placeholder="blur"
            title="additional elements"
            alt="additional elements"
          />
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            Content and images were then placed on iKit, an open-source
            framework for WordPress, to showcase the event to the masses, then
            integrated into Eventbrite.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iScreen}
            placeholder="blur"
            title="I Love Design screen"
            alt="I Love Design screen"
          />
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            To complement Kyle's style, attributing a motion segment assisted in
            thrusting the design further and engaging the greater creative
            community. The graphic built up on Kyle's style with glitch effects
            and a nod to millimeter film strips.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <div className="details__split">
            <video controls loop name="media">
              <source
                type="video/mp4"
                src="https://scontent.cdninstagram.com/t50.2886-16/15872602_170980456716081_7572179431934918656_n.mp4"
              />
            </video>
          </div>
          <div className="details__split">
            <Image
              src={iEffects}
              placeholder="blur"
              title="after effects screen"
              alt="after effects screen"
            />
            <p>
              Scrambling, fractal noise, and an assortment of techniques were
              applied to the original artwork mirroring the distorted reality of
              movie plots. Chromatic breakup transitioning between footage and
              text would be a preview of the intense talk from Kyle.
            </p>
            <p>Built in After Effects.</p>
            <p>
              Music by{" "}
              <a
                href="https://deepanddisco.bandcamp.com/track/try-so-hard"
                target="_blank"
              >
                Pegasus Warning
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
}
