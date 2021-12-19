const initialState = {
  categories: [
    {
      displayName: 'FOOD',
      normalizedName: 'food',
      description: 'FOOD Category'
    },
    {
      displayName: 'ELECTRONICS',
      normalizedName: 'elecronics',
      description: 'Elecronics Category'
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
    {
      displayName: 'GAMES',
      normalizedName: 'games',
      description: 'Games Category'
    },
  ],
  product: [
    {
      category: 'FOOD',
      name: 'food',
      description: 'mansaf',
      price: "25 jd",
      inventoryCount: '20',
      image: 'https://www.bookingjordan.com/uploads/cms/images/1568708875_Mansaf.jpg'
    },
    {
      category: 'FOOD',
      name: 'food',
      description: 'msakan',
      price: "20 jd",
      inventoryCount: '20',
      image: 'https://www.taabkh.com/files/styles/recipe/public/recipe/2020/11/musakhan-chicken-2.jpg'
    },
    {
      category: 'FOOD',
      name: 'food',
      description: 'mande',
      price: "20 jd",
      inventoryCount: '20',
      image: 'https://images.aws.nestle.recipes/resized/77188de0a458c6a8838490926e77f242_Chicken-Mandi_744_419.jpg'
    },
    {
      category: 'ELECTRONICS',
      name: 'elecronics',
      description: 'lenovo laptop',
      price: "600 jd",
      inventoryCount: '30',
      image: 'https://i5.walmartimages.com/asr/cb5663d1-ea71-4b4b-8e1d-21737034106b.32d99dc825241ebd27a7eb51b35b5d9f.jpeg'
    },
    {
      category: 'ELECTRONICS',
      name: 'elecronics',
      description: 'canon camera',
      price: "350 jd",
      inventoryCount: '50',
      image: 'https://cdnprod.mafretailproxy.com/sys-master-root/he5/h4e/9072670998558/596594_main.jpg_480Wx480H'
    },
    {
      category: 'ELECTRONICS',
      name: 'elecronics',
      description: 'T.V',
      price: "200 jd",
      inventoryCount: '150',
      image: 'https://malikelectronics.com/wp-content/uploads/2017/08/2017OLEDplatterwebBanner-1.jpg'
    },
    {
      category: 'CONSOLE',
      name: 'console',
      description: 'PS 5',
      price: "500 jd",
      inventoryCount: '20',
      image: 'https://www.bigw.com.au/medias/sys_master/images/images/h1e/h19/17317862703134.jpg'
    },
    {
      category: 'CONSOLE',
      name: 'console',
      description: 'Xpox',
      price: "450 jd",
      inventoryCount: '15',
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6478/6478033_sd.jpg'
    },
    {
      category: 'PHONES',
      name: 'phones',
      description: 'Samsung Note',
      price: "400 jd",
      inventoryCount: '10',
      image: 'https://cdn.gsmarena.com/imgroot/news/19/07/galaxy-note10-sd855plus/-727/gsmarena_001.jpg'
    },
    {
      category: 'PHONES',
      name: 'phones',
      description: 'iphone',
      price: "500 jd",
      inventoryCount: '10',
      image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&.v=1567022175704'
    },
    {
      category: 'PHONES',
      name: 'phones',
      description: 'huawei',
      price: "300 jd",
      inventoryCount: '10',
      image: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/49E21951DACDC91FB3FD6726B2A39B8E3C2A7BC9C8EE5E69.jpg'
    },
    {
      category: 'GAMES',
      name: 'games',
      description: 'Bord games',
      price: "30 jd",
      inventoryCount: '50',
      image: 'https://media.4rgos.it/i/Argos/7033252_R_Z001A?w=750&h=440&qlt=70'
    },
    {
      category: 'GAMES',
      name: 'games',
      description: 'pc games',
      price: "20 jd",
      inventoryCount: '35',
      image: 'https://cdn.eteknix.com/wp-content/uploads/2016/08/Steam-Store.jpg'
    },
    {
      category: 'GAMES',
      name: 'games',
      description: 'console games',
      price: "50 jd",
      inventoryCount: '50',
      image: 'https://static.standard.co.uk/2020/12/07/11/topgames2020compositejpg?width=990&auto=webp&quality=75&crop=968%3A645%2Csmart'
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
