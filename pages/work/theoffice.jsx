import Page from "../../components/Page";

export default function TheOffice() {
  return <Page>hi</Page>;
}

// ---
// title: Jen Arevalo UI/X Designer + Developer
// ---
// .hero.hero--work
// .summary
//   .wrapper
//     .summary__photo
//       = image_tag("work/theoffice-hero.jpg", {:title => "The Office", :alt => "The Office"})
//       .photo__flag
//         %p
//           Video Production
//         %h3
//           The Office
//     .summary__title
//       %h1
//         The Office
//       %p
//         Mural Timelapse
//     .summary__credits
//       %ul
//         %li
//           Client: Shepherd
//         %li
//           Role: Video Production, Photography
//       %ul
//         %li
//           Team:
//           %a{:href => "http://www.nick-v.com/", :target => "_blank"}Nick V.
//           Mitchell Kelly
//     .summary__description
//       %p
//         Documenting a two-day mural process by Nick V. for Shepherd, an advertising agency's wall, to inspire creativity upon their designers and clients. The completion of the project proved to be laborious and incorporated a lot of pizza. The days were recorded and condensed into a time lapse video and edited in Adobe Premiere.
// .details
//   .wrapper
//     .details__split
//       = image_tag("work/theoffice-process-1.jpg", {:title => "polaroids", :alt => "polaroids"})
//     .details__split
//       = image_tag("work/theoffice-process-2.jpg", {:title => "blank canvas", :alt => "blank canvas"})
// .details
//   .wrapper
//     = image_tag("work/theoffice-process-3.jpg", {:title => "color blocks", :alt => "color blocks"})
//     = image_tag("work/theoffice-process-4.jpg", {:title => "lines", :alt => "lines"})
// .details
//   .wrapper
//     .details__split
//       %video{controls: "", :loop => true, name: "media"}
//         %source{src: "https://scontent.cdninstagram.com/t50.2886-16/10827107_574657332680714_1874644354_n.mp4", type: "video/mp4"}
//     .details__split
//       %video{controls: "", :loop => true, name: "media"}
//         %source{src: "https://scontent.cdninstagram.com/t50.2886-16/10820537_382888358536070_1037757005_n.mp4", type: "video/mp4"}
//     .details__button
//       %a{:href => "https://vimeo.com/157325969", :target => "_blank"}
//         %button{:type => "button"}Extended Video
// = partial "shared/contact"
