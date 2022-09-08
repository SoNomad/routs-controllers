module.exports.brandsController = {
  getBrands: (req, res) => {
    res.json([
      {
        "id": 1,
        "name": "Brand one",
        "username": "Bret",
        "email": "Sincere@april.biz"
      },
      {
        "id": 2,
        "name": "Brand two",
        "username": "Antonette",
        "email": "Shanna@melissa.tv"   
      },
      {
        "id": 3,
        "name": "Brand three",
        "username": "Samantha",
        "email": "Nathan@yesenia.net"
      }]);
  },

  createBrands: (req, res) => {
    res.json("Бренд создан");
  },

  deleteBrands: (req, res) => {
    res.json(`Бренд удален ${req.params.id}`);
  },
};
