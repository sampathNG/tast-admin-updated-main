// adminControllers.js

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { AdminData } = require('../data/AdminData');
const { validationResult } = require('express-validator');
const { v4: uuidv4 } = require('uuid');

const JWT_SECRET = 'your_jwt_secret'; // Replace with your actual secret key

// Helper functions
const findAdminById = (id) => AdminData.find(admin => admin.id === id);
const isSuperAdmin = (admin) => admin.accessList.includes('all');

// Initialize passwords (This step is for demo purposes and should be handled securely in production)
AdminData.forEach(admin => {
  admin.password = admin.id === 'superadmin001'
    ? bcrypt.hashSync('adminsuper', 10)  // Super admin password
    : bcrypt.hashSync('123456', 10);      // General password for other admins
});

// Create a new admin
const createAdmin = (req, res) => {
  const { currentAdminId, ...newAdminData } = req.body;
  const currentAdmin = findAdminById(currentAdminId);

  if (!currentAdmin) {
    return res.status(404).json({ message: "Current admin not found." });
  }

  if (!isSuperAdmin(currentAdmin)) {
    return res.status(403).json({ message: "You don't have permission to create a new admin." });
  }

  const newAdmin = { id: uuidv4(), ...newAdminData, active: true };
  AdminData.push(newAdmin);
  res.status(201).json(newAdmin);
};

// Get all admins
const getAllAdmins = (req, res) => {
  res.status(200).json(AdminData);
};

// Get a single admin by ID
const getAdminById = (req, res) => {
  const admin = findAdminById(req.params.id);
  if (!admin) {
    return res.status(404).json({ message: 'Admin not found' });
  }
  res.status(200).json(admin);
};

// Update an admin by ID
const updateAdmin = (req, res) => {
  const { currentAdminId, ...updatedData } = req.body;
  const currentAdmin = findAdminById(currentAdminId);

  if (!currentAdmin) {
    return res.status(404).json({ message: "Current admin not found." });
  }

  if (!isSuperAdmin(currentAdmin)) {
    return res.status(403).json({ message: "You don't have permission to update this admin." });
  }

  const adminIndex = AdminData.findIndex(admin => admin.id === req.params.id);
  if (adminIndex === -1) {
    return res.status(404).json({ message: 'Admin not found' });
  }

  const updatedAdmin = { ...AdminData[adminIndex], ...updatedData };
  AdminData[adminIndex] = updatedAdmin;
  res.status(200).json(updatedAdmin);
};

// Delete an admin by ID
const deleteAdmin = (req, res) => {
  const { currentAdminId } = req.body;
  const currentAdmin = findAdminById(currentAdminId);

  if (!currentAdmin) {
    return res.status(404).json({ message: "Current admin not found." });
  }

  if (!isSuperAdmin(currentAdmin)) {
    return res.status(403).json({ message: "You don't have permission to delete this admin." });
  }

  const adminIndex = AdminData.findIndex(admin => admin.id === req.params.id);
  if (adminIndex === -1) {
    return res.status(404).json({ message: 'Admin not found' });
  }

  AdminData.splice(adminIndex, 1);
  res.status(200).json({ message: 'Admin deleted successfully' });
};

// Login Admin
const loginAdmin = (req, res) => {
  const { userName, password } = req.body;

  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Find the admin by userName
  const admin = AdminData.find(admin => admin.userName === userName);

  if (!admin) {
    return res.status(400).json({ message: 'Invalid credentials.' });
  }

  // Check if the password is correct
  const isMatch = bcrypt.compareSync(password, admin.password);

  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials.' });
  }

  // Generate JWT token
  const token = jwt.sign({ id: admin.id, userName: admin.userName }, JWT_SECRET, {
    expiresIn: '1h', // Token expires in 1 hour
  });

  res.json({
    token,
    admin: {
      id: admin.id,
      name: admin.name,
      userName: admin.userName,
      email: admin.email,
      accessList: admin.accessList,
    },
  });
};


module.exports = {
  createAdmin,
  getAllAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
  loginAdmin
};
