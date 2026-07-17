const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET Live GPU Cluster Load
router.get('/gpu', async (req, res) => {
  try {
    const metrics = await prisma.gPULoad.findMany({
      orderBy: { timestamp: 'desc' },
      take: 10
    });
    res.json(metrics);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch GPU telemetry' });
  }
});

// GET Kubernetes Pod Health
router.get('/kubernetes', async (req, res) => {
  try {
    const health = await prisma.containerHealth.findMany({
      orderBy: { timestamp: 'desc' },
      take: 50
    });
    res.json(health);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Kubernetes health' });
  }
});

// POST New Server Metric (Webhook from Data Lake/Spark)
router.post('/server-metric', async (req, res) => {
  const { serverId, cpuUsage, memoryUsage, diskIO } = req.body;
  try {
    const metric = await prisma.serverMetric.create({
      data: { serverId, cpuUsage, memoryUsage, diskIO }
    });
    res.status(201).json(metric);
  } catch (error) {
    res.status(500).json({ error: 'Failed to ingest server metric' });
  }
});

module.exports = router;
