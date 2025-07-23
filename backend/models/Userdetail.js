import mongoose from 'mongoose';

const userDetailSchema = new mongoose.Schema({
  bikeNumber: String,
  phoneNumber: String,
  currentLocation: String,
  issue: String,
  shopName: String,
  price: Number,
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending',
  },
}, {
  timestamps: true
});

const UserDetail = mongoose.model('UserDetail', userDetailSchema);

export default UserDetail;
