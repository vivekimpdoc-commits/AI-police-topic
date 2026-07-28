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
import WeaponIssueDetailed from './pages/WeaponIssueDetailed';
import AmmunitionDetailed from './pages/AmmunitionDetailed';
import WeaponMaintenanceDetailed from './pages/WeaponMaintenanceDetailed';
import BulletproofJacketDetailed from './pages/BulletproofJacketDetailed';
import HelmetInventoryDetailed from './pages/HelmetInventoryDetailed';
import RiotGearDetailed from './pages/RiotGearDetailed';
import TearGasDetailed from './pages/TearGasDetailed';
import ExplosiveStorageDetailed from './pages/ExplosiveStorageDetailed';
import EquipmentCalibrationDetailed from './pages/EquipmentCalibrationDetailed';
import ArmouryInspectionDetailed from './pages/ArmouryInspectionDetailed';
import StateBorderCheckDetailed from './pages/StateBorderCheckDetailed';
import CommercialVehicleInspectionDetailed from './pages/CommercialVehicleInspectionDetailed';
import GoodsMovementVerificationDetailed from './pages/GoodsMovementVerificationDetailed';
import TouristVehicleMonitoringDetailed from './pages/TouristVehicleMonitoringDetailed';
import BorderIncidentRegisterDetailed from './pages/BorderIncidentRegisterDetailed';
import HighwayPatrolAnalyticsDetailed from './pages/HighwayPatrolAnalyticsDetailed';
import TollPlazaCoordinationDetailed from './pages/TollPlazaCoordinationDetailed';
import InterstateVehicleAlertDetailed from './pages/InterstateVehicleAlertDetailed';
import MobileCheckpointPlanningDetailed from './pages/MobileCheckpointPlanningDetailed';
import JansunwaiDetailed from './pages/JansunwaiDetailed';
import VoiceBotDetailed from './pages/VoiceBotDetailed';
import CitizenPortalDetailed from './pages/CitizenPortalDetailed';
import CitizenMobileAppDetailed from './pages/CitizenMobileAppDetailed';
import FeedbackManagementDetailed from './pages/FeedbackManagementDetailed';
import MediaManagementDetailed from './pages/MediaManagementDetailed';
import PressNoteGeneratorDetailed from './pages/PressNoteGeneratorDetailed';
import PublicCommunicationDetailed from './pages/PublicCommunicationDetailed';
import SocialMediaManagementDetailed from './pages/SocialMediaManagementDetailed';
import PublicAlertSystemDetailed from './pages/PublicAlertSystemDetailed';
import DailyPoliceBulletinDetailed from './pages/DailyPoliceBulletinDetailed';
import MorningBriefGeneratorDetailed from './pages/MorningBriefGeneratorDetailed';
import EveningSituationReportDetailed from './pages/EveningSituationReportDetailed';
import WeeklyCrimeDigestDetailed from './pages/WeeklyCrimeDigestDetailed';
import MonthlyDistrictReviewDetailed from './pages/MonthlyDistrictReviewDetailed';
import PoliceNewsletterDetailed from './pages/PoliceNewsletterDetailed';
import InternalKnowledgeSharingDetailed from './pages/InternalKnowledgeSharingDetailed';
import CommandInstructionsArchiveDetailed from './pages/CommandInstructionsArchiveDetailed';
import BriefingNotesGeneratorDetailed from './pages/BriefingNotesGeneratorDetailed';
import DailyOrderBookDetailed from './pages/DailyOrderBookDetailed';
import WirelessCommunicationMonitoringDetailed from './pages/WirelessCommunicationMonitoringDetailed';
import RadioLogAnalysisDetailed from './pages/RadioLogAnalysisDetailed';
import EmergencyBroadcastManagementDetailed from './pages/EmergencyBroadcastManagementDetailed';
import InternalMessagingAssistantDetailed from './pages/InternalMessagingAssistantDetailed';
import SecureCommunicationAuditDetailed from './pages/SecureCommunicationAuditDetailed';
import CommunicationFailureDetectionDetailed from './pages/CommunicationFailureDetectionDetailed';
import CallDispatchOptimizationDetailed from './pages/CallDispatchOptimizationDetailed';
import MultiChannelCommunicationHubDetailed from './pages/MultiChannelCommunicationHubDetailed';
import IncidentBroadcastSystemDetailed from './pages/IncidentBroadcastSystemDetailed';
import CommunicationPerformanceAnalyticsDetailed from './pages/CommunicationPerformanceAnalyticsDetailed';
import GramChaupalManagementDetailed from './pages/GramChaupalManagementDetailed';
import CitizenOutreachCalendarDetailed from './pages/CitizenOutreachCalendarDetailed';
import PoliceMitraPortalDetailed from './pages/PoliceMitraPortalDetailed';
import RWACoordinationDetailed from './pages/RWACoordinationDetailed';
import NGOCoordinationDetailed from './pages/NGOCoordinationDetailed';
import CommunityVolunteerNetworkDetailed from './pages/CommunityVolunteerNetworkDetailed';
import PublicTrustIndexDetailed from './pages/PublicTrustIndexDetailed';
import CommunityRiskSurveyDetailed from './pages/CommunityRiskSurveyDetailed';
import PublicAwarenessCampaignManagerDetailed from './pages/PublicAwarenessCampaignManagerDetailed';
import CitizenSuggestionPortalDetailed from './pages/CitizenSuggestionPortalDetailed';
import ComplaintManagementDetailed from './pages/ComplaintManagementDetailed';
import FIRAssistantDetailed from './pages/FIRAssistantDetailed';
import EFIRSystemDetailed from './pages/EFIRSystemDetailed';
import ComplaintRoutingDetailed from './pages/ComplaintRoutingDetailed';
import ComplaintAnalyticsDetailed from './pages/ComplaintAnalyticsDetailed';
import SealRegisterDetailed from './pages/SealRegisterDetailed';
import StampRegisterDetailed from './pages/StampRegisterDetailed';
import ConfidentialDocumentLockerDetailed from './pages/ConfidentialDocumentLockerDetailed';
import GovernmentGazetteArchiveDetailed from './pages/GovernmentGazetteArchiveDetailed';
import RecordWeedingScheduleDetailed from './pages/RecordWeedingScheduleDetailed';
import DocumentPreservationDetailed from './pages/DocumentPreservationDetailed';
import HistoricalRecordArchiveDetailed from './pages/HistoricalRecordArchiveDetailed';
import FileDigitizationQueueDetailed from './pages/FileDigitizationQueueDetailed';
import DigitalSignatureRegisterDetailed from './pages/DigitalSignatureRegisterDetailed';
import RecordAccessApprovalDetailed from './pages/RecordAccessApprovalDetailed';
import CrimeAnalyticsDetailed from './pages/CrimeAnalyticsDetailed';
import CrimeMappingDetailed from './pages/CrimeMappingDetailed';
import CrimeHotspotDetectionDetailed from './pages/CrimeHotspotDetectionDetailed';
import CrimePredictionDetailed from './pages/CrimePredictionDetailed';
import CrimePatternDiscoveryDetailed from './pages/CrimePatternDiscoveryDetailed';
import RepeatOffenderAnalysisDetailed from './pages/RepeatOffenderAnalysisDetailed';
import OrganizedCrimeIntelligenceDetailed from './pages/OrganizedCrimeIntelligenceDetailed';
import GangIntelligenceDetailed from './pages/GangIntelligenceDetailed';
import CriminalNetworkAnalysisDetailed from './pages/CriminalNetworkAnalysisDetailed';
import IntelligenceFusionCenterDetailed from './pages/IntelligenceFusionCenterDetailed';
import CyberCrimeInvestigationDetailed from './pages/CyberCrimeInvestigationDetailed';
import DigitalFraudDetectionDetailed from './pages/DigitalFraudDetectionDetailed';
import PhishingDetectionDetailed from './pages/PhishingDetectionDetailed';
import SocialMediaCrimeAnalysisDetailed from './pages/SocialMediaCrimeAnalysisDetailed';
import DarkWebIntelligenceDetailed from './pages/DarkWebIntelligenceDetailed';
import DigitalEvidenceManagementDetailed from './pages/DigitalEvidenceManagementDetailed';
import ImageAnalysisDetailed from './pages/ImageAnalysisDetailed';
import VideoAnalyticsDetailed from './pages/VideoAnalyticsDetailed';
import AudioForensicsDetailed from './pages/AudioForensicsDetailed';
import OCRDocumentAnalysisDetailed from './pages/OCRDocumentAnalysisDetailed';
import MetadataAnalysisDetailed from './pages/MetadataAnalysisDetailed';
import ChainOfCustodyDetailed from './pages/ChainOfCustodyDetailed';
import NDRFCoordinationDetailed from './pages/NDRFCoordinationDetailed';
import SDRFCoordinationDetailed from './pages/SDRFCoordinationDetailed';
import CivilDefenceCoordinationDetailed from './pages/CivilDefenceCoordinationDetailed';
import HomeGuardDeploymentDetailed from './pages/HomeGuardDeploymentDetailed';
import DisasterResourceInventoryDetailed from './pages/DisasterResourceInventoryDetailed';
import EmergencyShelterSecurityDetailed from './pages/EmergencyShelterSecurityDetailed';
import EmergencyEvacuationStatusBoardDetailed from './pages/EmergencyEvacuationStatusBoardDetailed';
import ReliefConvoyEscortManagementDetailed from './pages/ReliefConvoyEscortManagementDetailed';
import HumanitarianAssistanceCoordinationDetailed from './pages/HumanitarianAssistanceCoordinationDetailed';
import DisasterCommunicationLogDetailed from './pages/DisasterCommunicationLogDetailed';
import ReliefCampManagementDetailed from './pages/ReliefCampManagementDetailed';
import RescueTeamAllocationDetailed from './pages/RescueTeamAllocationDetailed';
import EmergencySupplyChainDetailed from './pages/EmergencySupplyChainDetailed';
import ShelterOccupancyDashboardDetailed from './pages/ShelterOccupancyDashboardDetailed';
import DisasterVolunteerManagementDetailed from './pages/DisasterVolunteerManagementDetailed';
import ResourceDistributionTrackerDetailed from './pages/ResourceDistributionTrackerDetailed';
import MedicalResponseCoordinationDetailed from './pages/MedicalResponseCoordinationDetailed';
import EvacuationRoutePlannerDetailed from './pages/EvacuationRoutePlannerDetailed';
import EmergencyStockMonitoringDetailed from './pages/EmergencyStockMonitoringDetailed';
import ReliefMaterialAuditDetailed from './pages/ReliefMaterialAuditDetailed';
import RegisterDigitizationDetailed from './pages/RegisterDigitizationDetailed';
import ManualRegisterReplacementDetailed from './pages/ManualRegisterReplacementDetailed';
import ComplianceCalendarDetailed from './pages/ComplianceCalendarDetailed';
import InspectionEvidenceRepositoryDetailed from './pages/InspectionEvidenceRepositoryDetailed';
import RecordAuthenticationDetailed from './pages/RecordAuthenticationDetailed';
import DocumentExpiryTrackerDetailed from './pages/DocumentExpiryTrackerDetailed';
import CircularComplianceDashboardDetailed from './pages/CircularComplianceDashboardDetailed';
import PolicyRevisionTrackerDetailed from './pages/PolicyRevisionTrackerDetailed';
import SOPUpdateDistributionDetailed from './pages/SOPUpdateDistributionDetailed';
import LegalComplianceChecklistDetailed from './pages/LegalComplianceChecklistDetailed';
import ElectionForceAllocationDetailed from './pages/ElectionForceAllocationDetailed';
import PollingBoothSecurityPlanningDetailed from './pages/PollingBoothSecurityPlanningDetailed';
import ElectionRouteManagementDetailed from './pages/ElectionRouteManagementDetailed';
import EVMSecurityCoordinationDetailed from './pages/EVMSecurityCoordinationDetailed';
import StrongRoomMonitoringDetailed from './pages/StrongRoomMonitoringDetailed';
import PollDayIncidentTrackerDetailed from './pages/PollDayIncidentTrackerDetailed';
import ElectionVulnerabilityMappingDetailed from './pages/ElectionVulnerabilityMappingDetailed';
import FlyingSquadDashboardDetailed from './pages/FlyingSquadDashboardDetailed';
import MCCMonitoringSupportDetailed from './pages/MCCMonitoringSupportDetailed';
import ElectionResourceDashboardDetailed from './pages/ElectionResourceDashboardDetailed';
import DigitalEvidenceVaultDetailed from './pages/DigitalEvidenceVaultDetailed';
import BlockchainEvidenceRegistryDetailed from './pages/BlockchainEvidenceRegistryDetailed';
import QuantumCryptographyPlanningDetailed from './pages/QuantumCryptographyPlanningDetailed';
import EdgeComputingPlatformDetailed from './pages/EdgeComputingPlatformDetailed';
import OfflineAIAssistantDetailed from './pages/OfflineAIAssistantDetailed';
import AugmentedRealityTrainingDetailed from './pages/AugmentedRealityTrainingDetailed';
import VRCrimeSceneTrainingDetailed from './pages/VRCrimeSceneTrainingDetailed';
import RoboticsCoordinationPlatformDetailed from './pages/RoboticsCoordinationPlatformDetailed';
import AutonomousDroneCoordinationDetailed from './pages/AutonomousDroneCoordinationDetailed';
import SmartSensorIntegrationDetailed from './pages/SmartSensorIntegrationDetailed';
import FuelManagementDetailed from './pages/FuelManagementDetailed';
import VehicleMaintenancePredictionDetailed from './pages/VehicleMaintenancePredictionDetailed';
import DriverDutyManagementDetailed from './pages/DriverDutyManagementDetailed';
import FleetUtilizationAnalyticsDetailed from './pages/FleetUtilizationAnalyticsDetailed';
import WorkshopManagementDetailed from './pages/WorkshopManagementDetailed';
import TyreLifecycleTrackingDetailed from './pages/TyreLifecycleTrackingDetailed';
import VehicleInsuranceTrackingDetailed from './pages/VehicleInsuranceTrackingDetailed';
import VehicleFitnessMonitoringDetailed from './pages/VehicleFitnessMonitoringDetailed';
import SparePartsInventoryDetailed from './pages/SparePartsInventoryDetailed';
import FuelFraudDetectionDetailed from './pages/FuelFraudDetectionDetailed';
import FingerprintAssistanceDetailed from './pages/FingerprintAssistanceDetailed';
import BallisticsAnalysisSupportDetailed from './pages/BallisticsAnalysisSupportDetailed';
import ForensicLabWorkflowDetailed from './pages/ForensicLabWorkflowDetailed';
import DNACaseTrackingDetailed from './pages/DNACaseTrackingDetailed';
import ToxicologyCaseManagementDetailed from './pages/ToxicologyCaseManagementDetailed';
import HandwritingComparisonSupportDetailed from './pages/HandwritingComparisonSupportDetailed';
import SignatureVerificationSupportDetailed from './pages/SignatureVerificationSupportDetailed';
import ForensicEvidenceRequestManagementDetailed from './pages/ForensicEvidenceRequestManagementDetailed';
import FSLReportTrackingDetailed from './pages/FSLReportTrackingDetailed';
import EvidenceIntegrityMonitoringDetailed from './pages/EvidenceIntegrityMonitoringDetailed';
import BorderSecurityDetailed from './pages/BorderSecurityDetailed';
import PrisonManagementDetailed from './pages/PrisonManagementDetailed';
import AntiTerrorIntelligenceDetailed from './pages/AntiTerrorIntelligenceDetailed';
import FinancialCrimeIntelligenceDetailed from './pages/FinancialCrimeIntelligenceDetailed';
import EnvironmentalCrimeMonitoringDetailed from './pages/EnvironmentalCrimeMonitoringDetailed';
import WildlifeCrimeInvestigationDetailed from './pages/WildlifeCrimeInvestigationDetailed';
import NarcoticsIntelligenceDetailed from './pages/NarcoticsIntelligenceDetailed';
import EconomicOffenceWingAssistantDetailed from './pages/EconomicOffenceWingAssistantDetailed';
import InterStateCoordinationPlatformDetailed from './pages/InterStateCoordinationPlatformDetailed';
import InternationalCooperationDashboardDetailed from './pages/InternationalCooperationDashboardDetailed';
import GISPlatformDetailed from './pages/GISPlatformDetailed';
import SmartCityIntegrationDetailed from './pages/SmartCityIntegrationDetailed';
import DroneMonitoringDetailed from './pages/DroneMonitoringDetailed';
import SatelliteIntelligenceDetailed from './pages/SatelliteIntelligenceDetailed';
import GeoFencingDetailed from './pages/GeoFencingDetailed';
import OSINTWorkspaceDetailed from './pages/OSINTWorkspaceDetailed';
import AnonymousTipManagementDetailed from './pages/AnonymousTipManagementDetailed';
import InformationCredibilityScoringDetailed from './pages/InformationCredibilityScoringDetailed';
import IntelligenceTimelineBuilderDetailed from './pages/IntelligenceTimelineBuilderDetailed';
import SubjectDossierGeneratorDetailed from './pages/SubjectDossierGeneratorDetailed';
import EventCorrelationEngineDetailed from './pages/EventCorrelationEngineDetailed';
import GeographicIntelligenceDashboardDetailed from './pages/GeographicIntelligenceDashboardDetailed';
import IntelligenceKnowledgeBaseDetailed from './pages/IntelligenceKnowledgeBaseDetailed';
import CrossAgencyInformationExchangeDetailed from './pages/CrossAgencyInformationExchangeDetailed';
import IntelligenceBriefGeneratorDetailed from './pages/IntelligenceBriefGeneratorDetailed';
import OfficeSeatingAllocationDetailed from './pages/OfficeSeatingAllocationDetailed';
import MeetingRoomBookingDetailed from './pages/MeetingRoomBookingDetailed';
import VisitorQueueManagementDetailed from './pages/VisitorQueueManagementDetailed';
import DigitalNoticeBoardDetailed from './pages/DigitalNoticeBoardDetailed';
import OfficeAssetReservationDetailed from './pages/OfficeAssetReservationDetailed';
import OfficialVehicleBookingDetailed from './pages/OfficialVehicleBookingDetailed';
import ConferenceHallSchedulerDetailed from './pages/ConferenceHallSchedulerDetailed';
import IntercomDirectoryDetailed from './pages/IntercomDirectoryDetailed';
import OfficeConsumablesTrackingDetailed from './pages/OfficeConsumablesTrackingDetailed';
import StationeryDistributionManagementDetailed from './pages/StationeryDistributionManagementDetailed';
import InternalVigilanceMonitoringDetailed from './pages/InternalVigilanceMonitoringDetailed';
import InternalComplaintCellDetailed from './pages/InternalComplaintCellDetailed';
import DepartmentalInquiryManagementDetailed from './pages/DepartmentalInquiryManagementDetailed';
import SuspensionCaseTrackingDetailed from './pages/SuspensionCaseTrackingDetailed';
import DisciplinaryActionManagementDetailed from './pages/DisciplinaryActionManagementDetailed';
import ConfidentialReportManagementDetailed from './pages/ConfidentialReportManagementDetailed';
import IntegrityMonitoringDashboardDetailed from './pages/IntegrityMonitoringDashboardDetailed';
import InternalEthicsMonitoringDetailed from './pages/InternalEthicsMonitoringDetailed';
import MisconductPatternAnalysisDetailed from './pages/MisconductPatternAnalysisDetailed';
import InternalRiskRegisterDetailed from './pages/InternalRiskRegisterDetailed';
import InterpolNoticeTrackerDetailed from './pages/InterpolNoticeTrackerDetailed';
import InterstateCoordinationHubDetailed from './pages/InterstateCoordinationHubDetailed';
import BorderCheckCoordinationDetailed from './pages/BorderCheckCoordinationDetailed';
import EmbassyLiaisonTrackerDetailed from './pages/EmbassyLiaisonTrackerDetailed';
import ForeignNationalCaseManagementDetailed from './pages/ForeignNationalCaseManagementDetailed';
import InternationalRequestTrackingDetailed from './pages/InternationalRequestTrackingDetailed';
import ImmigrationCoordinationSupportDetailed from './pages/ImmigrationCoordinationSupportDetailed';
import CrossBorderIntelligenceExchangeDetailed from './pages/CrossBorderIntelligenceExchangeDetailed';
import MutualLegalAssistanceTrackerDetailed from './pages/MutualLegalAssistanceTrackerDetailed';
import GlobalCrimeTrendDashboardDetailed from './pages/GlobalCrimeTrendDashboardDetailed';
import InternationalTrainingCoordinationDetailed from './pages/InternationalTrainingCoordinationDetailed';
import ForeignStudyVisitManagementDetailed from './pages/ForeignStudyVisitManagementDetailed';
import PoliceExchangeProgramDetailed from './pages/PoliceExchangeProgramDetailed';
import InternationalConferenceManagementDetailed from './pages/InternationalConferenceManagementDetailed';
import GlobalBestPracticesLibraryDetailed from './pages/GlobalBestPracticesLibraryDetailed';
import UNPolicingStandardsRepositoryDetailed from './pages/UNPolicingStandardsRepositoryDetailed';
import BilateralCooperationTrackerDetailed from './pages/BilateralCooperationTrackerDetailed';
import InternationalDelegationVisitsDetailed from './pages/InternationalDelegationVisitsDetailed';
import GlobalSecurityResearchHubDetailed from './pages/GlobalSecurityResearchHubDetailed';
import PoliceDiplomacyDashboardDetailed from './pages/PoliceDiplomacyDashboardDetailed';
import InvestigationAssistantDetailed from './pages/InvestigationAssistantDetailed';
import CaseManagementDetailed from './pages/CaseManagementDetailed';
import StatementAnalysisDetailed from './pages/StatementAnalysisDetailed';
import EvidenceCorrelationDetailed from './pages/EvidenceCorrelationDetailed';
import InvestigationTimelineDetailed from './pages/InvestigationTimelineDetailed';
import ChargeSheetAssistantDetailed from './pages/ChargeSheetAssistantDetailed';
import WitnessManagementDetailed from './pages/WitnessManagementDetailed';
import SuspectAnalysisDetailed from './pages/SuspectAnalysisDetailed';
import InvestigationDashboardDetailed from './pages/InvestigationDashboardDetailed';
import ColdCaseAnalysisDetailed from './pages/ColdCaseAnalysisDetailed';
import CommissionOfInquiryCoordinationDetailed from './pages/CommissionOfInquiryCoordinationDetailed';
import MagisterialInquiryWorkflowDetailed from './pages/MagisterialInquiryWorkflowDetailed';
import HumanRightsCommissionCaseDetailed from './pages/HumanRightsCommissionCaseDetailed';
import StateInformationCommissionCaseDetailed from './pages/StateInformationCommissionCaseDetailed';
import LokayuktaReferenceManagementDetailed from './pages/LokayuktaReferenceManagementDetailed';
import LegislativeAssemblyQuestionDetailed from './pages/LegislativeAssemblyQuestionDetailed';
import ParliamentQuestionCoordinationDetailed from './pages/ParliamentQuestionCoordinationDetailed';
import AssuranceMonitoringCellDetailed from './pages/AssuranceMonitoringCellDetailed';
import GovernmentReferenceMonitoringDetailed from './pages/GovernmentReferenceMonitoringDetailed';
import CabinetDecisionComplianceDetailed from './pages/CabinetDecisionComplianceDetailed';
import KnowledgeHubDetailed from './pages/KnowledgeHubDetailed';
import PoliceTrainingAcademyDetailed from './pages/PoliceTrainingAcademyDetailed';
import SOPAssistantDetailed from './pages/SOPAssistantDetailed';
import PolicyCircularSearchDetailed from './pages/PolicyCircularSearchDetailed';
import ELearningPlatformDetailed from './pages/ELearningPlatformDetailed';
import EventManagementDetailed from './pages/EventManagementDetailed';
import CrowdManagementDetailed from './pages/CrowdManagementDetailed';
import RiotIntelligenceDetailed from './pages/RiotIntelligenceDetailed';
import DisasterResponseDetailed from './pages/DisasterResponseDetailed';
import EmergencyManagementDetailed from './pages/EmergencyManagementDetailed';
import VIPSecurityDetailed from './pages/VIPSecurityDetailed';
import ElectionDutyManagementDetailed from './pages/ElectionDutyManagementDetailed';
import FestivalSecurityDetailed from './pages/FestivalSecurityDetailed';
import LegalAssistantDetailed from './pages/LegalAssistantDetailed';
import CourtCaseTrackingDetailed from './pages/CourtCaseTrackingDetailed';
import ProsecutionSupportDetailed from './pages/ProsecutionSupportDetailed';
import LegalResearchDetailed from './pages/LegalResearchDetailed';
import JudgmentAnalyticsDetailed from './pages/JudgmentAnalyticsDetailed';
import WarrantManagementDetailed from './pages/WarrantManagementDetailed';
import SummonsManagementDetailed from './pages/SummonsManagementDetailed';
import NoticeManagementDetailed from './pages/NoticeManagementDetailed';
import BailComplianceTrackerDetailed from './pages/BailComplianceTrackerDetailed';
import RemandMonitoringDetailed from './pages/RemandMonitoringDetailed';
import PrisonerEscortManagementDetailed from './pages/PrisonerEscortManagementDetailed';
import CourtProductionPlanningDetailed from './pages/CourtProductionPlanningDetailed';
import LegalDeadlineTrackerDetailed from './pages/LegalDeadlineTrackerDetailed';
import JudicialOrderTrackerDetailed from './pages/JudicialOrderTrackerDetailed';
import ComplianceMonitoringDetailed from './pages/ComplianceMonitoringDetailed';
import PawnShopMonitoringDetailed from './pages/PawnShopMonitoringDetailed';
import ScrapDealerVerificationDetailed from './pages/ScrapDealerVerificationDetailed';
import SecondHandGoodsRegisterDetailed from './pages/SecondHandGoodsRegisterDetailed';
import JewelleryShopSecurityDetailed from './pages/JewelleryShopSecurityDetailed';
import PetrolPumpSecurityDetailed from './pages/PetrolPumpSecurityDetailed';
import BankSecurityInspectionDetailed from './pages/BankSecurityInspectionDetailed';
import ATMSecurityComplianceDetailed from './pages/ATMSecurityComplianceDetailed';
import CashVanMovementDetailed from './pages/CashVanMovementDetailed';
import WarehouseSecurityDetailed from './pages/WarehouseSecurityDetailed';
import CriticalInfrastructureDetailed from './pages/CriticalInfrastructureDetailed';
import MissingPersonDetailed from './pages/MissingPersonDetailed';
import FacialRecognitionDetailed from './pages/FacialRecognitionDetailed';
import AgeProgressionDetailed from './pages/AgeProgressionDetailed';
import UnknownPersonIdentificationDetailed from './pages/UnknownPersonIdentificationDetailed';
import DeadBodyIdentificationDetailed from './pages/DeadBodyIdentificationDetailed';
import AnnualPolicingCalendarDetailed from './pages/AnnualPolicingCalendarDetailed';
import ResourceReadinessScoreDetailed from './pages/ResourceReadinessScoreDetailed';
import DistrictPreparednessAuditDetailed from './pages/DistrictPreparednessAuditDetailed';
import StrategicInitiativeTrackerDetailed from './pages/StrategicInitiativeTrackerDetailed';
import MissionObjectiveDashboardDetailed from './pages/MissionObjectiveDashboardDetailed';
import CapabilityGapAnalysisDetailed from './pages/CapabilityGapAnalysisDetailed';
import LongTermEquipmentPlanningDetailed from './pages/LongTermEquipmentPlanningDetailed';
import PoliceInnovationIndexDetailed from './pages/PoliceInnovationIndexDetailed';
import OrganizationalBenchmarkingDetailed from './pages/OrganizationalBenchmarkingDetailed';
import StrategicReviewRepositoryDetailed from './pages/StrategicReviewRepositoryDetailed';
import OfficeOrderManagementDetailed from './pages/OfficeOrderManagementDetailed';
import CircularDistributionDetailed from './pages/CircularDistributionDetailed';
import MeetingAgendaGeneratorDetailed from './pages/MeetingAgendaGeneratorDetailed';
import MeetingAttendanceTrackerDetailed from './pages/MeetingAttendanceTrackerDetailed';
import ActionTakenReportManagerDetailed from './pages/ActionTakenReportManagerDetailed';
import FileMovementTrackerDetailed from './pages/FileMovementTrackerDetailed';
import GovernmentLetterTrackingDetailed from './pages/GovernmentLetterTrackingDetailed';
import RecordRetentionSchedulerDetailed from './pages/RecordRetentionSchedulerDetailed';
import RTIAssistanceSystemDetailed from './pages/RTIAssistanceSystemDetailed';
import OfficeProductivityDashboardDetailed from './pages/OfficeProductivityDashboardDetailed';
import OfficeShiftCalendarDetailed from './pages/OfficeShiftCalendarDetailed';
import HolidayDutyRotationDetailed from './pages/HolidayDutyRotationDetailed';
import OfficialDiaryManagementDetailed from './pages/OfficialDiaryManagementDetailed';
import DigitalAttendanceBoardDetailed from './pages/DigitalAttendanceBoardDetailed';
import OfficeSeatingPlanDetailed from './pages/OfficeSeatingPlanDetailed';
import DepartmentContactDirectoryDetailed from './pages/DepartmentContactDirectoryDetailed';
import InternalTelephoneDirectoryDetailed from './pages/InternalTelephoneDirectoryDetailed';
import OfficialNoticeAutomationDetailed from './pages/OfficialNoticeAutomationDetailed';
import OfficeWorkflowDesignerDetailed from './pages/OfficeWorkflowDesignerDetailed';
import OfficeProcessAutomationDetailed from './pages/OfficeProcessAutomationDetailed';
import BuildingStructuralInspectionDetailed from './pages/BuildingStructuralInspectionDetailed';
import RoofMaintenancePlannerDetailed from './pages/RoofMaintenancePlannerDetailed';
import WaterTankCleaningScheduleDetailed from './pages/WaterTankCleaningScheduleDetailed';
import LiftMaintenanceMonitorDetailed from './pages/LiftMaintenanceMonitorDetailed';
import AirConditionerMaintenanceDetailed from './pages/AirConditionerMaintenanceDetailed';
import CCTVPoleMaintenanceDetailed from './pages/CCTVPoleMaintenanceDetailed';
import BoundaryWallInspectionDetailed from './pages/BoundaryWallInspectionDetailed';
import ElectricalSafetyInspectionDetailed from './pages/ElectricalSafetyInspectionDetailed';
import DrainageInspectionDetailed from './pages/DrainageInspectionDetailed';
import SolarPowerMonitoringDetailed from './pages/SolarPowerMonitoringDetailed';
import DakManagementDetailed from './pages/DakManagementDetailed';
import EOfficeIntegrationDetailed from './pages/EOfficeIntegrationDetailed';
import DispatchRegisterDetailed from './pages/DispatchRegisterDetailed';
import ReceiptRegisterDetailed from './pages/ReceiptRegisterDetailed';
import GovernmentCommunicationTrackerDetailed from './pages/GovernmentCommunicationTrackerDetailed';
import ConfidentialLetterRegisterDetailed from './pages/ConfidentialLetterRegisterDetailed';
import OfficeMemorandumManagementDetailed from './pages/OfficeMemorandumManagementDetailed';
import ReminderManagementDetailed from './pages/ReminderManagementDetailed';
import PendingLetterDashboardDetailed from './pages/PendingLetterDashboardDetailed';
import CorrespondenceAnalyticsDetailed from './pages/CorrespondenceAnalyticsDetailed';
import GovernmentOrderRepositoryDetailed from './pages/GovernmentOrderRepositoryDetailed';
import CircularImpactAnalyzerDetailed from './pages/CircularImpactAnalyzerDetailed';
import StandingOrderManagementDetailed from './pages/StandingOrderManagementDetailed';
import OfficeNoteSheetAssistantDetailed from './pages/OfficeNoteSheetAssistantDetailed';
import DispatchEnvelopeTrackingDetailed from './pages/DispatchEnvelopeTrackingDetailed';
import GazetteNotificationArchiveDetailed from './pages/GazetteNotificationArchiveDetailed';
import RecordClassificationEngineDetailed from './pages/RecordClassificationEngineDetailed';
import LegacyRecordConversionTrackerDetailed from './pages/LegacyRecordConversionTrackerDetailed';
import MicrofilmDigitizationManagerDetailed from './pages/MicrofilmDigitizationManagerDetailed';
import OfficialRecordAuthenticationDetailed from './pages/OfficialRecordAuthenticationDetailed';
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
        <Route path="/state-border-check" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <StateBorderCheckDetailed />
          </motion.div>
        } />
        <Route path="/commercial-vehicle-inspection" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CommercialVehicleInspectionDetailed />
          </motion.div>
        } />
        <Route path="/goods-movement-verification" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <GoodsMovementVerificationDetailed />
          </motion.div>
        } />
        <Route path="/tourist-vehicle-monitoring" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <TouristVehicleMonitoringDetailed />
          </motion.div>
        } />
        <Route path="/border-incident-register" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <BorderIncidentRegisterDetailed />
          </motion.div>
        } />
        <Route path="/highway-patrol-analytics" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <HighwayPatrolAnalyticsDetailed />
          </motion.div>
        } />
        <Route path="/toll-plaza-coordination" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <TollPlazaCoordinationDetailed />
          </motion.div>
        } />
        <Route path="/interstate-vehicle-alert" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InterstateVehicleAlertDetailed />
          </motion.div>
        } />
        <Route path="/mobile-checkpoint-planning" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <MobileCheckpointPlanningDetailed />
          </motion.div>
        } />
        <Route path="/jansunwai" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <JansunwaiDetailed />
          </motion.div>
        } />
        <Route path="/voice-bot" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <VoiceBotDetailed />
          </motion.div>
        } />
        <Route path="/citizen-portal" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CitizenPortalDetailed />
          </motion.div>
        } />
        <Route path="/citizen-mobile-app" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CitizenMobileAppDetailed />
          </motion.div>
        } />
        <Route path="/feedback-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <FeedbackManagementDetailed />
          </motion.div>
        } />
        <Route path="/media-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <MediaManagementDetailed />
          </motion.div>
        } />
        <Route path="/press-note-generator" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PressNoteGeneratorDetailed />
          </motion.div>
        } />
        <Route path="/public-communication" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PublicCommunicationDetailed />
          </motion.div>
        } />
        <Route path="/social-media-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <SocialMediaManagementDetailed />
          </motion.div>
        } />
        <Route path="/public-alert-system" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PublicAlertSystemDetailed />
          </motion.div>
        } />
        <Route path="/daily-police-bulletin" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DailyPoliceBulletinDetailed />
          </motion.div>
        } />
        <Route path="/morning-brief-generator" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <MorningBriefGeneratorDetailed />
          </motion.div>
        } />
        <Route path="/evening-situation-report" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <EveningSituationReportDetailed />
          </motion.div>
        } />
        <Route path="/weekly-crime-digest" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <WeeklyCrimeDigestDetailed />
          </motion.div>
        } />
        <Route path="/monthly-district-review" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <MonthlyDistrictReviewDetailed />
          </motion.div>
        } />
        <Route path="/police-newsletter" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceNewsletterDetailed />
          </motion.div>
        } />
        <Route path="/internal-knowledge-sharing" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InternalKnowledgeSharingDetailed />
          </motion.div>
        } />
        <Route path="/command-instructions-archive" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CommandInstructionsArchiveDetailed />
          </motion.div>
        } />
        <Route path="/briefing-notes-generator" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <BriefingNotesGeneratorDetailed />
          </motion.div>
        } />
        <Route path="/daily-order-book" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DailyOrderBookDetailed />
          </motion.div>
        } />
        <Route path="/wireless-communication-monitoring" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <WirelessCommunicationMonitoringDetailed />
          </motion.div>
        } />
        <Route path="/radio-log-analysis" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <RadioLogAnalysisDetailed />
          </motion.div>
        } />
        <Route path="/emergency-broadcast-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <EmergencyBroadcastManagementDetailed />
          </motion.div>
        } />
        <Route path="/internal-messaging-assistant" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InternalMessagingAssistantDetailed />
          </motion.div>
        } />
        <Route path="/secure-communication-audit" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <SecureCommunicationAuditDetailed />
          </motion.div>
        } />
        <Route path="/communication-failure-detection" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CommunicationFailureDetectionDetailed />
          </motion.div>
        } />
        <Route path="/call-dispatch-optimization" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CallDispatchOptimizationDetailed />
          </motion.div>
        } />
        <Route path="/multi-channel-communication-hub" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <MultiChannelCommunicationHubDetailed />
          </motion.div>
        } />
        <Route path="/incident-broadcast-system" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <IncidentBroadcastSystemDetailed />
          </motion.div>
        } />
        <Route path="/communication-performance-analytics" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CommunicationPerformanceAnalyticsDetailed />
          </motion.div>
        } />
        <Route path="/gram-chaupal-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <GramChaupalManagementDetailed />
          </motion.div>
        } />
        <Route path="/citizen-outreach-calendar" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CitizenOutreachCalendarDetailed />
          </motion.div>
        } />
        <Route path="/police-mitra-portal" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceMitraPortalDetailed />
          </motion.div>
        } />
        <Route path="/rwa-coordination" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <RWACoordinationDetailed />
          </motion.div>
        } />
        <Route path="/ngo-coordination" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <NGOCoordinationDetailed />
          </motion.div>
        } />
        <Route path="/community-volunteer-network" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CommunityVolunteerNetworkDetailed />
          </motion.div>
        } />
        <Route path="/public-trust-index" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PublicTrustIndexDetailed />
          </motion.div>
        } />
        <Route path="/community-risk-survey" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CommunityRiskSurveyDetailed />
          </motion.div>
        } />
        <Route path="/public-awareness-campaign-manager" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PublicAwarenessCampaignManagerDetailed />
          </motion.div>
        } />
        <Route path="/citizen-suggestion-portal" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CitizenSuggestionPortalDetailed />
          </motion.div>
        } />
        <Route path="/complaint-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ComplaintManagementDetailed />
          </motion.div>
        } />
        <Route path="/fir-assistant" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <FIRAssistantDetailed />
          </motion.div>
        } />
        <Route path="/e-fir-system" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <EFIRSystemDetailed />
          </motion.div>
        } />
        <Route path="/complaint-routing" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ComplaintRoutingDetailed />
          </motion.div>
        } />
        <Route path="/complaint-analytics" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ComplaintAnalyticsDetailed />
          </motion.div>
        } />
        <Route path="/seal-register" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <SealRegisterDetailed />
          </motion.div>
        } />
        <Route path="/stamp-register" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <StampRegisterDetailed />
          </motion.div>
        } />
        <Route path="/confidential-document-locker" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ConfidentialDocumentLockerDetailed />
          </motion.div>
        } />
        <Route path="/government-gazette-archive" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <GovernmentGazetteArchiveDetailed />
          </motion.div>
        } />
        <Route path="/record-weeding-schedule" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <RecordWeedingScheduleDetailed />
          </motion.div>
        } />
        <Route path="/document-preservation" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DocumentPreservationDetailed />
          </motion.div>
        } />
        <Route path="/historical-record-archive" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <HistoricalRecordArchiveDetailed />
          </motion.div>
        } />
        <Route path="/file-digitization-queue" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <FileDigitizationQueueDetailed />
          </motion.div>
        } />
        <Route path="/digital-signature-register" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DigitalSignatureRegisterDetailed />
          </motion.div>
        } />
        <Route path="/record-access-approval" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <RecordAccessApprovalDetailed />
          </motion.div>
        } />
        <Route path="/crime-analytics" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CrimeAnalyticsDetailed />
          </motion.div>
        } />
        <Route path="/crime-mapping" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CrimeMappingDetailed />
          </motion.div>
        } />
        <Route path="/crime-hotspot-detection" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CrimeHotspotDetectionDetailed />
          </motion.div>
        } />
        <Route path="/crime-prediction" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CrimePredictionDetailed />
          </motion.div>
        } />
        <Route path="/crime-pattern-discovery" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CrimePatternDiscoveryDetailed />
          </motion.div>
        } />
        <Route path="/repeat-offender-analysis" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <RepeatOffenderAnalysisDetailed />
          </motion.div>
        } />
        <Route path="/organized-crime-intelligence" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <OrganizedCrimeIntelligenceDetailed />
          </motion.div>
        } />
        <Route path="/gang-intelligence" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <GangIntelligenceDetailed />
          </motion.div>
        } />
        <Route path="/criminal-network-analysis" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CriminalNetworkAnalysisDetailed />
          </motion.div>
        } />
        <Route path="/intelligence-fusion-center" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <IntelligenceFusionCenterDetailed />
          </motion.div>
        } />
        <Route path="/cyber-crime-investigation" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CyberCrimeInvestigationDetailed />
          </motion.div>
        } />
        <Route path="/digital-fraud-detection" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DigitalFraudDetectionDetailed />
          </motion.div>
        } />
        <Route path="/phishing-detection" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PhishingDetectionDetailed />
          </motion.div>
        } />
        <Route path="/social-media-crime-analysis" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <SocialMediaCrimeAnalysisDetailed />
          </motion.div>
        } />
        <Route path="/dark-web-intelligence" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DarkWebIntelligenceDetailed />
          </motion.div>
        } />
        <Route path="/digital-evidence-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DigitalEvidenceManagementDetailed />
          </motion.div>
        } />
        <Route path="/image-analysis" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ImageAnalysisDetailed />
          </motion.div>
        } />
        <Route path="/video-analytics" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <VideoAnalyticsDetailed />
          </motion.div>
        } />
        <Route path="/audio-forensics" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <AudioForensicsDetailed />
          </motion.div>
        } />
        <Route path="/ocr-document-analysis" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <OCRDocumentAnalysisDetailed />
          </motion.div>
        } />
        <Route path="/metadata-analysis" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <MetadataAnalysisDetailed />
          </motion.div>
        } />
        <Route path="/chain-of-custody" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ChainOfCustodyDetailed />
          </motion.div>
        } />
        <Route path="/ndrf-coordination" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <NDRFCoordinationDetailed />
          </motion.div>
        } />
        <Route path="/sdrf-coordination" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <SDRFCoordinationDetailed />
          </motion.div>
        } />
        <Route path="/civil-defence-coordination" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CivilDefenceCoordinationDetailed />
          </motion.div>
        } />
        <Route path="/home-guard-deployment" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <HomeGuardDeploymentDetailed />
          </motion.div>
        } />
        <Route path="/disaster-resource-inventory" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DisasterResourceInventoryDetailed />
          </motion.div>
        } />
        <Route path="/emergency-shelter-security" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <EmergencyShelterSecurityDetailed />
          </motion.div>
        } />
        <Route path="/emergency-evacuation-status-board" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <EmergencyEvacuationStatusBoardDetailed />
          </motion.div>
        } />
        <Route path="/relief-convoy-escort-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ReliefConvoyEscortManagementDetailed />
          </motion.div>
        } />
        <Route path="/humanitarian-assistance-coordination" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <HumanitarianAssistanceCoordinationDetailed />
          </motion.div>
        } />
        <Route path="/disaster-communication-log" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DisasterCommunicationLogDetailed />
          </motion.div>
        } />
        <Route path="/relief-camp-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ReliefCampManagementDetailed />
          </motion.div>
        } />
        <Route path="/rescue-team-allocation" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <RescueTeamAllocationDetailed />
          </motion.div>
        } />
        <Route path="/emergency-supply-chain" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <EmergencySupplyChainDetailed />
          </motion.div>
        } />
        <Route path="/shelter-occupancy-dashboard" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ShelterOccupancyDashboardDetailed />
          </motion.div>
        } />
        <Route path="/disaster-volunteer-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DisasterVolunteerManagementDetailed />
          </motion.div>
        } />
        <Route path="/resource-distribution-tracker" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ResourceDistributionTrackerDetailed />
          </motion.div>
        } />
        <Route path="/medical-response-coordination" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <MedicalResponseCoordinationDetailed />
          </motion.div>
        } />
        <Route path="/evacuation-route-planner" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <EvacuationRoutePlannerDetailed />
          </motion.div>
        } />
        <Route path="/emergency-stock-monitoring" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <EmergencyStockMonitoringDetailed />
          </motion.div>
        } />
        <Route path="/relief-material-audit" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ReliefMaterialAuditDetailed />
          </motion.div>
        } />
        <Route path="/register-digitization" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <RegisterDigitizationDetailed />
          </motion.div>
        } />
        <Route path="/manual-register-replacement" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ManualRegisterReplacementDetailed />
          </motion.div>
        } />
        <Route path="/compliance-calendar" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ComplianceCalendarDetailed />
          </motion.div>
        } />
        <Route path="/inspection-evidence-repository" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InspectionEvidenceRepositoryDetailed />
          </motion.div>
        } />
        <Route path="/record-authentication" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <RecordAuthenticationDetailed />
          </motion.div>
        } />
        <Route path="/document-expiry-tracker" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DocumentExpiryTrackerDetailed />
          </motion.div>
        } />
        <Route path="/circular-compliance-dashboard" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CircularComplianceDashboardDetailed />
          </motion.div>
        } />
        <Route path="/policy-revision-tracker" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PolicyRevisionTrackerDetailed />
          </motion.div>
        } />
        <Route path="/sop-update-distribution" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <SOPUpdateDistributionDetailed />
          </motion.div>
        } />
        <Route path="/legal-compliance-checklist" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <LegalComplianceChecklistDetailed />
          </motion.div>
        } />
        <Route path="/election-force-allocation" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ElectionForceAllocationDetailed />
          </motion.div>
        } />
        <Route path="/polling-booth-security-planning" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PollingBoothSecurityPlanningDetailed />
          </motion.div>
        } />
        <Route path="/election-route-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ElectionRouteManagementDetailed />
          </motion.div>
        } />
        <Route path="/evm-security-coordination" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <EVMSecurityCoordinationDetailed />
          </motion.div>
        } />
        <Route path="/strong-room-monitoring" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <StrongRoomMonitoringDetailed />
          </motion.div>
        } />
        <Route path="/poll-day-incident-tracker" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PollDayIncidentTrackerDetailed />
          </motion.div>
        } />
        <Route path="/election-vulnerability-mapping" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ElectionVulnerabilityMappingDetailed />
          </motion.div>
        } />
        <Route path="/flying-squad-dashboard" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <FlyingSquadDashboardDetailed />
          </motion.div>
        } />
        <Route path="/mcc-monitoring-support" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <MCCMonitoringSupportDetailed />
          </motion.div>
        } />
        <Route path="/election-resource-dashboard" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ElectionResourceDashboardDetailed />
          </motion.div>
        } />
        <Route path="/digital-evidence-vault" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DigitalEvidenceVaultDetailed />
          </motion.div>
        } />
        <Route path="/blockchain-evidence-registry" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <BlockchainEvidenceRegistryDetailed />
          </motion.div>
        } />
        <Route path="/quantum-cryptography-planning" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <QuantumCryptographyPlanningDetailed />
          </motion.div>
        } />
        <Route path="/edge-computing-platform" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <EdgeComputingPlatformDetailed />
          </motion.div>
        } />
        <Route path="/offline-ai-assistant" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <OfflineAIAssistantDetailed />
          </motion.div>
        } />
        <Route path="/augmented-reality-training" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <AugmentedRealityTrainingDetailed />
          </motion.div>
        } />
        <Route path="/vr-crime-scene-training" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <VRCrimeSceneTrainingDetailed />
          </motion.div>
        } />
        <Route path="/robotics-coordination-platform" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <RoboticsCoordinationPlatformDetailed />
          </motion.div>
        } />
        <Route path="/autonomous-drone-coordination" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <AutonomousDroneCoordinationDetailed />
          </motion.div>
        } />
        <Route path="/smart-sensor-integration" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <SmartSensorIntegrationDetailed />
          </motion.div>
        } />
        <Route path="/fuel-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <FuelManagementDetailed />
          </motion.div>
        } />
        <Route path="/vehicle-maintenance-prediction" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <VehicleMaintenancePredictionDetailed />
          </motion.div>
        } />
        <Route path="/driver-duty-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DriverDutyManagementDetailed />
          </motion.div>
        } />
        <Route path="/fleet-utilization-analytics" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <FleetUtilizationAnalyticsDetailed />
          </motion.div>
        } />
        <Route path="/workshop-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <WorkshopManagementDetailed />
          </motion.div>
        } />
        <Route path="/tyre-lifecycle-tracking" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <TyreLifecycleTrackingDetailed />
          </motion.div>
        } />
        <Route path="/vehicle-insurance-tracking" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <VehicleInsuranceTrackingDetailed />
          </motion.div>
        } />
        <Route path="/vehicle-fitness-monitoring" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <VehicleFitnessMonitoringDetailed />
          </motion.div>
        } />
        <Route path="/spare-parts-inventory" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <SparePartsInventoryDetailed />
          </motion.div>
        } />
        <Route path="/fuel-fraud-detection" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <FuelFraudDetectionDetailed />
          </motion.div>
        } />
        <Route path="/fingerprint-assistance" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <FingerprintAssistanceDetailed />
          </motion.div>
        } />
        <Route path="/ballistics-analysis-support" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <BallisticsAnalysisSupportDetailed />
          </motion.div>
        } />
        <Route path="/forensic-lab-workflow" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ForensicLabWorkflowDetailed />
          </motion.div>
        } />
        <Route path="/dna-case-tracking" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DNACaseTrackingDetailed />
          </motion.div>
        } />
        <Route path="/toxicology-case-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ToxicologyCaseManagementDetailed />
          </motion.div>
        } />
        <Route path="/handwriting-comparison-support" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <HandwritingComparisonSupportDetailed />
          </motion.div>
        } />
        <Route path="/signature-verification-support" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <SignatureVerificationSupportDetailed />
          </motion.div>
        } />
        <Route path="/forensic-evidence-request" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ForensicEvidenceRequestManagementDetailed />
          </motion.div>
        } />
        <Route path="/fsl-report-tracking" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <FSLReportTrackingDetailed />
          </motion.div>
        } />
        <Route path="/evidence-integrity-monitoring" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <EvidenceIntegrityMonitoringDetailed />
          </motion.div>
        } />
        <Route path="/border-security" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <BorderSecurityDetailed />
          </motion.div>
        } />
        <Route path="/prison-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PrisonManagementDetailed />
          </motion.div>
        } />
        <Route path="/anti-terror-intelligence" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <AntiTerrorIntelligenceDetailed />
          </motion.div>
        } />
        <Route path="/financial-crime-intelligence" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <FinancialCrimeIntelligenceDetailed />
          </motion.div>
        } />
        <Route path="/environmental-crime-monitoring" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <EnvironmentalCrimeMonitoringDetailed />
          </motion.div>
        } />
        <Route path="/wildlife-crime-investigation" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <WildlifeCrimeInvestigationDetailed />
          </motion.div>
        } />
        <Route path="/narcotics-intelligence" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <NarcoticsIntelligenceDetailed />
          </motion.div>
        } />
        <Route path="/economic-offence-wing-assistant" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <EconomicOffenceWingAssistantDetailed />
          </motion.div>
        } />
        <Route path="/inter-state-coordination-platform" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InterStateCoordinationPlatformDetailed />
          </motion.div>
        } />
        <Route path="/international-cooperation-dashboard" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InternationalCooperationDashboardDetailed />
          </motion.div>
        } />
        <Route path="/gis-platform" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <GISPlatformDetailed />
          </motion.div>
        } />
        <Route path="/smart-city-integration" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <SmartCityIntegrationDetailed />
          </motion.div>
        } />
        <Route path="/drone-monitoring" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DroneMonitoringDetailed />
          </motion.div>
        } />
        <Route path="/satellite-intelligence" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <SatelliteIntelligenceDetailed />
          </motion.div>
        } />
        <Route path="/geo-fencing" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <GeoFencingDetailed />
          </motion.div>
        } />
        <Route path="/osint-workspace" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <OSINTWorkspaceDetailed />
          </motion.div>
        } />
        <Route path="/anonymous-tip-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <AnonymousTipManagementDetailed />
          </motion.div>
        } />
        <Route path="/information-credibility-scoring" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InformationCredibilityScoringDetailed />
          </motion.div>
        } />
        <Route path="/intelligence-timeline-builder" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <IntelligenceTimelineBuilderDetailed />
          </motion.div>
        } />
        <Route path="/subject-dossier-generator" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <SubjectDossierGeneratorDetailed />
          </motion.div>
        } />
        <Route path="/event-correlation-engine" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <EventCorrelationEngineDetailed />
          </motion.div>
        } />
        <Route path="/geographic-intelligence-dashboard" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <GeographicIntelligenceDashboardDetailed />
          </motion.div>
        } />
        <Route path="/intelligence-knowledge-base" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <IntelligenceKnowledgeBaseDetailed />
          </motion.div>
        } />
        <Route path="/cross-agency-information-exchange" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CrossAgencyInformationExchangeDetailed />
          </motion.div>
        } />
        <Route path="/intelligence-brief-generator" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <IntelligenceBriefGeneratorDetailed />
          </motion.div>
        } />
        <Route path="/office-seating-allocation" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <OfficeSeatingAllocationDetailed />
          </motion.div>
        } />
        <Route path="/meeting-room-booking" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <MeetingRoomBookingDetailed />
          </motion.div>
        } />
        <Route path="/visitor-queue-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <VisitorQueueManagementDetailed />
          </motion.div>
        } />
        <Route path="/digital-notice-board" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DigitalNoticeBoardDetailed />
          </motion.div>
        } />
        <Route path="/office-asset-reservation" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <OfficeAssetReservationDetailed />
          </motion.div>
        } />
        <Route path="/official-vehicle-booking" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <OfficialVehicleBookingDetailed />
          </motion.div>
        } />
        <Route path="/conference-hall-scheduler" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ConferenceHallSchedulerDetailed />
          </motion.div>
        } />
        <Route path="/intercom-directory" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <IntercomDirectoryDetailed />
          </motion.div>
        } />
        <Route path="/office-consumables-tracking" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <OfficeConsumablesTrackingDetailed />
          </motion.div>
        } />
        <Route path="/stationery-distribution-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <StationeryDistributionManagementDetailed />
          </motion.div>
        } />
        <Route path="/internal-vigilance-monitoring" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InternalVigilanceMonitoringDetailed />
          </motion.div>
        } />
        <Route path="/internal-complaint-cell" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InternalComplaintCellDetailed />
          </motion.div>
        } />
        <Route path="/departmental-inquiry-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DepartmentalInquiryManagementDetailed />
          </motion.div>
        } />
        <Route path="/suspension-case-tracking" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <SuspensionCaseTrackingDetailed />
          </motion.div>
        } />
        <Route path="/disciplinary-action-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <DisciplinaryActionManagementDetailed />
          </motion.div>
        } />
        <Route path="/confidential-report-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ConfidentialReportManagementDetailed />
          </motion.div>
        } />
        <Route path="/integrity-monitoring-dashboard" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <IntegrityMonitoringDashboardDetailed />
          </motion.div>
        } />
        <Route path="/internal-ethics-monitoring" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InternalEthicsMonitoringDetailed />
          </motion.div>
        } />
        <Route path="/misconduct-pattern-analysis" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <MisconductPatternAnalysisDetailed />
          </motion.div>
        } />
        <Route path="/internal-risk-register" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InternalRiskRegisterDetailed />
          </motion.div>
        } />
        <Route path="/interpol-notice-tracker" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InterpolNoticeTrackerDetailed />
          </motion.div>
        } />
        <Route path="/interstate-coordination-hub" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InterstateCoordinationHubDetailed />
          </motion.div>
        } />
        <Route path="/border-check-coordination" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <BorderCheckCoordinationDetailed />
          </motion.div>
        } />
        <Route path="/embassy-liaison-tracker" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <EmbassyLiaisonTrackerDetailed />
          </motion.div>
        } />
        <Route path="/foreign-national-case-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ForeignNationalCaseManagementDetailed />
          </motion.div>
        } />
        <Route path="/international-request-tracking" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InternationalRequestTrackingDetailed />
          </motion.div>
        } />
        <Route path="/immigration-coordination-support" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ImmigrationCoordinationSupportDetailed />
          </motion.div>
        } />
        <Route path="/cross-border-intelligence-exchange" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <CrossBorderIntelligenceExchangeDetailed />
          </motion.div>
        } />
        <Route path="/mutual-legal-assistance-tracker" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <MutualLegalAssistanceTrackerDetailed />
          </motion.div>
        } />
        <Route path="/global-crime-trend-dashboard" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <GlobalCrimeTrendDashboardDetailed />
          </motion.div>
        } />
        <Route path="/international-training-coordination" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InternationalTrainingCoordinationDetailed />
          </motion.div>
        } />
        <Route path="/foreign-study-visit-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <ForeignStudyVisitManagementDetailed />
          </motion.div>
        } />
        <Route path="/police-exchange-program" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceExchangeProgramDetailed />
          </motion.div>
        } />
        <Route path="/international-conference-management" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InternationalConferenceManagementDetailed />
          </motion.div>
        } />
        <Route path="/global-best-practices-library" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <GlobalBestPracticesLibraryDetailed />
          </motion.div>
        } />
        <Route path="/un-policing-standards-repository" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <UNPolicingStandardsRepositoryDetailed />
          </motion.div>
        } />
        <Route path="/bilateral-cooperation-tracker" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <BilateralCooperationTrackerDetailed />
          </motion.div>
        } />
        <Route path="/international-delegation-visits" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <InternationalDelegationVisitsDetailed />
          </motion.div>
        } />
        <Route path="/global-security-research-hub" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <GlobalSecurityResearchHubDetailed />
          </motion.div>
        } />
        <Route path="/police-diplomacy-dashboard" element={
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition">
            <PoliceDiplomacyDashboardDetailed />
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
              <Route path="/weapon-issue" element={<WeaponIssueDetailed />} />
        <Route path="/ammunition-analytics" element={<AmmunitionDetailed />} />
        <Route path="/weapon-maintenance" element={<WeaponMaintenanceDetailed />} />
        <Route path="/bulletproof-jacket" element={<BulletproofJacketDetailed />} />
        <Route path="/helmet-inventory" element={<HelmetInventoryDetailed />} />
        <Route path="/riot-gear" element={<RiotGearDetailed />} />
        <Route path="/tear-gas" element={<TearGasDetailed />} />
        <Route path="/explosive-storage" element={<ExplosiveStorageDetailed />} />
        <Route path="/equipment-calibration" element={<EquipmentCalibrationDetailed />} />
        <Route path="/armoury-inspection" element={<ArmouryInspectionDetailed />} />
        <Route path="/investigation-assistant" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><InvestigationAssistantDetailed /></motion.div>} />
        <Route path="/case-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CaseManagementDetailed /></motion.div>} />
        <Route path="/statement-analysis" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><StatementAnalysisDetailed /></motion.div>} />
        <Route path="/evidence-correlation" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><EvidenceCorrelationDetailed /></motion.div>} />
        <Route path="/investigation-timeline" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><InvestigationTimelineDetailed /></motion.div>} />
        <Route path="/charge-sheet-assistant" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ChargeSheetAssistantDetailed /></motion.div>} />
        <Route path="/witness-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><WitnessManagementDetailed /></motion.div>} />
        <Route path="/suspect-analysis" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><SuspectAnalysisDetailed /></motion.div>} />
        <Route path="/investigation-dashboard" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><InvestigationDashboardDetailed /></motion.div>} />
        <Route path="/cold-case-analysis" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ColdCaseAnalysisDetailed /></motion.div>} />
        <Route path="/osint-workspace" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><OSINTWorkspaceDetailed /></motion.div>} />
        <Route path="/anonymous-tip-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><AnonymousTipManagementDetailed /></motion.div>} />
        <Route path="/information-credibility" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><InformationCredibilityScoringDetailed /></motion.div>} />
        <Route path="/intelligence-timeline" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><IntelligenceTimelineBuilderDetailed /></motion.div>} />
        <Route path="/subject-dossier" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><SubjectDossierGeneratorDetailed /></motion.div>} />
        <Route path="/event-correlation" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><EventCorrelationEngineDetailed /></motion.div>} />
        <Route path="/geographic-intelligence" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><GeographicIntelligenceDashboardDetailed /></motion.div>} />
        <Route path="/intelligence-knowledge-base" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><IntelligenceKnowledgeBaseDetailed /></motion.div>} />
        <Route path="/cross-agency-exchange" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CrossAgencyInformationExchangeDetailed /></motion.div>} />
        <Route path="/intelligence-brief" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><IntelligenceBriefGeneratorDetailed /></motion.div>} />
        <Route path="/commission-of-inquiry" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CommissionOfInquiryCoordinationDetailed /></motion.div>} />
        <Route path="/magisterial-inquiry" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><MagisterialInquiryWorkflowDetailed /></motion.div>} />
        <Route path="/human-rights-commission" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><HumanRightsCommissionCaseDetailed /></motion.div>} />
        <Route path="/state-information-commission" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><StateInformationCommissionCaseDetailed /></motion.div>} />
        <Route path="/lokayukta-reference" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><LokayuktaReferenceManagementDetailed /></motion.div>} />
        <Route path="/legislative-assembly-question" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><LegislativeAssemblyQuestionDetailed /></motion.div>} />
        <Route path="/parliament-question" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ParliamentQuestionCoordinationDetailed /></motion.div>} />
        <Route path="/assurance-monitoring" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><AssuranceMonitoringCellDetailed /></motion.div>} />
        <Route path="/government-reference" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><GovernmentReferenceMonitoringDetailed /></motion.div>} />
        <Route path="/cabinet-decision-compliance" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CabinetDecisionComplianceDetailed /></motion.div>} />
        <Route path="/knowledge-hub" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><KnowledgeHubDetailed /></motion.div>} />
        <Route path="/police-training-academy" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PoliceTrainingAcademyDetailed /></motion.div>} />
        <Route path="/sop-assistant" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><SOPAssistantDetailed /></motion.div>} />
        <Route path="/policy-circular-search" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PolicyCircularSearchDetailed /></motion.div>} />
        <Route path="/e-learning-platform" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ELearningPlatformDetailed /></motion.div>} />
        <Route path="/event-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><EventManagementDetailed /></motion.div>} />
        <Route path="/crowd-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CrowdManagementDetailed /></motion.div>} />
        <Route path="/riot-intelligence" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><RiotIntelligenceDetailed /></motion.div>} />
        <Route path="/disaster-response" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><DisasterResponseDetailed /></motion.div>} />
        <Route path="/emergency-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><EmergencyManagementDetailed /></motion.div>} />
        <Route path="/vip-security" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><VIPSecurityDetailed /></motion.div>} />
        <Route path="/election-duty-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ElectionDutyManagementDetailed /></motion.div>} />
        <Route path="/festival-security" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><FestivalSecurityDetailed /></motion.div>} />
        <Route path="/legal-assistant" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><LegalAssistantDetailed /></motion.div>} />
        <Route path="/court-case-tracking" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CourtCaseTrackingDetailed /></motion.div>} />
        <Route path="/prosecution-support" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ProsecutionSupportDetailed /></motion.div>} />
        <Route path="/legal-research" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><LegalResearchDetailed /></motion.div>} />
        <Route path="/judgment-analytics" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><JudgmentAnalyticsDetailed /></motion.div>} />
        <Route path="/warrant-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><WarrantManagementDetailed /></motion.div>} />
        <Route path="/summons-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><SummonsManagementDetailed /></motion.div>} />
        <Route path="/notice-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><NoticeManagementDetailed /></motion.div>} />
        <Route path="/bail-compliance-tracker" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><BailComplianceTrackerDetailed /></motion.div>} />
        <Route path="/remand-monitoring" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><RemandMonitoringDetailed /></motion.div>} />
        <Route path="/prisoner-escort-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PrisonerEscortManagementDetailed /></motion.div>} />
        <Route path="/court-production-planning" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CourtProductionPlanningDetailed /></motion.div>} />
        <Route path="/legal-deadline-tracker" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><LegalDeadlineTrackerDetailed /></motion.div>} />
        <Route path="/judicial-order-tracker" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><JudicialOrderTrackerDetailed /></motion.div>} />
        <Route path="/compliance-monitoring" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ComplianceMonitoringDetailed /></motion.div>} />
        <Route path="/pawn-shop-monitoring" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PawnShopMonitoringDetailed /></motion.div>} />
        <Route path="/scrap-dealer-verification" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ScrapDealerVerificationDetailed /></motion.div>} />
        <Route path="/second-hand-goods-register" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><SecondHandGoodsRegisterDetailed /></motion.div>} />
        <Route path="/jewellery-shop-security" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><JewelleryShopSecurityDetailed /></motion.div>} />
        <Route path="/petrol-pump-security" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PetrolPumpSecurityDetailed /></motion.div>} />
        <Route path="/bank-security-inspection" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><BankSecurityInspectionDetailed /></motion.div>} />
        <Route path="/atm-security-compliance" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ATMSecurityComplianceDetailed /></motion.div>} />
        <Route path="/cash-van-movement" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CashVanMovementDetailed /></motion.div>} />
        <Route path="/warehouse-security" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><WarehouseSecurityDetailed /></motion.div>} />
        <Route path="/critical-infrastructure" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CriticalInfrastructureDetailed /></motion.div>} />
        <Route path="/missing-person" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><MissingPersonDetailed /></motion.div>} />
        <Route path="/facial-recognition" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><FacialRecognitionDetailed /></motion.div>} />
        <Route path="/age-progression" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><AgeProgressionDetailed /></motion.div>} />
        <Route path="/unknown-person-identification" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><UnknownPersonIdentificationDetailed /></motion.div>} />
        <Route path="/dead-body-identification" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><DeadBodyIdentificationDetailed /></motion.div>} />
        <Route path="/annual-policing-calendar" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><AnnualPolicingCalendarDetailed /></motion.div>} />
        <Route path="/resource-readiness-score" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ResourceReadinessScoreDetailed /></motion.div>} />
        <Route path="/district-preparedness-audit" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><DistrictPreparednessAuditDetailed /></motion.div>} />
        <Route path="/strategic-initiative-tracker" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><StrategicInitiativeTrackerDetailed /></motion.div>} />
        <Route path="/mission-objective-dashboard" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><MissionObjectiveDashboardDetailed /></motion.div>} />
        <Route path="/capability-gap-analysis" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CapabilityGapAnalysisDetailed /></motion.div>} />
        <Route path="/long-term-equipment-planning" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><LongTermEquipmentPlanningDetailed /></motion.div>} />
        <Route path="/police-innovation-index" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PoliceInnovationIndexDetailed /></motion.div>} />
        <Route path="/organizational-benchmarking" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><OrganizationalBenchmarkingDetailed /></motion.div>} />
        <Route path="/office-order-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><OfficeOrderManagementDetailed /></motion.div>} />
        <Route path="/circular-distribution" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CircularDistributionDetailed /></motion.div>} />
        <Route path="/meeting-agenda-generator" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><MeetingAgendaGeneratorDetailed /></motion.div>} />
        <Route path="/meeting-attendance-tracker" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><MeetingAttendanceTrackerDetailed /></motion.div>} />
        <Route path="/action-taken-report-manager" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ActionTakenReportManagerDetailed /></motion.div>} />
        <Route path="/file-movement-tracker" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><FileMovementTrackerDetailed /></motion.div>} />
        <Route path="/government-letter-tracking" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><GovernmentLetterTrackingDetailed /></motion.div>} />
        <Route path="/record-retention-scheduler" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><RecordRetentionSchedulerDetailed /></motion.div>} />
        <Route path="/rti-assistance-system" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><RTIAssistanceSystemDetailed /></motion.div>} />
        <Route path="/office-productivity-dashboard" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><OfficeProductivityDashboardDetailed /></motion.div>} />
        <Route path="/office-shift-calendar" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><OfficeShiftCalendarDetailed /></motion.div>} />
        <Route path="/holiday-duty-rotation" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><HolidayDutyRotationDetailed /></motion.div>} />
        <Route path="/official-diary-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><OfficialDiaryManagementDetailed /></motion.div>} />
        <Route path="/digital-attendance-board" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><DigitalAttendanceBoardDetailed /></motion.div>} />
        <Route path="/office-seating-plan" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><OfficeSeatingPlanDetailed /></motion.div>} />
        <Route path="/department-contact-directory" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><DepartmentContactDirectoryDetailed /></motion.div>} />
        <Route path="/internal-telephone-directory" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><InternalTelephoneDirectoryDetailed /></motion.div>} />
        <Route path="/official-notice-automation" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><OfficialNoticeAutomationDetailed /></motion.div>} />
        <Route path="/office-workflow-designer" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><OfficeWorkflowDesignerDetailed /></motion.div>} />
        <Route path="/office-process-automation" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><OfficeProcessAutomationDetailed /></motion.div>} />
        <Route path="/building-structural-inspection" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><BuildingStructuralInspectionDetailed /></motion.div>} />
        <Route path="/roof-maintenance-planner" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><RoofMaintenancePlannerDetailed /></motion.div>} />
        <Route path="/water-tank-cleaning-schedule" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><WaterTankCleaningScheduleDetailed /></motion.div>} />
        <Route path="/lift-maintenance-monitor" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><LiftMaintenanceMonitorDetailed /></motion.div>} />
        <Route path="/air-conditioner-maintenance" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><AirConditionerMaintenanceDetailed /></motion.div>} />
        <Route path="/cctv-pole-maintenance" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CCTVPoleMaintenanceDetailed /></motion.div>} />
        <Route path="/boundary-wall-inspection" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><BoundaryWallInspectionDetailed /></motion.div>} />
        <Route path="/electrical-safety-inspection" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ElectricalSafetyInspectionDetailed /></motion.div>} />
        <Route path="/drainage-inspection" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><DrainageInspectionDetailed /></motion.div>} />
        <Route path="/solar-power-monitoring" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><SolarPowerMonitoringDetailed /></motion.div>} />
        <Route path="/dak-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><DakManagementDetailed /></motion.div>} />
        <Route path="/e-office-integration" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><EOfficeIntegrationDetailed /></motion.div>} />
        <Route path="/dispatch-register" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><DispatchRegisterDetailed /></motion.div>} />
        <Route path="/receipt-register" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ReceiptRegisterDetailed /></motion.div>} />
        <Route path="/government-communication-tracker" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><GovernmentCommunicationTrackerDetailed /></motion.div>} />
        <Route path="/confidential-letter-register" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ConfidentialLetterRegisterDetailed /></motion.div>} />
        <Route path="/office-memorandum-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><OfficeMemorandumManagementDetailed /></motion.div>} />
        <Route path="/reminder-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ReminderManagementDetailed /></motion.div>} />
        <Route path="/pending-letter-dashboard" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PendingLetterDashboardDetailed /></motion.div>} />
        <Route path="/correspondence-analytics" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CorrespondenceAnalyticsDetailed /></motion.div>} />
        <Route path="/government-order-repository" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><GovernmentOrderRepositoryDetailed /></motion.div>} />
        <Route path="/circular-impact-analyzer" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CircularImpactAnalyzerDetailed /></motion.div>} />
        <Route path="/standing-order-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><StandingOrderManagementDetailed /></motion.div>} />
        <Route path="/office-note-sheet-assistant" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><OfficeNoteSheetAssistantDetailed /></motion.div>} />
        <Route path="/dispatch-envelope-tracking" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><DispatchEnvelopeTrackingDetailed /></motion.div>} />
        <Route path="/gazette-notification-archive" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><GazetteNotificationArchiveDetailed /></motion.div>} />
        <Route path="/record-classification-engine" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><RecordClassificationEngineDetailed /></motion.div>} />
        <Route path="/legacy-record-conversion-tracker" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><LegacyRecordConversionTrackerDetailed /></motion.div>} />
        <Route path="/microfilm-digitization-manager" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><MicrofilmDigitizationManagerDetailed /></motion.div>} />
        <Route path="/official-record-authentication" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><OfficialRecordAuthenticationDetailed /></motion.div>} />
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
