import { NEW_COLOR, TOGGLE_COLOR, SHOW_FAVOURITE } from "../actions/actionType";

const initState = {
  colors: [
    {
      id: 1,
      name: "cerulean",
      color: "#98B2D1",
      favourite: false,
    },
    {
      id: 2,
      name: "fuchsia rose",
      color: "#C74375",
      favourite: false,
    },
    {
      id: 3,
      name: "true red",
      color: "#BF1932",
      favourite: false,
    },
    {
      id: 4,
      name: "aqua sky",
      color: "#7BC4C4",
      favourite: false,
    },
    {
      id: 5,
      name: "tigerlily",
      color: "#E2583E",
      favourite: false,
    },
    {
      id: 6,
      name: "blue turquoise",
      color: "#53B0AE",
      favourite: false,
    },
  ],
  showFavourite: false,
};

const colorReducer = (state = initState, action) => {
  switch (action.type) {

    case NEW_COLOR: {

      return {
        colors: [
          ...state.colors,
          {
            id: state.colors.length + 1,
            name: action.payload.name,
            color: action.payload.color,
          },
        ],
        showFavourite: state.showFavourite,
      };
    }

    case TOGGLE_COLOR: {
      return {
        colors: state.colors.map((c) => {
          if (c.id == action.payload) {
            return {
              ...c,
              favourite: !c.favourite,
            };
          } else {
            return c;
          }
        }),
        showFavourite: state.showFavourite,
      };
    }

    case SHOW_FAVOURITE: {
      return {
        colors: state.colors,
        showFavourite: !state.showFavourite,
      };
    }

    default:
      return state;
  }
};

export default colorReducer;
