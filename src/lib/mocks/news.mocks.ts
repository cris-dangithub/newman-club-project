import { INews } from "../interfaces/news.interface";

export const news: INews[] = [
  {
    id: 1,
    date: new Date("2023-06-13T08:00:00-05:00"),
    autor: "Jane doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    name: "Blog 1",
    img: "/img/event1.jpg",
  },
  {
    id: 2,
    date: new Date("2023-06-13T08:00:00-05:00"),
    autor: "Fenix doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    name: "Blog 2",
    img: "/img/event2.jpg",
  },
  {
    id: 3,
    date: new Date("2023-06-13T08:00:00-05:00"),
    autor: "Alejo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    name: "Blog 3",
    img: "/img/event3.jpg",
  },
  {
    id: 4,
    date: new Date("2023-06-13T08:00:00-05:00"),
    autor: "Cristian",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    name: "Blog 4",
    img: "/img/event4.jpg",
  },
];
