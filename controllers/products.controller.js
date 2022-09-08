module.exports.productsController = {
  getProducts: (req, res) => {
    res.json([
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv"   
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net"
      }]);
  },

  getProductsById: (req, res) => {
    res.json(`продукт под id - ${req.params.id} найден`);
  },
  createProducts: (req, res) => {
    res.json("Продукт добавлен");
  },
  deleteProducts: (req, res) => {
    res.json(`Продукт ${req.params.id} будет удален` );
  },
};
