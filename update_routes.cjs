const fs = require('fs');

const appPath = 'c:\\Users\\DELL\\OneDrive\\Desktop\\AI topic for html\\AI poilc topic\\AI-police-topic\\src\\App.jsx';
let appCode = fs.readFileSync(appPath, 'utf8');

const imports = `import WeaponIssueDetailed from './pages/WeaponIssueDetailed';
import AmmunitionDetailed from './pages/AmmunitionDetailed';
import WeaponMaintenanceDetailed from './pages/WeaponMaintenanceDetailed';
import BulletproofJacketDetailed from './pages/BulletproofJacketDetailed';
import HelmetInventoryDetailed from './pages/HelmetInventoryDetailed';
import RiotGearDetailed from './pages/RiotGearDetailed';
import TearGasDetailed from './pages/TearGasDetailed';
import ExplosiveStorageDetailed from './pages/ExplosiveStorageDetailed';
import EquipmentCalibrationDetailed from './pages/EquipmentCalibrationDetailed';
import ArmouryInspectionDetailed from './pages/ArmouryInspectionDetailed';
`;

const routes = `        <Route path="/weapon-issue" element={<WeaponIssueDetailed />} />
        <Route path="/ammunition-analytics" element={<AmmunitionDetailed />} />
        <Route path="/weapon-maintenance" element={<WeaponMaintenanceDetailed />} />
        <Route path="/bulletproof-jacket" element={<BulletproofJacketDetailed />} />
        <Route path="/helmet-inventory" element={<HelmetInventoryDetailed />} />
        <Route path="/riot-gear" element={<RiotGearDetailed />} />
        <Route path="/tear-gas" element={<TearGasDetailed />} />
        <Route path="/explosive-storage" element={<ExplosiveStorageDetailed />} />
        <Route path="/equipment-calibration" element={<EquipmentCalibrationDetailed />} />
        <Route path="/armoury-inspection" element={<ArmouryInspectionDetailed />} />
`;

appCode = appCode.replace('import ArmouryInspectionDetailed', imports + 'import ArmouryInspectionDetailed'); 
// wait, let's just insert before the last import if not already inserted
if (!appCode.includes('WeaponIssueDetailed')) {
    const lastImportIndex = appCode.lastIndexOf('import ');
    appCode = appCode.slice(0, lastImportIndex) + imports + appCode.slice(lastImportIndex);
    
    const lastRouteIndex = appCode.lastIndexOf('</Routes>');
    appCode = appCode.slice(0, lastRouteIndex) + routes + appCode.slice(lastRouteIndex);
    
    fs.writeFileSync(appPath, appCode);
    console.log('App.jsx updated!');
}

const modulePagePath = 'c:\\Users\\DELL\\OneDrive\\Desktop\\AI topic for html\\AI poilc topic\\AI-police-topic\\src\\components\\ModulePage.jsx';
let moduleCode = fs.readFileSync(modulePagePath, 'utf8');

const topicMapAdditions = `
                      // Module 39: Arms & Equipment
                      'AI Weapon Issue & Return': '/weapon-issue',
                      'AI Ammunition Consumption Analytics': '/ammunition-analytics',
                      'AI Weapon Maintenance Scheduler': '/weapon-maintenance',
                      'AI Bulletproof Jacket Inventory': '/bulletproof-jacket',
                      'AI Helmet Inventory': '/helmet-inventory',
                      'AI Riot Gear Tracking': '/riot-gear',
                      'AI Tear Gas Inventory': '/tear-gas',
                      'AI Explosive Storage Monitoring': '/explosive-storage',
                      'AI Equipment Calibration Tracker': '/equipment-calibration',
                      'AI Armoury Inspection': '/armoury-inspection',
`;

if (!moduleCode.includes('/weapon-issue')) {
    const topicMapIndex = moduleCode.indexOf('const topicMap = {');
    const firstBrace = moduleCode.indexOf('{', topicMapIndex);
    moduleCode = moduleCode.slice(0, firstBrace + 1) + topicMapAdditions + moduleCode.slice(firstBrace + 1);
    
    fs.writeFileSync(modulePagePath, moduleCode);
    console.log('ModulePage.jsx updated!');
}
