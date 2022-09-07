module.exports.brandsController = {
  getBrands: (req, res) => {
    res.get("Список брендов");
  },

  createBrands: (req, res) => {
    res.post("Бренд создан");
  },
  deleteBrands: (req, res) => {
    res.delete("Бренд удален");
  },
};
