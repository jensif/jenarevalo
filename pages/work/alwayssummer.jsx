import Image from "next/image";

import Page from "../../components/Page";

export default function AlwaysSummer() {
  return (
    <Page>
      <div className="hero hero--work"></div>
      <div className="summary">
        <div className="wrapper">
          <div className="summary__photo">
            <Image
              src="/images/work/alwayssummer-hero.jpg"
              alt="Always Summer"
              width={1170}
              height={779}
            />
            <div className="photo__flag">
              <p>Creative Direction</p>
              <h3>Always Summer</h3>
            </div>
          </div>
          <div className="summary__title">
            <h1>Always Summer</h1>
            <p>Annual Fall Membership Drive & Gallery Event</p>
          </div>
          <div className="summary__credits">
            <ul>
              <li>
                Client:{" "}
                <a href="https://www.jacksonville.aiga.org/" target="_blank">
                  AIGA Jacksonville
                </a>
              </li>
              <li>Role: Creative Direction, Illustration, PR, Content</li>
            </ul>
            <ul>
              <li>
                Countdown video:{" "}
                <a href="http://www.andygattis.com/" target="_blank">
                  Andy Gattis
                </a>
              </li>
              <li>
                Front-End Developer:{" "}
                <a href="http://www.jasonkellum.com/" target="_blank">
                  Jason Kellum
                </a>
              </li>
              <li>Photography: Kurt Hudson</li>
            </ul>
          </div>
          <div className="summary__description">
            <p>
              Since 2008, AIGA Jacksonville, a local chapter of the AIGA
              professional association of design, has been hosting the "Always
              Summer Poster Show + Mixtape." Hailed as one of the most
              anticipated events of the year, Always Summer has been successful
              in connecting the design community and increasing awareness. Guest
              speakers, The Bubble Process, were invited to speak, inspire, and
              experience Always Summer weekend.
            </p>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            Over 100 posters were submitted and 200 people in attendance to
            celebrate the Jacksonville creative community along with all the
            summer jams from past and present. By gathering a holy trinity of
            photographers, motion designers, and social media experts, the
            two-day jubilee continues to transfuse event goers with energy,
            creativity, and new friends.
          </p>
          <p>
            The sights and sounds of summer were exquisitely blended with the
            help of our local DJs who set the tone for the event by playing a
            mixtape of each poster entry. A sampling of the mixtape can be found
            on{" "}
            <a
              href="https://soundcloud.com/mowglisounds/sets/aiga-jacksonville-always"
              target="_blank"
            >
              SoundCloud
            </a>
            .
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper"></div>
      </div>
    </Page>
  );
}

// .hero.hero--work
// .details
//   .wrapper
//     = image_tag("work/alwayssummer-event-1.jpg", {:title => "Always Summer gallery event", :alt => "Always Summer Gallery event"})
//     = image_tag("work/alwayssummer-event-2.jpg", {:title => "Always Summer gallery event", :alt => "Always Summer Gallery event"})
//     .details__split
//       = image_tag("work/alwayssummer-event-5.jpg", {:title => "Always Summer gallery event", :alt => "Always Summer gallery event"})
//     .details__split
//       = image_tag("work/alwayssummer-event-6.jpg", {:title => "Always Summer gallery event", :alt => "Always Summer gallery event"})
//     = image_tag("work/alwayssummer-event-3.jpg", {:title => "Always Summer gallery event", :alt => "Always Summer Gallery event"})
//     = image_tag("work/alwayssummer-event-4.jpg", {:title => "Always Summer gallery event", :alt => "Always Summer Gallery event"})
//     .details__button
//       %a{:href => "https://www.flickr.com/photos/aigajacksonville/albums/72157673221761550/page1", :target => "_blank"}
//         %button{:type => "button"}Always Summer Gallery
// .callout
//   .wrapper
//     %p
//       With 60% of our audience ranging from 25–35, the event was heavily promoted through social media where a Snapchat geofilter was developed and countdown video reminders were spread through followers' newsfeeds.
// .details
//   .wrapper
//     .details__split
//       %video{controls: "", :loop => "true", name: "media"}
//         %source{src: "https://scontent.cdninstagram.com/t50.2886-16/13966049_1666488330339379_1812396670_n.mp4", type: "video/mp4"}
//     .details__split
//       %video{controls: "", :poster => image_path("work/alwayssummer-video.jpg"), :loop => true, name: "media"}
//         %source{src: "https://scontent.cdninstagram.com/t50.2886-16/13960062_1083347618408475_2019280685_n.mp4", type: "video/mp4"}
//     = image_tag("work/alwayssummer-social-3.gif", {:title => "Always Summer social posts", :alt => "Always Summer Gallery event"})
// .details
//   .wrapper
//     .details__split
//       = image_tag("work/alwayssummer-social-1.gif", {:title => "Always Summer Countdown", :alt => "Always Summer Countdown"})
//     .details__split
//       = image_tag("work/alwayssummer-social-2.gif", {:title => "Always Summer Final Countdown", :alt => "Always Summer Final Countdown"})
// .callout
//   .wrapper
//     %p
//       Sending out a press release for the event proved to be a benefit in reaching our 36–45-year-old designers. It also introduced Always Summer to a broader audience. The event was featured in the September 2016 edition of Folio Weekly in one of the editor's picks, "Reasons To Leave The House This Week."
// .details
//   .wrapper
//     = image_tag("work/alwayssummer-folio.jpg", {:title => "Folio Weekly feature", :alt => "Folio Weekly feature"})
// .callout
//   .wrapper
//     %p
//       To accompany the gallery event, the organization invites a guest speaker, who is well-versed in poster design, to lecture and ignite the passion of print. Speakers provide a fresh outlook on the design industry, and tips & tricks on what makes their art unique to their name
// .details
//   .wrapper
//     .details__split
//       = image_tag("work/alwayssummer-speaker-1.jpg", {:title => "Speaker event", :alt => "Speaker event"})
//     .details__split
//       = image_tag("work/alwayssummer-speaker-2.jpg", {:title => "Speaker mingle", :alt => "Speaker mingle"})
//     .details__split
//       = image_tag("work/alwayssummer-speaker-3.jpg", {:title => "Speaker merch", :alt => "Speaker merch"})
//     .details__split
//       = image_tag("work/alwayssummer-speaker-4.jpg", {:title => "Speaker engagement", :alt => "Speaker engagement"})
// .callout
//   .wrapper
//     %p
//       The double header event was featured in the monthly AIGA Jacksonville newsletter and encouraged designers to participate by creating a poster and sharing their process through a hashtag. The newsletter was an excellent opportunity to spotlight our sponsors.
// .details
//   .wrapper
//     .details__split
//       = image_tag("work/alwayssummer-email-1.gif", {:title => "Always Summer is Back email", :alt => "Always Summer is Back email"})
//     .details__split
//       = image_tag("work/alwayssummer-email-2.gif", {:title => "Speaker email", :alt => "Speaker email"})
