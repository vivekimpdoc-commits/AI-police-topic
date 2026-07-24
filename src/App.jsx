import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './index.css';
import { modules } from './data/modules';
import ModulePage from './components/ModulePage';
import Home from './pages/Home';
import HRMSDetailed from './pages/HrmsDetailed';
import FinanceDetailed from './pages/FinanceDetailed';
import BudgetPlanningDetailed from './pages/BudgetPlanningDetailed';
import BudgetApprovalDetailed from './pages/BudgetApprovalDetailed';
import FundAllocationDetailed from './pages/FundAllocationDetailed';
import GrantManagementDetailed from './pages/GrantManagementDetailed';
import DepartmentBudgetDetailed from './pages/DepartmentBudgetDetailed';
import ProjectBudgetDetailed from './pages/ProjectBudgetDetailed';
import RevenueManagementDetailed from './pages/RevenueManagementDetailed';
import ExpenseManagementDetailed from './pages/ExpenseManagementDetailed';
import PayrollIntegrationDetailed from './pages/PayrollIntegrationDetailed';
import ProcurementManagementDetailed from './pages/ProcurementManagementDetailed';
import VendorManagementDetailed from './pages/VendorManagementDetailed';
import AssetFinanceDetailed from './pages/AssetFinanceDetailed';
import AuditFinanceDetailed from './pages/AuditFinanceDetailed';
import FinancialComplianceDetailed from './pages/FinancialComplianceDetailed';
import FinancialReportsDetailed from './pages/FinancialReportsDetailed';
import AIForecastingDetailed from './pages/AIForecastingDetailed';
import CostOptimizationDetailed from './pages/CostOptimizationDetailed';
import FinancialRiskAnalysisDetailed from './pages/FinancialRiskAnalysisDetailed';
import ExecutiveDashboardFinanceDetailed from './pages/ExecutiveDashboardFinanceDetailed';
import NotificationCenterFinanceDetailed from './pages/NotificationCenterFinanceDetailed';
import ProcurementDetailed from './pages/ProcurementDetailed';
import AuditDetailed from './pages/AuditDetailed';
import DocumentDetailed from './pages/DocumentDetailed';

