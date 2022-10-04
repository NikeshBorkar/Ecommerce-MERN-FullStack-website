const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
  getAdminProducts,
} = require("../controllers/productController");
const { isAuthenticateUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(getAllProducts);

router
  .route("/admin/products")
  .get(isAuthenticateUser, authorizeRoles("admin"), getAdminProducts);

router
  .route("/products/new")
  .post(isAuthenticateUser, authorizeRoles("admin"), createProduct);

router
  .route("/products/:id")
  .put(isAuthenticateUser, authorizeRoles("admin"), updateProduct);

router
  .route("/products/:id")
  .delete(isAuthenticateUser, authorizeRoles("admin"), deleteProduct);

router.route("/products/:id").get(getProductDetails);

router.route("/review").put(isAuthenticateUser, createProductReview);

router.route("/reviews").get(getProductReviews);

router.route("/reviews").delete(isAuthenticateUser, deleteReview);

// combine router: router.route("/products/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails);

module.exports = router;
