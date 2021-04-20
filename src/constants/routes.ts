export const routes = {
  START_PAGE: "/",
  ALL: "/*",
  CARDS: "/cards",
};

export const ROUTES = {
  getStartPagePath: () => {
    return `${routes.START_PAGE}`;
  },

  getCardsPath: () => {
    return `${routes.CARDS}`;
  },

  getCardsListPath: () => {
    return `${routes.CARDS}/list`;
  },

  getCardsAddPath: () => {
    return `${routes.CARDS}/add`;
  },
};
