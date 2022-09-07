const { Router } = require("express");
const router = Router();

router.get("./routs/products.route");
router.get("./routs/products.route/:id");
router.post("./routs/products.route");
router.delete("./routs/products.route/:id");

module.exports = router;
