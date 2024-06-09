import { allProductsUrl } from './utils.js';

const productTranslations = {
  "high-back bench": "banco alto",
  "albany table": "mesa albany",
  "accent chair": "cadeira de destaque",
  "wooden table": "mesa de madeira",
  "dining table": "mesa de jantar",
  "sofa set": "conjunto de sofás",
  "modern bookshelf": "estante moderna",
  "emperor bed": "cama emperor",
  "utopia sofa": "sofá utopia",
  "entertainment center": "centro de entretenimento",
  "albany sectional": "seccional albany",
  "leather sofa": "sofá de couro"
};

const translateProductName = (name) => {
  return productTranslations[name] || name;
};

const fetchProducts = async () => {
  const response = await fetch(allProductsUrl).catch((err) => console.log(err));
  if (response) {
    const data = await response.json();
    const translatedProducts = data.map(product => {
      return {
        ...product,
        fields: {
          ...product.fields,
          name: translateProductName(product.fields.name),
        }
      };
    });
    return translatedProducts;
  }
  return response;
};

export default fetchProducts;

// import { allProductsUrl } from './utils.js';

// const fetchProducts = async () => {
//   const response = await fetch(allProductsUrl).catch((err) => console.log(err));
//   if (response) {
//     return response.json();
//   }
//   return response;
// };

// export default fetchProducts;
