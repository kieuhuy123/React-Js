const films = [
  {
    id: 1,
    title: "Hanh phuc: Chung cu co doc ",
    alias: "happiness-park-hyung-sik",
    image:
      "https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/6186709007f0cb80056ce432_chung-cu-co-doc.jpg",
    rate: 5,
    genre: {
      label: "Phim kinh dị",
      url: "kinh-di",
    },
    type: {
      label: "phim bộ",
      url: "phim-bo",
    },
  },
  {
    id: 2,
    title: "Ngu su tai ba ",
    alias: "ngu-su-tai-ba-va-quy-co-thong-thai-jo-yi-va-am-hanh-ngu-su",
    image:
      "https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/618915025072081149ba45c8_poster-joyi.jpeg",
    rate: 6,
    genre: {
      label: "Phim tình cảm",
      url: "tinh-cam",
    },
    type: {
      label: "phim bộ",
      url: "phim-bo",
    },
  },
  {
    id: 3,
    title: "Hawkeye 2021 (Marvel)",
    alias: "hawkeye-2021-marvel",
    image:
      "https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/619e43459120172cebb67bd4_dan-cast.jpeg",
    rate: 9.8,
    genre: {
      label: "Phim hành động",
      url: "hanh-dong",
    },
    type: {
      label: "phim chiếu rạp",
      url: "phim-chieu-rap",
    },
  },
  {
    id: 4,
    title: "Anh muốn chúng ta ở bên nhau  ",
    alias: "anh-muon-chung-ta-o-ben-nhau-love-will-tear-us-apart",
    image:
      "https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/60e2c4026ee315170dcd1558_anh-muon-chung-ta-o-ben-nhau.jpg",
    rate: 8.5,
    genre: {
      label: "Phim tình cảm",
      url: "tinh-cam",
    },
    type: {
      label: "phim bộ",
      url: "phim-bo",
    },
  },
  {
    id: 5,
    title: "Đấu trường ảo: ready playerone",
    alias: "ngu-su-tai-ba-va-quy-co-thong-thai-jo-yi-va-am-hanh-ngu-su",
    image:
      "https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa644f28a12fbb_dau-truong-ao.jpg",
    rate: 8.1,
    genre: {
      label: "Phim hành động",
      url: "hanh-dong",
    },
    type: {
      label: "phim chiếu rạp",
      url: "phim-chieu-rap",
    },
  },
  {
    id: 6,
    title: "Aquaman: đế vương atlantis ",
    alias: "aquaman-de-vuong-atlantis",
    image:
      "https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa643283a1271c_aquaman.jpg",
    rate: 8.5,
    genre: {
      label: "Phim hành động",
      url: "hanh-dong",
    },
    type: {
      label: "phim chiếu rạp",
      url: "phim-chieu-rap",
    },
  },
  {
    id: 7,
    title: "Bây giờ, chúng ta đang chia tay - now, we are breaking up ",
    alias: "bay-gio-chung-ta-dang-chia-tay",
    image:
      "https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/618de18301b39d2ff559c7d3_poster-bay-gio-chung-ta-dang.jpg",
    rate: 7.9,
    genre: {
      label: "Phim tình cảm",
      url: "tinh-cam",
    },
    type: {
      label: "phim bộ",
      url: "phim-bo",
    },
  },
  {
    id: 8,
    title: "dạ quỷ rừng sâu - the widow (2020) ",
    alias: "da-quy-rung-sau-the-widow-2020",
    image:
      "https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/61741a081793624c035e1480_the-widow.jpg",
    rate: 6.2,
    genre: {
      label: "Phim kinh dị",
      url: "kinh-di",
    },
    type: {
      label: "phim chiếu rạp",
      url: "phim-chieu-rap",
    },
  },

  {
    id: 9,
    title: "bạn cùng phòng của tôi là gumibo (2021) ",
    alias: "ban-cung-phong-cua-toi-la-gumiho-my-roommate-is-a-gumiho-2021",
    image:
      "https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/60c9663ff6ee4968d0b14ec4_ban-cung-phong-gumiho.jpg",
    rate: 6,
    genre: {
      label: "Phim tình cảm",
      url: "tinh-cam",
    },
    type: {
      label: "phim bộ",
      url: "phim-bo",
    },
  },
  {
    id: 10,
    title: "ak-47-kalashnikov (2020) ",
    alias: "ak-47-kalashnikov-2020",
    image:
      "https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa643ce4a12349_ak-47.jpg",
    rate: 6,
    genre: {
      label: "Phim hành động",
      url: "hanh-dong",
    },
    type: {
      label: "phim chiếu rạp",
      url: "phim-chieu-rap",
    },
  },
  {
    id: 11,
    title: "biệt đội siêu anh hùng: hồi kết (Avengers-endgame) ",
    alias: "avengers-hoi-ket-avengers-endgame",
    image:
      "https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa644e0fa126e4_avenger-endgame.jpg",
    rate: 10,
    genre: {
      label: "Phim hành động",
      url: "hanh-dong",
    },
    type: {
      label: "phim chiếu rạp",
      url: "phim-chieu-rap",
    },
  },
  {
    id: 12,
    title: "anh là mùa xuân của em ",
    alias: "anh-la-mua-xuan-cua-em-you-are-my-spring-2021",
    image:
      "https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/60de6d7faa1bb691e514b6d4_poster-anh-la-mua-xuan-cua-em.jpg",
    rate: 7.7,
    genre: {
      label: "Phim tình cảm",
      url: "tinh-cam",
    },
    type: {
      label: "phim bộ",
      url: "phim-bo",
    },
  },
  {
    id: 13,
    title: "Shang-chi và huyển thoại thập luân ",
    alias:
      "shang-chi-va-huyen-thoai-thap-luan-shang-chi-and-the-legend-of-the-ten-rings",
    image:
      "https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/618ba5a6027e4a85acc3e882_shang-chi.jpg",
    rate: 8.7,
    genre: {
      label: "Phim hành động",
      url: "hanh-dong",
    },

    type: {
      label: "phim chiếu rạp",
      url: "phim-chieu-rap",
    },
  },
  {
    id: 14,
    title: "mùa hè yêu dấu của chúng ta ",
    alias: "mua-he-yeu-dau-cua-chung-ta-our-beloved-summer-2021",
    image:
      "https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/61a842808d87152e64584571_poster-our-beloved-summer.jpg",
    rate: 10,
    genre: {
      label: "Phim tình cảm",
      url: "tinh-cam",
    },
    type: {
      label: "phim bộ",
      url: "phim-bo",
    },
  },
  {
    id: 15,
    title: "không phải lúc chết - no time to die",
    alias: "khong-phai-luc-chet-no-time-to-die",
    image:
      "https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/618bc6e7b5ed7482b22d94c0_no-time-to-die.jpg",
    rate: 9.2,
    genre: {
      label: "Phim hành động",
      url: "hanh-dong",
    },
    type: {
      label: "phim chiếu rạp",
      url: "phim-chieu-rap",
    },
  },
  {
    id: 16,
    title: "khi tình yêu gặp nhà khoa học ",
    alias: "khi-tinh-yeu-gap-nha-khoa-hoc",
    image:
      "https://static.ssphim.net/static/5fe2d564b3fa6403ffa11d1c/614efaafd49f330932da509c_poster-khi-tinh-yeu-gap.jpg",
    rate: 8,
    genre: {
      label: "Phim tình cảm",
      url: "tinh-cam",
    },
    type: {
      label: "phim bộ",
      url: "phim-bo",
    },
  },
];
// export default films;
export const getFlims = () => films;
export const getMovieByAlias = (alias) => films.find((p) => p.alias === alias);
//
export const getMovieByType = (type) =>
  films.filter((p) => p.type.url === type);

//
export const getMovieByGenre = (genre) =>
  films.filter((p) => p.genre.url === genre);