import PoliceHRDomainExpertDetailed from './pages/PoliceHRDomainExpertDetailed';
import OfficerRecruitmentExpertDetailed from './pages/OfficerRecruitmentExpertDetailed';
import DutyLeaveExpertDetailed from './pages/DutyLeaveExpertDetailed';
import PayrollAllowancesExpertDetailed from './pages/PayrollAllowancesExpertDetailed';
import PerformanceMedalsExpertDetailed from './pages/PerformanceMedalsExpertDetailed';
import PoliceTrainingExpertDetailed from './pages/PoliceTrainingExpertDetailed';
import ForceEngagementExpertDetailed from './pages/ForceEngagementExpertDetailed';
import PoliceActComplianceExpertDetailed from './pages/PoliceActComplianceExpertDetailed';
import ArmouryManagementDetailed from './pages/ArmouryManagementDetailed';
import MentalHealthStressDetailed from './pages/MentalHealthStressDetailed';
import PhysicalFitnessTrackerDetailed from './pages/PhysicalFitnessTrackerDetailed';
import GrievanceRedressalDetailed from './pages/GrievanceRedressalDetailed';
import SmartShiftOptimizationDetailed from './pages/SmartShiftOptimizationDetailed';
import FleetFuelManagementDetailed from './pages/FleetFuelManagementDetailed';
import K9UnitManagementDetailed from './pages/K9UnitManagementDetailed';
import CourtSummonLegalSyncDetailed from './pages/CourtSummonLegalSyncDetailed';
import CyberSecurityAccessDetailed from './pages/CyberSecurityAccessDetailed';
import DisciplinaryActionTrackerDetailed from './pages/DisciplinaryActionTrackerDetailed';
import PensionGratuityCalculatorDetailed from './pages/PensionGratuityCalculatorDetailed';
import ResettlementVeteranSupportDetailed from './pages/ResettlementVeteranSupportDetailed';
import AgentDetailed from './pages/AgentDetailed';
import MultiAgentDetailed from './pages/MultiAgentDetailed';
import KnowledgeDetailed from './pages/KnowledgeDetailed';
import DecisionDetailed from './pages/DecisionDetailed';
import TwinDetailed from './pages/TwinDetailed';
import InvestigationDetailed from './pages/InvestigationDetailed';
import CopilotDetailed from './pages/CopilotDetailed';
import MultimodalDetailed from './pages/MultimodalDetailed';
import ModelManagementDetailed from './pages/ModelManagementDetailed';
import DataLakeDetailed from './pages/DataLakeDetailed';
import ResearchLabDetailed from './pages/ResearchLabDetailed';
import OperationsCommandDetailed from './pages/OperationsCommandDetailed';
import GovernanceDetailed from './pages/GovernanceDetailed';
import EnterpriseAnalyticsDetailed from './pages/EnterpriseAnalyticsDetailed';
import ExecutiveDashboardDetailed from './pages/ExecutiveDashboardDetailed';
import CitizenDetailed from './pages/CitizenDetailed';
import ComplaintDetailed from './pages/ComplaintDetailed';
import IntelligenceDetailed from './pages/IntelligenceDetailed';
import PredictiveDetailed from './pages/PredictiveDetailed';
import CyberCrimeDetailed from './pages/CyberCrimeDetailed';
import DigitalEvidenceDetailed from './pages/DigitalEvidenceDetailed';
import MissingPersonsDetailed from './pages/MissingPersonsDetailed';
import SafetyDetailed from './pages/SafetyDetailed';
import TrafficDetailed from './pages/TrafficDetailed';
import LawOrderDetailed from './pages/LawOrderDetailed';
import LegalCourtDetailed from './pages/LegalCourtDetailed';
import TrainingDetailed from './pages/TrainingDetailed';
import LogisticsDetailed from './pages/LogisticsDetailed';
import SmartCityDetailed from './pages/SmartCityDetailed';
import CommunicationDetailed from './pages/CommunicationDetailed';
import BorderSecurityDetailed from './pages/BorderSecurityDetailed';
import PrisonDetailed from './pages/PrisonDetailed';
import AntiTerrorDetailed from './pages/AntiTerrorDetailed';
import FinancialCrimeDetailed from './pages/FinancialCrimeDetailed';
import NarcoticsDetailed from './pages/NarcoticsDetailed';
import PoliceStationDetailed from './pages/PoliceStationDetailed';
import FleetDetailed from './pages/FleetDetailed';
import RadioCommsDetailed from './pages/RadioCommsDetailed';
import PublicSafetyDetailed from './pages/PublicSafetyDetailed';
import EmergingTechDetailed from './pages/EmergingTechDetailed';
import TechServicesDetailed from './pages/TechServicesDetailed';
import InfrastructureDetailed from './pages/InfrastructureDetailed';
import InternalSecurityDetailed from './pages/InternalSecurityDetailed';
import ArmouryDetailed from './pages/ArmouryDetailed';
import LegalProcessDetailed from './pages/LegalProcessDetailed';
import CommunityPolicingDetailed from './pages/CommunityPolicingDetailed';
import IntelligenceSupportDetailed from './pages/IntelligenceSupportDetailed';
import PoliceAdminDetailed from './pages/PoliceAdminDetailed';
import TrainingQualityDetailed from './pages/TrainingQualityDetailed';
import IntlCoordinationDetailed from './pages/IntlCoordinationDetailed';
import ResearchInnovationDetailed from './pages/ResearchInnovationDetailed';
import PoliceHQDetailed from './pages/PoliceHQDetailed';
import CorrespondenceDetailed from './pages/CorrespondenceDetailed';
import InspectionDetailed from './pages/InspectionDetailed';
import PoliceLinesDetailed from './pages/PoliceLinesDetailed';
import OfficialDocsDetailed from './pages/OfficialDocsDetailed';
import PoliceVehiclesDetailed from './pages/PoliceVehiclesDetailed';
import CommsDocsDetailed from './pages/CommsDocsDetailed';
import PoliceWelfareDetailed from './pages/PoliceWelfareDetailed';
import TechAdminDetailed from './pages/TechAdminDetailed';
import StrategicPlanningDetailed from './pages/StrategicPlanningDetailed';
import LicensingRegDetailed from './pages/LicensingRegDetailed';
import VerificationServicesDetailed from './pages/VerificationServicesDetailed';
import ElectionManagementDetailed from './pages/ElectionManagementDetailed';
import PrisonerCustodyDetailed from './pages/PrisonerCustodyDetailed';
import BorderCheckPostDetailed from './pages/BorderCheckPostDetailed';
import BusinessComplianceDetailed from './pages/BusinessComplianceDetailed';
import SpecialOperationsDetailed from './pages/SpecialOperationsDetailed';
import DocumentationComplianceDetailed from './pages/DocumentationComplianceDetailed';
import PublicInterfaceDetailed from './pages/PublicInterfaceDetailed';
import StrategicAdminDetailed from './pages/StrategicAdminDetailed';
import RecruitmentEcosystemDetailed from './pages/RecruitmentEcosystemDetailed';
import PromotionsDetailed from './pages/PromotionsDetailed';
import TransfersDetailed from './pages/TransfersDetailed';
import PoliceProcurementDetailed from './pages/PoliceProcurementDetailed';
import PoliceLaboratoriesDetailed from './pages/PoliceLaboratoriesDetailed';
import PoliceLibraryDetailed from './pages/PoliceLibraryDetailed';
import PoliceIntelligenceDetailed from './pages/PoliceIntelligenceDetailed';
import DisasterEmergencyDetailed from './pages/DisasterEmergencyDetailed';
import VIPProtocolDetailed from './pages/VIPProtocolDetailed';
import InformerManagementDetailed from './pages/InformerManagementDetailed';
import SecretInfoDetailed from './pages/SecretInfoDetailed';
import IntelligenceVerificationDetailed from './pages/IntelligenceVerificationDetailed';
import SourceReliabilityDetailed from './pages/SourceReliabilityDetailed';
import CriminalRelationshipDetailed from './pages/CriminalRelationshipDetailed';
import AliasNicknameDetailed from './pages/AliasNicknameDetailed';
import CrossCaseLinkDetailed from './pages/CrossCaseLinkDetailed';
import CaseSimilarityDetailed from './pages/CaseSimilarityDetailed';
import SuspectMovementDetailed from './pages/SuspectMovementDetailed';
import InvestigationQualityDetailed from './pages/InvestigationQualityDetailed';
import SpecializedRegistersDetailed from './pages/SpecializedRegistersDetailed';
import InternalAdminDetailed from './pages/InternalAdminDetailed';
import PoliceWelfareUniqueDetailed from './pages/PoliceWelfareUniqueDetailed';
import ScientificTechnicalDetailed from './pages/ScientificTechnicalDetailed';
import PlanningStrategyDetailed from './pages/PlanningStrategyDetailed';
import InternationalRelationsDetailed from './pages/InternationalRelationsDetailed';
import PoliceLegs2Detailed from './pages/PoliceLegs2Detailed';
import PoliceBuildingsDetailed from './pages/PoliceBuildingsDetailed';
import PoliceFinanceDetailed from './pages/PoliceFinanceDetailed';
import PoliceEnvironmentDetailed from './pages/PoliceEnvironmentDetailed';
import PoliceTechnologyDetailed from './pages/PoliceTechnologyDetailed';
import PoliceAdmin88Detailed from './pages/PoliceAdmin88Detailed';
import PoliceSportsDetailed from './pages/PoliceSportsDetailed';
import PoliceProtocolDetailed from './pages/PoliceProtocolDetailed';
import PoliceResearch91Detailed from './pages/PoliceResearch91Detailed';
import PoliceKnowledge92Detailed from './pages/PoliceKnowledge92Detailed';
import PoliceTelecom93Detailed from './pages/PoliceTelecom93Detailed';
import PoliceDocumentation94Detailed from './pages/PoliceDocumentation94Detailed';
import PoliceInfrastructure95Detailed from './pages/PoliceInfrastructure95Detailed';
import PoliceUtilities96Detailed from './pages/PoliceUtilities96Detailed';
import PoliceHospitality97Detailed from './pages/PoliceHospitality97Detailed';
import PoliceMedia98Detailed from './pages/PoliceMedia98Detailed';
import PoliceInnovation100Detailed from './pages/PoliceInnovation100Detailed';
import CommandCenterDetailed from './pages/CommandCenterDetailed';
import TopicContent from './pages/TopicContent';
import TopicDetail from './pages/TopicDetail';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Globe, ShieldAlert } from 'lucide-react';

