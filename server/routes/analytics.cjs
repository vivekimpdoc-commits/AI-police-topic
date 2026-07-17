const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET Executive KPIs
router.get('/kpi', async (req, res) => {
  try {
    const kpis = await prisma.kPI.findMany();
    res.json(kpis);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch KPIs' });
  }
});

// GET Strategic OKRs
router.get('/okr', async (req, res) => {
  try {
    const okrs = await prisma.oKR.findMany();
    res.json(okrs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch OKRs' });
  }
});

module.exports = router;
