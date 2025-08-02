const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

// Get all jobs
router.get('/', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Post a new job
router.post('/', async (req, res) => {
  const newJob = new Job(req.body);
  const savedJob = await newJob.save();
  res.json(savedJob);
});

module.exports = router;