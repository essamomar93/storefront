const initialState = {
  categories: [
    {
      displayName: 'FOOD',
      normalizedName: 'food',
      description: 'FOOD Category'
    },
    {
      displayName: 'ELECTRONICS',
      normalizedName: 'electronics',
      description: 'Elecronics Category'
    },
    {
      displayName: 'VIDEO GAMES',
      normalizedName: 'video games',
      description: 'Video Games Category'
    },
    {
      displayName: 'CONSOLE',
      normalizedName: 'console',
      description: 'Console Category'
    },
    {
      displayName: 'PHONES',
      normalizedName: 'phones',
      description: 'Phones Category'
    },
  ],
  activeCategory: '',
}


function productsReducer(state = initialState, action) {

  const { type, payload } = action;

  switch (type) {
    case 'ACTIVE_CATEGORY':
      return { ...state, activeCategory: payload }
    default:
      return state;
  };
}

export const setCatogery = (category) => {
  return {
    type: 'ACTIVE_CATEGORY',
    payload: category
  }
};

export default productsReducer;
