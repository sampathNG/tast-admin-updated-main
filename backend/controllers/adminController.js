import { AdminData } from './AdminData';
import { v4 as uuidv4 } from 'uuid';

// Helper functions
const findAdminById = (id) => AdminData.find(admin => admin.id === id);
const isSuperAdmin = (admin) => admin.accessList.includes('all');

// Super Admin Controller
export const superAdminController = {
  createAdmin: (req, res) => {
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
  },

  deleteAdmin: (req, res) => {
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
  },

  getAllAdmins: (req, res) => {
    res.status(200).json(AdminData);
  },

  updateAdmin: (req, res) => {
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
  },
};

// Regular Admin Controller
export const adminController = {
  getAdminById: (req, res) => {
    const admin = findAdminById(req.params.id);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    res.status(200).json(admin);
  },

  updateOwnProfile: (req, res) => {
    const { currentAdminId, ...updatedData } = req.body;
    const adminIndex = AdminData.findIndex(admin => admin.id === currentAdminId);
    
    if (adminIndex === -1) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    const updatedAdmin = { ...AdminData[adminIndex], ...updatedData };
    AdminData[adminIndex] = updatedAdmin;
    res.status(200).json(updatedAdmin);
  },

  deactivateOwnAccount: (req, res) => {
    const { currentAdminId } = req.body;
    const admin = findAdminById(currentAdminId);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found." });
    }

    admin.active = false;
    res.status(200).json({ message: "Account deactivated successfully." });
  },
};
