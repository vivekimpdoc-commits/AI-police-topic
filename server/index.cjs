const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

// Initialize Prisma Client
const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// Import Routes
const telemetryRoutes = require('./routes/telemetry.cjs');
const operationsRoutes = require('./routes/operations.cjs');
const governanceRoutes = require('./routes/governance.cjs');
const analyticsRoutes = require('./routes/analytics.cjs');

// Mount Routes (Enterprise AI Command Platform)
app.use('/api/telemetry', telemetryRoutes);
app.use('/api/operations', operationsRoutes);
app.use('/api/governance', governanceRoutes);
app.use('/api/analytics', analyticsRoutes);

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Command Center API is ONLINE', version: '1.0.0' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`[Enterprise AI Command] Server running on port ${PORT}`);
});

// Export prisma for use in routes
module.exports = { prisma };
