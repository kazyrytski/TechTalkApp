export const routes = {
  START_PAGE: "/",
  ALL: "/*",
  CARDS: "/cards",
};

export const ROUTES = {
  getStartPagePath: () => {
    return `${routes.START_PAGE}`;
  },
  CARDS: {
    getCardsPath: () => {
      return `${routes.CARDS}`;
    },

    getCardsListPath: () => {
      return `${routes.CARDS}/list`;
    },

    getCurrentCardPath: () => {
      return `${routes.CARDS}/:id`;
    },
  },
};
