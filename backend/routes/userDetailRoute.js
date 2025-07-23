import express from 'express';
import Userdetail from '../models/Userdetail.js';

const router = express.Router();


router.post('/issue-details', async (req, res) => {
  try {
    const {
  bikeNumber,
  phoneNumber,
  currentLocation,
  issue,
  shopName,
  price,
  status, 
} = req.body;

const newDetail = new Userdetail({
  bikeNumber,
  phoneNumber,
  currentLocation,
  issue,
  shopName,
  price,
  status: status || 'pending', 
});

    await newDetail.save();
    res.status(201).json({ message: 'User issue details saved successfully' });
  } catch (error) {
    console.error('❌ Error saving user detail:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


router.get('/issue-details', async (req, res) => {
  try {
    const details = await Userdetail.find();
    res.status(200).json(details);
  } catch (error) {
    console.error('❌ Error fetching issue details:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


router.get('/admin/requests', async (req, res) => {
  try {
    const requests = await Userdetail.find().sort({ createdAt: -1 });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


router.put('/admin/requests/:id', async (req, res) => {
  try {
    const { status } = req.body;
    await Userdetail.findByIdAndUpdate(req.params.id, { status });
    res.json({ message: 'Status updated' });
    console.log('Updating status to:', status);

  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


router.delete('/admin/requests/:id', async (req, res) => {
  try {
    await Userdetail.findByIdAndDelete(req.params.id);
    res.json({ message: 'Request deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


router.get('/track-request/:phoneNumber', async (req, res) => {
  try {
    const request = await Userdetail.findOne({ phoneNumber: req.params.phoneNumber });
    if (!request) {
      return res.status(404).json({ message: 'Request not found' });
    }
    res.json(request);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


router.get('/issue-details/:phoneNumber', async (req, res) => {
  const { phoneNumber } = req.params;
  try {
    const detail = await Userdetail.findOne({ phoneNumber }).sort({ createdAt: -1 });
    if (!detail) {
      return res.status(404).json({ message: 'No request found' });
    }
    res.json(detail);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