const TopNav = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 2rem', background: 'rgba(11, 20, 38, 0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(6, 182, 212, 0.3)', zIndex: 1000, boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <ShieldAlert color="#06b6d4" size={24} />
        <span style={{ color: '#fff', fontWeight: 800, letterSpacing: '2px', fontSize: '1.1rem' }}>UP POLICE <span style={{ color: '#06b6d4' }}>AI COMMAND</span></span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }}></div>
          <span style={{ color: '#10b981', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: 'bold' }}>SYSTEM ONLINE</span>
        </div>
        
        <button 
          onClick={toggleLanguage}
          style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            background: 'rgba(6, 182, 212, 0.1)',
            border: '1px solid #06b6d4',
            color: '#06b6d4',
            padding: '0.4rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontFamily: 'var(--font-family)',
            fontWeight: 600,
            letterSpacing: '1px',
            fontSize: '0.8rem',
            transition: 'all 0.3s'
          }}
          onMouseOver={(e) => { e.currentTarget.style.background = '#06b6d4'; e.currentTarget.style.color = '#000'; e.currentTarget.style.boxShadow = '0 0 15px rgba(6, 182, 212, 0.5)'; }}
          onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)'; e.currentTarget.style.color = '#06b6d4'; e.currentTarget.style.boxShadow = 'none'; }}
        >
          <Globe size={14} /> 
          {language === 'en' ? 'हिंदी' : 'ENGLISH'}
        </button>
      </div>
    </div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }} className="page-transition">
            <Home />
          </motion.div>
        } />
        <Route path="/hrms" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <HRMSDetailed />
          </motion.div>
        } />
        <Route path="/finance" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <FinanceDetailed />
          </motion.div>
        } />
        <Route path="/budget-planning" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <BudgetPlanningDetailed />
          </motion.div>
        } />
        <Route path="/budget-approval" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <BudgetApprovalDetailed />
          </motion.div>
        } />
        <Route path="/fund-allocation" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <FundAllocationDetailed />
          </motion.div>
        } />
        <Route path="/grant-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <GrantManagementDetailed />
          </motion.div>
        } />
        <Route path="/department-budget" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DepartmentBudgetDetailed />
          </motion.div>
        } />
        <Route path="/project-budget" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ProjectBudgetDetailed />
          </motion.div>
        } />
        <Route path="/revenue-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <RevenueManagementDetailed />
          </motion.div>
        } />
        <Route path="/expense-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ExpenseManagementDetailed />
          </motion.div>
        } />
        <Route path="/payroll-integration" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PayrollIntegrationDetailed />
          </motion.div>
        } />
        <Route path="/procurement-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ProcurementManagementDetailed />
          </motion.div>
        } />
        <Route path="/vendor-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <VendorManagementDetailed />
          </motion.div>
        } />
        <Route path="/asset-finance" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <AssetFinanceDetailed />
          </motion.div>
        } />
        <Route path="/audit-finance" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <AuditFinanceDetailed />
          </motion.div>
        } />
        <Route path="/financial-compliance" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <FinancialComplianceDetailed />
          </motion.div>
        } />
        <Route path="/financial-reports" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <FinancialReportsDetailed />
          </motion.div>
        } />
        <Route path="/ai-forecasting" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <AIForecastingDetailed />
          </motion.div>
        } />
        <Route path="/cost-optimization" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CostOptimizationDetailed />
          </motion.div>
        } />
        <Route path="/financial-risk-analysis" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <FinancialRiskAnalysisDetailed />
          </motion.div>
        } />
        <Route path="/executive-dashboard-finance" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ExecutiveDashboardFinanceDetailed />
          </motion.div>
        } />
        <Route path="/notification-center-finance" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <NotificationCenterFinanceDetailed />
          </motion.div>
        } />
        <Route path="/police-hr-domain" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PoliceHRDomainExpertDetailed /></motion.div>
        } />
        <Route path="/officer-recruitment" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><OfficerRecruitmentExpertDetailed /></motion.div>
        } />
        <Route path="/duty-leave" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><DutyLeaveExpertDetailed /></motion.div>
        } />
        <Route path="/payroll-allowances" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PayrollAllowancesExpertDetailed /></motion.div>
        } />
        <Route path="/performance-medals" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PerformanceMedalsExpertDetailed /></motion.div>
        } />
        <Route path="/police-training" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PoliceTrainingExpertDetailed /></motion.div>
        } />
        <Route path="/force-engagement" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ForceEngagementExpertDetailed /></motion.div>
        } />
        <Route path="/police-act-compliance" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PoliceActComplianceExpertDetailed /></motion.div>
        } />
        <Route path="/armoury-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ArmouryManagementDetailed /></motion.div>
        } />
        <Route path="/mental-health-stress" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><MentalHealthStressDetailed /></motion.div>
        } />
        <Route path="/physical-fitness" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PhysicalFitnessTrackerDetailed /></motion.div>
        } />
        <Route path="/grievance-redressal" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><GrievanceRedressalDetailed /></motion.div>
        } />
        <Route path="/smart-shift" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><SmartShiftOptimizationDetailed /></motion.div>
        } />
        <Route path="/fleet-fuel" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><FleetFuelManagementDetailed /></motion.div>
        } />
        <Route path="/k9-unit" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><K9UnitManagementDetailed /></motion.div>
        } />
        <Route path="/court-summon" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CourtSummonLegalSyncDetailed /></motion.div>
        } />
        <Route path="/cyber-security-access" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CyberSecurityAccessDetailed /></motion.div>
        } />
        <Route path="/disciplinary-action" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><DisciplinaryActionTrackerDetailed /></motion.div>
        } />
        <Route path="/pension-gratuity" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PensionGratuityCalculatorDetailed /></motion.div>
        } />
        <Route path="/resettlement-veteran" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ResettlementVeteranSupportDetailed /></motion.div>
        } />
        <Route path="/procurement" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ProcurementDetailed />
          </motion.div>
        } />
        <Route path="/audit" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <AuditDetailed />
          </motion.div>
        } />
        <Route path="/document" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DocumentDetailed />
          </motion.div>
        } />
        <Route path="/multi-agent" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <MultiAgentDetailed />
          </motion.div>
        } />
        <Route path="/knowledge-graph" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <KnowledgeDetailed />
          </motion.div>
        } />
        <Route path="/decision-support" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DecisionDetailed />
          </motion.div>
        } />
        <Route path="/digital-twin" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <TwinDetailed />
          </motion.div>
        } />
        <Route path="/investigation-assistant" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InvestigationDetailed />
          </motion.div>
        } />
        <Route path="/copilot" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CopilotDetailed />
          </motion.div>
        } />
        <Route path="/multimodal" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <MultimodalDetailed />
          </motion.div>
        } />
        <Route path="/model-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ModelManagementDetailed />
          </motion.div>
        } />
        <Route path="/data-lake" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DataLakeDetailed />
          </motion.div>
        } />
        <Route path="/research-lab" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ResearchLabDetailed />
          </motion.div>
        } />
        <Route path="/citizen-services" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CitizenDetailed />
          </motion.div>
        } />
        <Route path="/complaint-fir" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ComplaintDetailed />
          </motion.div>
        } />
        <Route path="/intelligence" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <IntelligenceDetailed />
          </motion.div>
        } />
        <Route path="/predictive-policing" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PredictiveDetailed />
          </motion.div>
        } />
        <Route path="/cyber-crime" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CyberCrimeDetailed />
          </motion.div>
        } />
        <Route path="/digital-evidence" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DigitalEvidenceDetailed />
          </motion.div>
        } />
        <Route path="/missing-persons" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <MissingPersonsDetailed />
          </motion.div>
        } />
        <Route path="/women-child-safety" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <SafetyDetailed />
          </motion.div>
        } />
        <Route path="/traffic" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <TrafficDetailed />
          </motion.div>
        } />
        <Route path="/law-order" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <LawOrderDetailed />
          </motion.div>
        } />
        <Route path="/legal-court" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <LegalCourtDetailed />
          </motion.div>
        } />
        <Route path="/training-academy" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <TrainingDetailed />
          </motion.div>
        } />
        <Route path="/logistics" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <LogisticsDetailed />
          </motion.div>
        } />
        <Route path="/smart-city" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <SmartCityDetailed />
          </motion.div>
        } />
        <Route path="/communication" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CommunicationDetailed />
          </motion.div>
        } />
        <Route path="/border-security" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <BorderSecurityDetailed />
          </motion.div>
        } />
        <Route path="/prison-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PrisonDetailed />
          </motion.div>
        } />
        <Route path="/anti-terror" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <AntiTerrorDetailed />
          </motion.div>
        } />
        <Route path="/financial-crime" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <FinancialCrimeDetailed />
          </motion.div>
        } />
        <Route path="/narcotics" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <NarcoticsDetailed />
          </motion.div>
        } />
        <Route path="/police-station" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceStationDetailed />
          </motion.div>
        } />
        <Route path="/fleet-logistics" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <FleetDetailed />
          </motion.div>
        } />
        <Route path="/radio-comms" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <RadioCommsDetailed />
          </motion.div>
        } />
        <Route path="/public-safety" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PublicSafetyDetailed />
          </motion.div>
        } />
        <Route path="/emerging-tech" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <EmergingTechDetailed />
          </motion.div>
        } />
        <Route path="/tech-services" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <TechServicesDetailed />
          </motion.div>
        } />
        <Route path="/infrastructure" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InfrastructureDetailed />
          </motion.div>
        } />
        <Route path="/internal-security" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InternalSecurityDetailed />
          </motion.div>
        } />
        <Route path="/armoury" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ArmouryDetailed />
          </motion.div>
        } />
        <Route path="/legal-process" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <LegalProcessDetailed />
          </motion.div>
        } />
        <Route path="/community-policing" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CommunityPolicingDetailed />
          </motion.div>
        } />
        <Route path="/intelligence-support" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <IntelligenceSupportDetailed />
          </motion.div>
        } />
        <Route path="/disaster-logistics" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DisasterEmergencyDetailed />
          </motion.div>
        } />
        <Route path="/police-admin" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceAdminDetailed />
          </motion.div>
        } />
        <Route path="/training-quality" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <TrainingQualityDetailed />
          </motion.div>
        } />
        <Route path="/international-coordination" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <IntlCoordinationDetailed />
          </motion.div>
        } />
        <Route path="/research-innovation" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ResearchInnovationDetailed />
          </motion.div>
        } />
        <Route path="/police-hq" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceHQDetailed />
          </motion.div>
        } />
        <Route path="/correspondence" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CorrespondenceDetailed />
          </motion.div>
        } />
        <Route path="/police-inspection" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InspectionDetailed />
          </motion.div>
        } />
        <Route path="/police-lines" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceLinesDetailed />
          </motion.div>
        } />
        <Route path="/official-documents" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <OfficialDocsDetailed />
          </motion.div>
        } />
        <Route path="/police-vehicles" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceVehiclesDetailed />
          </motion.div>
        } />
        <Route path="/comms-docs" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CommsDocsDetailed />
          </motion.div>
        } />
        <Route path="/police-welfare" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceWelfareDetailed />
          </motion.div>
        } />
        <Route path="/tech-admin" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <TechAdminDetailed />
          </motion.div>
        } />
        <Route path="/strategic-planning" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <StrategicPlanningDetailed />
          </motion.div>
        } />
        <Route path="/licensing-regulation" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <LicensingRegDetailed />
          </motion.div>
        } />
        <Route path="/verification-services" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <VerificationServicesDetailed />
          </motion.div>
        } />
        <Route path="/election-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ElectionManagementDetailed />
          </motion.div>
        } />
        <Route path="/prisoner-custody" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PrisonerCustodyDetailed />
          </motion.div>
        } />
        <Route path="/border-check-post" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <BorderCheckPostDetailed />
          </motion.div>
        } />
        <Route path="/business-compliance" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <BusinessComplianceDetailed />
          </motion.div>
        } />
        <Route path="/special-operations" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <SpecialOperationsDetailed />
          </motion.div>
        } />
        <Route path="/documentation-compliance" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DocumentationComplianceDetailed />
          </motion.div>
        } />
        <Route path="/public-interface" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PublicInterfaceDetailed />
          </motion.div>
        } />
        <Route path="/strategic-admin" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <StrategicAdminDetailed />
          </motion.div>
        } />
        <Route path="/recruitment-ecosystem" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <RecruitmentEcosystemDetailed />
          </motion.div>
        } />
        <Route path="/police-promotions" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PromotionsDetailed />
          </motion.div>
        } />
        <Route path="/police-transfers" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <TransfersDetailed />
          </motion.div>
        } />
        <Route path="/police-procurement" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceProcurementDetailed />
          </motion.div>
        } />
        <Route path="/police-laboratories" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceLaboratoriesDetailed />
          </motion.div>
        } />
        <Route path="/police-library" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceLibraryDetailed />
          </motion.div>
        } />
        <Route path="/police-intelligence" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceIntelligenceDetailed />
          </motion.div>
        } />
        <Route path="/disaster-emergency" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DisasterEmergencyDetailed />
          </motion.div>
        } />
        <Route path="/vip-protocol" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <VIPProtocolDetailed />
          </motion.div>
        } />
        <Route path="/specialized-registers" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <SpecializedRegistersDetailed />
          </motion.div>
        } />
        <Route path="/internal-admin" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InternalAdminDetailed />
          </motion.div>
        } />
        <Route path="/police-welfare-unique" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceWelfareUniqueDetailed />
          </motion.div>
        } />
        <Route path="/scientific-technical" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ScientificTechnicalDetailed />
          </motion.div>
        } />
        <Route path="/planning-strategy" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PlanningStrategyDetailed />
          </motion.div>
        } />
        <Route path="/international-relations" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InternationalRelationsDetailed />
          </motion.div>
        } />
        <Route path="/police-legal-process-2" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceLegs2Detailed />
          </motion.div>
        } />
        <Route path="/police-buildings" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceBuildingsDetailed />
          </motion.div>
        } />
        <Route path="/police-finance" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceFinanceDetailed />
          </motion.div>
        } />
        <Route path="/command-center" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CommandCenterDetailed />
          </motion.div>
        } />
        <Route path="/operations-command" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <OperationsCommandDetailed />
          </motion.div>
        } />
        <Route path="/ai-governance" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <GovernanceDetailed />
          </motion.div>
        } />
        <Route path="/enterprise-analytics" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <EnterpriseAnalyticsDetailed />
          </motion.div>
        } />
        <Route path="/executive-dashboard" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ExecutiveDashboardDetailed />
          </motion.div>
        } />
        <Route path="/topic/:topicName/content" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="page-transition">
            <TopicContent />
          </motion.div>
        } />
        <Route path="/topic/:topicName" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="page-transition">
            <TopicDetail />
          </motion.div>
        } />
        <Route path="/module/:moduleId" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="page-transition">
            <ModulePage modules={modules} />
          </motion.div>
        } />
        <Route path="/police-environment" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceEnvironmentDetailed />
          </motion.div>
        } />
        <Route path="/police-technology" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceTechnologyDetailed />
          </motion.div>
        } />
        <Route path="/police-administration" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceAdmin88Detailed />
          </motion.div>
        } />
        <Route path="/police-sports" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceSportsDetailed />
          </motion.div>
        } />
        <Route path="/police-protocol" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceProtocolDetailed />
          </motion.div>
        } />
        <Route path="/police-research-91" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceResearch91Detailed />
          </motion.div>
        } />
        <Route path="/police-knowledge-92" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceKnowledge92Detailed />
          </motion.div>
        } />
        <Route path="/police-telecom-93" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceTelecom93Detailed />
          </motion.div>
        } />
        <Route path="/police-documentation-94" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceDocumentation94Detailed />
          </motion.div>
        } />
        <Route path="/police-infrastructure-95" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceInfrastructure95Detailed />
          </motion.div>
        } />
        <Route path="/police-utilities-96" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceUtilities96Detailed />
          </motion.div>
        } />
        <Route path="/police-hospitality-97" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceHospitality97Detailed />
          </motion.div>
        } />
        <Route path="/police-media-98" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceMedia98Detailed />
          </motion.div>
        } />
        <Route path="/police-innovation-100" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceInnovation100Detailed />
          </motion.div>
        } />

        <Route path="/informer-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InformerManagementDetailed />
          </motion.div>
        } />
        <Route path="/secret-info" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <SecretInfoDetailed />
          </motion.div>
        } />
        <Route path="/intelligence-verification" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <IntelligenceVerificationDetailed />
          </motion.div>
        } />
        <Route path="/source-reliability" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <SourceReliabilityDetailed />
          </motion.div>
        } />
        <Route path="/criminal-relationship" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CriminalRelationshipDetailed />
          </motion.div>
        } />
        <Route path="/alias-nickname" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <AliasNicknameDetailed />
          </motion.div>
        } />
        <Route path="/cross-case-link" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CrossCaseLinkDetailed />
          </motion.div>
        } />
        <Route path="/case-similarity" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CaseSimilarityDetailed />
          </motion.div>
        } />
        <Route path="/suspect-movement" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <SuspectMovementDetailed />
          </motion.div>
        } />
        <Route path="/investigation-quality" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InvestigationQualityDetailed />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="hud-grid"></div>
        <div className="hud-scanlines"></div>
        <div className="hud-glow"></div>
        <TopNav />
        
        <div className="dashboard-layout">
          <main className="main-content scrollbar-hide" style={{ paddingTop: '80px' }}>
            <AnimatedRoutes />
          </main>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
