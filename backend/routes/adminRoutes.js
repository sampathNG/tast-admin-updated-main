
const express = require('express');
const { loginAdmin,createAdmin,deleteAdmin,getAllAdmins,updateAdmin} = require('../controllers/superAdmin');
// const { auth } = require('../controllers/authController');

const { check } = require('express-validator');
const router = express.Router();

// Login Route
router.post(
  '/login',
  [
    check('userName', 'Username is required').not().isEmpty(),
    check('password', 'Password is required').exists(),
  ],
  loginAdmin
);

// Super Admin Routes
router.post('/superadmin/create', createAdmin);
router.delete('/superadmin/delete/:id', deleteAdmin);
router.get('/superadmin/admins', getAllAdmins);
router.put('/superadmin/update/:id', updateAdmin);

// // Regular Admin Routes
// router.get('/admin/:id', adminController.getAdminById);
// router.put('/admin/update', adminController.updateOwnProfile);
// router.post('/admin/deactivate', adminController.deactivateOwnAccount);

module.exports = router;

