const allProductsUrl = 'https://www.course-api.com/javascript-store-products';
const singleProductUrl = 'https://www.course-api.com/javascript-store-single-product';

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

const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Por favor, verifique o seletor "${selection}", nenhum elemento encontrado`
  );
};

const formatPrice = (price) => {
  let formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format((price / 100).toFixed(2));
  return formattedPrice;
};

const getStorageItem = (item) => {
  let storageItem = localStorage.getItem(item);
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item));
  } else {
    storageItem = [];
  }
  return storageItem;
};

const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

const translateProductName = (name) => {
  return productTranslations[name] || name;
};

const fetchProducts = async () => {
  try {
    const response = await fetch(allProductsUrl);
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
  } catch (error) {
    console.error(error);
  }
};

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
  fetchProducts,
};

// const allProductsUrl = 'https://www.course-api.com/javascript-store-products';
// const singleProductUrl =
//   'https://www.course-api.com/javascript-store-single-product';

// const getElement = (selection) => {
//   const element = document.querySelector(selection);
//   if (element) return element;
//   throw new Error(
//     `Please check "${selection}" selector, no such element exist`
//   );
// };

// const formatPrice = (price) => {
//   let formattedPrice = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//   }).format((price / 100).toFixed(2));
//   return formattedPrice;
// };

// const getStorageItem = (item) => {
//   let storageItem = localStorage.getItem(item);
//   if (storageItem) {
//     storageItem = JSON.parse(localStorage.getItem(item));
//   } else {
//     storageItem = [];
//   }
//   return storageItem;
// };

// const setStorageItem = (name, item) => {
//   localStorage.setItem(name, JSON.stringify(item));
// };

// export {
//   allProductsUrl,
//   singleProductUrl,
//   getElement,
//   formatPrice,
//   getStorageItem,
//   setStorageItem,
// };
