const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET Audit Logs
router.get('/audit-logs', async (req, res) => {
  try {
    const logs = await prisma.auditLog.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100
    });
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch audit logs' });
  }
});

// GET Compliance Standards (ISO, SOC2)
router.get('/compliance', async (req, res) => {
  try {
    const compliance = await prisma.complianceStandard.findMany();
    res.json(compliance);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch compliance standards' });
  }
});

// GET Risk Matrix
router.get('/risks', async (req, res) => {
  try {
    const risks = await prisma.riskMatrix.findMany();
    res.json(risks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch risk matrix' });
  }
});

module.exports = router;
