const films = [
  {
    id: 1,
    title: "Hanh phuc: Chung cu co doc ",
    alias: "happiness-park-hyung-sik",
    image:
      "https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/6186709007f0cb80056ce432_chung-cu-co-doc.jpg",
    rate: 5,
  },
  {
    id: 2,
    title: "Ngu su tai ba ",
    alias: "ngu-su-tai-ba-va-quy-co-thong-thai-jo-yi-va-am-hanh-ngu-su",
    image:
      "https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/618915025072081149ba45c8_poster-joyi.jpeg",
    rate: 6,
  },
];
// export default films;
export const getFlims = () => films;
export const getMovieByAlias = (alias) => films.find((p) => p.alias === alias);
