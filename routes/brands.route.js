const { Router } = require("express");
const { brandsController } = require("../controllers/brands.controller");

const router = Router();

router.get("./brands.route", brandsController.getBrands);
router.post("./brands.route", brandsController.createBrands);
router.delete("./brands.route/:id", brandsController.deleteBrands);

module.exports = router;
