const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// User Schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['super_admin', 'admin', 'editor', 'contributor', 'viewer'],
    default: 'viewer'
  },
  company: { type: String, required: true },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

async function seed() {
  try {
    // Load environment variables
    require('dotenv').config({ path: '.env.local' });
    
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/jsonsgroup-cms');
    console.log('Connected to MongoDB');

    // Check if admin user already exists
    const existingAdmin = await User.findOne({ email: 'admin@jsonsgroup.com' });
    
    if (existingAdmin) {
      console.log('Admin user already exists');
      return;
    }

    // Create default admin user
    const hashedPassword = await bcrypt.hash('admin123', 12);
    
    const adminUser = new User({
      name: 'System Administrator',
      email: 'admin@jsonsgroup.com',
      password: hashedPassword,
      role: 'super_admin',
      company: 'Jsons Group',
      isActive: true
    });

    await adminUser.save();
    console.log('Default admin user created successfully');
    console.log('Email: admin@jsonsgroup.com');
    console.log('Password: admin123');
    
  } catch (error) {
    console.error('Seeding error:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

seed();