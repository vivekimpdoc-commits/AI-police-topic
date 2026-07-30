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
import BeatPatrolVoiceCopilotAgent from './pages/BeatPatrolVoiceCopilotAgent';
import TrafficStopsQueryAgentAgent from './pages/TrafficStopsQueryAgentAgent';
import SuspectVerificationBotAgent from './pages/SuspectVerificationBotAgent';
import RealTimeTranslatorAIAgent from './pages/RealTimeTranslatorAIAgent';
import EmergencySOSTriggerBotAgent from './pages/EmergencySOSTriggerBotAgent';
import WarrantDatabaseFetcherAgent from './pages/WarrantDatabaseFetcherAgent';
import VehicleRegistrationAIAgent from './pages/VehicleRegistrationAIAgent';
import MobileFingerprintMatcherAgent from './pages/MobileFingerprintMatcherAgent';
import OnSceneEvidenceLoggerAgent from './pages/OnSceneEvidenceLoggerAgent';
import OfficerShiftCoordinatorAIAgent from './pages/OfficerShiftCoordinatorAIAgent';
import MentalHealthAssessorBotAgent from './pages/MentalHealthAssessorBotAgent';
import HandsFreePlateScannerAIAgent from './pages/HandsFreePlateScannerAIAgent';
import ARSuspectProfilingAgentAgent from './pages/ARSuspectProfilingAgentAgent';
import SecureFieldChatbotAgent from './pages/SecureFieldChatbotAgent';
import ConversationalRosterAIAgent from './pages/ConversationalRosterAIAgent';
import GangTerritoryIntelBotAgent from './pages/GangTerritoryIntelBotAgent';
import CrimeProximityAlertAIAgent from './pages/CrimeProximityAlertAIAgent';
import StolenVehicleHistoryBotAgent from './pages/StolenVehicleHistoryBotAgent';
import LiveInterrogationTranslatorAgent from './pages/LiveInterrogationTranslatorAgent';
import CrossStateDialectInterpreterAgent from './pages/CrossStateDialectInterpreterAgent';
import TouristComplaintCopilotAgent from './pages/TouristComplaintCopilotAgent';
import AudioToTextTranscriptionAIAgent from './pages/AudioToTextTranscriptionAIAgent';
import HeartRateMonitorSyncBotAgent from './pages/HeartRateMonitorSyncBotAgent';
import AutomaticGunDrawnAlertAIAgent from './pages/AutomaticGunDrawnAlertAIAgent';
import DeadZoneGPSTrackerAIAgent from './pages/DeadZoneGPSTrackerAIAgent';
import BackupTriangulationBotAgent from './pages/BackupTriangulationBotAgent';
import OfflineEdgeQueryAIAgent from './pages/OfflineEdgeQueryAIAgent';
import WhisperLevelVoiceRecognizerAgent from './pages/WhisperLevelVoiceRecognizerAgent';
import EnvironmentalNoiseCancelerAgent from './pages/EnvironmentalNoiseCancelerAgent';
import AutomatedContextGathererAgent from './pages/AutomatedContextGathererAgent';
import DeEscalationStrategyBotAgent from './pages/DeEscalationStrategyBotAgent';
import EmotionDetectionAssistantAgent from './pages/EmotionDetectionAssistantAgent';
import RealTimeLegalAdvisorBotAgent from './pages/RealTimeLegalAdvisorBotAgent';
import FieldNoteDictationAIAgent from './pages/FieldNoteDictationAIAgent';
import CrimeScenePerimeterAIAgent from './pages/CrimeScenePerimeterAIAgent';
import WitnessStatementLoggerAgent from './pages/WitnessStatementLoggerAgent';
import MirandaRightsPrompterAIAgent from './pages/MirandaRightsPrompterAIAgent';
import TrafficTicketAutoDrafterAgent from './pages/TrafficTicketAutoDrafterAgent';
import BodyCamSyncAssistantAgent from './pages/BodyCamSyncAssistantAgent';
import DroneLaunchCoordinatorBotAgent from './pages/DroneLaunchCoordinatorBotAgent';
import HighwayPursuitNavAIAgent from './pages/HighwayPursuitNavAIAgent';
import HostageSituationWhispererAgent from './pages/HostageSituationWhispererAgent';
import RiotCrowdSizeEstimatorAgent from './pages/RiotCrowdSizeEstimatorAgent';
import BiometricFaceMatchAssistantAgent from './pages/BiometricFaceMatchAssistantAgent';
import FakeIDDetectorBotAgent from './pages/FakeIDDetectorBotAgent';
import SubstanceAbuseSymptomAIAgent from './pages/SubstanceAbuseSymptomAIAgent';
import DomesticViolenceProtocolBotAgent from './pages/DomesticViolenceProtocolBotAgent';
import MissingChildAlertBotAgent from './pages/MissingChildAlertBotAgent';
import AmberAlertBroadcasterAIAgent from './pages/AmberAlertBroadcasterAIAgent';
import ParoleeProximityWarnerAgent from './pages/ParoleeProximityWarnerAgent';
import OffDutyThreatAlertAIAgent from './pages/OffDutyThreatAlertAIAgent';
import WeaponConcealmentDetectorAgent from './pages/WeaponConcealmentDetectorAgent';
import SuspiciousActivityLoggerAgent from './pages/SuspiciousActivityLoggerAgent';
import StreetCamSyncCopilotAgent from './pages/StreetCamSyncCopilotAgent';
import FieldEvidenceTaggerAIAgent from './pages/FieldEvidenceTaggerAIAgent';
import FirstAidGuidanceBotAgent from './pages/FirstAidGuidanceBotAgent';
import K9UnitDeploymentAssessorAgent from './pages/K9UnitDeploymentAssessorAgent';
import MultiLingualMirandaBotAgent from './pages/MultiLingualMirandaBotAgent';
import DigitalEvidenceUploaderAIAgent from './pages/DigitalEvidenceUploaderAIAgent';
import VirtualPartnerAIAgent from './pages/VirtualPartnerAIAgent';
import VideoAnalyticsEngineAIAgent from './pages/VideoAnalyticsEngineAIAgent';
import AudioForensicsAIAgent from './pages/AudioForensicsAIAgent';
import GeospatialThreatMapperAgent from './pages/GeospatialThreatMapperAgent';
import DarkWebScraperBotAgent from './pages/DarkWebScraperBotAgent';
import LiveCCTVAnomalyDetectorAgent from './pages/LiveCCTVAnomalyDetectorAgent';
import FacialRecognitionAIAgent from './pages/FacialRecognitionAIAgent';
import GaitPostureAnalyzerAgent from './pages/GaitPostureAnalyzerAgent';
import LipReadingAIAgent from './pages/LipReadingAIAgent';
import DeepfakeVideoDetectorAgent from './pages/DeepfakeVideoDetectorAgent';
import LicensePlateRecognitionAIAgent from './pages/LicensePlateRecognitionAIAgent';
import CrowdSentimentAnalyzerVisualAgent from './pages/CrowdSentimentAnalyzerVisualAgent';
import SocialMediaImageScraperAgent from './pages/SocialMediaImageScraperAgent';
import VoicePrintMatchingAgentAgent from './pages/VoicePrintMatchingAgentAgent';
import DroneVideoSummarizerAgent from './pages/DroneVideoSummarizerAgent';
import SatelliteImageryCorrelatorAgent from './pages/SatelliteImageryCorrelatorAgent';
import ObjectTrackingBotAcrossCCTVsAgent from './pages/ObjectTrackingBotAcrossCCTVsAgent';
import WeaponDetectionAIAgent from './pages/WeaponDetectionAIAgent';
import HiddenCompartmentIdentifierXRayAIAgent from './pages/HiddenCompartmentIdentifierXRayAIAgent';
import TrafficPatternVisualizerAgent from './pages/TrafficPatternVisualizerAgent';
import AbandonedObjectDetectorAgent from './pages/AbandonedObjectDetectorAgent';
import CrowdDensityEstimatorAgent from './pages/CrowdDensityEstimatorAgent';
import ThermalImagingInterpreterAgent from './pages/ThermalImagingInterpreterAgent';
import InfraredNightVisionEnhancerAIAgent from './pages/InfraredNightVisionEnhancerAIAgent';
import AI3DSpatialReconstructionBotAgent from './pages/AI3DSpatialReconstructionBotAgent';
import AudioDistressSignalDetectorAgent from './pages/AudioDistressSignalDetectorAgent';
import GunshotAcousticTriangulatorAgent from './pages/GunshotAcousticTriangulatorAgent';
import GlassBreakSensorAIAgent from './pages/GlassBreakSensorAIAgent';
import VoiceEmotionAnalyzerAgent from './pages/VoiceEmotionAnalyzerAgent';
import HateSpeechAudioDetectorAgent from './pages/HateSpeechAudioDetectorAgent';
import SocialNetworkGraphModelerAgent from './pages/SocialNetworkGraphModelerAgent';
import GeolocationSpoofingDetectorAgent from './pages/GeolocationSpoofingDetectorAgent';
import CryptoWalletTransactionTracerAgent from './pages/CryptoWalletTransactionTracerAgent';
import DarkWebVendorLinkerAIAgent from './pages/DarkWebVendorLinkerAIAgent';
import IllicitMarketplaceScraperAgent from './pages/IllicitMarketplaceScraperAgent';
import CyberThreatIntelligenceBotAgent from './pages/CyberThreatIntelligenceBotAgent';
import EncryptedChatTrafficAnalyzerAgent from './pages/EncryptedChatTrafficAnalyzerAgent';
import PhishingDomainDetectorAgent from './pages/PhishingDomainDetectorAgent';
import BotnetTrafficAnalyzerAgent from './pages/BotnetTrafficAnalyzerAgent';
import OpenSourceIntelligenceOSINTBotAgent from './pages/OpenSourceIntelligenceOSINTBotAgent';
import SuspectRoutePredictorAgent from './pages/SuspectRoutePredictorAgent';
import BorderInfiltrationVisualizerAgent from './pages/BorderInfiltrationVisualizerAgent';
import MaritimeSmugglingPredictorAgent from './pages/MaritimeSmugglingPredictorAgent';
import CargoContainerScannerAIAgent from './pages/CargoContainerScannerAIAgent';
import FakeCurrencyPatternMatcherAgent from './pages/FakeCurrencyPatternMatcherAgent';
import DocumentForgeryDetectorAgent from './pages/DocumentForgeryDetectorAgent';
import SignatureVerificationAIAgent from './pages/SignatureVerificationAIAgent';
import BiometricSpoofingDetectorAgent from './pages/BiometricSpoofingDetectorAgent';
import MultiCameraSyncAIAgent from './pages/MultiCameraSyncAIAgent';
import CrossDistrictVideoCorrelatorAgent from './pages/CrossDistrictVideoCorrelatorAgent';
import NewsBroadcastSentimentBotAgent from './pages/NewsBroadcastSentimentBotAgent';
import RadicalizationContentFlaggingAIAgent from './pages/RadicalizationContentFlaggingAIAgent';
import EventTicketScalpingDetectorAgent from './pages/EventTicketScalpingDetectorAgent';
import VIPProximityAlertAIAgent from './pages/VIPProximityAlertAIAgent';
import AutomatedRedactionAIPrivacyAgent from './pages/AutomatedRedactionAIPrivacyAgent';
import VisualEvidenceTimelineBuilderAgent from './pages/VisualEvidenceTimelineBuilderAgent';
import BodyCamFootageAuditorAgent from './pages/BodyCamFootageAuditorAgent';
import ForensicBloodSpatterAnalyzerAIAgent from './pages/ForensicBloodSpatterAnalyzerAIAgent';
import CrimeSceneBlueprintGeneratorAgent from './pages/CrimeSceneBlueprintGeneratorAgent';
import VirtualRealityReconstructionAgentAgent from './pages/VirtualRealityReconstructionAgentAgent';
import PatrolRouteOptimizerAIAgent from './pages/PatrolRouteOptimizerAIAgent';
import RiotRiskAssessorAgent from './pages/RiotRiskAssessorAgent';
import EventCrowdModelerAgent from './pages/EventCrowdModelerAgent';
import FestivalDeploymentPlannerAgent from './pages/FestivalDeploymentPlannerAgent';
import WeatherCrimeCorrelatorAgent from './pages/WeatherCrimeCorrelatorAgent';
import VVIPConvoySimulatorAgent from './pages/VVIPConvoySimulatorAgent';
import EmergencyResponseRouterAgent from './pages/EmergencyResponseRouterAgent';
import ManpowerFatiguePredictorAgent from './pages/ManpowerFatiguePredictorAgent';
import SupplyChainDisruptionAIAgent from './pages/SupplyChainDisruptionAIAgent';
import ElectionSecurityAnalystAgent from './pages/ElectionSecurityAnalystAgent';
import HistoricalCrimeTrendBotAgent from './pages/HistoricalCrimeTrendBotAgent';
import ModelDriftDetectorAIAgent from './pages/ModelDriftDetectorAIAgent';
import WeightEncryptionSpecialistAgent from './pages/WeightEncryptionSpecialistAgent';
import HyperparameterTuningBotAgent from './pages/HyperparameterTuningBotAgent';
import BiasFairnessAuditorAIAgent from './pages/BiasFairnessAuditorAIAgent';
import EdgeDeploymentCoordinatorAgent from './pages/EdgeDeploymentCoordinatorAgent';
import FederatedLearningSyncAgentAgent from './pages/FederatedLearningSyncAgentAgent';
import ABTestingEvaluatorAIAgent from './pages/ABTestingEvaluatorAIAgent';
import GPUResourceAllocatorAgent from './pages/GPUResourceAllocatorAgent';
import SyntheticDataGeneratorAIAgent from './pages/SyntheticDataGeneratorAIAgent';
import ModelRollbackAgentAgent from './pages/ModelRollbackAgentAgent';
import AdversarialAttackDefenderAgent from './pages/AdversarialAttackDefenderAgent';
import ConceptDriftAlertBotAgent from './pages/ConceptDriftAlertBotAgent';
import AccuracyDegradationMonitorAgent from './pages/AccuracyDegradationMonitorAgent';
import RealWorldMetricsValidatorAgent from './pages/RealWorldMetricsValidatorAgent';
import AutomatedRetrainingTriggerAIAgent from './pages/AutomatedRetrainingTriggerAIAgent';
import HardwareAwareQuantizationBotAgent from './pages/HardwareAwareQuantizationBotAgent';
import DemographicBiasScannerAgent from './pages/DemographicBiasScannerAgent';
import FalsePositiveRateTesterAgent from './pages/FalsePositiveRateTesterAgent';
import LegalComplianceCheckerAIAgent from './pages/LegalComplianceCheckerAIAgent';
import ExplainabilityXAIReporterAgent from './pages/ExplainabilityXAIReporterAgent';
import ModelWeightHashingAgentAgent from './pages/ModelWeightHashingAgentAgent';
import OTADroneUpdateCoordinatorAgent from './pages/OTADroneUpdateCoordinatorAgent';
import BodycamEdgeSyncAIAgent from './pages/BodycamEdgeSyncAIAgent';
import SmartCCTVDeploymentBotAgent from './pages/SmartCCTVDeploymentBotAgent';
import LLMFineTuningAssistantAgent from './pages/LLMFineTuningAssistantAgent';
import NLPPipelineOptimizerAgent from './pages/NLPPipelineOptimizerAgent';
import ComputerVisionRetrainingAgentAgent from './pages/ComputerVisionRetrainingAgentAgent';
import ZeroDowntimeHotSwapperAgent from './pages/ZeroDowntimeHotSwapperAgent';
import DataPrivacyAuditorAIAgent from './pages/DataPrivacyAuditorAIAgent';
import AnonymizationPipelineBotAgent from './pages/AnonymizationPipelineBotAgent';
import PipelineTelemetryCollectorAgent from './pages/PipelineTelemetryCollectorAgent';
import ModelRegistryWebhookAIAgent from './pages/ModelRegistryWebhookAIAgent';
import KubernetesGPUScalerBotAgent from './pages/KubernetesGPUScalerBotAgent';
import TritonInferenceOptimizerAgent from './pages/TritonInferenceOptimizerAgent';
import HuggingFaceHubSyncBotAgent from './pages/HuggingFaceHubSyncBotAgent';
import PoisonedDataDetectorAIAgent from './pages/PoisonedDataDetectorAIAgent';
import ZeroTrustEdgeSyncAgentAgent from './pages/ZeroTrustEdgeSyncAgentAgent';
import ImmutableVersionLoggerAgent from './pages/ImmutableVersionLoggerAgent';
import AirGappedTrainingSupervisorAgent from './pages/AirGappedTrainingSupervisorAgent';
import CloudToEdgeBridgeAIAgent from './pages/CloudToEdgeBridgeAIAgent';
import SelfEvolvingModelMonitorAgent from './pages/SelfEvolvingModelMonitorAgent';
import PredictiveMaintenanceAIGPUAgent from './pages/PredictiveMaintenanceAIGPUAgent';
import TensorRTOptimizationAgentAgent from './pages/TensorRTOptimizationAgentAgent';
import SparsityPruningSpecialistAgent from './pages/SparsityPruningSpecialistAgent';
import DatasetBalancingBotAgent from './pages/DatasetBalancingBotAgent';
import OutOfDistributionDetectorAgent from './pages/OutOfDistributionDetectorAgent';
import MultiTenantModelRouterAgent from './pages/MultiTenantModelRouterAgent';
import LatencyBenchmarkTesterAgent from './pages/LatencyBenchmarkTesterAgent';
import MemoryLeakDetectorAIAgent from './pages/MemoryLeakDetectorAIAgent';
import ModelAPIRateLimiterAgent from './pages/ModelAPIRateLimiterAgent';
import FeatureStoreSyncAgentAgent from './pages/FeatureStoreSyncAgentAgent';
import TrainingCostEstimatorAIAgent from './pages/TrainingCostEstimatorAIAgent';
import EnergyEfficiencyOptimizerAgent from './pages/EnergyEfficiencyOptimizerAgent';
import GradientVanishingAlertBotAgent from './pages/GradientVanishingAlertBotAgent';
import OverfittingDetectionAIAgent from './pages/OverfittingDetectionAIAgent';
import ContinuousIntegrationCIBotAgent from './pages/ContinuousIntegrationCIBotAgent';
import ArtifactRegistryManagerAgent from './pages/ArtifactRegistryManagerAgent';
import DataLineageTrackerAgent from './pages/DataLineageTrackerAgent';
import SandboxTestingCoordinatorAgent from './pages/SandboxTestingCoordinatorAgent';
import MLOpsWorkflowOrchestratorAgent from './pages/MLOpsWorkflowOrchestratorAgent';
import BigDataArchitectAIAgent from './pages/BigDataArchitectAIAgent';
import ETLPipelineOptimizerAgent from './pages/ETLPipelineOptimizerAgent';
import UnstructuredDataParserAIAgent from './pages/UnstructuredDataParserAIAgent';
import MetadataTaggingEngineAgent from './pages/MetadataTaggingEngineAgent';
import DataGovernanceAuditorAIAgent from './pages/DataGovernanceAuditorAIAgent';
import DarkDataMinerAIAgent from './pages/DarkDataMinerAIAgent';
import CrossSchemaQueryOptimizerAgent from './pages/CrossSchemaQueryOptimizerAgent';
import ColdStorageArchivalBotAgent from './pages/ColdStorageArchivalBotAgent';
import DataLakeSecurityEnforcerAgent from './pages/DataLakeSecurityEnforcerAgent';
import AnomalyDetectionAgentAIAgent from './pages/AnomalyDetectionAgentAIAgent';
import SemanticLakeSearchAIAgent from './pages/SemanticLakeSearchAIAgent';
import BatchIngestionCoordinatorAgent from './pages/BatchIngestionCoordinatorAgent';
import RealTimeStreamProcessorAIAgent from './pages/RealTimeStreamProcessorAIAgent';
import TelecomCDRParsingBotAgent from './pages/TelecomCDRParsingBotAgent';
import SocialMediaFirehoseSyncAgent from './pages/SocialMediaFirehoseSyncAgent';
import InterrogationAudioIndexerAgent from './pages/InterrogationAudioIndexerAgent';
import HandwrittenOCRExtractionAIAgent from './pages/HandwrittenOCRExtractionAIAgent';
import VideoMetadataIndexingAgentAgent from './pages/VideoMetadataIndexingAgentAgent';
import CrossDBUnifiedSearchBotAgent from './pages/CrossDBUnifiedSearchBotAgent';
import NaturalLanguageToSQLAgentAgent from './pages/NaturalLanguageToSQLAgentAgent';
import GraphRelationalJoinOptimizerAgent from './pages/GraphRelationalJoinOptimizerAgent';
import MillisecondQueryExecutorAgent from './pages/MillisecondQueryExecutorAgent';
import AutomatedDataRedactionAIAgent from './pages/AutomatedDataRedactionAIAgent';
import PIIMaskingHashingBotAgent from './pages/PIIMaskingHashingBotAgent';
import AccessAuditLoggerAIAgent from './pages/AccessAuditLoggerAIAgent';
import CourtOrderedDataPurgeBotAgent from './pages/CourtOrderedDataPurgeBotAgent';
import ClosedCaseArchivalAIAgent from './pages/ClosedCaseArchivalAIAgent';
import AutomatedGlacierTieringBotAgent from './pages/AutomatedGlacierTieringBotAgent';
import DataCompressionOptimizerAgent from './pages/DataCompressionOptimizerAgent';
import DigitalEvidenceHashingAIAgent from './pages/DigitalEvidenceHashingAIAgent';
import AutoSchemaInferenceBotAgent from './pages/AutoSchemaInferenceBotAgent';
import PIIAutoMaskingCoordinatorAgent from './pages/PIIAutoMaskingCoordinatorAgent';
import UnstructuredTextStructuringAIAgent from './pages/UnstructuredTextStructuringAIAgent';
import VideoFrameIndexingBotAgent from './pages/VideoFrameIndexingBotAgent';
import DuplicateRecordMergingAIAgent from './pages/DuplicateRecordMergingAIAgent';
import ColdDataRetrievalPredictorAgent from './pages/ColdDataRetrievalPredictorAgent';
import CrossLingualMetadataTranslatorAgent from './pages/CrossLingualMetadataTranslatorAgent';
import AutomatedDataQualityScorerAgent from './pages/AutomatedDataQualityScorerAgent';
import NLPDatabaseQueryAgentAgent from './pages/NLPDatabaseQueryAgentAgent';
import HadoopClusterManagerAIAgent from './pages/HadoopClusterManagerAIAgent';
import S3BucketCostOptimizerAgent from './pages/S3BucketCostOptimizerAgent';
import ElasticsearchIndexManagerAgent from './pages/ElasticsearchIndexManagerAgent';
import VectorDatabaseSyncAIAgent from './pages/VectorDatabaseSyncAIAgent';
import RelationalCCTNSBridgeAIAgent from './pages/RelationalCCTNSBridgeAIAgent';
import GraphDBNeo4jIntegratorAgent from './pages/GraphDBNeo4jIntegratorAgent';
import TimeSeriesIoTDataMinerAgent from './pages/TimeSeriesIoTDataMinerAgent';
import MetadataCatalogOrganizerAgent from './pages/MetadataCatalogOrganizerAgent';
import IngestionPipelineMonitorAgent from './pages/IngestionPipelineMonitorAgent';
import StorageCostOptimizationBotAgent from './pages/StorageCostOptimizationBotAgent';
import CrossDepartmentAccessAuditorAgent from './pages/CrossDepartmentAccessAuditorAgent';
import CCTNSStateDBSyncAIAgent from './pages/CCTNSStateDBSyncAIAgent';
import TelecomBulkCDRUploaderAgent from './pages/TelecomBulkCDRUploaderAgent';
import ForensicLabIntegrationBotAgent from './pages/ForensicLabIntegrationBotAgent';
import TransportRTOAPIBridgeAgent from './pages/TransportRTOAPIBridgeAgent';
import BankTransactionWebhookAIAgent from './pages/BankTransactionWebhookAIAgent';
import OSINTDataHarvesterBotAgent from './pages/OSINTDataHarvesterBotAgent';
import FederatedGraphQLResolverAgent from './pages/FederatedGraphQLResolverAgent';
import DataLakeHealthIndexerAgent from './pages/DataLakeHealthIndexerAgent';
import ZeroTrustDataGovernorAgent from './pages/ZeroTrustDataGovernorAgent';
import BlockchainEvidenceHasherAgent from './pages/BlockchainEvidenceHasherAgent';
import QuantumCryptographyAIAgent from './pages/QuantumCryptographyAIAgent';
import SyntheticCriminalDataGeneratorAgent from './pages/SyntheticCriminalDataGeneratorAgent';
import RoboticsK9PathfindingAIAgent from './pages/RoboticsK9PathfindingAIAgent';
import BrainComputerInterfaceResearcherAgent from './pages/BrainComputerInterfaceResearcherAgent';
import NeuromorphicVisionAnalystAgent from './pages/NeuromorphicVisionAnalystAgent';
import AutonomousDroneSwarmRDAgent from './pages/AutonomousDroneSwarmRDAgent';
import PredictivePreCrimeTheoristAgent from './pages/PredictivePreCrimeTheoristAgent';
import HolographicEvidenceMapperAgent from './pages/HolographicEvidenceMapperAgent';
import AILegalArbitratorBotAgent from './pages/AILegalArbitratorBotAgent';
import MetaversePoliceAcademyTrainerAgent from './pages/MetaversePoliceAcademyTrainerAgent';
import CyberWarfareSimulationBotAgent from './pages/CyberWarfareSimulationBotAgent';
import QuantumKeyDistributionQKDBotAgent from './pages/QuantumKeyDistributionQKDBotAgent';
import ShorSAlgorithmDefenseAIAgent from './pages/ShorSAlgorithmDefenseAIAgent';
import UnhackableEvidenceChainAIAgent from './pages/UnhackableEvidenceChainAIAgent';
import QubitCommunicationGridManagerAgent from './pages/QubitCommunicationGridManagerAgent';
import AIGeneratedRiotSimulatorAgent from './pages/AIGeneratedRiotSimulatorAgent';
import DeepfakeFaceTrainingSetGeneratorAgent from './pages/DeepfakeFaceTrainingSetGeneratorAgent';
import SyntheticVoiceCloneRDAgent from './pages/SyntheticVoiceCloneRDAgent';
import VirtualCrimeSceneGeneratorAgent from './pages/VirtualCrimeSceneGeneratorAgent';
import RoboDogBombDetectionAIAgent from './pages/RoboDogBombDetectionAIAgent';
import AutonomousSwarmPursuitModelerAgent from './pages/AutonomousSwarmPursuitModelerAgent';
import HostageRescueMicroDroneAIAgent from './pages/HostageRescueMicroDroneAIAgent';
import BipedalRiotControlBotRDAgent from './pages/BipedalRiotControlBotRDAgent';
import BrainwaveLieDetectionEEGAIAgent from './pages/BrainwaveLieDetectionEEGAIAgent';
import StressBiometricWearablesRDAgent from './pages/StressBiometricWearablesRDAgent';
import CognitiveLoadMonitoringAIAgent from './pages/CognitiveLoadMonitoringAIAgent';
import NeuralLinkCommandInterfaceBotAgent from './pages/NeuralLinkCommandInterfaceBotAgent';
import VRActiveShooterTrainerAgent from './pages/VRActiveShooterTrainerAgent';
import HolographicForensicLabGuideAgent from './pages/HolographicForensicLabGuideAgent';
import GlobalAIInterpolSyncRDAgent from './pages/GlobalAIInterpolSyncRDAgent';
import VirtualSuspectInterrogationAIAgent from './pages/VirtualSuspectInterrogationAIAgent';
import QuantumProbabilityModelerAgent from './pages/QuantumProbabilityModelerAgent';
import NeuromorphicComputingSimulatorAgent from './pages/NeuromorphicComputingSimulatorAgent';
import HolographicRayTracingAIAgent from './pages/HolographicRayTracingAIAgent';
import PredictiveBehaviorTheoristBotAgent from './pages/PredictiveBehaviorTheoristBotAgent';
import AutonomousLethalDecisionTreeAIAgent from './pages/AutonomousLethalDecisionTreeAIAgent';
import MetaverseVoxelRenderingAIAgent from './pages/MetaverseVoxelRenderingAIAgent';
import DNAGenomicDataIntegratorRDAgent from './pages/DNAGenomicDataIntegratorRDAgent';
import QuantumSafeEncryptionRDAgent from './pages/QuantumSafeEncryptionRDAgent';
import DecentralizedIPFSEvidenceChainAIAgent from './pages/DecentralizedIPFSEvidenceChainAIAgent';
import BrainComputerSearchInterfaceAIAgent from './pages/BrainComputerSearchInterfaceAIAgent';
import SelfHealingPipelineTheoristAgent from './pages/SelfHealingPipelineTheoristAgent';
import TimeTemporalPolicingRDAgent from './pages/TimeTemporalPolicingRDAgent';
import CyberneticOfficerAugmentationAIAgent from './pages/CyberneticOfficerAugmentationAIAgent';
import OrbitalCommandSatelliteSyncAIAgent from './pages/OrbitalCommandSatelliteSyncAIAgent';
import TelepathicInterrogationInterfaceAgent from './pages/TelepathicInterrogationInterfaceAgent';
import AGIArtificialGeneralIntelligenceSyncAgent from './pages/AGIArtificialGeneralIntelligenceSyncAgent';
import AutomatedJusticeSystemSimulatorAgent from './pages/AutomatedJusticeSystemSimulatorAgent';
import SyntheticBioSignatureGeneratorAgent from './pages/SyntheticBioSignatureGeneratorAgent';
import ExoSkeletonPursuitEnhancerAIAgent from './pages/ExoSkeletonPursuitEnhancerAIAgent';
import DroneEMPHardeningRDAgent from './pages/DroneEMPHardeningRDAgent';
import AcousticWeaponrySimulationAIAgent from './pages/AcousticWeaponrySimulationAIAgent';
import AntiGravityDroneRDAgent from './pages/AntiGravityDroneRDAgent';
import InvisibilityCloakMetamaterialAIAgent from './pages/InvisibilityCloakMetamaterialAIAgent';
import SubDermalTrackerChipRDAgent from './pages/SubDermalTrackerChipRDAgent';
import NeuralMemoryExtractionTheoristAgent from './pages/NeuralMemoryExtractionTheoristAgent';
import SmartBulletTrajectoryModelerAgent from './pages/SmartBulletTrajectoryModelerAgent';
import CyberTelepathyCommsRDAgent from './pages/CyberTelepathyCommsRDAgent';
import VirtualRealityEmpathyTrainerAgent from './pages/VirtualRealityEmpathyTrainerAgent';
import PostQuantumCryptanalysisAIAgent from './pages/PostQuantumCryptanalysisAIAgent';
import JansunwaiNLPRouterAIAgent from './pages/JansunwaiNLPRouterAIAgent';
import MultilingualVoiceBotAgent from './pages/MultilingualVoiceBotAgent';
import CitizenFeedbackSentimentAIAgent from './pages/CitizenFeedbackSentimentAIAgent';
import EmergencySOSTriangulatorAgent from './pages/EmergencySOSTriangulatorAgent';
import PublicPortalChatbotAgent from './pages/PublicPortalChatbotAgent';
import LostFoundMatchingBotAgent from './pages/LostFoundMatchingBotAgent';
import SeniorCitizenWellBeingCheckerAgent from './pages/SeniorCitizenWellBeingCheckerAgent';
import RTIQueryAutomatedResponderAgent from './pages/RTIQueryAutomatedResponderAgent';
import TrafficChallanQueryBotAgent from './pages/TrafficChallanQueryBotAgent';
import CommunityOutreachAnalyzerAgent from './pages/CommunityOutreachAnalyzerAgent';
import VerificationCertificateAgentAgent from './pages/VerificationCertificateAgentAgent';
import EFIRNLPClassifierAIAgent from './pages/EFIRNLPClassifierAIAgent';
import ComplaintRoutingBotAgent from './pages/ComplaintRoutingBotAgent';
import LegalPrecedentMatcherAIAgent from './pages/LegalPrecedentMatcherAIAgent';
import ZeroFIRTriangulatorAgent from './pages/ZeroFIRTriangulatorAgent';
import FakeComplaintDetectorAgent from './pages/FakeComplaintDetectorAgent';
import UrgencyScorerAIAgent from './pages/UrgencyScorerAIAgent';
import CyberCrimeKeywordExtractorAgent from './pages/CyberCrimeKeywordExtractorAgent';
import StationJurisdictionMapperAgent from './pages/StationJurisdictionMapperAgent';
import FIRTranslationAgentAgent from './pages/FIRTranslationAgentAgent';
import VictimSentimentAnalyzerAgent from './pages/VictimSentimentAnalyzerAgent';
import EvidenceChecklistGeneratorAgent from './pages/EvidenceChecklistGeneratorAgent';
import HotspotPredictionAIAgent from './pages/HotspotPredictionAIAgent';
import GangNetworkMapperAgent from './pages/GangNetworkMapperAgent';
import FinancialCrimeTrackerAgent from './pages/FinancialCrimeTrackerAgent';
import RepeatOffenderAnalystAgent from './pages/RepeatOffenderAnalystAgent';
import ModusOperandiMOMatcherAgent from './pages/ModusOperandiMOMatcherAgent';
import DarkWebChatterMonitorAgent from './pages/DarkWebChatterMonitorAgent';
import TelecomCDRAnalyzerAgent from './pages/TelecomCDRAnalyzerAgent';
import TerrorismFundingTrackerAgent from './pages/TerrorismFundingTrackerAgent';
import SocialMediaRadicalizationBotAgent from './pages/SocialMediaRadicalizationBotAgent';
import ArmsSmugglingPredictorAgent from './pages/ArmsSmugglingPredictorAgent';
import CriminalProfilerAgentAgent from './pages/CriminalProfilerAgentAgent';
import SwarmIntelligenceCoordinatorAIAgent from './pages/SwarmIntelligenceCoordinatorAIAgent';
import CrossDepartmentOrchestratorAIAgent from './pages/CrossDepartmentOrchestratorAIAgent';
import DynamicResourceAllocatorAIAgent from './pages/DynamicResourceAllocatorAIAgent';
import ConflictResolutionAgentAIAgent from './pages/ConflictResolutionAgentAIAgent';
import TaskDelegationMasterAIAgent from './pages/TaskDelegationMasterAIAgent';
import InterAgencyProtocolAIAgent from './pages/InterAgencyProtocolAIAgent';
import LoadBalancingAIAgent from './pages/LoadBalancingAIAgent';
import AgentHealthMonitorAIAgent from './pages/AgentHealthMonitorAIAgent';
import DecentralizedCommandAIAgent from './pages/DecentralizedCommandAIAgent';
import IntelligenceFusionCenterAIAgent from './pages/IntelligenceFusionCenterAIAgent';
import HumanInTheLoopAIAgent from './pages/HumanInTheLoopAIAgent';
import SecurityPolicyAIAgent from './pages/SecurityPolicyAIAgent';
import IntegrationManagerAIAgent from './pages/IntegrationManagerAIAgent';
import RiskPredictionAIAgent from './pages/RiskPredictionAIAgent';
import AnomalyDetectionAIAgent from './pages/AnomalyDetectionAIAgent';
import ExecutiveCommandDashboardAIAgent from './pages/ExecutiveCommandDashboardAIAgent';
import AuditTrailAIAgent from './pages/AuditTrailAIAgent';
import EntityResolutionAIAgent from './pages/EntityResolutionAIAgent';
import EntityExtractionAIAgent from './pages/EntityExtractionAIAgent';
import SemanticEntityLinkingAIAgent from './pages/SemanticEntityLinkingAIAgent';
import RelationshipDiscoveryAIAgent from './pages/RelationshipDiscoveryAIAgent';
import MultiHopRelationshipExplorerAIAgent from './pages/MultiHopRelationshipExplorerAIAgent';
import GraphEmbeddingAIAgent from './pages/GraphEmbeddingAIAgent';
import KnowledgeGraphBuilderAIAgent from './pages/KnowledgeGraphBuilderAIAgent';
import OntologyManagementAIAgent from './pages/OntologyManagementAIAgent';
import KnowledgeBaseManagerAIAgent from './pages/KnowledgeBaseManagerAIAgent';
import CriminalNetworkAnalyzerAIAgent from './pages/CriminalNetworkAnalyzerAIAgent';
import CriminalLinkPredictionAIAgent from './pages/CriminalLinkPredictionAIAgent';
import AssociationRuleMiningAIAgent from './pages/AssociationRuleMiningAIAgent';
import CommunityDetectionAIAgent from './pages/CommunityDetectionAIAgent';
import NetworkCentralityAnalyzerAIAgent from './pages/NetworkCentralityAnalyzerAIAgent';
import InfluenceAnalysisAIAgent from './pages/InfluenceAnalysisAIAgent';
import UnknownEntityDiscoveryAIAgent from './pages/UnknownEntityDiscoveryAIAgent';
import SuspiciousClusterDetectionAIAgent from './pages/SuspiciousClusterDetectionAIAgent';
import HiddenPatternDiscoveryAIAgent from './pages/HiddenPatternDiscoveryAIAgent';
import GraphPatternMatchingAIAgent from './pages/GraphPatternMatchingAIAgent';
import GraphSimilarityAIAgent from './pages/GraphSimilarityAIAgent';
import IdentityResolutionAIAgent from './pages/IdentityResolutionAIAgent';
import CrossDatabaseEntityMatchingAIAgent from './pages/CrossDatabaseEntityMatchingAIAgent';
import MultiSourceDataFusionAIAgent from './pages/MultiSourceDataFusionAIAgent';
import IntelligenceFusionAIAgent from './pages/IntelligenceFusionAIAgent';
import EventCorrelationAIAgent from './pages/EventCorrelationAIAgent';
import TimelineCorrelationAIAgent from './pages/TimelineCorrelationAIAgent';
import BehavioralPatternAnalysisAIAgent from './pages/BehavioralPatternAnalysisAIAgent';
import CriminalProfileBuilderAIAgent from './pages/CriminalProfileBuilderAIAgent';
import OrganizationRelationshipMapperAIAgent from './pages/OrganizationRelationshipMapperAIAgent';
import SocialNetworkIntelligenceAIAgent from './pages/SocialNetworkIntelligenceAIAgent';
import CommunicationNetworkIntelligenceAIAgent from './pages/CommunicationNetworkIntelligenceAIAgent';
import FinancialNetworkIntelligenceAIAgent from './pages/FinancialNetworkIntelligenceAIAgent';
import LocationIntelligenceAIAgent from './pages/LocationIntelligenceAIAgent';
import MobilityPatternAnalysisAIAgent from './pages/MobilityPatternAnalysisAIAgent';
import DeviceCorrelationAIAgent from './pages/DeviceCorrelationAIAgent';
import DigitalIdentityCorrelationAIAgent from './pages/DigitalIdentityCorrelationAIAgent';
import RiskScoringAIAgent from './pages/RiskScoringAIAgent';
import ThreatPredictionAIAgent from './pages/ThreatPredictionAIAgent';
import CriminalActivityPredictionAIAgent from './pages/CriminalActivityPredictionAIAgent';
import NetworkEvolutionPredictionAIAgent from './pages/NetworkEvolutionPredictionAIAgent';
import AIGraphSearchAssistantAgent from './pages/AIGraphSearchAssistantAgent';
import NaturalLanguageGraphQueryAIAgent from './pages/NaturalLanguageGraphQueryAIAgent';
import GraphRecommendationEngineAIAgent from './pages/GraphRecommendationEngineAIAgent';
import GraphVisualizationAIAgent from './pages/GraphVisualizationAIAgent';
import InteractiveLinkExplorerAIAgent from './pages/InteractiveLinkExplorerAIAgent';
import ExplainableAIForLinkPredictionAgent from './pages/ExplainableAIForLinkPredictionAgent';
import GraphAnalyticsAIAgent from './pages/GraphAnalyticsAIAgent';
import KnowledgeGraphQualityValidatorAIAgent from './pages/KnowledgeGraphQualityValidatorAIAgent';
import GraphConsistencyCheckerAIAgent from './pages/GraphConsistencyCheckerAIAgent';
import RealTimeKnowledgeGraphUpdateAIAgent from './pages/RealTimeKnowledgeGraphUpdateAIAgent';
import StreamingDataCorrelationAIAgent from './pages/StreamingDataCorrelationAIAgent';
import GraphVersionControlAIAgent from './pages/GraphVersionControlAIAgent';
import KnowledgeGraphGovernanceAIAgent from './pages/KnowledgeGraphGovernanceAIAgent';
import MetadataIntelligenceAIAgent from './pages/MetadataIntelligenceAIAgent';
import DataLineageAIAgent from './pages/DataLineageAIAgent';
import AIInvestigationCopilotAgent from './pages/AIInvestigationCopilotAgent';
import CaseIntelligenceAIAgent from './pages/CaseIntelligenceAIAgent';
import DecisionSupportAIAgent from './pages/DecisionSupportAIAgent';
import StrategicIntelligenceAIAgent from './pages/StrategicIntelligenceAIAgent';
import ExecutiveKnowledgeGraphDashboardAIAgent from './pages/ExecutiveKnowledgeGraphDashboardAIAgent';
import RiotPredictionAIAgent from './pages/RiotPredictionAIAgent';
import ForceDeploymentScorerAgent from './pages/ForceDeploymentScorerAgent';
import RealTimeThreatAssessorAgent from './pages/RealTimeThreatAssessorAgent';
import PublicSentimentAnalystAIAgent from './pages/PublicSentimentAnalystAIAgent';
import EventSecurityPlannerAIAgent from './pages/EventSecurityPlannerAIAgent';
import TacticalEvacuationAgentAgent from './pages/TacticalEvacuationAgentAgent';
import EmergencyTriageCoordinatorAgent from './pages/EmergencyTriageCoordinatorAgent';
import ResourceOptimizationAIAgent from './pages/ResourceOptimizationAIAgent';
import WeatherDisasterImpactAIAgent from './pages/WeatherDisasterImpactAIAgent';
import VIPRouteSecurityAIAgent from './pages/VIPRouteSecurityAIAgent';
import CrowdDensityAnalyzerAIAgent from './pages/CrowdDensityAnalyzerAIAgent';
import FlashMobPredictorAIAgent from './pages/FlashMobPredictorAIAgent';
import ElectionViolenceHeatmapperAgent from './pages/ElectionViolenceHeatmapperAgent';
import FestivalCrowdSurgeForecasterAgent from './pages/FestivalCrowdSurgeForecasterAgent';
import OptimalStationStaffingAIAgent from './pages/OptimalStationStaffingAIAgent';
import AntiRiotGearAllocatorAgent from './pages/AntiRiotGearAllocatorAgent';
import RapidActionForceDispatcherAgent from './pages/RapidActionForceDispatcherAgent';
import BeatPatrolRoutingOptimizerAgent from './pages/BeatPatrolRoutingOptimizerAgent';
import EmergencyCallPrioritizationAgentAgent from './pages/EmergencyCallPrioritizationAgentAgent';
import ActiveShooterTriangulatorAIAgent from './pages/ActiveShooterTriangulatorAIAgent';
import HostageSituationModelerAgent from './pages/HostageSituationModelerAgent';
import SimultaneousAttackCorrelatorAgent from './pages/SimultaneousAttackCorrelatorAgent';
import VVIPRouteVulnerabilityAssessorAgent from './pages/VVIPRouteVulnerabilityAssessorAgent';
import ConvoySpeedOptimizerAgent from './pages/ConvoySpeedOptimizerAgent';
import StadiumCrowdDynamicsModelerAgent from './pages/StadiumCrowdDynamicsModelerAgent';
import SniperOverWatchPositioningAIAgent from './pages/SniperOverWatchPositioningAIAgent';
import FloodEvacuationRoutingAgentAgent from './pages/FloodEvacuationRoutingAgentAgent';
import EarthquakeTriageAIAgent from './pages/EarthquakeTriageAIAgent';
import HospitalBedSyncCoordinatorAgent from './pages/HospitalBedSyncCoordinatorAgent';
import ReliefMaterialSupplyChainAIAgent from './pages/ReliefMaterialSupplyChainAIAgent';
import MultiVariableThreatScorerAgent from './pages/MultiVariableThreatScorerAgent';
import SentimentShiftTriggerAIAgent from './pages/SentimentShiftTriggerAIAgent';
import RouteVulnerabilityIndexerAgent from './pages/RouteVulnerabilityIndexerAgent';
import OptimalPathfindingAIAgent from './pages/OptimalPathfindingAIAgent';
import AutomaticEscalationProtocolAIAgent from './pages/AutomaticEscalationProtocolAIAgent';
import DroneReconDeploymentAIAgent from './pages/DroneReconDeploymentAIAgent';
import GunfireAcousticTriangulatorAgent from './pages/GunfireAcousticTriangulatorAgent';
import PredictiveForceExhaustionAIAgent from './pages/PredictiveForceExhaustionAIAgent';
import LegalUseOfForcePrompterAgent from './pages/LegalUseOfForcePrompterAgent';
import DGPDecisionSupportMatrixAIAgent from './pages/DGPDecisionSupportMatrixAIAgent';
import LiveThreatHeatmapGeneratorAgent from './pages/LiveThreatHeatmapGeneratorAgent';
import ForceReadinessBoardAIAgent from './pages/ForceReadinessBoardAIAgent';
import VVIPConvoyTrackerAIAgent from './pages/VVIPConvoyTrackerAIAgent';
import DisasterCommandBoardAIAgent from './pages/DisasterCommandBoardAIAgent';
import PreEventRiskAssessorAgent from './pages/PreEventRiskAssessorAgent';
import RiotPostMortemAnalystAgent from './pages/RiotPostMortemAnalystAgent';
import ForceDeploymentEfficiencyAIAgent from './pages/ForceDeploymentEfficiencyAIAgent';
import VVIPSecurityAuditorAgent from './pages/VVIPSecurityAuditorAgent';
import EmergencyResponseTimeProfilerAgent from './pages/EmergencyResponseTimeProfilerAgent';
import ResourceDepletionForecasterAgent from './pages/ResourceDepletionForecasterAgent';
import RankBasedOverrideValidatorAgent from './pages/RankBasedOverrideValidatorAgent';
import EncryptedTacticalCommRouterAgent from './pages/EncryptedTacticalCommRouterAgent';
import DecisionAuditTrailAnalyzerAgent from './pages/DecisionAuditTrailAnalyzerAgent';
import AntiTamperSensorFeedAIAgent from './pages/AntiTamperSensorFeedAIAgent';
import ZeroTrustAPIGatewayMonitorAgent from './pages/ZeroTrustAPIGatewayMonitorAgent';
import OfflineFailSafeModeTriggerAgent from './pages/OfflineFailSafeModeTriggerAgent';
import HolographicTacticalTableManagerAgent from './pages/HolographicTacticalTableManagerAgent';
import NeuralLinkCommandParserAgent from './pages/NeuralLinkCommandParserAgent';
import AutonomousDroneCoordinatorAgent from './pages/AutonomousDroneCoordinatorAgent';
import PreCrimeLegalArbitratorAgent from './pages/PreCrimeLegalArbitratorAgent';
import ThreeDCitySimulatorAIAgent from './pages/ThreeDCitySimulatorAIAgent';
import TrafficGridModelerAIAgent from './pages/TrafficGridModelerAIAgent';
import VirtualStationLoadTesterAgent from './pages/VirtualStationLoadTesterAgent';
import CrowdPhysicsSimulatorAgent from './pages/CrowdPhysicsSimulatorAgent';
import DisasterImpactModelerAIAgent from './pages/DisasterImpactModelerAIAgent';
import VVIPRouteSimulationAgentAgent from './pages/VVIPRouteSimulationAgentAgent';
import CyberTwinVulnerabilityTesterAgent from './pages/CyberTwinVulnerabilityTesterAgent';
import EmergencyResponseOptimizerAgent from './pages/EmergencyResponseOptimizerAgent';
import RiotControlSimulatorAIAgent from './pages/RiotControlSimulatorAIAgent';
import SpatialAnalyticsExpertAIAgent from './pages/SpatialAnalyticsExpertAIAgent';
import TacticalBreachPlannerAIAgent from './pages/TacticalBreachPlannerAIAgent';
import FloodDynamicsSimulatorAIAgent from './pages/FloodDynamicsSimulatorAIAgent';
import EarthquakeStructuralIntegrityAIAgent from './pages/EarthquakeStructuralIntegrityAIAgent';
import DroneSwarmSandboxModelerAgent from './pages/DroneSwarmSandboxModelerAgent';
import AutonomousVehicleTrafficAIAgent from './pages/AutonomousVehicleTrafficAIAgent';
import SniperLineOfSightCalculatorAgent from './pages/SniperLineOfSightCalculatorAgent';
import BlastRadiusPhysicsEngineAgent from './pages/BlastRadiusPhysicsEngineAgent';
import AcousticReverberationModelerAgent from './pages/AcousticReverberationModelerAgent';
import TearGasDispersionPhysicsAIAgent from './pages/TearGasDispersionPhysicsAIAgent';
import VirtualVIPDecoySimulatorAgent from './pages/VirtualVIPDecoySimulatorAgent';
import EscapeRouteViabilityTesterAgent from './pages/EscapeRouteViabilityTesterAgent';
import CyberAttackTabletopExerciserAgent from './pages/CyberAttackTabletopExerciserAgent';
import SubterraneanNetworkModelerAgent from './pages/SubterraneanNetworkModelerAgent';
import HospitalSurgeCapacitySimulatorAgent from './pages/HospitalSurgeCapacitySimulatorAgent';
import EmergencyCallCenterLoadTesterAgent from './pages/EmergencyCallCenterLoadTesterAgent';
import EvacuationBottleneckAnalyzerAgent from './pages/EvacuationBottleneckAnalyzerAgent';
import CellBlockCapacityPredictorAgent from './pages/CellBlockCapacityPredictorAgent';
import SmartCitySensorVirtualizerAgent from './pages/SmartCitySensorVirtualizerAgent';
import GreenCorridorTimingSimulatorAgent from './pages/GreenCorridorTimingSimulatorAgent';
import StadiumStampedeModelerAgent from './pages/StadiumStampedeModelerAgent';
import FestivalCrowdFlowPredictorAgent from './pages/FestivalCrowdFlowPredictorAgent';
import FlashMobConvergenceAIAgent from './pages/FlashMobConvergenceAIAgent';
import RiotGearEfficacyTesterAgent from './pages/RiotGearEfficacyTesterAgent';
import ActiveShooterVRScenarioAIAgent from './pages/ActiveShooterVRScenarioAIAgent';
import HostageNegotiationVRTrainerAgent from './pages/HostageNegotiationVRTrainerAgent';
import AirborneToxinDriftModelerAgent from './pages/AirborneToxinDriftModelerAgent';
import RadioFrequencyShadowMapperAgent from './pages/RadioFrequencyShadowMapperAgent';
import CCTVBlindSpotIdentifierAIAgent from './pages/CCTVBlindSpotIdentifierAIAgent';
import TelecomNetworkOverloadModelerAgent from './pages/TelecomNetworkOverloadModelerAgent';
import PowerGridFailureSimulatorAgent from './pages/PowerGridFailureSimulatorAgent';
import VirtualInterrogationRoomAIAgent from './pages/VirtualInterrogationRoomAIAgent';
import EvidenceTamperingSimulatorAgent from './pages/EvidenceTamperingSimulatorAgent';
import CrimeSceneRecreationAIAgent from './pages/CrimeSceneRecreationAIAgent';
import BulletTrajectorySimulatorAgent from './pages/BulletTrajectorySimulatorAgent';
import HighSpeedChasePhysicsAIAgent from './pages/HighSpeedChasePhysicsAIAgent';
import VirtualPerimeterSecurityAIAgent from './pages/VirtualPerimeterSecurityAIAgent';
import FacialRecognitionLoadTesterAgent from './pages/FacialRecognitionLoadTesterAgent';
import BorderInfiltrationModelerAgent from './pages/BorderInfiltrationModelerAgent';
import SmugglingRouteSimulatorAIAgent from './pages/SmugglingRouteSimulatorAIAgent';
import MaritimePortLogisticsTwinAgent from './pages/MaritimePortLogisticsTwinAgent';
import AirspaceViolationModelerAIAgent from './pages/AirspaceViolationModelerAIAgent';
import WeaponIssueBottleneckAIAgent from './pages/WeaponIssueBottleneckAIAgent';
import ShiftHandoverOptimizationAIAgent from './pages/ShiftHandoverOptimizationAIAgent';
import SupplyChainDisruptionTwinAgent from './pages/SupplyChainDisruptionTwinAgent';
import RansomwareBlastRadiusAIAgent from './pages/RansomwareBlastRadiusAIAgent';
import MultiAgencyCoordinationTwinAgent from './pages/MultiAgencyCoordinationTwinAgent';
import RealTimeResourceMirrorAIAgent from './pages/RealTimeResourceMirrorAIAgent';
import GeolocationSpoofingSimulatorAgent from './pages/GeolocationSpoofingSimulatorAgent';
import VirtualCommandoTrainerAIAgent from './pages/VirtualCommandoTrainerAIAgent';
import FutureCrimeScenarioGeneratorAgent from './pages/FutureCrimeScenarioGeneratorAgent';
import FIRDraftingAssistantAIAgent from './pages/FIRDraftingAssistantAIAgent';
import LegalCodeMatcherAIAgent from './pages/LegalCodeMatcherAIAgent';
import ChargeSheetSummarizerAgent from './pages/ChargeSheetSummarizerAgent';
import PreTrialEvidenceScorerAgent from './pages/PreTrialEvidenceScorerAgent';
import InterrogationInsightAIAgent from './pages/InterrogationInsightAIAgent';
import ColdCaseCorrelationBotAgent from './pages/ColdCaseCorrelationBotAgent';
import WitnessTestimonyAnalyzerAgent from './pages/WitnessTestimonyAnalyzerAgent';
import JurisdictionMapperAIAgent from './pages/JurisdictionMapperAIAgent';
import AlibiVerificationAgentAgent from './pages/AlibiVerificationAgentAgent';
import CourtPrecedentSearchAIAgent from './pages/CourtPrecedentSearchAIAgent';
import BailRiskAssessorAIAgent from './pages/BailRiskAssessorAIAgent';
import VoiceToFIRDictationAIAgent from './pages/VoiceToFIRDictationAIAgent';
import IPCBNSSectionSuggesterAgent from './pages/IPCBNSSectionSuggesterAgent';
import MultiLingualStatementTranslatorAgent from './pages/MultiLingualStatementTranslatorAgent';
import SuspectEntityExtractorAgent from './pages/SuspectEntityExtractorAgent';
import TimelineReconstructionAgentAgent from './pages/TimelineReconstructionAgentAgent';
import TestimonyContradictionDetectorAgent from './pages/TestimonyContradictionDetectorAgent';
import HistoricalJudgementAnalyzerAgent from './pages/HistoricalJudgementAnalyzerAgent';
import BailRejectionPredictorAIAgent from './pages/BailRejectionPredictorAIAgent';
import ProsecutionStrategyPrompterAgent from './pages/ProsecutionStrategyPrompterAgent';
import ModusOperandiProfilerAgent from './pages/ModusOperandiProfilerAgent';
import ForensicReportParserAIAgent from './pages/ForensicReportParserAIAgent';
import BallisticsPatternMatcherAgent from './pages/BallisticsPatternMatcherAgent';
import DigitalEvidenceTimestampAnalyzerAgent from './pages/DigitalEvidenceTimestampAnalyzerAgent';
import MicroExpressionDetectorAIAgent from './pages/MicroExpressionDetectorAIAgent';
import VoiceStressAnalysisBotAgent from './pages/VoiceStressAnalysisBotAgent';
import PolygraphDataInterpreterAgent from './pages/PolygraphDataInterpreterAgent';
import CaseSolvabilityScorerAgent from './pages/CaseSolvabilityScorerAgent';
import AudioTranscriptionAgentAgent from './pages/AudioTranscriptionAgentAgent';
import EmotionClassificationAIAgent from './pages/EmotionClassificationAIAgent';
import WitnessSentimentAnalyzerAgent from './pages/WitnessSentimentAnalyzerAgent';
import AutomatedEvidenceTaggerAgent from './pages/AutomatedEvidenceTaggerAgent';
import CrossCaseSimilarityMatcherAgent from './pages/CrossCaseSimilarityMatcherAgent';
import DefenseArgumentPredictorAgent from './pages/DefenseArgumentPredictorAgent';
import CrimeScenePhotoAnalyzerAgent from './pages/CrimeScenePhotoAnalyzerAgent';
import MissingPersonsCorrelatorAgent from './pages/MissingPersonsCorrelatorAgent';
import UnidentifiedBodyMatcherAIAgent from './pages/UnidentifiedBodyMatcherAIAgent';
import BankStatementFraudFinderAgent from './pages/BankStatementFraudFinderAgent';
import CyberFootprintTracerAIAgent from './pages/CyberFootprintTracerAIAgent';
import DeepfakeAudioDetectorAgent from './pages/DeepfakeAudioDetectorAgent';
import ThreatLetterAuthorshipAIAgent from './pages/ThreatLetterAuthorshipAIAgent';
import HandwritingAnalysisAssistantAgent from './pages/HandwritingAnalysisAssistantAgent';
import SketchToMugshotAIAgent from './pages/SketchToMugshotAIAgent';
import CriminalNicknameResolverAgent from './pages/CriminalNicknameResolverAgent';
import CallDataRecordCDRSummarizerAgent from './pages/CallDataRecordCDRSummarizerAgent';
import GPSPingTriangulationAIAgent from './pages/GPSPingTriangulationAIAgent';
import DroneFootageAnalystAIAgent from './pages/DroneFootageAnalystAIAgent';
import VictimVulnerabilityScorerAgent from './pages/VictimVulnerabilityScorerAgent';
import ParoleViolationPredictorAgent from './pages/ParoleViolationPredictorAgent';
import JailhouseInformantCredibilityAIAgent from './pages/JailhouseInformantCredibilityAIAgent';
import EvidenceChainOfCustodyAuditorAgent from './pages/EvidenceChainOfCustodyAuditorAgent';
import PostMortemReportInterpreterAgent from './pages/PostMortemReportInterpreterAgent';
import DNAMatchProbabilityCalculatorAgent from './pages/DNAMatchProbabilityCalculatorAgent';
import SurveillanceVideoSummarizerAgent from './pages/SurveillanceVideoSummarizerAgent';
import SocialMediaConfessionScraperAgent from './pages/SocialMediaConfessionScraperAgent';
import DarkWebCredentialSearcherAgent from './pages/DarkWebCredentialSearcherAgent';
import LegalLoopholeFlaggingAIAgent from './pages/LegalLoopholeFlaggingAIAgent';
import JudgeSentencingTrendAnalyzerAgent from './pages/JudgeSentencingTrendAnalyzerAgent';
import WarrantApplicationDrafterAgent from './pages/WarrantApplicationDrafterAgent';
import VirtualJuryBiasModelerAgent from './pages/VirtualJuryBiasModelerAgent';
import PoliceHRDomainExpertAIAgent from './pages/PoliceHRDomainExpertAIAgent';
import OfficerRecruitmentExpertAIAgent from './pages/OfficerRecruitmentExpertAIAgent';
import DutyLeaveExpertAIAgent from './pages/DutyLeaveExpertAIAgent';
import PayrollAllowancesExpertAIAgent from './pages/PayrollAllowancesExpertAIAgent';
import PerformanceMedalsExpertAIAgent from './pages/PerformanceMedalsExpertAIAgent';
import PoliceTrainingExpertAIAgent from './pages/PoliceTrainingExpertAIAgent';
import ForceEngagementExpertAIAgent from './pages/ForceEngagementExpertAIAgent';
import PoliceActComplianceExpertAIAgent from './pages/PoliceActComplianceExpertAIAgent';
import ArmouryManagementAIAgent from './pages/ArmouryManagementAIAgent';
import MentalHealthStressAIAgent from './pages/MentalHealthStressAIAgent';
import PhysicalFitnessTrackerAIAgent from './pages/PhysicalFitnessTrackerAIAgent';
import GrievanceRedressalAIAgent from './pages/GrievanceRedressalAIAgent';
import SmartShiftOptimizationAIAgent from './pages/SmartShiftOptimizationAIAgent';
import FleetFuelManagementAIAgent from './pages/FleetFuelManagementAIAgent';
import K9UnitManagementAIAgent from './pages/K9UnitManagementAIAgent';
import CourtSummonLegalSyncAIAgent from './pages/CourtSummonLegalSyncAIAgent';
import CyberSecurityAccessAIAgent from './pages/CyberSecurityAccessAIAgent';
import DisciplinaryActionTrackerAIAgent from './pages/DisciplinaryActionTrackerAIAgent';
import PensionGratuityCalculatorAIAgent from './pages/PensionGratuityCalculatorAIAgent';
import ResettlementVeteranSupportAIAgent from './pages/ResettlementVeteranSupportAIAgent';
import DocumentClassificationAIAgent from './pages/DocumentClassificationAIAgent';
import SmartOCRHandwritingRecognitionAIAgent from './pages/SmartOCRHandwritingRecognitionAIAgent';
import IntelligentDocumentIndexingAIAgent from './pages/IntelligentDocumentIndexingAIAgent';
import DigitalFileOrganizerAIAgent from './pages/DigitalFileOrganizerAIAgent';
import DocumentApprovalWorkflowAIAgent from './pages/DocumentApprovalWorkflowAIAgent';
import DocumentAccessControlAIAgent from './pages/DocumentAccessControlAIAgent';
import DocumentLifecycleManagementAIAgent from './pages/DocumentLifecycleManagementAIAgent';
import RecordArchivalAIAgent from './pages/RecordArchivalAIAgent';
import ArchiveRetrievalAIAgent from './pages/ArchiveRetrievalAIAgent';
import DuplicateDocumentDetectionAIAgent from './pages/DuplicateDocumentDetectionAIAgent';
import DigitalSignatureVerificationAIAgent from './pages/DigitalSignatureVerificationAIAgent';
import ChainOfCustodyTrackerAIAgent from './pages/ChainOfCustodyTrackerAIAgent';
import CourtDocumentManagementAIAgent from './pages/CourtDocumentManagementAIAgent';
import DataLossPreventionAIAgent from './pages/DataLossPreventionAIAgent';
import TamperDetectionAIAgent from './pages/TamperDetectionAIAgent';
import AIDocumentChatAssistantAgent from './pages/AIDocumentChatAssistantAgent';
import KnowledgeBaseAIAgent from './pages/KnowledgeBaseAIAgent';
import DocumentAnalyticsAIAgent from './pages/DocumentAnalyticsAIAgent';
import ExecutiveDocumentDashboardAIAgent from './pages/ExecutiveDocumentDashboardAIAgent';
import DocumentKPIDashboardAIAgent from './pages/DocumentKPIDashboardAIAgent';
import FIRDigitizationExpertAIAgent from './pages/FIRDigitizationExpertAIAgent';
import CaseFileSummarizationAIAgent from './pages/CaseFileSummarizationAIAgent';
import ConfidentialVaultGuardianAIAgent from './pages/ConfidentialVaultGuardianAIAgent';
import SemanticSearchAssistantAIAgent from './pages/SemanticSearchAssistantAIAgent';
import OldRecordsRestorationAIAgent from './pages/OldRecordsRestorationAIAgent';
import ForensicDocumentAnalystAIAgent from './pages/ForensicDocumentAnalystAIAgent';
import MultiLingualTranslatorAIAgent from './pages/MultiLingualTranslatorAIAgent';
import DocumentRedactionBotAIAgent from './pages/DocumentRedactionBotAIAgent';
import CrossReferenceEngineAIAgent from './pages/CrossReferenceEngineAIAgent';
import LegalActCrossCheckerAIAgent from './pages/LegalActCrossCheckerAIAgent';
import EvidenceIntegrityValidatorAIAgent from './pages/EvidenceIntegrityValidatorAIAgent';
import InternalAuditPlanningAIAgent from './pages/InternalAuditPlanningAIAgent';
import AuditWorkflowManagerAIAgent from './pages/AuditWorkflowManagerAIAgent';
import AuditSchedulingAIAgent from './pages/AuditSchedulingAIAgent';
import AuditFindingsAIAgent from './pages/AuditFindingsAIAgent';
import CorrectiveActionTrackerAIAgent from './pages/CorrectiveActionTrackerAIAgent';
import AuditReportGeneratorAIAgent from './pages/AuditReportGeneratorAIAgent';
import AuditAnalyticsAIAgent from './pages/AuditAnalyticsAIAgent';
import ExecutiveAuditDashboardAIAgent from './pages/ExecutiveAuditDashboardAIAgent';
import InternalControlAssessmentAIAgent from './pages/InternalControlAssessmentAIAgent';
import FinancialAuditAIAgent from './pages/FinancialAuditAIAgent';
import ProcurementAuditAIAgent from './pages/ProcurementAuditAIAgent';
import InventoryAuditAIAgent from './pages/InventoryAuditAIAgent';
import DataIntegrityAuditAIAgent from './pages/DataIntegrityAuditAIAgent';
import PredictiveAuditAIAgent from './pages/PredictiveAuditAIAgent';
import AuditKPIDashboardAIAgent from './pages/AuditKPIDashboardAIAgent';
import FraudDetectionAIAgent from './pages/FraudDetectionAIAgent';
import StationAuditExpertAIAgent from './pages/StationAuditExpertAIAgent';
import AssetVerificationAIAgent from './pages/AssetVerificationAIAgent';
import ComplianceCheckerAIAgent from './pages/ComplianceCheckerAIAgent';
import DisciplinaryAuditorAIAgent from './pages/DisciplinaryAuditorAIAgent';
import CyberForensicsAuditorAIAgent from './pages/CyberForensicsAuditorAIAgent';
import RiskManagementAIAgent from './pages/RiskManagementAIAgent';
import ArmouryInspectorAIAgent from './pages/ArmouryInspectorAIAgent';
import LegalAuditBotAIAgent from './pages/LegalAuditBotAIAgent';
import EvidenceChainAuditorAIAgent from './pages/EvidenceChainAuditorAIAgent';
import CAGAuditPredictorAIAgent from './pages/CAGAuditPredictorAIAgent';
import InternalAuditAutomationBotAgent from './pages/InternalAuditAutomationBotAgent';
import FraudTriangleAnalyzerAgent from './pages/FraudTriangleAnalyzerAgent';
import GhostVendorAuditBotAgent from './pages/GhostVendorAuditBotAgent';
import DuplicateInvoiceScannerAgent from './pages/DuplicateInvoiceScannerAgent';
import PayrollFraudAuditorAgent from './pages/PayrollFraudAuditorAgent';
import PettyCashReconciliationAIAgent from './pages/PettyCashReconciliationAIAgent';
import TenderCartelAuditAIAgent from './pages/TenderCartelAuditAIAgent';
import ProcurementPriceBenchmarkerAgent from './pages/ProcurementPriceBenchmarkerAgent';
import SSFundEncryptedAuditorAgent from './pages/SSFundEncryptedAuditorAgent';
import GrantUtilizationAuditorAgent from './pages/GrantUtilizationAuditorAgent';
import FundDiversionDetectorAIAgent from './pages/FundDiversionDetectorAIAgent';
import TaxationTDSGSTAuditBotAgent from './pages/TaxationTDSGSTAuditBotAgent';
import AssetDepreciationAuditorAgent from './pages/AssetDepreciationAuditorAgent';
import InventoryShrinkageAuditAIAgent from './pages/InventoryShrinkageAuditAIAgent';
import StationLevelAuditBotAgent from './pages/StationLevelAuditBotAgent';
import HeadquartersAuditSweeperAgent from './pages/HeadquartersAuditSweeperAgent';
import TreasuryDiscrepancyFinderAgent from './pages/TreasuryDiscrepancyFinderAgent';
import BankReconciliationAIAgent from './pages/BankReconciliationAIAgent';
import DigitalSignatureValidatorAgent from './pages/DigitalSignatureValidatorAgent';
import BiometricAuditTrailAIAgent from './pages/BiometricAuditTrailAIAgent';
import BlockchainLedgerAuditorAgent from './pages/BlockchainLedgerAuditorAgent';
import ZeroTrustAccessAuditorAgent from './pages/ZeroTrustAccessAuditorAgent';
import AuditQueryAutoResponderAgent from './pages/AuditQueryAutoResponderAgent';
import ComplianceDeviationAlerterAgent from './pages/ComplianceDeviationAlerterAgent';
import SOPBreachAuditAIAgent from './pages/SOPBreachAuditAIAgent';
import MedicalClaimFraudAuditorAgent from './pages/MedicalClaimFraudAuditorAgent';
import TADATravelAuditBotAgent from './pages/TADATravelAuditBotAgent';
import FuelLogAnomalyDetectorAgent from './pages/FuelLogAnomalyDetectorAgent';
import LogisticsShippingAuditorAgent from './pages/LogisticsShippingAuditorAgent';
import WeaponryStockAuditAIAgent from './pages/WeaponryStockAuditAIAgent';
import AmmunitionDiscrepancyBotAgent from './pages/AmmunitionDiscrepancyBotAgent';
import RiotGearInventoryAuditorAgent from './pages/RiotGearInventoryAuditorAgent';
import ConfiscatedAssetAuditAIAgent from './pages/ConfiscatedAssetAuditAIAgent';
import SeizedCashVaultAuditorAgent from './pages/SeizedCashVaultAuditorAgent';
import NarcoticsSeizureAuditBotAgent from './pages/NarcoticsSeizureAuditBotAgent';
import ForensicLabAuditAIAgent from './pages/ForensicLabAuditAIAgent';
import CyberCellCapExAuditorAgent from './pages/CyberCellCapExAuditorAgent';
import ITHardwareLifespanAuditAgent from './pages/ITHardwareLifespanAuditAgent';
import SoftwareLicenseUsageAuditAgent from './pages/SoftwareLicenseUsageAuditAgent';
import CloudServerBillingAuditorAgent from './pages/CloudServerBillingAuditorAgent';
import SmartCityCCTVAuditAIAgent from './pages/SmartCityCCTVAuditAIAgent';
import DroneFlightLogAuditorAgent from './pages/DroneFlightLogAuditorAgent';
import MarineFuelAuditBotAgent from './pages/MarineFuelAuditBotAgent';
import AviationMaintenanceAuditorAgent from './pages/AviationMaintenanceAuditorAgent';
import K9UnitExpenseAuditAIAgent from './pages/K9UnitExpenseAuditAIAgent';
import WelfareFundAuditBotAgent from './pages/WelfareFundAuditBotAgent';
import HospitalPharmacyAuditorAgent from './pages/HospitalPharmacyAuditorAgent';
import CanteenSalesAuditAIAgent from './pages/CanteenSalesAuditAIAgent';
import GuestHouseRevenueAuditAgent from './pages/GuestHouseRevenueAuditAgent';
import EventSecurityBillingAuditAgent from './pages/EventSecurityBillingAuditAgent';
import TrafficFineCollectionAuditAgent from './pages/TrafficFineCollectionAuditAgent';
import LokAdalatSettlementAuditAgent from './pages/LokAdalatSettlementAuditAgent';
import VendorSLABreachAuditorAgent from './pages/VendorSLABreachAuditorAgent';
import PenaltyDeductionAuditAIAgent from './pages/PenaltyDeductionAuditAIAgent';
import InsuranceClaimAuditBotAgent from './pages/InsuranceClaimAuditBotAgent';
import ConstructionCapExAuditorAgent from './pages/ConstructionCapExAuditorAgent';
import HousingMaintenanceAuditAgent from './pages/HousingMaintenanceAuditAgent';
import GreenEnergyROIAuditorAgent from './pages/GreenEnergyROIAuditorAgent';
import LegacyExtractorAIAgent from './pages/LegacyExtractorAIAgent';
import OralHistoryTranscriberAgent from './pages/OralHistoryTranscriberAgent';
import CaseArchiverBotAgent from './pages/CaseArchiverBotAgent';
import TacKnowledgeGrapherAgent from './pages/TacKnowledgeGrapherAgent';
import SOPGenerationAIAgent from './pages/SOPGenerationAIAgent';
import InterrogationPatternBotAgent from './pages/InterrogationPatternBotAgent';
import EvidenceHandlingAIAgent from './pages/EvidenceHandlingAIAgent';
import WisdomTransferBotAgent from './pages/WisdomTransferBotAgent';
import HistoricalTrendsAnalyzerAgent from './pages/HistoricalTrendsAnalyzerAgent';
import ArmsLicenseBotAgent from './pages/ArmsLicenseBotAgent';
import BackgroundVettingAIAgent from './pages/BackgroundVettingAIAgent';
import ExplosivesAuditBotAgent from './pages/ExplosivesAuditBotAgent';
import EventPermissionRouterAgent from './pages/EventPermissionRouterAgent';
import LoudspeakerMonitorAIAgent from './pages/LoudspeakerMonitorAIAgent';
import HotelDBSyncBotAgent from './pages/HotelDBSyncBotAgent';
import ProcessionSafetyAnalystAgent from './pages/ProcessionSafetyAnalystAgent';
import CinemaSecurityEvaluatorAgent from './pages/CinemaSecurityEvaluatorAgent';
import RenewalPredictorAgent from './pages/RenewalPredictorAgent';
import ForgeryDetectorAIAgent from './pages/ForgeryDetectorAIAgent';
import RiskProfilingEngineAgent from './pages/RiskProfilingEngineAgent';
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
import SalaryProjectionDetailed from './pages/SalaryProjectionDetailed';
import OvertimeCalculatorDetailed from './pages/OvertimeCalculatorDetailed';
import UniformAllowanceManagementDetailed from './pages/UniformAllowanceManagementDetailed';
import FuelBudgetPlannerDetailed from './pages/FuelBudgetPlannerDetailed';
import BuildingMaintenanceBudgetDetailed from './pages/BuildingMaintenanceBudgetDetailed';
import ElectricityBillAnalyticsDetailed from './pages/ElectricityBillAnalyticsDetailed';
import WaterBillAnalyticsDetailed from './pages/WaterBillAnalyticsDetailed';
import TelephoneExpenseAnalyticsDetailed from './pages/TelephoneExpenseAnalyticsDetailed';
import InternetExpenseMonitoringDetailed from './pages/InternetExpenseMonitoringDetailed';
import CostCenterDashboardDetailed from './pages/CostCenterDashboardDetailed';
import DGPSecretariatManagementDetailed from './pages/DGPSecretariatManagementDetailed';
import ADGOfficeManagementDetailed from './pages/ADGOfficeManagementDetailed';
import IGOfficeWorkflowDetailed from './pages/IGOfficeWorkflowDetailed';
import DIGOfficeDashboardDetailed from './pages/DIGOfficeDashboardDetailed';
import SPOfficeAutomationDetailed from './pages/SPOfficeAutomationDetailed';
import PoliceHeadquartersFileRoomDetailed from './pages/PoliceHeadquartersFileRoomDetailed';
import HeadquartersVisitorPassDetailed from './pages/HeadquartersVisitorPassDetailed';
import HeadquartersMeetingSchedulerDetailed from './pages/HeadquartersMeetingSchedulerDetailed';
import HeadquartersApprovalWorkflowDetailed from './pages/HeadquartersApprovalWorkflowDetailed';
import HeadquartersCircularMonitoringDetailed from './pages/HeadquartersCircularMonitoringDetailed';
import VIPLoungeManagementDetailed from './pages/VIPLoungeManagementDetailed';
import ConferenceHospitalityPlannerDetailed from './pages/ConferenceHospitalityPlannerDetailed';
import GuestRefreshmentInventoryDetailed from './pages/GuestRefreshmentInventoryDetailed';
import OfficialCateringCoordinationDetailed from './pages/OfficialCateringCoordinationDetailed';
import GovernmentGuestReceptionDetailed from './pages/GovernmentGuestReceptionDetailed';
import AccommodationPreparationChecklistDetailed from './pages/AccommodationPreparationChecklistDetailed';
import ProtocolDiningPlannerDetailed from './pages/ProtocolDiningPlannerDetailed';
import KitchenHygieneAuditDetailed from './pages/KitchenHygieneAuditDetailed';
import FoodSafetyComplianceDetailed from './pages/FoodSafetyComplianceDetailed';
import HospitalityFeedbackDashboardDetailed from './pages/HospitalityFeedbackDashboardDetailed';
import PoliceIdentityLifecycleManagementDetailed from './pages/PoliceIdentityLifecycleManagementDetailed';
import SmartAccessPassManagementDetailed from './pages/SmartAccessPassManagementDetailed';
import BiometricDeviceAdministrationDetailed from './pages/BiometricDeviceAdministrationDetailed';
import OfficerDigitalIdentityWalletDetailed from './pages/OfficerDigitalIdentityWalletDetailed';
import SecureVisitorIdentityExchangeDetailed from './pages/SecureVisitorIdentityExchangeDetailed';
import TemporaryDutyPassGeneratorDetailed from './pages/TemporaryDutyPassGeneratorDetailed';
import LostIDCardRecoveryWorkflowDetailed from './pages/LostIDCardRecoveryWorkflowDetailed';
import MultiFactorAccessComplianceDetailed from './pages/MultiFactorAccessComplianceDetailed';
import AccessPrivilegeReviewSystemDetailed from './pages/AccessPrivilegeReviewSystemDetailed';
import IdentityRevocationManagerDetailed from './pages/IdentityRevocationManagerDetailed';
import PoliceBuildingMaintenanceDetailed from './pages/PoliceBuildingMaintenanceDetailed';
import PoliceBarrackManagementDetailed from './pages/PoliceBarrackManagementDetailed';
import PoliceGuestHouseManagementDetailed from './pages/PoliceGuestHouseManagementDetailed';
import PoliceCampusSecurityDetailed from './pages/PoliceCampusSecurityDetailed';
import SmartPoliceHeadquartersDetailed from './pages/SmartPoliceHeadquartersDetailed';
import PoliceStationEnergyMonitoringDetailed from './pages/PoliceStationEnergyMonitoringDetailed';
import WaterSupplyMonitoringDetailed from './pages/WaterSupplyMonitoringDetailed';
import ElectricalAssetMonitoringDetailed from './pages/ElectricalAssetMonitoringDetailed';
import GeneratorMonitoringDetailed from './pages/GeneratorMonitoringDetailed';
import FireSafetyComplianceDetailed from './pages/FireSafetyComplianceDetailed';
import BuildingStructuralHealthIndexDetailed from './pages/BuildingStructuralHealthIndexDetailed';
import EarthquakeSafetyInspectionDetailed from './pages/EarthquakeSafetyInspectionDetailed';
import FireExitReadinessMonitorDetailed from './pages/FireExitReadinessMonitorDetailed';
import RainLeakageMonitoringDetailed from './pages/RainLeakageMonitoringDetailed';
import BuildingRenovationPlannerDetailed from './pages/BuildingRenovationPlannerDetailed';
import SmartWaterMeterDashboardDetailed from './pages/SmartWaterMeterDashboardDetailed';
import EnergyEfficiencyAuditDetailed from './pages/EnergyEfficiencyAuditDetailed';
import HVACPerformanceMonitoringDetailed from './pages/HVACPerformanceMonitoringDetailed';
import GeneratorFuelConsumptionAnalyticsDetailed from './pages/GeneratorFuelConsumptionAnalyticsDetailed';
import LiftBreakdownPredictionDetailed from './pages/LiftBreakdownPredictionDetailed';
import IdeaSubmissionPortalDetailed from './pages/IdeaSubmissionPortalDetailed';
import HackathonManagementDetailed from './pages/HackathonManagementDetailed';
import PilotDeploymentTrackerDetailed from './pages/PilotDeploymentTrackerDetailed';
import InnovationScorecardDetailed from './pages/InnovationScorecardDetailed';
import TechnologyWatchDashboardDetailed from './pages/TechnologyWatchDashboardDetailed';
import PatentMonitoringDetailed from './pages/PatentMonitoringDetailed';
import StartupPartnershipRegisterDetailed from './pages/StartupPartnershipRegisterDetailed';
import SandboxEnvironmentManagerDetailed from './pages/SandboxEnvironmentManagerDetailed';
import ExperimentalPolicyRegisterDetailed from './pages/ExperimentalPolicyRegisterDetailed';
import InnovationAdoptionAnalyticsDetailed from './pages/InnovationAdoptionAnalyticsDetailed';
import AnnualInspectionPlannerDetailed from './pages/AnnualInspectionPlannerDetailed';
import SurpriseInspectionSystemDetailed from './pages/SurpriseInspectionSystemDetailed';
import PoliceLineInspectionDetailed from './pages/PoliceLineInspectionDetailed';
import StationCleanlinessAuditDetailed from './pages/StationCleanlinessAuditDetailed';
import VehicleInspectionRegisterDetailed from './pages/VehicleInspectionRegisterDetailed';
import EquipmentInspectionDetailed from './pages/EquipmentInspectionDetailed';
import RecordInspectionDetailed from './pages/RecordInspectionDetailed';
import InspectionDeficiencyTrackerDetailed from './pages/InspectionDeficiencyTrackerDetailed';
import ComplianceVerificationDetailed from './pages/ComplianceVerificationDetailed';
import InspectionScoringEngineDetailed from './pages/InspectionScoringEngineDetailed';
import PoliceInformantRewardManagementDetailed from './pages/PoliceInformantRewardManagementDetailed';
import SensitivePersonRegistryDetailed from './pages/SensitivePersonRegistryDetailed';
import HistoryOfMajorIncidentsRepositoryDetailed from './pages/HistoryOfMajorIncidentsRepositoryDetailed';
import DistrictSecurityAssessmentDetailed from './pages/DistrictSecurityAssessmentDetailed';
import HighRiskVillageMonitoringDetailed from './pages/HighRiskVillageMonitoringDetailed';
import HighRiskUrbanAreaMonitoringDetailed from './pages/HighRiskUrbanAreaMonitoringDetailed';
import CrossBorderIntelligenceExchangeDashboardDetailed from './pages/CrossBorderIntelligenceExchangeDashboardDetailed';
import MultiAgencyCoordinationCenterDetailed from './pages/MultiAgencyCoordinationCenterDetailed';
import IntelligenceDisseminationWorkflowDetailed from './pages/IntelligenceDisseminationWorkflowDetailed';
import ConfidentialSourceAccessControlDetailed from './pages/ConfidentialSourceAccessControlDetailed';
import RetiredOfficerExperienceArchiveDetailed from './pages/RetiredOfficerExperienceArchiveDetailed';
import BestInvestigationPracticesLibraryDetailed from './pages/BestInvestigationPracticesLibraryDetailed';
import StandardTemplatesRepositoryDetailed from './pages/StandardTemplatesRepositoryDetailed';
import OperationalPlaybookManagerDetailed from './pages/OperationalPlaybookManagerDetailed';
import DecisionCasebookLibraryDetailed from './pages/DecisionCasebookLibraryDetailed';
import HistoricalIncidentLessonsDetailed from './pages/HistoricalIncidentLessonsDetailed';
import PoliceTerminologyDictionaryDetailed from './pages/PoliceTerminologyDictionaryDetailed';
import AcronymKnowledgeBaseDetailed from './pages/AcronymKnowledgeBaseDetailed';
import OrganizationalMemoryPlatformDetailed from './pages/OrganizationalMemoryPlatformDetailed';
import KnowledgeContinuityManagerDetailed from './pages/KnowledgeContinuityManagerDetailed';
import EquipmentCalibrationRegisterDetailed from './pages/EquipmentCalibrationRegisterDetailed';
import SampleDispatchTrackingDetailed from './pages/SampleDispatchTrackingDetailed';
import LaboratoryCapacityDashboardDetailed from './pages/LaboratoryCapacityDashboardDetailed';
import InstrumentMaintenancePlannerDetailed from './pages/InstrumentMaintenancePlannerDetailed';
import LabQualityAssuranceDetailed from './pages/LabQualityAssuranceDetailed';
import ChemicalInventoryDetailed from './pages/ChemicalInventoryDetailed';
import TestRequestWorkflowDetailed from './pages/TestRequestWorkflowDetailed';
import SampleStorageMonitoringDetailed from './pages/SampleStorageMonitoringDetailed';
import ReportTurnaroundAnalyticsDetailed from './pages/ReportTurnaroundAnalyticsDetailed';
import AccreditationComplianceDetailed from './pages/AccreditationComplianceDetailed';
import CasePropertyAuctionManagementDetailed from './pages/CasePropertyAuctionManagementDetailed';
import CourtPropertyDisposalMonitoringDetailed from './pages/CourtPropertyDisposalMonitoringDetailed';
import SeizedVehicleDisposalManagementDetailed from './pages/SeizedVehicleDisposalManagementDetailed';
import UnclaimedPropertyManagementDetailed from './pages/UnclaimedPropertyManagementDetailed';
import CourtOrderComplianceMonitorDetailed from './pages/CourtOrderComplianceMonitorDetailed';
import MagistrateCommunicationPortalDetailed from './pages/MagistrateCommunicationPortalDetailed';
import JudicialCorrespondenceTrackerDetailed from './pages/JudicialCorrespondenceTrackerDetailed';
import ProductionWarrantSchedulerDetailed from './pages/ProductionWarrantSchedulerDetailed';
import LegalNoticeDispatchCenterDetailed from './pages/LegalNoticeDispatchCenterDetailed';
import CaseLimitationPeriodMonitorDetailed from './pages/CaseLimitationPeriodMonitorDetailed';
import ArmsLicenseAdministrationDetailed from './pages/ArmsLicenseAdministrationDetailed';
import ArmsDealerInspectionDetailed from './pages/ArmsDealerInspectionDetailed';
import ArmsRenewalMonitoringDetailed from './pages/ArmsRenewalMonitoringDetailed';
import ExplosivesLicenseCoordinationDetailed from './pages/ExplosivesLicenseCoordinationDetailed';
import FireworksPermissionManagementDetailed from './pages/FireworksPermissionManagementDetailed';
import LoudspeakerPermissionManagementDetailed from './pages/LoudspeakerPermissionManagementDetailed';
import ProcessionRoutePermissionDetailed from './pages/ProcessionRoutePermissionDetailed';
import TemporaryEventPermissionDetailed from './pages/TemporaryEventPermissionDetailed';
import CinemaSecurityCoordinationDetailed from './pages/CinemaSecurityCoordinationDetailed';
import HotelVerificationManagementDetailed from './pages/HotelVerificationManagementDetailed';
import PoliceBudgetPlannerAgent from './pages/PoliceBudgetPlannerAgent';
import FundAllocationExpertAgent from './pages/FundAllocationExpertAgent';
import BudgetForecastAIAgent from './pages/BudgetForecastAIAgent';
import BudgetUtilizationMonitorAgent from './pages/BudgetUtilizationMonitorAgent';
import FinancialPlanningAIAgent from './pages/FinancialPlanningAIAgent';
import TreasuryManagementAIAgent from './pages/TreasuryManagementAIAgent';
import RevenueGrantManagementAIAgent from './pages/RevenueGrantManagementAIAgent';
import VendorManagementAIAgent from './pages/VendorManagementAIAgent';
import TenderAnalysisAIAgent from './pages/TenderAnalysisAIAgent';
import VendorScoringAIAgent from './pages/VendorScoringAIAgent';
import BidEvaluationAIAgent from './pages/BidEvaluationAIAgent';
import InventoryForecastingAIAgent from './pages/InventoryForecastingAIAgent';
import SupplyChainOptimizationAIAgent from './pages/SupplyChainOptimizationAIAgent';
import PriceBenchmarkingAIAgent from './pages/PriceBenchmarkingAIAgent';
import CostOptimizationAIAgent from './pages/CostOptimizationAIAgent';
import ArmouryProcurementExpertAIAgent from './pages/ArmouryProcurementExpertAIAgent';
import VehicleSourcingExpertAIAgent from './pages/VehicleSourcingExpertAIAgent';
import LegalComplianceBotAIAgent from './pages/LegalComplianceBotAIAgent';
import ContractRiskAssessorAIAgent from './pages/ContractRiskAssessorAIAgent';
import ProcurementFraudDetectionAIAgent from './pages/ProcurementFraudDetectionAIAgent';
import ProcurementAnalyticsAIAgent from './pages/ProcurementAnalyticsAIAgent';
import ExecutiveProcurementDashboardAIAgent from './pages/ExecutiveProcurementDashboardAIAgent';
import AIProcurementCopilotAgent from './pages/AIProcurementCopilotAgent';
import AssetLifecycleManagementAIAgent from './pages/AssetLifecycleManagementAIAgent';
import QualityControlAIAgent from './pages/QualityControlAIAgent';
import ProcurementPlanningAIAgent from './pages/ProcurementPlanningAIAgent';
import VendorPaymentAuditorAIAgent from './pages/VendorPaymentAuditorAIAgent';
import SalaryPayrollAIAgent from './pages/SalaryPayrollAIAgent';
import PensionGratuityAIAgent from './pages/PensionGratuityAIAgent';
import FleetExpenseAIAgent from './pages/FleetExpenseAIAgent';
import AmmunitionCostAnalyzerAIAgent from './pages/AmmunitionCostAnalyzerAIAgent';
import ExpenseFraudAuditorAIAgent from './pages/ExpenseFraudAuditorAIAgent';
import FinancialComplianceBotAIAgent from './pages/FinancialComplianceBotAIAgent';
import InternalAuditAIAgent from './pages/InternalAuditAIAgent';
import FinancialRiskIntelligenceAIAgent from './pages/FinancialRiskIntelligenceAIAgent';
import ExecutiveFinanceCopilotAIAgent from './pages/ExecutiveFinanceCopilotAIAgent';
import FinancialAnalyticsAIAgent from './pages/FinancialAnalyticsAIAgent';
import RiskAllowancePredictorAIAgent from './pages/RiskAllowancePredictorAIAgent';
import StationUpkeepBudgetAIAgent from './pages/StationUpkeepBudgetAIAgent';
import TaxOptimizationExpertAIAgent from './pages/TaxOptimizationExpertAIAgent';
import ContingencyFundPredictorAIAgent from './pages/ContingencyFundPredictorAIAgent';
import OvertimeSpendForecasterAIAgent from './pages/OvertimeSpendForecasterAIAgent';
import StateGrantROIAnalyzerAIAgent from './pages/StateGrantROIAnalyzerAIAgent';
import CentralFundingSyncBotAgent from './pages/CentralFundingSyncBotAgent';
import UniformKitAllowanceAIAgent from './pages/UniformKitAllowanceAIAgent';
import TravelDATAOptimizerAIAgent from './pages/TravelDATAOptimizerAIAgent';
import InvestigationExpenseTrackerAIAgent from './pages/InvestigationExpenseTrackerAIAgent';
import SecretInformantSSFundAuditorAIAgent from './pages/SecretInformantSSFundAuditorAIAgent';
import PCRVanFuelLogAIAgent from './pages/PCRVanFuelLogAIAgent';
import VehicleMaintenanceBudgetBotAgent from './pages/VehicleMaintenanceBudgetBotAgent';
import TollTransportExpenseAIAgent from './pages/TollTransportExpenseAIAgent';
import FuelCardIntegrationSyncAIAgent from './pages/FuelCardIntegrationSyncAIAgent';
import PostRetirementMedicalFundAIAgent from './pages/PostRetirementMedicalFundAIAgent';
import FamilyPensionCalculatorBotAgent from './pages/FamilyPensionCalculatorBotAgent';
import CAGComplianceAuditorAIAgent from './pages/CAGComplianceAuditorAIAgent';
import ExpenseAnomalyDetectorAIAgent from './pages/ExpenseAnomalyDetectorAIAgent';
import FundUtilizationCertificateBotAgent from './pages/FundUtilizationCertificateBotAgent';
import BudgetDeficitAlertAIAgent from './pages/BudgetDeficitAlertAIAgent';
import FakeBillOCRScannerAIAgent from './pages/FakeBillOCRScannerAIAgent';
import VendorOverpricingAlertBotAgent from './pages/VendorOverpricingAlertBotAgent';
import MulticurrencyForensicAIAgent from './pages/MulticurrencyForensicAIAgent';
import SmartContractPaymentExecAIAgent from './pages/SmartContractPaymentExecAIAgent';
import CryptoAssetSeizureValuatorAIAgent from './pages/CryptoAssetSeizureValuatorAIAgent';
import DistrictwiseAllocationOptimizerAIAgent from './pages/DistrictwiseAllocationOptimizerAIAgent';
import ZonewiseFundDistrubutionAIAgent from './pages/ZonewiseFundDistrubutionAIAgent';
import EventSecurityCostPredictorAIAgent from './pages/EventSecurityCostPredictorAIAgent';
import ElectionDeploymentBudgetAIAgent from './pages/ElectionDeploymentBudgetAIAgent';
import SpecializedUnitTrainingCostAIAgent from './pages/SpecializedUnitTrainingCostAIAgent';
import K9UnitUpkeepForecasterAIAgent from './pages/K9UnitUpkeepForecasterAIAgent';
import DroneFleetDepreciationModelerAIAgent from './pages/DroneFleetDepreciationModelerAIAgent';
import CyberSecurityInvestmentROIAIAgent from './pages/CyberSecurityInvestmentROIAIAgent';
import CloudStorageBillingOptimizerAIAgent from './pages/CloudStorageBillingOptimizerAIAgent';
import HeadquartersUtilityExpenseAIAgent from './pages/HeadquartersUtilityExpenseAIAgent';
import OfficerLoanAdvanceTrackerAIAgent from './pages/OfficerLoanAdvanceTrackerAIAgent';
import FinancialHardshipPredictorBotAgent from './pages/FinancialHardshipPredictorBotAgent';
import StationRenovationBudgetAIAgent from './pages/StationRenovationBudgetAIAgent';
import RewardBountyPayoutBotAgent from './pages/RewardBountyPayoutBotAgent';
import FutureInflationAdjustmentAIAgent from './pages/FutureInflationAdjustmentAIAgent';



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
        <Route path="/salary-projection" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><SalaryProjectionDetailed /></motion.div>} />
        <Route path="/overtime-calculator" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><OvertimeCalculatorDetailed /></motion.div>} />
        <Route path="/uniform-allowance-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><UniformAllowanceManagementDetailed /></motion.div>} />
        <Route path="/fuel-budget-planner" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><FuelBudgetPlannerDetailed /></motion.div>} />
        <Route path="/building-maintenance-budget" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><BuildingMaintenanceBudgetDetailed /></motion.div>} />
        <Route path="/electricity-bill-analytics" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ElectricityBillAnalyticsDetailed /></motion.div>} />
        <Route path="/water-bill-analytics" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><WaterBillAnalyticsDetailed /></motion.div>} />
        <Route path="/telephone-expense-analytics" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><TelephoneExpenseAnalyticsDetailed /></motion.div>} />
        <Route path="/internet-expense-monitoring" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><InternetExpenseMonitoringDetailed /></motion.div>} />
        <Route path="/cost-center-dashboard" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CostCenterDashboardDetailed /></motion.div>} />
        <Route path="/dgp-secretariat-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><DGPSecretariatManagementDetailed /></motion.div>} />
        <Route path="/adg-office-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ADGOfficeManagementDetailed /></motion.div>} />
        <Route path="/ig-office-workflow" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><IGOfficeWorkflowDetailed /></motion.div>} />
        <Route path="/dig-office-dashboard" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><DIGOfficeDashboardDetailed /></motion.div>} />
        <Route path="/sp-office-automation" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><SPOfficeAutomationDetailed /></motion.div>} />
        <Route path="/police-headquarters-file-room" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PoliceHeadquartersFileRoomDetailed /></motion.div>} />
        <Route path="/headquarters-visitor-pass" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><HeadquartersVisitorPassDetailed /></motion.div>} />
        <Route path="/headquarters-meeting-scheduler" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><HeadquartersMeetingSchedulerDetailed /></motion.div>} />
        <Route path="/headquarters-approval-workflow" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><HeadquartersApprovalWorkflowDetailed /></motion.div>} />
        <Route path="/headquarters-circular-monitoring" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><HeadquartersCircularMonitoringDetailed /></motion.div>} />
        <Route path="/vip-lounge-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><VIPLoungeManagementDetailed /></motion.div>} />
        <Route path="/conference-hospitality-planner" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ConferenceHospitalityPlannerDetailed /></motion.div>} />
        <Route path="/guest-refreshment-inventory" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><GuestRefreshmentInventoryDetailed /></motion.div>} />
        <Route path="/official-catering-coordination" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><OfficialCateringCoordinationDetailed /></motion.div>} />
        <Route path="/government-guest-reception" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><GovernmentGuestReceptionDetailed /></motion.div>} />
        <Route path="/accommodation-preparation-checklist" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><AccommodationPreparationChecklistDetailed /></motion.div>} />
        <Route path="/protocol-dining-planner" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ProtocolDiningPlannerDetailed /></motion.div>} />
        <Route path="/kitchen-hygiene-audit" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><KitchenHygieneAuditDetailed /></motion.div>} />
        <Route path="/food-safety-compliance" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><FoodSafetyComplianceDetailed /></motion.div>} />
        <Route path="/hospitality-feedback-dashboard" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><HospitalityFeedbackDashboardDetailed /></motion.div>} />
        <Route path="/police-identity-lifecycle-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PoliceIdentityLifecycleManagementDetailed /></motion.div>} />
        <Route path="/smart-access-pass-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><SmartAccessPassManagementDetailed /></motion.div>} />
        <Route path="/biometric-device-administration" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><BiometricDeviceAdministrationDetailed /></motion.div>} />
        <Route path="/officer-digital-identity-wallet" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><OfficerDigitalIdentityWalletDetailed /></motion.div>} />
        <Route path="/secure-visitor-identity-exchange" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><SecureVisitorIdentityExchangeDetailed /></motion.div>} />
        <Route path="/temporary-duty-pass-generator" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><TemporaryDutyPassGeneratorDetailed /></motion.div>} />
        <Route path="/lost-id-card-recovery-workflow" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><LostIDCardRecoveryWorkflowDetailed /></motion.div>} />
        <Route path="/multi-factor-access-compliance" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><MultiFactorAccessComplianceDetailed /></motion.div>} />
        <Route path="/access-privilege-review-system" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><AccessPrivilegeReviewSystemDetailed /></motion.div>} />
        <Route path="/identity-revocation-manager" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><IdentityRevocationManagerDetailed /></motion.div>} />
        <Route path="/police-building-maintenance" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PoliceBuildingMaintenanceDetailed /></motion.div>} />
        <Route path="/police-barrack-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PoliceBarrackManagementDetailed /></motion.div>} />
        <Route path="/police-guest-house-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PoliceGuestHouseManagementDetailed /></motion.div>} />
        <Route path="/police-campus-security" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PoliceCampusSecurityDetailed /></motion.div>} />
        <Route path="/smart-police-headquarters" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><SmartPoliceHeadquartersDetailed /></motion.div>} />
        <Route path="/police-station-energy-monitoring" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PoliceStationEnergyMonitoringDetailed /></motion.div>} />
        <Route path="/water-supply-monitoring" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><WaterSupplyMonitoringDetailed /></motion.div>} />
        <Route path="/electrical-asset-monitoring" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ElectricalAssetMonitoringDetailed /></motion.div>} />
        <Route path="/generator-monitoring" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><GeneratorMonitoringDetailed /></motion.div>} />
        <Route path="/fire-safety-compliance" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><FireSafetyComplianceDetailed /></motion.div>} />
        <Route path="/building-structural-health-index" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><BuildingStructuralHealthIndexDetailed /></motion.div>} />
        <Route path="/earthquake-safety-inspection" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><EarthquakeSafetyInspectionDetailed /></motion.div>} />
        <Route path="/fire-exit-readiness-monitor" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><FireExitReadinessMonitorDetailed /></motion.div>} />
        <Route path="/rain-leakage-monitoring" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><RainLeakageMonitoringDetailed /></motion.div>} />
        <Route path="/building-renovation-planner" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><BuildingRenovationPlannerDetailed /></motion.div>} />
        <Route path="/smart-water-meter-dashboard" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><SmartWaterMeterDashboardDetailed /></motion.div>} />
        <Route path="/energy-efficiency-audit" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><EnergyEfficiencyAuditDetailed /></motion.div>} />
        <Route path="/hvac-performance-monitoring" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><HVACPerformanceMonitoringDetailed /></motion.div>} />
        <Route path="/generator-fuel-consumption-analytics" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><GeneratorFuelConsumptionAnalyticsDetailed /></motion.div>} />
        <Route path="/lift-breakdown-prediction" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><LiftBreakdownPredictionDetailed /></motion.div>} />
        <Route path="/idea-submission-portal" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><IdeaSubmissionPortalDetailed /></motion.div>} />
        <Route path="/hackathon-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><HackathonManagementDetailed /></motion.div>} />
        <Route path="/pilot-deployment-tracker" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PilotDeploymentTrackerDetailed /></motion.div>} />
        <Route path="/innovation-scorecard" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><InnovationScorecardDetailed /></motion.div>} />
        <Route path="/technology-watch-dashboard" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><TechnologyWatchDashboardDetailed /></motion.div>} />
        <Route path="/patent-monitoring" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PatentMonitoringDetailed /></motion.div>} />
        <Route path="/startup-partnership-register" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><StartupPartnershipRegisterDetailed /></motion.div>} />
        <Route path="/sandbox-environment-manager" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><SandboxEnvironmentManagerDetailed /></motion.div>} />
        <Route path="/experimental-policy-register" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ExperimentalPolicyRegisterDetailed /></motion.div>} />
        <Route path="/innovation-adoption-analytics" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><InnovationAdoptionAnalyticsDetailed /></motion.div>} />
        <Route path="/annual-inspection-planner" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><AnnualInspectionPlannerDetailed /></motion.div>} />
        <Route path="/surprise-inspection-system" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><SurpriseInspectionSystemDetailed /></motion.div>} />
        <Route path="/police-line-inspection" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PoliceLineInspectionDetailed /></motion.div>} />
        <Route path="/station-cleanliness-audit" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><StationCleanlinessAuditDetailed /></motion.div>} />
        <Route path="/vehicle-inspection-register" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><VehicleInspectionRegisterDetailed /></motion.div>} />
        <Route path="/equipment-inspection" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><EquipmentInspectionDetailed /></motion.div>} />
        <Route path="/record-inspection" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><RecordInspectionDetailed /></motion.div>} />
        <Route path="/inspection-deficiency-tracker" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><InspectionDeficiencyTrackerDetailed /></motion.div>} />
        <Route path="/compliance-verification" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ComplianceVerificationDetailed /></motion.div>} />
        <Route path="/inspection-scoring-engine" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><InspectionScoringEngineDetailed /></motion.div>} />
        <Route path="/police-informant-reward-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PoliceInformantRewardManagementDetailed /></motion.div>} />
        <Route path="/sensitive-person-registry" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><SensitivePersonRegistryDetailed /></motion.div>} />
        <Route path="/history-of-major-incidents-repository" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><HistoryOfMajorIncidentsRepositoryDetailed /></motion.div>} />
        <Route path="/district-security-assessment" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><DistrictSecurityAssessmentDetailed /></motion.div>} />
        <Route path="/high-risk-village-monitoring" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><HighRiskVillageMonitoringDetailed /></motion.div>} />
        <Route path="/high-risk-urban-area-monitoring" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><HighRiskUrbanAreaMonitoringDetailed /></motion.div>} />
        <Route path="/cross-border-intelligence-exchange-dashboard" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CrossBorderIntelligenceExchangeDashboardDetailed /></motion.div>} />
        <Route path="/multi-agency-coordination-center" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><MultiAgencyCoordinationCenterDetailed /></motion.div>} />
        <Route path="/intelligence-dissemination-workflow" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><IntelligenceDisseminationWorkflowDetailed /></motion.div>} />
        <Route path="/confidential-source-access-control" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ConfidentialSourceAccessControlDetailed /></motion.div>} />
        <Route path="/retired-officer-experience-archive" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><RetiredOfficerExperienceArchiveDetailed /></motion.div>} />
        <Route path="/best-investigation-practices-library" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><BestInvestigationPracticesLibraryDetailed /></motion.div>} />
        <Route path="/standard-templates-repository" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><StandardTemplatesRepositoryDetailed /></motion.div>} />
        <Route path="/operational-playbook-manager" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><OperationalPlaybookManagerDetailed /></motion.div>} />
        <Route path="/decision-casebook-library" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><DecisionCasebookLibraryDetailed /></motion.div>} />
        <Route path="/historical-incident-lessons" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><HistoricalIncidentLessonsDetailed /></motion.div>} />
        <Route path="/police-terminology-dictionary" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PoliceTerminologyDictionaryDetailed /></motion.div>} />
        <Route path="/acronym-knowledge-base" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><AcronymKnowledgeBaseDetailed /></motion.div>} />
        <Route path="/organizational-memory-platform" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><OrganizationalMemoryPlatformDetailed /></motion.div>} />
        <Route path="/knowledge-continuity-manager" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><KnowledgeContinuityManagerDetailed /></motion.div>} />
        <Route path="/equipment-calibration-register" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><EquipmentCalibrationRegisterDetailed /></motion.div>} />
        <Route path="/sample-dispatch-tracking" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><SampleDispatchTrackingDetailed /></motion.div>} />
        <Route path="/laboratory-capacity-dashboard" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><LaboratoryCapacityDashboardDetailed /></motion.div>} />
        <Route path="/instrument-maintenance-planner" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><InstrumentMaintenancePlannerDetailed /></motion.div>} />
        <Route path="/lab-quality-assurance" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><LabQualityAssuranceDetailed /></motion.div>} />
        <Route path="/chemical-inventory" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ChemicalInventoryDetailed /></motion.div>} />
        <Route path="/test-request-workflow" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><TestRequestWorkflowDetailed /></motion.div>} />
        <Route path="/sample-storage-monitoring" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><SampleStorageMonitoringDetailed /></motion.div>} />
        <Route path="/report-turnaround-analytics" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ReportTurnaroundAnalyticsDetailed /></motion.div>} />
        <Route path="/accreditation-compliance" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><AccreditationComplianceDetailed /></motion.div>} />
        <Route path="/case-property-auction-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CasePropertyAuctionManagementDetailed /></motion.div>} />
        <Route path="/court-property-disposal-monitoring" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CourtPropertyDisposalMonitoringDetailed /></motion.div>} />
        <Route path="/seized-vehicle-disposal-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><SeizedVehicleDisposalManagementDetailed /></motion.div>} />
        <Route path="/unclaimed-property-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><UnclaimedPropertyManagementDetailed /></motion.div>} />
        <Route path="/court-order-compliance-monitor" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CourtOrderComplianceMonitorDetailed /></motion.div>} />
        <Route path="/magistrate-communication-portal" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><MagistrateCommunicationPortalDetailed /></motion.div>} />
        <Route path="/judicial-correspondence-tracker" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><JudicialCorrespondenceTrackerDetailed /></motion.div>} />
        <Route path="/production-warrant-scheduler" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ProductionWarrantSchedulerDetailed /></motion.div>} />
        <Route path="/legal-notice-dispatch-center" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><LegalNoticeDispatchCenterDetailed /></motion.div>} />
        <Route path="/case-limitation-period-monitor" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CaseLimitationPeriodMonitorDetailed /></motion.div>} />
        <Route path="/arms-license-administration" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ArmsLicenseAdministrationDetailed /></motion.div>} />
        <Route path="/arms-dealer-inspection" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ArmsDealerInspectionDetailed /></motion.div>} />
        <Route path="/arms-renewal-monitoring" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ArmsRenewalMonitoringDetailed /></motion.div>} />
        <Route path="/explosives-license-coordination" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ExplosivesLicenseCoordinationDetailed /></motion.div>} />
        <Route path="/fireworks-permission-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><FireworksPermissionManagementDetailed /></motion.div>} />
        <Route path="/loudspeaker-permission-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><LoudspeakerPermissionManagementDetailed /></motion.div>} />
        <Route path="/procession-route-permission" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ProcessionRoutePermissionDetailed /></motion.div>} />
        <Route path="/temporary-event-permission" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><TemporaryEventPermissionDetailed /></motion.div>} />
        <Route path="/cinema-security-coordination" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CinemaSecurityCoordinationDetailed /></motion.div>} />
        <Route path="/hotel-verification-management" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><HotelVerificationManagementDetailed /></motion.div>} />
        <Route path="/police-budget-planner-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PoliceBudgetPlannerAgent /></motion.div>} />
        <Route path="/fund-allocation-expert-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><FundAllocationExpertAgent /></motion.div>} />
        <Route path="/budget-forecast-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><BudgetForecastAIAgent /></motion.div>} />
        <Route path="/budget-utilization-monitor-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><BudgetUtilizationMonitorAgent /></motion.div>} />
        <Route path="/financial-planning-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><FinancialPlanningAIAgent /></motion.div>} />
        <Route path="/treasury-management-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><TreasuryManagementAIAgent /></motion.div>} />
        <Route path="/revenue-grant-management-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><RevenueGrantManagementAIAgent /></motion.div>} />
        <Route path="/procurement-planning-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ProcurementPlanningAIAgent /></motion.div>} />
        <Route path="/vendor-payment-auditor-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><VendorPaymentAuditorAIAgent /></motion.div>} />
        <Route path="/salary-payroll-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><SalaryPayrollAIAgent /></motion.div>} />
        <Route path="/pension-gratuity-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PensionGratuityAIAgent /></motion.div>} />
        <Route path="/fleet-expense-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><FleetExpenseAIAgent /></motion.div>} />
        <Route path="/ammunition-cost-analyzer-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><AmmunitionCostAnalyzerAIAgent /></motion.div>} />
        <Route path="/expense-fraud-auditor-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ExpenseFraudAuditorAIAgent /></motion.div>} />
        <Route path="/financial-compliance-bot-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><FinancialComplianceBotAIAgent /></motion.div>} />
        <Route path="/internal-audit-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><InternalAuditAIAgent /></motion.div>} />
        <Route path="/financial-risk-intelligence-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><FinancialRiskIntelligenceAIAgent /></motion.div>} />
        <Route path="/executive-finance-copilot-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ExecutiveFinanceCopilotAIAgent /></motion.div>} />
        <Route path="/financial-analytics-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><FinancialAnalyticsAIAgent /></motion.div>} />
        <Route path="/risk-allowance-predictor-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><RiskAllowancePredictorAIAgent /></motion.div>} />
        <Route path="/station-upkeep-budget-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><StationUpkeepBudgetAIAgent /></motion.div>} />
        <Route path="/tax-optimization-expert-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><TaxOptimizationExpertAIAgent /></motion.div>} />
        <Route path="/contingency-fund-predictor-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ContingencyFundPredictorAIAgent /></motion.div>} />
        <Route path="/overtime-spend-forecaster-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><OvertimeSpendForecasterAIAgent /></motion.div>} />
        <Route path="/state-grant-roi-analyzer-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><StateGrantROIAnalyzerAIAgent /></motion.div>} />
        <Route path="/central-funding-sync-bot-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CentralFundingSyncBotAgent /></motion.div>} />
        <Route path="/uniform-kit-allowance-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><UniformKitAllowanceAIAgent /></motion.div>} />
        <Route path="/travel-data-optimizer-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><TravelDATAOptimizerAIAgent /></motion.div>} />
        <Route path="/investigation-expense-tracker-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><InvestigationExpenseTrackerAIAgent /></motion.div>} />
        <Route path="/secret-informant-ss-fund-auditor-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><SecretInformantSSFundAuditorAIAgent /></motion.div>} />
        <Route path="/pcr-van-fuel-log-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PCRVanFuelLogAIAgent /></motion.div>} />
        <Route path="/vehicle-maintenance-budget-bot-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><VehicleMaintenanceBudgetBotAgent /></motion.div>} />
        <Route path="/toll-transport-expense-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><TollTransportExpenseAIAgent /></motion.div>} />
        <Route path="/fuel-card-integration-sync-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><FuelCardIntegrationSyncAIAgent /></motion.div>} />
        <Route path="/postretirement-medical-fund-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><PostRetirementMedicalFundAIAgent /></motion.div>} />
        <Route path="/family-pension-calculator-bot-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><FamilyPensionCalculatorBotAgent /></motion.div>} />
        <Route path="/cag-compliance-auditor-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CAGComplianceAuditorAIAgent /></motion.div>} />
        <Route path="/expense-anomaly-detector-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ExpenseAnomalyDetectorAIAgent /></motion.div>} />
        <Route path="/fund-utilization-certificate-bot-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><FundUtilizationCertificateBotAgent /></motion.div>} />
        <Route path="/budget-deficit-alert-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><BudgetDeficitAlertAIAgent /></motion.div>} />
        <Route path="/fake-bill-ocr-scanner-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><FakeBillOCRScannerAIAgent /></motion.div>} />
        <Route path="/vendor-overpricing-alert-bot-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><VendorOverpricingAlertBotAgent /></motion.div>} />
        <Route path="/multicurrency-forensic-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><MulticurrencyForensicAIAgent /></motion.div>} />
        <Route path="/smart-contract-payment-exec-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><SmartContractPaymentExecAIAgent /></motion.div>} />
        <Route path="/crypto-asset-seizure-valuator-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CryptoAssetSeizureValuatorAIAgent /></motion.div>} />
        <Route path="/districtwise-allocation-optimizer-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><DistrictwiseAllocationOptimizerAIAgent /></motion.div>} />
        <Route path="/zonewise-fund-distrubution-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ZonewiseFundDistrubutionAIAgent /></motion.div>} />
        <Route path="/event-security-cost-predictor-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><EventSecurityCostPredictorAIAgent /></motion.div>} />
        <Route path="/election-deployment-budget-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><ElectionDeploymentBudgetAIAgent /></motion.div>} />
        <Route path="/specialized-unit-training-cost-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><SpecializedUnitTrainingCostAIAgent /></motion.div>} />
        <Route path="/k9-unit-upkeep-forecaster-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><K9UnitUpkeepForecasterAIAgent /></motion.div>} />
        <Route path="/drone-fleet-depreciation-modeler-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><DroneFleetDepreciationModelerAIAgent /></motion.div>} />
        <Route path="/cyber-security-investment-roi-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CyberSecurityInvestmentROIAIAgent /></motion.div>} />
        <Route path="/cloud-storage-billing-optimizer-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><CloudStorageBillingOptimizerAIAgent /></motion.div>} />
        <Route path="/headquarters-utility-expense-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><HeadquartersUtilityExpenseAIAgent /></motion.div>} />
        <Route path="/officer-loan-advance-tracker-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><OfficerLoanAdvanceTrackerAIAgent /></motion.div>} />
        <Route path="/financial-hardship-predictor-bot-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><FinancialHardshipPredictorBotAgent /></motion.div>} />
        <Route path="/station-renovation-budget-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><StationRenovationBudgetAIAgent /></motion.div>} />
        <Route path="/reward-bounty-payout-bot-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><RewardBountyPayoutBotAgent /></motion.div>} />
        <Route path="/future-inflation-adjustment-ai-agent" element={<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.3 }} className="page-transition"><FutureInflationAdjustmentAIAgent /></motion.div>} />


        <Route path="/vendor-management-ai-agent" element={<VendorManagementAIAgent />} />
        <Route path="/tender-analysis-ai-agent" element={<TenderAnalysisAIAgent />} />
        <Route path="/vendor-scoring-ai-agent" element={<VendorScoringAIAgent />} />
        <Route path="/bid-evaluation-ai-agent" element={<BidEvaluationAIAgent />} />
        <Route path="/inventory-forecasting-ai-agent" element={<InventoryForecastingAIAgent />} />
        <Route path="/supply-chain-optimization-ai-agent" element={<SupplyChainOptimizationAIAgent />} />
        <Route path="/price-benchmarking-ai-agent" element={<PriceBenchmarkingAIAgent />} />
        <Route path="/cost-optimization-ai-agent" element={<CostOptimizationAIAgent />} />
        <Route path="/armoury-procurement-expert-ai-agent" element={<ArmouryProcurementExpertAIAgent />} />
        <Route path="/vehicle-sourcing-expert-ai-agent" element={<VehicleSourcingExpertAIAgent />} />
        <Route path="/legal-compliance-bot-ai-agent" element={<LegalComplianceBotAIAgent />} />
        <Route path="/contract-risk-assessor-ai-agent" element={<ContractRiskAssessorAIAgent />} />
        <Route path="/procurement-fraud-detection-ai-agent" element={<ProcurementFraudDetectionAIAgent />} />
        <Route path="/procurement-analytics-ai-agent" element={<ProcurementAnalyticsAIAgent />} />
        <Route path="/executive-procurement-dashboard-ai-agent" element={<ExecutiveProcurementDashboardAIAgent />} />
        <Route path="/ai-procurement-copilot-agent" element={<AIProcurementCopilotAgent />} />
        <Route path="/asset-lifecycle-management-ai-agent" element={<AssetLifecycleManagementAIAgent />} />
        <Route path="/quality-control-ai-agent" element={<QualityControlAIAgent />} />
              <Route path="/arms-license-bot-agent" element={<ArmsLicenseBotAgent />} />
        <Route path="/background-vetting-ai-agent" element={<BackgroundVettingAIAgent />} />
        <Route path="/explosives-audit-bot-agent" element={<ExplosivesAuditBotAgent />} />
        <Route path="/event-permission-router-agent" element={<EventPermissionRouterAgent />} />
        <Route path="/loudspeaker-monitor-ai-agent" element={<LoudspeakerMonitorAIAgent />} />
        <Route path="/hotel-db-sync-bot-agent" element={<HotelDBSyncBotAgent />} />
        <Route path="/procession-safety-analyst-agent" element={<ProcessionSafetyAnalystAgent />} />
        <Route path="/cinema-security-evaluator-agent" element={<CinemaSecurityEvaluatorAgent />} />
        <Route path="/renewal-predictor-agent" element={<RenewalPredictorAgent />} />
        <Route path="/forgery-detector-ai-agent" element={<ForgeryDetectorAIAgent />} />
        <Route path="/risk-profiling-engine-agent" element={<RiskProfilingEngineAgent />} />
              <Route path="/legacy-extractor-ai-agent" element={<LegacyExtractorAIAgent />} />
        <Route path="/oral-history-transcriber-agent" element={<OralHistoryTranscriberAgent />} />
        <Route path="/case-archiver-bot-agent" element={<CaseArchiverBotAgent />} />
        <Route path="/tac-knowledge-grapher-agent" element={<TacKnowledgeGrapherAgent />} />
        <Route path="/sop-generation-ai-agent" element={<SOPGenerationAIAgent />} />
        <Route path="/interrogation-pattern-bot-agent" element={<InterrogationPatternBotAgent />} />
        <Route path="/evidence-handling-ai-agent" element={<EvidenceHandlingAIAgent />} />
        <Route path="/wisdom-transfer-bot-agent" element={<WisdomTransferBotAgent />} />
        <Route path="/historical-trends-analyzer-agent" element={<HistoricalTrendsAnalyzerAgent />} />
              <Route path="/cag-audit-predictor-ai-agent" element={<CAGAuditPredictorAIAgent />} />
        <Route path="/internal-audit-automation-bot-agent" element={<InternalAuditAutomationBotAgent />} />
        <Route path="/fraud-triangle-analyzer-agent" element={<FraudTriangleAnalyzerAgent />} />
        <Route path="/ghost-vendor-audit-bot-agent" element={<GhostVendorAuditBotAgent />} />
        <Route path="/duplicate-invoice-scanner-agent" element={<DuplicateInvoiceScannerAgent />} />
        <Route path="/payroll-fraud-auditor-agent" element={<PayrollFraudAuditorAgent />} />
        <Route path="/petty-cash-reconciliation-ai-agent" element={<PettyCashReconciliationAIAgent />} />
        <Route path="/tender-cartel-audit-ai-agent" element={<TenderCartelAuditAIAgent />} />
        <Route path="/procurement-price-benchmarker-agent" element={<ProcurementPriceBenchmarkerAgent />} />
        <Route path="/ss-fund-encrypted-auditor-agent" element={<SSFundEncryptedAuditorAgent />} />
        <Route path="/grant-utilization-auditor-agent" element={<GrantUtilizationAuditorAgent />} />
        <Route path="/fund-diversion-detector-ai-agent" element={<FundDiversionDetectorAIAgent />} />
        <Route path="/taxation-tds-gst-audit-bot-agent" element={<TaxationTDSGSTAuditBotAgent />} />
        <Route path="/asset-depreciation-auditor-agent" element={<AssetDepreciationAuditorAgent />} />
        <Route path="/inventory-shrinkage-audit-ai-agent" element={<InventoryShrinkageAuditAIAgent />} />
        <Route path="/station-level-audit-bot-agent" element={<StationLevelAuditBotAgent />} />
        <Route path="/headquarters-audit-sweeper-agent" element={<HeadquartersAuditSweeperAgent />} />
        <Route path="/treasury-discrepancy-finder-agent" element={<TreasuryDiscrepancyFinderAgent />} />
        <Route path="/bank-reconciliation-ai-agent" element={<BankReconciliationAIAgent />} />
        <Route path="/digital-signature-validator-agent" element={<DigitalSignatureValidatorAgent />} />
        <Route path="/biometric-audit-trail-ai-agent" element={<BiometricAuditTrailAIAgent />} />
        <Route path="/blockchain-ledger-auditor-agent" element={<BlockchainLedgerAuditorAgent />} />
        <Route path="/zero-trust-access-auditor-agent" element={<ZeroTrustAccessAuditorAgent />} />
        <Route path="/audit-query-auto-responder-agent" element={<AuditQueryAutoResponderAgent />} />
        <Route path="/compliance-deviation-alerter-agent" element={<ComplianceDeviationAlerterAgent />} />
        <Route path="/sop-breach-audit-ai-agent" element={<SOPBreachAuditAIAgent />} />
        <Route path="/medical-claim-fraud-auditor-agent" element={<MedicalClaimFraudAuditorAgent />} />
        <Route path="/ta-da-travel-audit-bot-agent" element={<TADATravelAuditBotAgent />} />
        <Route path="/fuel-log-anomaly-detector-agent" element={<FuelLogAnomalyDetectorAgent />} />
        <Route path="/logistics-shipping-auditor-agent" element={<LogisticsShippingAuditorAgent />} />
        <Route path="/weaponry-stock-audit-ai-agent" element={<WeaponryStockAuditAIAgent />} />
        <Route path="/ammunition-discrepancy-bot-agent" element={<AmmunitionDiscrepancyBotAgent />} />
        <Route path="/riot-gear-inventory-auditor-agent" element={<RiotGearInventoryAuditorAgent />} />
        <Route path="/confiscated-asset-audit-ai-agent" element={<ConfiscatedAssetAuditAIAgent />} />
        <Route path="/seized-cash-vault-auditor-agent" element={<SeizedCashVaultAuditorAgent />} />
        <Route path="/narcotics-seizure-audit-bot-agent" element={<NarcoticsSeizureAuditBotAgent />} />
        <Route path="/forensic-lab-audit-ai-agent" element={<ForensicLabAuditAIAgent />} />
        <Route path="/cyber-cell-capex-auditor-agent" element={<CyberCellCapExAuditorAgent />} />
        <Route path="/it-hardware-lifespan-audit-agent" element={<ITHardwareLifespanAuditAgent />} />
        <Route path="/software-license-usage-audit-agent" element={<SoftwareLicenseUsageAuditAgent />} />
        <Route path="/cloud-server-billing-auditor-agent" element={<CloudServerBillingAuditorAgent />} />
        <Route path="/smart-city-cctv-audit-ai-agent" element={<SmartCityCCTVAuditAIAgent />} />
        <Route path="/drone-flight-log-auditor-agent" element={<DroneFlightLogAuditorAgent />} />
        <Route path="/marine-fuel-audit-bot-agent" element={<MarineFuelAuditBotAgent />} />
        <Route path="/aviation-maintenance-auditor-agent" element={<AviationMaintenanceAuditorAgent />} />
        <Route path="/k9-unit-expense-audit-ai-agent" element={<K9UnitExpenseAuditAIAgent />} />
        <Route path="/welfare-fund-audit-bot-agent" element={<WelfareFundAuditBotAgent />} />
        <Route path="/hospital-pharmacy-auditor-agent" element={<HospitalPharmacyAuditorAgent />} />
        <Route path="/canteen-sales-audit-ai-agent" element={<CanteenSalesAuditAIAgent />} />
        <Route path="/guest-house-revenue-audit-agent" element={<GuestHouseRevenueAuditAgent />} />
        <Route path="/event-security-billing-audit-agent" element={<EventSecurityBillingAuditAgent />} />
        <Route path="/traffic-fine-collection-audit-agent" element={<TrafficFineCollectionAuditAgent />} />
        <Route path="/lok-adalat-settlement-audit-agent" element={<LokAdalatSettlementAuditAgent />} />
        <Route path="/vendor-sla-breach-auditor-agent" element={<VendorSLABreachAuditorAgent />} />
        <Route path="/penalty-deduction-audit-ai-agent" element={<PenaltyDeductionAuditAIAgent />} />
        <Route path="/insurance-claim-audit-bot-agent" element={<InsuranceClaimAuditBotAgent />} />
        <Route path="/construction-capex-auditor-agent" element={<ConstructionCapExAuditorAgent />} />
        <Route path="/housing-maintenance-audit-agent" element={<HousingMaintenanceAuditAgent />} />
        <Route path="/green-energy-roi-auditor-agent" element={<GreenEnergyROIAuditorAgent />} />
              <Route path="/internal-audit-planning-ai-agent" element={<InternalAuditPlanningAIAgent />} />
        <Route path="/audit-workflow-manager-ai-agent" element={<AuditWorkflowManagerAIAgent />} />
        <Route path="/audit-scheduling-ai-agent" element={<AuditSchedulingAIAgent />} />
        <Route path="/audit-findings-ai-agent" element={<AuditFindingsAIAgent />} />
        <Route path="/corrective-action-tracker-ai-agent" element={<CorrectiveActionTrackerAIAgent />} />
        <Route path="/audit-report-generator-ai-agent" element={<AuditReportGeneratorAIAgent />} />
        <Route path="/audit-analytics-ai-agent" element={<AuditAnalyticsAIAgent />} />
        <Route path="/executive-audit-dashboard-ai-agent" element={<ExecutiveAuditDashboardAIAgent />} />
        <Route path="/internal-control-assessment-ai-agent" element={<InternalControlAssessmentAIAgent />} />
        <Route path="/financial-audit-ai-agent" element={<FinancialAuditAIAgent />} />
        <Route path="/procurement-audit-ai-agent" element={<ProcurementAuditAIAgent />} />
        <Route path="/inventory-audit-ai-agent" element={<InventoryAuditAIAgent />} />
        <Route path="/data-integrity-audit-ai-agent" element={<DataIntegrityAuditAIAgent />} />
        <Route path="/predictive-audit-ai-agent" element={<PredictiveAuditAIAgent />} />
        <Route path="/audit-kpi-dashboard-ai-agent" element={<AuditKPIDashboardAIAgent />} />
        <Route path="/fraud-detection-ai-agent" element={<FraudDetectionAIAgent />} />
        <Route path="/station-audit-expert-ai-agent" element={<StationAuditExpertAIAgent />} />
        <Route path="/asset-verification-ai-agent" element={<AssetVerificationAIAgent />} />
        <Route path="/compliance-checker-ai-agent" element={<ComplianceCheckerAIAgent />} />
        <Route path="/disciplinary-auditor-ai-agent" element={<DisciplinaryAuditorAIAgent />} />
        <Route path="/cyber-forensics-auditor-ai-agent" element={<CyberForensicsAuditorAIAgent />} />
        <Route path="/risk-management-ai-agent" element={<RiskManagementAIAgent />} />
        <Route path="/armoury-inspector-ai-agent" element={<ArmouryInspectorAIAgent />} />
        <Route path="/legal-audit-bot-ai-agent" element={<LegalAuditBotAIAgent />} />
        <Route path="/evidence-chain-auditor-ai-agent" element={<EvidenceChainAuditorAIAgent />} />
              <Route path="/document-classification-ai-agent" element={<DocumentClassificationAIAgent />} />
        <Route path="/smart-ocr-handwriting-recognition-ai-agent" element={<SmartOCRHandwritingRecognitionAIAgent />} />
        <Route path="/intelligent-document-indexing-ai-agent" element={<IntelligentDocumentIndexingAIAgent />} />
        <Route path="/digital-file-organizer-ai-agent" element={<DigitalFileOrganizerAIAgent />} />
        <Route path="/document-approval-workflow-ai-agent" element={<DocumentApprovalWorkflowAIAgent />} />
        <Route path="/document-access-control-ai-agent" element={<DocumentAccessControlAIAgent />} />
        <Route path="/document-lifecycle-management-ai-agent" element={<DocumentLifecycleManagementAIAgent />} />
        <Route path="/record-archival-ai-agent" element={<RecordArchivalAIAgent />} />
        <Route path="/archive-retrieval-ai-agent" element={<ArchiveRetrievalAIAgent />} />
        <Route path="/duplicate-document-detection-ai-agent" element={<DuplicateDocumentDetectionAIAgent />} />
        <Route path="/digital-signature-verification-ai-agent" element={<DigitalSignatureVerificationAIAgent />} />
        <Route path="/chain-of-custody-tracker-ai-agent" element={<ChainOfCustodyTrackerAIAgent />} />
        <Route path="/court-document-management-ai-agent" element={<CourtDocumentManagementAIAgent />} />
        <Route path="/data-loss-prevention-ai-agent" element={<DataLossPreventionAIAgent />} />
        <Route path="/tamper-detection-ai-agent" element={<TamperDetectionAIAgent />} />
        <Route path="/ai-document-chat-assistant-agent" element={<AIDocumentChatAssistantAgent />} />
        <Route path="/knowledge-base-ai-agent" element={<KnowledgeBaseAIAgent />} />
        <Route path="/document-analytics-ai-agent" element={<DocumentAnalyticsAIAgent />} />
        <Route path="/executive-document-dashboard-ai-agent" element={<ExecutiveDocumentDashboardAIAgent />} />
        <Route path="/document-kpi-dashboard-ai-agent" element={<DocumentKPIDashboardAIAgent />} />
        <Route path="/fir-digitization-expert-ai-agent" element={<FIRDigitizationExpertAIAgent />} />
        <Route path="/case-file-summarization-ai-agent" element={<CaseFileSummarizationAIAgent />} />
        <Route path="/confidential-vault-guardian-ai-agent" element={<ConfidentialVaultGuardianAIAgent />} />
        <Route path="/semantic-search-assistant-ai-agent" element={<SemanticSearchAssistantAIAgent />} />
        <Route path="/old-records-restoration-ai-agent" element={<OldRecordsRestorationAIAgent />} />
        <Route path="/forensic-document-analyst-ai-agent" element={<ForensicDocumentAnalystAIAgent />} />
        <Route path="/multi-lingual-translator-ai-agent" element={<MultiLingualTranslatorAIAgent />} />
        <Route path="/document-redaction-bot-ai-agent" element={<DocumentRedactionBotAIAgent />} />
        <Route path="/cross-reference-engine-ai-agent" element={<CrossReferenceEngineAIAgent />} />
        <Route path="/legal-act-cross-checker-ai-agent" element={<LegalActCrossCheckerAIAgent />} />
        <Route path="/evidence-integrity-validator-ai-agent" element={<EvidenceIntegrityValidatorAIAgent />} />
              <Route path="/police-hr-domain-expert-ai-agent" element={<PoliceHRDomainExpertAIAgent />} />
        <Route path="/officer-recruitment-expert-ai-agent" element={<OfficerRecruitmentExpertAIAgent />} />
        <Route path="/duty-leave-expert-ai-agent" element={<DutyLeaveExpertAIAgent />} />
        <Route path="/payroll-allowances-expert-ai-agent" element={<PayrollAllowancesExpertAIAgent />} />
        <Route path="/performance-medals-expert-ai-agent" element={<PerformanceMedalsExpertAIAgent />} />
        <Route path="/police-training-expert-ai-agent" element={<PoliceTrainingExpertAIAgent />} />
        <Route path="/force-engagement-expert-ai-agent" element={<ForceEngagementExpertAIAgent />} />
        <Route path="/police-act-compliance-expert-ai-agent" element={<PoliceActComplianceExpertAIAgent />} />
        <Route path="/armoury-management-ai-agent" element={<ArmouryManagementAIAgent />} />
        <Route path="/mental-health-stress-ai-agent" element={<MentalHealthStressAIAgent />} />
        <Route path="/physical-fitness-tracker-ai-agent" element={<PhysicalFitnessTrackerAIAgent />} />
        <Route path="/grievance-redressal-ai-agent" element={<GrievanceRedressalAIAgent />} />
        <Route path="/smart-shift-optimization-ai-agent" element={<SmartShiftOptimizationAIAgent />} />
        <Route path="/fleet-fuel-management-ai-agent" element={<FleetFuelManagementAIAgent />} />
        <Route path="/k9-unit-management-ai-agent" element={<K9UnitManagementAIAgent />} />
        <Route path="/court-summon-legal-sync-ai-agent" element={<CourtSummonLegalSyncAIAgent />} />
        <Route path="/cyber-security-access-ai-agent" element={<CyberSecurityAccessAIAgent />} />
        <Route path="/disciplinary-action-tracker-ai-agent" element={<DisciplinaryActionTrackerAIAgent />} />
        <Route path="/pension-gratuity-calculator-ai-agent" element={<PensionGratuityCalculatorAIAgent />} />
        <Route path="/resettlement-veteran-support-ai-agent" element={<ResettlementVeteranSupportAIAgent />} />
              <Route path="/swarm-intelligence-coordinator-ai-agent" element={<SwarmIntelligenceCoordinatorAIAgent />} />
        <Route path="/cross-department-orchestrator-ai-agent" element={<CrossDepartmentOrchestratorAIAgent />} />
        <Route path="/dynamic-resource-allocator-ai-agent" element={<DynamicResourceAllocatorAIAgent />} />
        <Route path="/conflict-resolution-agent-ai-agent" element={<ConflictResolutionAgentAIAgent />} />
        <Route path="/task-delegation-master-ai-agent" element={<TaskDelegationMasterAIAgent />} />
        <Route path="/inter-agency-protocol-ai-agent" element={<InterAgencyProtocolAIAgent />} />
        <Route path="/load-balancing-ai-agent" element={<LoadBalancingAIAgent />} />
        <Route path="/agent-health-monitor-ai-agent" element={<AgentHealthMonitorAIAgent />} />
        <Route path="/decentralized-command-ai-agent" element={<DecentralizedCommandAIAgent />} />
        <Route path="/intelligence-fusion-center-ai-agent" element={<IntelligenceFusionCenterAIAgent />} />
        <Route path="/human-in-the-loop-ai-agent" element={<HumanInTheLoopAIAgent />} />
        <Route path="/security-policy-ai-agent" element={<SecurityPolicyAIAgent />} />
        <Route path="/integration-manager-ai-agent" element={<IntegrationManagerAIAgent />} />
        <Route path="/risk-prediction-ai-agent" element={<RiskPredictionAIAgent />} />
        <Route path="/anomaly-detection-ai-agent" element={<AnomalyDetectionAIAgent />} />
        <Route path="/executive-command-dashboard-ai-agent" element={<ExecutiveCommandDashboardAIAgent />} />
        <Route path="/audit-trail-ai-agent" element={<AuditTrailAIAgent />} />
        <Route path="/entity-resolution-ai-agent" element={<EntityResolutionAIAgent />} />
        <Route path="/entity-extraction-ai-agent" element={<EntityExtractionAIAgent />} />
        <Route path="/semantic-entity-linking-ai-agent" element={<SemanticEntityLinkingAIAgent />} />
        <Route path="/relationship-discovery-ai-agent" element={<RelationshipDiscoveryAIAgent />} />
        <Route path="/multi-hop-relationship-explorer-ai-agent" element={<MultiHopRelationshipExplorerAIAgent />} />
        <Route path="/graph-embedding-ai-agent" element={<GraphEmbeddingAIAgent />} />
        <Route path="/knowledge-graph-builder-ai-agent" element={<KnowledgeGraphBuilderAIAgent />} />
        <Route path="/ontology-management-ai-agent" element={<OntologyManagementAIAgent />} />
        <Route path="/knowledge-base-manager-ai-agent" element={<KnowledgeBaseManagerAIAgent />} />
        <Route path="/criminal-network-analyzer-ai-agent" element={<CriminalNetworkAnalyzerAIAgent />} />
        <Route path="/criminal-link-prediction-ai-agent" element={<CriminalLinkPredictionAIAgent />} />
        <Route path="/association-rule-mining-ai-agent" element={<AssociationRuleMiningAIAgent />} />
        <Route path="/community-detection-ai-agent" element={<CommunityDetectionAIAgent />} />
        <Route path="/network-centrality-analyzer-ai-agent" element={<NetworkCentralityAnalyzerAIAgent />} />
        <Route path="/influence-analysis-ai-agent" element={<InfluenceAnalysisAIAgent />} />
        <Route path="/unknown-entity-discovery-ai-agent" element={<UnknownEntityDiscoveryAIAgent />} />
        <Route path="/suspicious-cluster-detection-ai-agent" element={<SuspiciousClusterDetectionAIAgent />} />
        <Route path="/hidden-pattern-discovery-ai-agent" element={<HiddenPatternDiscoveryAIAgent />} />
        <Route path="/graph-pattern-matching-ai-agent" element={<GraphPatternMatchingAIAgent />} />
        <Route path="/graph-similarity-ai-agent" element={<GraphSimilarityAIAgent />} />
        <Route path="/identity-resolution-ai-agent" element={<IdentityResolutionAIAgent />} />
        <Route path="/cross-database-entity-matching-ai-agent" element={<CrossDatabaseEntityMatchingAIAgent />} />
        <Route path="/multi-source-data-fusion-ai-agent" element={<MultiSourceDataFusionAIAgent />} />
        <Route path="/intelligence-fusion-ai-agent" element={<IntelligenceFusionAIAgent />} />
        <Route path="/event-correlation-ai-agent" element={<EventCorrelationAIAgent />} />
        <Route path="/timeline-correlation-ai-agent" element={<TimelineCorrelationAIAgent />} />
        <Route path="/behavioral-pattern-analysis-ai-agent" element={<BehavioralPatternAnalysisAIAgent />} />
        <Route path="/criminal-profile-builder-ai-agent" element={<CriminalProfileBuilderAIAgent />} />
        <Route path="/organization-relationship-mapper-ai-agent" element={<OrganizationRelationshipMapperAIAgent />} />
        <Route path="/social-network-intelligence-ai-agent" element={<SocialNetworkIntelligenceAIAgent />} />
        <Route path="/communication-network-intelligence-ai-agent" element={<CommunicationNetworkIntelligenceAIAgent />} />
        <Route path="/financial-network-intelligence-ai-agent" element={<FinancialNetworkIntelligenceAIAgent />} />
        <Route path="/location-intelligence-ai-agent" element={<LocationIntelligenceAIAgent />} />
        <Route path="/mobility-pattern-analysis-ai-agent" element={<MobilityPatternAnalysisAIAgent />} />
        <Route path="/device-correlation-ai-agent" element={<DeviceCorrelationAIAgent />} />
        <Route path="/digital-identity-correlation-ai-agent" element={<DigitalIdentityCorrelationAIAgent />} />
        <Route path="/risk-scoring-ai-agent" element={<RiskScoringAIAgent />} />
        <Route path="/threat-prediction-ai-agent" element={<ThreatPredictionAIAgent />} />
        <Route path="/criminal-activity-prediction-ai-agent" element={<CriminalActivityPredictionAIAgent />} />
        <Route path="/network-evolution-prediction-ai-agent" element={<NetworkEvolutionPredictionAIAgent />} />
        <Route path="/ai-graph-search-assistant-agent" element={<AIGraphSearchAssistantAgent />} />
        <Route path="/natural-language-graph-query-ai-agent" element={<NaturalLanguageGraphQueryAIAgent />} />
        <Route path="/graph-recommendation-engine-ai-agent" element={<GraphRecommendationEngineAIAgent />} />
        <Route path="/graph-visualization-ai-agent" element={<GraphVisualizationAIAgent />} />
        <Route path="/interactive-link-explorer-ai-agent" element={<InteractiveLinkExplorerAIAgent />} />
        <Route path="/explainable-ai-for-link-prediction-agent" element={<ExplainableAIForLinkPredictionAgent />} />
        <Route path="/graph-analytics-ai-agent" element={<GraphAnalyticsAIAgent />} />
        <Route path="/knowledge-graph-quality-validator-ai-agent" element={<KnowledgeGraphQualityValidatorAIAgent />} />
        <Route path="/graph-consistency-checker-ai-agent" element={<GraphConsistencyCheckerAIAgent />} />
        <Route path="/real-time-knowledge-graph-update-ai-agent" element={<RealTimeKnowledgeGraphUpdateAIAgent />} />
        <Route path="/streaming-data-correlation-ai-agent" element={<StreamingDataCorrelationAIAgent />} />
        <Route path="/graph-version-control-ai-agent" element={<GraphVersionControlAIAgent />} />
        <Route path="/knowledge-graph-governance-ai-agent" element={<KnowledgeGraphGovernanceAIAgent />} />
        <Route path="/metadata-intelligence-ai-agent" element={<MetadataIntelligenceAIAgent />} />
        <Route path="/data-lineage-ai-agent" element={<DataLineageAIAgent />} />
        <Route path="/ai-investigation-copilot-agent" element={<AIInvestigationCopilotAgent />} />
        <Route path="/case-intelligence-ai-agent" element={<CaseIntelligenceAIAgent />} />
        <Route path="/decision-support-ai-agent" element={<DecisionSupportAIAgent />} />
        <Route path="/strategic-intelligence-ai-agent" element={<StrategicIntelligenceAIAgent />} />
        <Route path="/executive-knowledge-graph-dashboard-ai-agent" element={<ExecutiveKnowledgeGraphDashboardAIAgent />} />
        <Route path="/riot-prediction-ai-agent" element={<RiotPredictionAIAgent />} />
        <Route path="/force-deployment-scorer-agent" element={<ForceDeploymentScorerAgent />} />
        <Route path="/real-time-threat-assessor-agent" element={<RealTimeThreatAssessorAgent />} />
        <Route path="/public-sentiment-analyst-ai-agent" element={<PublicSentimentAnalystAIAgent />} />
        <Route path="/event-security-planner-ai-agent" element={<EventSecurityPlannerAIAgent />} />
        <Route path="/tactical-evacuation-agent-agent" element={<TacticalEvacuationAgentAgent />} />
        <Route path="/emergency-triage-coordinator-agent" element={<EmergencyTriageCoordinatorAgent />} />
        <Route path="/resource-optimization-ai-agent" element={<ResourceOptimizationAIAgent />} />
        <Route path="/weather-disaster-impact-ai-agent" element={<WeatherDisasterImpactAIAgent />} />
        <Route path="/vip-route-security-ai-agent" element={<VIPRouteSecurityAIAgent />} />
        <Route path="/crowd-density-analyzer-ai-agent" element={<CrowdDensityAnalyzerAIAgent />} />
        <Route path="/flash-mob-predictor-ai-agent" element={<FlashMobPredictorAIAgent />} />
        <Route path="/election-violence-heatmapper-agent" element={<ElectionViolenceHeatmapperAgent />} />
        <Route path="/festival-crowd-surge-forecaster-agent" element={<FestivalCrowdSurgeForecasterAgent />} />
        <Route path="/optimal-station-staffing-ai-agent" element={<OptimalStationStaffingAIAgent />} />
        <Route path="/anti-riot-gear-allocator-agent" element={<AntiRiotGearAllocatorAgent />} />
        <Route path="/rapid-action-force-dispatcher-agent" element={<RapidActionForceDispatcherAgent />} />
        <Route path="/beat-patrol-routing-optimizer-agent" element={<BeatPatrolRoutingOptimizerAgent />} />
        <Route path="/emergency-call-prioritization-agent-agent" element={<EmergencyCallPrioritizationAgentAgent />} />
        <Route path="/active-shooter-triangulator-ai-agent" element={<ActiveShooterTriangulatorAIAgent />} />
        <Route path="/hostage-situation-modeler-agent" element={<HostageSituationModelerAgent />} />
        <Route path="/simultaneous-attack-correlator-agent" element={<SimultaneousAttackCorrelatorAgent />} />
        <Route path="/vvip-route-vulnerability-assessor-agent" element={<VVIPRouteVulnerabilityAssessorAgent />} />
        <Route path="/convoy-speed-optimizer-agent" element={<ConvoySpeedOptimizerAgent />} />
        <Route path="/stadium-crowd-dynamics-modeler-agent" element={<StadiumCrowdDynamicsModelerAgent />} />
        <Route path="/sniper-over-watch-positioning-ai-agent" element={<SniperOverWatchPositioningAIAgent />} />
        <Route path="/flood-evacuation-routing-agent-agent" element={<FloodEvacuationRoutingAgentAgent />} />
        <Route path="/earthquake-triage-ai-agent" element={<EarthquakeTriageAIAgent />} />
        <Route path="/hospital-bed-sync-coordinator-agent" element={<HospitalBedSyncCoordinatorAgent />} />
        <Route path="/relief-material-supply-chain-ai-agent" element={<ReliefMaterialSupplyChainAIAgent />} />
        <Route path="/multi-variable-threat-scorer-agent" element={<MultiVariableThreatScorerAgent />} />
        <Route path="/sentiment-shift-trigger-ai-agent" element={<SentimentShiftTriggerAIAgent />} />
        <Route path="/route-vulnerability-indexer-agent" element={<RouteVulnerabilityIndexerAgent />} />
        <Route path="/optimal-pathfinding-ai-agent" element={<OptimalPathfindingAIAgent />} />
        <Route path="/automatic-escalation-protocol-ai-agent" element={<AutomaticEscalationProtocolAIAgent />} />
        <Route path="/drone-recon-deployment-ai-agent" element={<DroneReconDeploymentAIAgent />} />
        <Route path="/gunfire-acoustic-triangulator-agent" element={<GunfireAcousticTriangulatorAgent />} />
        <Route path="/predictive-force-exhaustion-ai-agent" element={<PredictiveForceExhaustionAIAgent />} />
        <Route path="/legal-use-of-force-prompter-agent" element={<LegalUseOfForcePrompterAgent />} />
        <Route path="/dgp-decision-support-matrix-ai-agent" element={<DGPDecisionSupportMatrixAIAgent />} />
        <Route path="/live-threat-heatmap-generator-agent" element={<LiveThreatHeatmapGeneratorAgent />} />
        <Route path="/force-readiness-board-ai-agent" element={<ForceReadinessBoardAIAgent />} />
        <Route path="/vvip-convoy-tracker-ai-agent" element={<VVIPConvoyTrackerAIAgent />} />
        <Route path="/disaster-command-board-ai-agent" element={<DisasterCommandBoardAIAgent />} />
        <Route path="/pre-event-risk-assessor-agent" element={<PreEventRiskAssessorAgent />} />
        <Route path="/riot-post-mortem-analyst-agent" element={<RiotPostMortemAnalystAgent />} />
        <Route path="/force-deployment-efficiency-ai-agent" element={<ForceDeploymentEfficiencyAIAgent />} />
        <Route path="/vvip-security-auditor-agent" element={<VVIPSecurityAuditorAgent />} />
        <Route path="/emergency-response-time-profiler-agent" element={<EmergencyResponseTimeProfilerAgent />} />
        <Route path="/resource-depletion-forecaster-agent" element={<ResourceDepletionForecasterAgent />} />
        <Route path="/rank-based-override-validator-agent" element={<RankBasedOverrideValidatorAgent />} />
        <Route path="/encrypted-tactical-comm-router-agent" element={<EncryptedTacticalCommRouterAgent />} />
        <Route path="/decision-audit-trail-analyzer-agent" element={<DecisionAuditTrailAnalyzerAgent />} />
        <Route path="/anti-tamper-sensor-feed-ai-agent" element={<AntiTamperSensorFeedAIAgent />} />
        <Route path="/zero-trust-api-gateway-monitor-agent" element={<ZeroTrustAPIGatewayMonitorAgent />} />
        <Route path="/offline-fail-safe-mode-trigger-agent" element={<OfflineFailSafeModeTriggerAgent />} />
        <Route path="/holographic-tactical-table-manager-agent" element={<HolographicTacticalTableManagerAgent />} />
        <Route path="/neural-link-command-parser-agent" element={<NeuralLinkCommandParserAgent />} />
        <Route path="/autonomous-drone-coordinator-agent" element={<AutonomousDroneCoordinatorAgent />} />
        <Route path="/pre-crime-legal-arbitrator-agent" element={<PreCrimeLegalArbitratorAgent />} />
        <Route path="/3d-city-simulator-ai-agent" element={<ThreeDCitySimulatorAIAgent />} />
        <Route path="/traffic-grid-modeler-ai-agent" element={<TrafficGridModelerAIAgent />} />
        <Route path="/virtual-station-load-tester-agent" element={<VirtualStationLoadTesterAgent />} />
        <Route path="/crowd-physics-simulator-agent" element={<CrowdPhysicsSimulatorAgent />} />
        <Route path="/disaster-impact-modeler-ai-agent" element={<DisasterImpactModelerAIAgent />} />
        <Route path="/vvip-route-simulation-agent-agent" element={<VVIPRouteSimulationAgentAgent />} />
        <Route path="/cyber-twin-vulnerability-tester-agent" element={<CyberTwinVulnerabilityTesterAgent />} />
        <Route path="/emergency-response-optimizer-agent" element={<EmergencyResponseOptimizerAgent />} />
        <Route path="/riot-control-simulator-ai-agent" element={<RiotControlSimulatorAIAgent />} />
        <Route path="/spatial-analytics-expert-ai-agent" element={<SpatialAnalyticsExpertAIAgent />} />
        <Route path="/tactical-breach-planner-ai-agent" element={<TacticalBreachPlannerAIAgent />} />
        <Route path="/flood-dynamics-simulator-ai-agent" element={<FloodDynamicsSimulatorAIAgent />} />
        <Route path="/earthquake-structural-integrity-ai-agent" element={<EarthquakeStructuralIntegrityAIAgent />} />
        <Route path="/drone-swarm-sandbox-modeler-agent" element={<DroneSwarmSandboxModelerAgent />} />
        <Route path="/autonomous-vehicle-traffic-ai-agent" element={<AutonomousVehicleTrafficAIAgent />} />
        <Route path="/sniper-line-of-sight-calculator-agent" element={<SniperLineOfSightCalculatorAgent />} />
        <Route path="/blast-radius-physics-engine-agent" element={<BlastRadiusPhysicsEngineAgent />} />
        <Route path="/acoustic-reverberation-modeler-agent" element={<AcousticReverberationModelerAgent />} />
        <Route path="/tear-gas-dispersion-physics-ai-agent" element={<TearGasDispersionPhysicsAIAgent />} />
        <Route path="/virtual-vip-decoy-simulator-agent" element={<VirtualVIPDecoySimulatorAgent />} />
        <Route path="/escape-route-viability-tester-agent" element={<EscapeRouteViabilityTesterAgent />} />
        <Route path="/cyber-attack-tabletop-exerciser-agent" element={<CyberAttackTabletopExerciserAgent />} />
        <Route path="/subterranean-network-modeler-agent" element={<SubterraneanNetworkModelerAgent />} />
        <Route path="/hospital-surge-capacity-simulator-agent" element={<HospitalSurgeCapacitySimulatorAgent />} />
        <Route path="/emergency-call-center-load-tester-agent" element={<EmergencyCallCenterLoadTesterAgent />} />
        <Route path="/evacuation-bottleneck-analyzer-agent" element={<EvacuationBottleneckAnalyzerAgent />} />
        <Route path="/cell-block-capacity-predictor-agent" element={<CellBlockCapacityPredictorAgent />} />
        <Route path="/smart-city-sensor-virtualizer-agent" element={<SmartCitySensorVirtualizerAgent />} />
        <Route path="/green-corridor-timing-simulator-agent" element={<GreenCorridorTimingSimulatorAgent />} />
        <Route path="/stadium-stampede-modeler-agent" element={<StadiumStampedeModelerAgent />} />
        <Route path="/festival-crowd-flow-predictor-agent" element={<FestivalCrowdFlowPredictorAgent />} />
        <Route path="/flash-mob-convergence-ai-agent" element={<FlashMobConvergenceAIAgent />} />
        <Route path="/riot-gear-efficacy-tester-agent" element={<RiotGearEfficacyTesterAgent />} />
        <Route path="/active-shooter-vr-scenario-ai-agent" element={<ActiveShooterVRScenarioAIAgent />} />
        <Route path="/hostage-negotiation-vr-trainer-agent" element={<HostageNegotiationVRTrainerAgent />} />
        <Route path="/airborne-toxin-drift-modeler-agent" element={<AirborneToxinDriftModelerAgent />} />
        <Route path="/radio-frequency-shadow-mapper-agent" element={<RadioFrequencyShadowMapperAgent />} />
        <Route path="/cctv-blind-spot-identifier-ai-agent" element={<CCTVBlindSpotIdentifierAIAgent />} />
        <Route path="/telecom-network-overload-modeler-agent" element={<TelecomNetworkOverloadModelerAgent />} />
        <Route path="/power-grid-failure-simulator-agent" element={<PowerGridFailureSimulatorAgent />} />
        <Route path="/virtual-interrogation-room-ai-agent" element={<VirtualInterrogationRoomAIAgent />} />
        <Route path="/evidence-tampering-simulator-agent" element={<EvidenceTamperingSimulatorAgent />} />
        <Route path="/crime-scene-recreation-ai-agent" element={<CrimeSceneRecreationAIAgent />} />
        <Route path="/bullet-trajectory-simulator-agent" element={<BulletTrajectorySimulatorAgent />} />
        <Route path="/high-speed-chase-physics-ai-agent" element={<HighSpeedChasePhysicsAIAgent />} />
        <Route path="/virtual-perimeter-security-ai-agent" element={<VirtualPerimeterSecurityAIAgent />} />
        <Route path="/facial-recognition-load-tester-agent" element={<FacialRecognitionLoadTesterAgent />} />
        <Route path="/border-infiltration-modeler-agent" element={<BorderInfiltrationModelerAgent />} />
        <Route path="/smuggling-route-simulator-ai-agent" element={<SmugglingRouteSimulatorAIAgent />} />
        <Route path="/maritime-port-logistics-twin-agent" element={<MaritimePortLogisticsTwinAgent />} />
        <Route path="/airspace-violation-modeler-ai-agent" element={<AirspaceViolationModelerAIAgent />} />
        <Route path="/weapon-issue-bottleneck-ai-agent" element={<WeaponIssueBottleneckAIAgent />} />
        <Route path="/shift-handover-optimization-ai-agent" element={<ShiftHandoverOptimizationAIAgent />} />
        <Route path="/supply-chain-disruption-twin-agent" element={<SupplyChainDisruptionTwinAgent />} />
        <Route path="/ransomware-blast-radius-ai-agent" element={<RansomwareBlastRadiusAIAgent />} />
        <Route path="/multi-agency-coordination-twin-agent" element={<MultiAgencyCoordinationTwinAgent />} />
        <Route path="/real-time-resource-mirror-ai-agent" element={<RealTimeResourceMirrorAIAgent />} />
        <Route path="/geolocation-spoofing-simulator-agent" element={<GeolocationSpoofingSimulatorAgent />} />
        <Route path="/virtual-commando-trainer-ai-agent" element={<VirtualCommandoTrainerAIAgent />} />
        <Route path="/future-crime-scenario-generator-agent" element={<FutureCrimeScenarioGeneratorAgent />} />
        <Route path="/fir-drafting-assistant-ai-agent" element={<FIRDraftingAssistantAIAgent />} />
        <Route path="/legal-code-matcher-ai-agent" element={<LegalCodeMatcherAIAgent />} />
        <Route path="/charge-sheet-summarizer-agent" element={<ChargeSheetSummarizerAgent />} />
        <Route path="/pre-trial-evidence-scorer-agent" element={<PreTrialEvidenceScorerAgent />} />
        <Route path="/interrogation-insight-ai-agent" element={<InterrogationInsightAIAgent />} />
        <Route path="/cold-case-correlation-bot-agent" element={<ColdCaseCorrelationBotAgent />} />
        <Route path="/witness-testimony-analyzer-agent" element={<WitnessTestimonyAnalyzerAgent />} />
        <Route path="/jurisdiction-mapper-ai-agent" element={<JurisdictionMapperAIAgent />} />
        <Route path="/alibi-verification-agent-agent" element={<AlibiVerificationAgentAgent />} />
        <Route path="/court-precedent-search-ai-agent" element={<CourtPrecedentSearchAIAgent />} />
        <Route path="/bail-risk-assessor-ai-agent" element={<BailRiskAssessorAIAgent />} />
        <Route path="/voice-to-fir-dictation-ai-agent" element={<VoiceToFIRDictationAIAgent />} />
        <Route path="/ipc-bns-section-suggester-agent" element={<IPCBNSSectionSuggesterAgent />} />
        <Route path="/multi-lingual-statement-translator-agent" element={<MultiLingualStatementTranslatorAgent />} />
        <Route path="/suspect-entity-extractor-agent" element={<SuspectEntityExtractorAgent />} />
        <Route path="/timeline-reconstruction-agent-agent" element={<TimelineReconstructionAgentAgent />} />
        <Route path="/testimony-contradiction-detector-agent" element={<TestimonyContradictionDetectorAgent />} />
        <Route path="/historical-judgement-analyzer-agent" element={<HistoricalJudgementAnalyzerAgent />} />
        <Route path="/bail-rejection-predictor-ai-agent" element={<BailRejectionPredictorAIAgent />} />
        <Route path="/prosecution-strategy-prompter-agent" element={<ProsecutionStrategyPrompterAgent />} />
        <Route path="/modus-operandi-profiler-agent" element={<ModusOperandiProfilerAgent />} />
        <Route path="/forensic-report-parser-ai-agent" element={<ForensicReportParserAIAgent />} />
        <Route path="/ballistics-pattern-matcher-agent" element={<BallisticsPatternMatcherAgent />} />
        <Route path="/digital-evidence-timestamp-analyzer-agent" element={<DigitalEvidenceTimestampAnalyzerAgent />} />
        <Route path="/micro-expression-detector-ai-agent" element={<MicroExpressionDetectorAIAgent />} />
        <Route path="/voice-stress-analysis-bot-agent" element={<VoiceStressAnalysisBotAgent />} />
        <Route path="/polygraph-data-interpreter-agent" element={<PolygraphDataInterpreterAgent />} />
        <Route path="/case-solvability-scorer-agent" element={<CaseSolvabilityScorerAgent />} />
        <Route path="/audio-transcription-agent-agent" element={<AudioTranscriptionAgentAgent />} />
        <Route path="/emotion-classification-ai-agent" element={<EmotionClassificationAIAgent />} />
        <Route path="/witness-sentiment-analyzer-agent" element={<WitnessSentimentAnalyzerAgent />} />
        <Route path="/automated-evidence-tagger-agent" element={<AutomatedEvidenceTaggerAgent />} />
        <Route path="/cross-case-similarity-matcher-agent" element={<CrossCaseSimilarityMatcherAgent />} />
        <Route path="/defense-argument-predictor-agent" element={<DefenseArgumentPredictorAgent />} />
        <Route path="/crime-scene-photo-analyzer-agent" element={<CrimeScenePhotoAnalyzerAgent />} />
        <Route path="/missing-persons-correlator-agent" element={<MissingPersonsCorrelatorAgent />} />
        <Route path="/unidentified-body-matcher-ai-agent" element={<UnidentifiedBodyMatcherAIAgent />} />
        <Route path="/bank-statement-fraud-finder-agent" element={<BankStatementFraudFinderAgent />} />
        <Route path="/cyber-footprint-tracer-ai-agent" element={<CyberFootprintTracerAIAgent />} />
        <Route path="/deepfake-audio-detector-agent" element={<DeepfakeAudioDetectorAgent />} />
        <Route path="/threat-letter-authorship-ai-agent" element={<ThreatLetterAuthorshipAIAgent />} />
        <Route path="/handwriting-analysis-assistant-agent" element={<HandwritingAnalysisAssistantAgent />} />
        <Route path="/sketch-to-mugshot-ai-agent" element={<SketchToMugshotAIAgent />} />
        <Route path="/criminal-nickname-resolver-agent" element={<CriminalNicknameResolverAgent />} />
        <Route path="/call-data-record-cdr-summarizer-agent" element={<CallDataRecordCDRSummarizerAgent />} />
        <Route path="/gps-ping-triangulation-ai-agent" element={<GPSPingTriangulationAIAgent />} />
        <Route path="/drone-footage-analyst-ai-agent" element={<DroneFootageAnalystAIAgent />} />
        <Route path="/victim-vulnerability-scorer-agent" element={<VictimVulnerabilityScorerAgent />} />
        <Route path="/parole-violation-predictor-agent" element={<ParoleViolationPredictorAgent />} />
        <Route path="/jailhouse-informant-credibility-ai-agent" element={<JailhouseInformantCredibilityAIAgent />} />
        <Route path="/evidence-chain-of-custody-auditor-agent" element={<EvidenceChainOfCustodyAuditorAgent />} />
        <Route path="/post-mortem-report-interpreter-agent" element={<PostMortemReportInterpreterAgent />} />
        <Route path="/dna-match-probability-calculator-agent" element={<DNAMatchProbabilityCalculatorAgent />} />
        <Route path="/surveillance-video-summarizer-agent" element={<SurveillanceVideoSummarizerAgent />} />
        <Route path="/social-media-confession-scraper-agent" element={<SocialMediaConfessionScraperAgent />} />
        <Route path="/dark-web-credential-searcher-agent" element={<DarkWebCredentialSearcherAgent />} />
        <Route path="/legal-loophole-flagging-ai-agent" element={<LegalLoopholeFlaggingAIAgent />} />
        <Route path="/judge-sentencing-trend-analyzer-agent" element={<JudgeSentencingTrendAnalyzerAgent />} />
        <Route path="/warrant-application-drafter-agent" element={<WarrantApplicationDrafterAgent />} />
        <Route path="/virtual-jury-bias-modeler-agent" element={<VirtualJuryBiasModelerAgent />} />
              <Route path="/beat-patrol-voice-copilot-agent" element={<BeatPatrolVoiceCopilotAgent />} />
        <Route path="/traffic-stops-query-agent-agent" element={<TrafficStopsQueryAgentAgent />} />
        <Route path="/suspect-verification-bot-agent" element={<SuspectVerificationBotAgent />} />
        <Route path="/real-time-translator-ai-agent" element={<RealTimeTranslatorAIAgent />} />
        <Route path="/emergency-sos-trigger-bot-agent" element={<EmergencySOSTriggerBotAgent />} />
        <Route path="/warrant-database-fetcher-agent" element={<WarrantDatabaseFetcherAgent />} />
        <Route path="/vehicle-registration-ai-agent" element={<VehicleRegistrationAIAgent />} />
        <Route path="/mobile-fingerprint-matcher-agent" element={<MobileFingerprintMatcherAgent />} />
        <Route path="/on-scene-evidence-logger-agent" element={<OnSceneEvidenceLoggerAgent />} />
        <Route path="/officer-shift-coordinator-ai-agent" element={<OfficerShiftCoordinatorAIAgent />} />
        <Route path="/mental-health-assessor-bot-agent" element={<MentalHealthAssessorBotAgent />} />
        <Route path="/hands-free-plate-scanner-ai-agent" element={<HandsFreePlateScannerAIAgent />} />
        <Route path="/ar-suspect-profiling-agent-agent" element={<ARSuspectProfilingAgentAgent />} />
        <Route path="/secure-field-chatbot-agent" element={<SecureFieldChatbotAgent />} />
        <Route path="/conversational-roster-ai-agent" element={<ConversationalRosterAIAgent />} />
        <Route path="/gang-territory-intel-bot-agent" element={<GangTerritoryIntelBotAgent />} />
        <Route path="/crime-proximity-alert-ai-agent" element={<CrimeProximityAlertAIAgent />} />
        <Route path="/stolen-vehicle-history-bot-agent" element={<StolenVehicleHistoryBotAgent />} />
        <Route path="/live-interrogation-translator-agent" element={<LiveInterrogationTranslatorAgent />} />
        <Route path="/cross-state-dialect-interpreter-agent" element={<CrossStateDialectInterpreterAgent />} />
        <Route path="/tourist-complaint-copilot-agent" element={<TouristComplaintCopilotAgent />} />
        <Route path="/audio-to-text-transcription-ai-agent" element={<AudioToTextTranscriptionAIAgent />} />
        <Route path="/heart-rate-monitor-sync-bot-agent" element={<HeartRateMonitorSyncBotAgent />} />
        <Route path="/automatic-gun-drawn-alert-ai-agent" element={<AutomaticGunDrawnAlertAIAgent />} />
        <Route path="/dead-zone-gps-tracker-ai-agent" element={<DeadZoneGPSTrackerAIAgent />} />
        <Route path="/backup-triangulation-bot-agent" element={<BackupTriangulationBotAgent />} />
        <Route path="/offline-edge-query-ai-agent" element={<OfflineEdgeQueryAIAgent />} />
        <Route path="/whisper-level-voice-recognizer-agent" element={<WhisperLevelVoiceRecognizerAgent />} />
        <Route path="/environmental-noise-canceler-agent" element={<EnvironmentalNoiseCancelerAgent />} />
        <Route path="/automated-context-gatherer-agent" element={<AutomatedContextGathererAgent />} />
        <Route path="/de-escalation-strategy-bot-agent" element={<DeEscalationStrategyBotAgent />} />
        <Route path="/emotion-detection-assistant-agent" element={<EmotionDetectionAssistantAgent />} />
        <Route path="/real-time-legal-advisor-bot-agent" element={<RealTimeLegalAdvisorBotAgent />} />
        <Route path="/field-note-dictation-ai-agent" element={<FieldNoteDictationAIAgent />} />
        <Route path="/crime-scene-perimeter-ai-agent" element={<CrimeScenePerimeterAIAgent />} />
        <Route path="/witness-statement-logger-agent" element={<WitnessStatementLoggerAgent />} />
        <Route path="/miranda-rights-prompter-ai-agent" element={<MirandaRightsPrompterAIAgent />} />
        <Route path="/traffic-ticket-auto-drafter-agent" element={<TrafficTicketAutoDrafterAgent />} />
        <Route path="/body-cam-sync-assistant-agent" element={<BodyCamSyncAssistantAgent />} />
        <Route path="/drone-launch-coordinator-bot-agent" element={<DroneLaunchCoordinatorBotAgent />} />
        <Route path="/highway-pursuit-nav-ai-agent" element={<HighwayPursuitNavAIAgent />} />
        <Route path="/hostage-situation-whisperer-agent" element={<HostageSituationWhispererAgent />} />
        <Route path="/riot-crowd-size-estimator-agent" element={<RiotCrowdSizeEstimatorAgent />} />
        <Route path="/biometric-face-match-assistant-agent" element={<BiometricFaceMatchAssistantAgent />} />
        <Route path="/fake-id-detector-bot-agent" element={<FakeIDDetectorBotAgent />} />
        <Route path="/substance-abuse-symptom-ai-agent" element={<SubstanceAbuseSymptomAIAgent />} />
        <Route path="/domestic-violence-protocol-bot-agent" element={<DomesticViolenceProtocolBotAgent />} />
        <Route path="/missing-child-alert-bot-agent" element={<MissingChildAlertBotAgent />} />
        <Route path="/amber-alert-broadcaster-ai-agent" element={<AmberAlertBroadcasterAIAgent />} />
        <Route path="/parolee-proximity-warner-agent" element={<ParoleeProximityWarnerAgent />} />
        <Route path="/off-duty-threat-alert-ai-agent" element={<OffDutyThreatAlertAIAgent />} />
        <Route path="/weapon-concealment-detector-agent" element={<WeaponConcealmentDetectorAgent />} />
        <Route path="/suspicious-activity-logger-agent" element={<SuspiciousActivityLoggerAgent />} />
        <Route path="/street-cam-sync-copilot-agent" element={<StreetCamSyncCopilotAgent />} />
        <Route path="/field-evidence-tagger-ai-agent" element={<FieldEvidenceTaggerAIAgent />} />
        <Route path="/first-aid-guidance-bot-agent" element={<FirstAidGuidanceBotAgent />} />
        <Route path="/k9-unit-deployment-assessor-agent" element={<K9UnitDeploymentAssessorAgent />} />
        <Route path="/multi-lingual-miranda-bot-agent" element={<MultiLingualMirandaBotAgent />} />
        <Route path="/digital-evidence-uploader-ai-agent" element={<DigitalEvidenceUploaderAIAgent />} />
        <Route path="/virtual-partner-ai-agent" element={<VirtualPartnerAIAgent />} />
        <Route path="/video-analytics-engine-ai-agent" element={<VideoAnalyticsEngineAIAgent />} />
        <Route path="/audio-forensics-ai-agent" element={<AudioForensicsAIAgent />} />
        <Route path="/geospatial-threat-mapper-agent" element={<GeospatialThreatMapperAgent />} />
        <Route path="/dark-web-scraper-bot-agent" element={<DarkWebScraperBotAgent />} />
        <Route path="/live-cctv-anomaly-detector-agent" element={<LiveCCTVAnomalyDetectorAgent />} />
        <Route path="/facial-recognition-ai-agent" element={<FacialRecognitionAIAgent />} />
        <Route path="/gait-posture-analyzer-agent" element={<GaitPostureAnalyzerAgent />} />
        <Route path="/lip-reading-ai-agent" element={<LipReadingAIAgent />} />
        <Route path="/deepfake-video-detector-agent" element={<DeepfakeVideoDetectorAgent />} />
        <Route path="/license-plate-recognition-ai-agent" element={<LicensePlateRecognitionAIAgent />} />
        <Route path="/crowd-sentiment-analyzer-visual-agent" element={<CrowdSentimentAnalyzerVisualAgent />} />
        <Route path="/social-media-image-scraper-agent" element={<SocialMediaImageScraperAgent />} />
        <Route path="/voice-print-matching-agent-agent" element={<VoicePrintMatchingAgentAgent />} />
        <Route path="/drone-video-summarizer-agent" element={<DroneVideoSummarizerAgent />} />
        <Route path="/satellite-imagery-correlator-agent" element={<SatelliteImageryCorrelatorAgent />} />
        <Route path="/object-tracking-bot-across-cctvs-agent" element={<ObjectTrackingBotAcrossCCTVsAgent />} />
        <Route path="/weapon-detection-ai-agent" element={<WeaponDetectionAIAgent />} />
        <Route path="/hidden-compartment-identifier-x-ray-ai-agent" element={<HiddenCompartmentIdentifierXRayAIAgent />} />
        <Route path="/traffic-pattern-visualizer-agent" element={<TrafficPatternVisualizerAgent />} />
        <Route path="/abandoned-object-detector-agent" element={<AbandonedObjectDetectorAgent />} />
        <Route path="/crowd-density-estimator-agent" element={<CrowdDensityEstimatorAgent />} />
        <Route path="/thermal-imaging-interpreter-agent" element={<ThermalImagingInterpreterAgent />} />
        <Route path="/infrared-night-vision-enhancer-ai-agent" element={<InfraredNightVisionEnhancerAIAgent />} />
        <Route path="/3d-spatial-reconstruction-bot-agent" element={<AI3DSpatialReconstructionBotAgent />} />
        <Route path="/audio-distress-signal-detector-agent" element={<AudioDistressSignalDetectorAgent />} />
        <Route path="/gunshot-acoustic-triangulator-agent" element={<GunshotAcousticTriangulatorAgent />} />
        <Route path="/glass-break-sensor-ai-agent" element={<GlassBreakSensorAIAgent />} />
        <Route path="/voice-emotion-analyzer-agent" element={<VoiceEmotionAnalyzerAgent />} />
        <Route path="/hate-speech-audio-detector-agent" element={<HateSpeechAudioDetectorAgent />} />
        <Route path="/social-network-graph-modeler-agent" element={<SocialNetworkGraphModelerAgent />} />
        <Route path="/geolocation-spoofing-detector-agent" element={<GeolocationSpoofingDetectorAgent />} />
        <Route path="/crypto-wallet-transaction-tracer-agent" element={<CryptoWalletTransactionTracerAgent />} />
        <Route path="/dark-web-vendor-linker-ai-agent" element={<DarkWebVendorLinkerAIAgent />} />
        <Route path="/illicit-marketplace-scraper-agent" element={<IllicitMarketplaceScraperAgent />} />
        <Route path="/cyber-threat-intelligence-bot-agent" element={<CyberThreatIntelligenceBotAgent />} />
        <Route path="/encrypted-chat-traffic-analyzer-agent" element={<EncryptedChatTrafficAnalyzerAgent />} />
        <Route path="/phishing-domain-detector-agent" element={<PhishingDomainDetectorAgent />} />
        <Route path="/botnet-traffic-analyzer-agent" element={<BotnetTrafficAnalyzerAgent />} />
        <Route path="/open-source-intelligence-osint-bot-agent" element={<OpenSourceIntelligenceOSINTBotAgent />} />
        <Route path="/suspect-route-predictor-agent" element={<SuspectRoutePredictorAgent />} />
        <Route path="/border-infiltration-visualizer-agent" element={<BorderInfiltrationVisualizerAgent />} />
        <Route path="/maritime-smuggling-predictor-agent" element={<MaritimeSmugglingPredictorAgent />} />
        <Route path="/cargo-container-scanner-ai-agent" element={<CargoContainerScannerAIAgent />} />
        <Route path="/fake-currency-pattern-matcher-agent" element={<FakeCurrencyPatternMatcherAgent />} />
        <Route path="/document-forgery-detector-agent" element={<DocumentForgeryDetectorAgent />} />
        <Route path="/signature-verification-ai-agent" element={<SignatureVerificationAIAgent />} />
        <Route path="/biometric-spoofing-detector-agent" element={<BiometricSpoofingDetectorAgent />} />
        <Route path="/multi-camera-sync-ai-agent" element={<MultiCameraSyncAIAgent />} />
        <Route path="/cross-district-video-correlator-agent" element={<CrossDistrictVideoCorrelatorAgent />} />
        <Route path="/news-broadcast-sentiment-bot-agent" element={<NewsBroadcastSentimentBotAgent />} />
        <Route path="/radicalization-content-flagging-ai-agent" element={<RadicalizationContentFlaggingAIAgent />} />
        <Route path="/event-ticket-scalping-detector-agent" element={<EventTicketScalpingDetectorAgent />} />
        <Route path="/vip-proximity-alert-ai-agent" element={<VIPProximityAlertAIAgent />} />
        <Route path="/automated-redaction-ai-privacy-agent" element={<AutomatedRedactionAIPrivacyAgent />} />
        <Route path="/visual-evidence-timeline-builder-agent" element={<VisualEvidenceTimelineBuilderAgent />} />
        <Route path="/body-cam-footage-auditor-agent" element={<BodyCamFootageAuditorAgent />} />
        <Route path="/forensic-blood-spatter-analyzer-ai-agent" element={<ForensicBloodSpatterAnalyzerAIAgent />} />
        <Route path="/crime-scene-blueprint-generator-agent" element={<CrimeSceneBlueprintGeneratorAgent />} />
        <Route path="/virtual-reality-reconstruction-agent-agent" element={<VirtualRealityReconstructionAgentAgent />} />
        <Route path="/patrol-route-optimizer-ai-agent" element={<PatrolRouteOptimizerAIAgent />} />
        <Route path="/riot-risk-assessor-agent" element={<RiotRiskAssessorAgent />} />
        <Route path="/event-crowd-modeler-agent" element={<EventCrowdModelerAgent />} />
        <Route path="/festival-deployment-planner-agent" element={<FestivalDeploymentPlannerAgent />} />
        <Route path="/weather-crime-correlator-agent" element={<WeatherCrimeCorrelatorAgent />} />
        <Route path="/vvip-convoy-simulator-agent" element={<VVIPConvoySimulatorAgent />} />
        <Route path="/emergency-response-router-agent" element={<EmergencyResponseRouterAgent />} />
        <Route path="/manpower-fatigue-predictor-agent" element={<ManpowerFatiguePredictorAgent />} />
        <Route path="/supply-chain-disruption-ai-agent" element={<SupplyChainDisruptionAIAgent />} />
        <Route path="/election-security-analyst-agent" element={<ElectionSecurityAnalystAgent />} />
        <Route path="/historical-crime-trend-bot-agent" element={<HistoricalCrimeTrendBotAgent />} />
        <Route path="/model-drift-detector-ai-agent" element={<ModelDriftDetectorAIAgent />} />
        <Route path="/weight-encryption-specialist-agent" element={<WeightEncryptionSpecialistAgent />} />
        <Route path="/hyperparameter-tuning-bot-agent" element={<HyperparameterTuningBotAgent />} />
        <Route path="/bias-fairness-auditor-ai-agent" element={<BiasFairnessAuditorAIAgent />} />
        <Route path="/edge-deployment-coordinator-agent" element={<EdgeDeploymentCoordinatorAgent />} />
        <Route path="/federated-learning-sync-agent-agent" element={<FederatedLearningSyncAgentAgent />} />
        <Route path="/a-b-testing-evaluator-ai-agent" element={<ABTestingEvaluatorAIAgent />} />
        <Route path="/gpu-resource-allocator-agent" element={<GPUResourceAllocatorAgent />} />
        <Route path="/synthetic-data-generator-ai-agent" element={<SyntheticDataGeneratorAIAgent />} />
        <Route path="/model-rollback-agent-agent" element={<ModelRollbackAgentAgent />} />
        <Route path="/adversarial-attack-defender-agent" element={<AdversarialAttackDefenderAgent />} />
        <Route path="/concept-drift-alert-bot-agent" element={<ConceptDriftAlertBotAgent />} />
        <Route path="/accuracy-degradation-monitor-agent" element={<AccuracyDegradationMonitorAgent />} />
        <Route path="/real-world-metrics-validator-agent" element={<RealWorldMetricsValidatorAgent />} />
        <Route path="/automated-retraining-trigger-ai-agent" element={<AutomatedRetrainingTriggerAIAgent />} />
        <Route path="/hardware-aware-quantization-bot-agent" element={<HardwareAwareQuantizationBotAgent />} />
        <Route path="/demographic-bias-scanner-agent" element={<DemographicBiasScannerAgent />} />
        <Route path="/false-positive-rate-tester-agent" element={<FalsePositiveRateTesterAgent />} />
        <Route path="/legal-compliance-checker-ai-agent" element={<LegalComplianceCheckerAIAgent />} />
        <Route path="/explainability-xai-reporter-agent" element={<ExplainabilityXAIReporterAgent />} />
        <Route path="/model-weight-hashing-agent-agent" element={<ModelWeightHashingAgentAgent />} />
        <Route path="/ota-drone-update-coordinator-agent" element={<OTADroneUpdateCoordinatorAgent />} />
        <Route path="/bodycam-edge-sync-ai-agent" element={<BodycamEdgeSyncAIAgent />} />
        <Route path="/smart-cctv-deployment-bot-agent" element={<SmartCCTVDeploymentBotAgent />} />
        <Route path="/llm-fine-tuning-assistant-agent" element={<LLMFineTuningAssistantAgent />} />
        <Route path="/nlp-pipeline-optimizer-agent" element={<NLPPipelineOptimizerAgent />} />
        <Route path="/computer-vision-retraining-agent-agent" element={<ComputerVisionRetrainingAgentAgent />} />
        <Route path="/zero-downtime-hot-swapper-agent" element={<ZeroDowntimeHotSwapperAgent />} />
        <Route path="/data-privacy-auditor-ai-agent" element={<DataPrivacyAuditorAIAgent />} />
        <Route path="/anonymization-pipeline-bot-agent" element={<AnonymizationPipelineBotAgent />} />
        <Route path="/pipeline-telemetry-collector-agent" element={<PipelineTelemetryCollectorAgent />} />
        <Route path="/model-registry-webhook-ai-agent" element={<ModelRegistryWebhookAIAgent />} />
        <Route path="/kubernetes-gpu-scaler-bot-agent" element={<KubernetesGPUScalerBotAgent />} />
        <Route path="/triton-inference-optimizer-agent" element={<TritonInferenceOptimizerAgent />} />
        <Route path="/huggingface-hub-sync-bot-agent" element={<HuggingFaceHubSyncBotAgent />} />
        <Route path="/poisoned-data-detector-ai-agent" element={<PoisonedDataDetectorAIAgent />} />
        <Route path="/zero-trust-edge-sync-agent-agent" element={<ZeroTrustEdgeSyncAgentAgent />} />
        <Route path="/immutable-version-logger-agent" element={<ImmutableVersionLoggerAgent />} />
        <Route path="/air-gapped-training-supervisor-agent" element={<AirGappedTrainingSupervisorAgent />} />
        <Route path="/cloud-to-edge-bridge-ai-agent" element={<CloudToEdgeBridgeAIAgent />} />
        <Route path="/self-evolving-model-monitor-agent" element={<SelfEvolvingModelMonitorAgent />} />
        <Route path="/predictive-maintenance-ai-gpu-agent" element={<PredictiveMaintenanceAIGPUAgent />} />
        <Route path="/tensorrt-optimization-agent-agent" element={<TensorRTOptimizationAgentAgent />} />
        <Route path="/sparsity-pruning-specialist-agent" element={<SparsityPruningSpecialistAgent />} />
        <Route path="/dataset-balancing-bot-agent" element={<DatasetBalancingBotAgent />} />
        <Route path="/out-of-distribution-detector-agent" element={<OutOfDistributionDetectorAgent />} />
        <Route path="/multi-tenant-model-router-agent" element={<MultiTenantModelRouterAgent />} />
        <Route path="/latency-benchmark-tester-agent" element={<LatencyBenchmarkTesterAgent />} />
        <Route path="/memory-leak-detector-ai-agent" element={<MemoryLeakDetectorAIAgent />} />
        <Route path="/model-api-rate-limiter-agent" element={<ModelAPIRateLimiterAgent />} />
        <Route path="/feature-store-sync-agent-agent" element={<FeatureStoreSyncAgentAgent />} />
        <Route path="/training-cost-estimator-ai-agent" element={<TrainingCostEstimatorAIAgent />} />
        <Route path="/energy-efficiency-optimizer-agent" element={<EnergyEfficiencyOptimizerAgent />} />
        <Route path="/gradient-vanishing-alert-bot-agent" element={<GradientVanishingAlertBotAgent />} />
        <Route path="/overfitting-detection-ai-agent" element={<OverfittingDetectionAIAgent />} />
        <Route path="/continuous-integration-ci-bot-agent" element={<ContinuousIntegrationCIBotAgent />} />
        <Route path="/artifact-registry-manager-agent" element={<ArtifactRegistryManagerAgent />} />
        <Route path="/data-lineage-tracker-agent" element={<DataLineageTrackerAgent />} />
        <Route path="/sandbox-testing-coordinator-agent" element={<SandboxTestingCoordinatorAgent />} />
        <Route path="/mlops-workflow-orchestrator-agent" element={<MLOpsWorkflowOrchestratorAgent />} />
        <Route path="/big-data-architect-ai-agent" element={<BigDataArchitectAIAgent />} />
        <Route path="/etl-pipeline-optimizer-agent" element={<ETLPipelineOptimizerAgent />} />
        <Route path="/unstructured-data-parser-ai-agent" element={<UnstructuredDataParserAIAgent />} />
        <Route path="/metadata-tagging-engine-agent" element={<MetadataTaggingEngineAgent />} />
        <Route path="/data-governance-auditor-ai-agent" element={<DataGovernanceAuditorAIAgent />} />
        <Route path="/dark-data-miner-ai-agent" element={<DarkDataMinerAIAgent />} />
        <Route path="/cross-schema-query-optimizer-agent" element={<CrossSchemaQueryOptimizerAgent />} />
        <Route path="/cold-storage-archival-bot-agent" element={<ColdStorageArchivalBotAgent />} />
        <Route path="/data-lake-security-enforcer-agent" element={<DataLakeSecurityEnforcerAgent />} />
        <Route path="/anomaly-detection-agent-ai-agent" element={<AnomalyDetectionAgentAIAgent />} />
        <Route path="/semantic-lake-search-ai-agent" element={<SemanticLakeSearchAIAgent />} />
        <Route path="/batch-ingestion-coordinator-agent" element={<BatchIngestionCoordinatorAgent />} />
        <Route path="/real-time-stream-processor-ai-agent" element={<RealTimeStreamProcessorAIAgent />} />
        <Route path="/telecom-cdr-parsing-bot-agent" element={<TelecomCDRParsingBotAgent />} />
        <Route path="/social-media-firehose-sync-agent" element={<SocialMediaFirehoseSyncAgent />} />
        <Route path="/interrogation-audio-indexer-agent" element={<InterrogationAudioIndexerAgent />} />
        <Route path="/handwritten-ocr-extraction-ai-agent" element={<HandwrittenOCRExtractionAIAgent />} />
        <Route path="/video-metadata-indexing-agent-agent" element={<VideoMetadataIndexingAgentAgent />} />
        <Route path="/cross-db-unified-search-bot-agent" element={<CrossDBUnifiedSearchBotAgent />} />
        <Route path="/natural-language-to-sql-agent-agent" element={<NaturalLanguageToSQLAgentAgent />} />
        <Route path="/graph-relational-join-optimizer-agent" element={<GraphRelationalJoinOptimizerAgent />} />
        <Route path="/millisecond-query-executor-agent" element={<MillisecondQueryExecutorAgent />} />
        <Route path="/automated-data-redaction-ai-agent" element={<AutomatedDataRedactionAIAgent />} />
        <Route path="/pii-masking-hashing-bot-agent" element={<PIIMaskingHashingBotAgent />} />
        <Route path="/access-audit-logger-ai-agent" element={<AccessAuditLoggerAIAgent />} />
        <Route path="/court-ordered-data-purge-bot-agent" element={<CourtOrderedDataPurgeBotAgent />} />
        <Route path="/closed-case-archival-ai-agent" element={<ClosedCaseArchivalAIAgent />} />
        <Route path="/automated-glacier-tiering-bot-agent" element={<AutomatedGlacierTieringBotAgent />} />
        <Route path="/data-compression-optimizer-agent" element={<DataCompressionOptimizerAgent />} />
        <Route path="/digital-evidence-hashing-ai-agent" element={<DigitalEvidenceHashingAIAgent />} />
        <Route path="/auto-schema-inference-bot-agent" element={<AutoSchemaInferenceBotAgent />} />
        <Route path="/pii-auto-masking-coordinator-agent" element={<PIIAutoMaskingCoordinatorAgent />} />
        <Route path="/unstructured-text-structuring-ai-agent" element={<UnstructuredTextStructuringAIAgent />} />
        <Route path="/video-frame-indexing-bot-agent" element={<VideoFrameIndexingBotAgent />} />
        <Route path="/duplicate-record-merging-ai-agent" element={<DuplicateRecordMergingAIAgent />} />
        <Route path="/cold-data-retrieval-predictor-agent" element={<ColdDataRetrievalPredictorAgent />} />
        <Route path="/cross-lingual-metadata-translator-agent" element={<CrossLingualMetadataTranslatorAgent />} />
        <Route path="/automated-data-quality-scorer-agent" element={<AutomatedDataQualityScorerAgent />} />
        <Route path="/nlp-database-query-agent-agent" element={<NLPDatabaseQueryAgentAgent />} />
        <Route path="/hadoop-cluster-manager-ai-agent" element={<HadoopClusterManagerAIAgent />} />
        <Route path="/s3-bucket-cost-optimizer-agent" element={<S3BucketCostOptimizerAgent />} />
        <Route path="/elasticsearch-index-manager-agent" element={<ElasticsearchIndexManagerAgent />} />
        <Route path="/vector-database-sync-ai-agent" element={<VectorDatabaseSyncAIAgent />} />
        <Route path="/relational-cctns-bridge-ai-agent" element={<RelationalCCTNSBridgeAIAgent />} />
        <Route path="/graph-db-neo4j-integrator-agent" element={<GraphDBNeo4jIntegratorAgent />} />
        <Route path="/time-series-iot-data-miner-agent" element={<TimeSeriesIoTDataMinerAgent />} />
        <Route path="/metadata-catalog-organizer-agent" element={<MetadataCatalogOrganizerAgent />} />
        <Route path="/ingestion-pipeline-monitor-agent" element={<IngestionPipelineMonitorAgent />} />
        <Route path="/storage-cost-optimization-bot-agent" element={<StorageCostOptimizationBotAgent />} />
        <Route path="/cross-department-access-auditor-agent" element={<CrossDepartmentAccessAuditorAgent />} />
        <Route path="/cctns-state-db-sync-ai-agent" element={<CCTNSStateDBSyncAIAgent />} />
        <Route path="/telecom-bulk-cdr-uploader-agent" element={<TelecomBulkCDRUploaderAgent />} />
        <Route path="/forensic-lab-integration-bot-agent" element={<ForensicLabIntegrationBotAgent />} />
        <Route path="/transport-rto-api-bridge-agent" element={<TransportRTOAPIBridgeAgent />} />
        <Route path="/bank-transaction-webhook-ai-agent" element={<BankTransactionWebhookAIAgent />} />
        <Route path="/osint-data-harvester-bot-agent" element={<OSINTDataHarvesterBotAgent />} />
        <Route path="/federated-graphql-resolver-agent" element={<FederatedGraphQLResolverAgent />} />
        <Route path="/data-lake-health-indexer-agent" element={<DataLakeHealthIndexerAgent />} />
        <Route path="/zero-trust-data-governor-agent" element={<ZeroTrustDataGovernorAgent />} />
        <Route path="/blockchain-evidence-hasher-agent" element={<BlockchainEvidenceHasherAgent />} />
        <Route path="/quantum-cryptography-ai-agent" element={<QuantumCryptographyAIAgent />} />
        <Route path="/synthetic-criminal-data-generator-agent" element={<SyntheticCriminalDataGeneratorAgent />} />
        <Route path="/robotics-k9-pathfinding-ai-agent" element={<RoboticsK9PathfindingAIAgent />} />
        <Route path="/brain-computer-interface-researcher-agent" element={<BrainComputerInterfaceResearcherAgent />} />
        <Route path="/neuromorphic-vision-analyst-agent" element={<NeuromorphicVisionAnalystAgent />} />
        <Route path="/autonomous-drone-swarm-r-d-agent" element={<AutonomousDroneSwarmRDAgent />} />
        <Route path="/predictive-pre-crime-theorist-agent" element={<PredictivePreCrimeTheoristAgent />} />
        <Route path="/holographic-evidence-mapper-agent" element={<HolographicEvidenceMapperAgent />} />
        <Route path="/ai-legal-arbitrator-bot-agent" element={<AILegalArbitratorBotAgent />} />
        <Route path="/metaverse-police-academy-trainer-agent" element={<MetaversePoliceAcademyTrainerAgent />} />
        <Route path="/cyber-warfare-simulation-bot-agent" element={<CyberWarfareSimulationBotAgent />} />
        <Route path="/quantum-key-distribution-qkd-bot-agent" element={<QuantumKeyDistributionQKDBotAgent />} />
        <Route path="/shor-s-algorithm-defense-ai-agent" element={<ShorSAlgorithmDefenseAIAgent />} />
        <Route path="/unhackable-evidence-chain-ai-agent" element={<UnhackableEvidenceChainAIAgent />} />
        <Route path="/qubit-communication-grid-manager-agent" element={<QubitCommunicationGridManagerAgent />} />
        <Route path="/ai-generated-riot-simulator-agent" element={<AIGeneratedRiotSimulatorAgent />} />
        <Route path="/deepfake-face-training-set-generator-agent" element={<DeepfakeFaceTrainingSetGeneratorAgent />} />
        <Route path="/synthetic-voice-clone-r-d-agent" element={<SyntheticVoiceCloneRDAgent />} />
        <Route path="/virtual-crime-scene-generator-agent" element={<VirtualCrimeSceneGeneratorAgent />} />
        <Route path="/robo-dog-bomb-detection-ai-agent" element={<RoboDogBombDetectionAIAgent />} />
        <Route path="/autonomous-swarm-pursuit-modeler-agent" element={<AutonomousSwarmPursuitModelerAgent />} />
        <Route path="/hostage-rescue-micro-drone-ai-agent" element={<HostageRescueMicroDroneAIAgent />} />
        <Route path="/bipedal-riot-control-bot-r-d-agent" element={<BipedalRiotControlBotRDAgent />} />
        <Route path="/brainwave-lie-detection-eeg-ai-agent" element={<BrainwaveLieDetectionEEGAIAgent />} />
        <Route path="/stress-biometric-wearables-r-d-agent" element={<StressBiometricWearablesRDAgent />} />
        <Route path="/cognitive-load-monitoring-ai-agent" element={<CognitiveLoadMonitoringAIAgent />} />
        <Route path="/neural-link-command-interface-bot-agent" element={<NeuralLinkCommandInterfaceBotAgent />} />
        <Route path="/vr-active-shooter-trainer-agent" element={<VRActiveShooterTrainerAgent />} />
        <Route path="/holographic-forensic-lab-guide-agent" element={<HolographicForensicLabGuideAgent />} />
        <Route path="/global-ai-interpol-sync-r-d-agent" element={<GlobalAIInterpolSyncRDAgent />} />
        <Route path="/virtual-suspect-interrogation-ai-agent" element={<VirtualSuspectInterrogationAIAgent />} />
        <Route path="/quantum-probability-modeler-agent" element={<QuantumProbabilityModelerAgent />} />
        <Route path="/neuromorphic-computing-simulator-agent" element={<NeuromorphicComputingSimulatorAgent />} />
        <Route path="/holographic-ray-tracing-ai-agent" element={<HolographicRayTracingAIAgent />} />
        <Route path="/predictive-behavior-theorist-bot-agent" element={<PredictiveBehaviorTheoristBotAgent />} />
        <Route path="/autonomous-lethal-decision-tree-ai-agent" element={<AutonomousLethalDecisionTreeAIAgent />} />
        <Route path="/metaverse-voxel-rendering-ai-agent" element={<MetaverseVoxelRenderingAIAgent />} />
        <Route path="/dna-genomic-data-integrator-r-d-agent" element={<DNAGenomicDataIntegratorRDAgent />} />
        <Route path="/quantum-safe-encryption-r-d-agent" element={<QuantumSafeEncryptionRDAgent />} />
        <Route path="/decentralized-ipfs-evidence-chain-ai-agent" element={<DecentralizedIPFSEvidenceChainAIAgent />} />
        <Route path="/brain-computer-search-interface-ai-agent" element={<BrainComputerSearchInterfaceAIAgent />} />
        <Route path="/self-healing-pipeline-theorist-agent" element={<SelfHealingPipelineTheoristAgent />} />
        <Route path="/time-temporal-policing-r-d-agent" element={<TimeTemporalPolicingRDAgent />} />
        <Route path="/cybernetic-officer-augmentation-ai-agent" element={<CyberneticOfficerAugmentationAIAgent />} />
        <Route path="/orbital-command-satellite-sync-ai-agent" element={<OrbitalCommandSatelliteSyncAIAgent />} />
        <Route path="/telepathic-interrogation-interface-agent" element={<TelepathicInterrogationInterfaceAgent />} />
        <Route path="/agi-artificial-general-intelligence-sync-agent" element={<AGIArtificialGeneralIntelligenceSyncAgent />} />
        <Route path="/automated-justice-system-simulator-agent" element={<AutomatedJusticeSystemSimulatorAgent />} />
        <Route path="/synthetic-bio-signature-generator-agent" element={<SyntheticBioSignatureGeneratorAgent />} />
        <Route path="/exo-skeleton-pursuit-enhancer-ai-agent" element={<ExoSkeletonPursuitEnhancerAIAgent />} />
        <Route path="/drone-emp-hardening-r-d-agent" element={<DroneEMPHardeningRDAgent />} />
        <Route path="/acoustic-weaponry-simulation-ai-agent" element={<AcousticWeaponrySimulationAIAgent />} />
        <Route path="/anti-gravity-drone-r-d-agent" element={<AntiGravityDroneRDAgent />} />
        <Route path="/invisibility-cloak-metamaterial-ai-agent" element={<InvisibilityCloakMetamaterialAIAgent />} />
        <Route path="/sub-dermal-tracker-chip-r-d-agent" element={<SubDermalTrackerChipRDAgent />} />
        <Route path="/neural-memory-extraction-theorist-agent" element={<NeuralMemoryExtractionTheoristAgent />} />
        <Route path="/smart-bullet-trajectory-modeler-agent" element={<SmartBulletTrajectoryModelerAgent />} />
        <Route path="/cyber-telepathy-comms-r-d-agent" element={<CyberTelepathyCommsRDAgent />} />
        <Route path="/virtual-reality-empathy-trainer-agent" element={<VirtualRealityEmpathyTrainerAgent />} />
        <Route path="/post-quantum-cryptanalysis-ai-agent" element={<PostQuantumCryptanalysisAIAgent />} />
        <Route path="/jansunwai-nlp-router-ai-agent" element={<JansunwaiNLPRouterAIAgent />} />
        <Route path="/multilingual-voice-bot-agent" element={<MultilingualVoiceBotAgent />} />
        <Route path="/citizen-feedback-sentiment-ai-agent" element={<CitizenFeedbackSentimentAIAgent />} />
        <Route path="/emergency-sos-triangulator-agent" element={<EmergencySOSTriangulatorAgent />} />
        <Route path="/public-portal-chatbot-agent" element={<PublicPortalChatbotAgent />} />
        <Route path="/lost-found-matching-bot-agent" element={<LostFoundMatchingBotAgent />} />
        <Route path="/senior-citizen-well-being-checker-agent" element={<SeniorCitizenWellBeingCheckerAgent />} />
        <Route path="/rti-query-automated-responder-agent" element={<RTIQueryAutomatedResponderAgent />} />
        <Route path="/traffic-challan-query-bot-agent" element={<TrafficChallanQueryBotAgent />} />
        <Route path="/community-outreach-analyzer-agent" element={<CommunityOutreachAnalyzerAgent />} />
        <Route path="/verification-certificate-agent-agent" element={<VerificationCertificateAgentAgent />} />
        <Route path="/e-fir-nlp-classifier-ai-agent" element={<EFIRNLPClassifierAIAgent />} />
        <Route path="/complaint-routing-bot-agent" element={<ComplaintRoutingBotAgent />} />
        <Route path="/legal-precedent-matcher-ai-agent" element={<LegalPrecedentMatcherAIAgent />} />
        <Route path="/zero-fir-triangulator-agent" element={<ZeroFIRTriangulatorAgent />} />
        <Route path="/fake-complaint-detector-agent" element={<FakeComplaintDetectorAgent />} />
        <Route path="/urgency-scorer-ai-agent" element={<UrgencyScorerAIAgent />} />
        <Route path="/cyber-crime-keyword-extractor-agent" element={<CyberCrimeKeywordExtractorAgent />} />
        <Route path="/station-jurisdiction-mapper-agent" element={<StationJurisdictionMapperAgent />} />
        <Route path="/fir-translation-agent-agent" element={<FIRTranslationAgentAgent />} />
        <Route path="/victim-sentiment-analyzer-agent" element={<VictimSentimentAnalyzerAgent />} />
        <Route path="/evidence-checklist-generator-agent" element={<EvidenceChecklistGeneratorAgent />} />
        <Route path="/hotspot-prediction-ai-agent" element={<HotspotPredictionAIAgent />} />
        <Route path="/gang-network-mapper-agent" element={<GangNetworkMapperAgent />} />
        <Route path="/financial-crime-tracker-agent" element={<FinancialCrimeTrackerAgent />} />
        <Route path="/repeat-offender-analyst-agent" element={<RepeatOffenderAnalystAgent />} />
        <Route path="/modus-operandi-mo-matcher-agent" element={<ModusOperandiMOMatcherAgent />} />
        <Route path="/dark-web-chatter-monitor-agent" element={<DarkWebChatterMonitorAgent />} />
        <Route path="/telecom-cdr-analyzer-agent" element={<TelecomCDRAnalyzerAgent />} />
        <Route path="/terrorism-funding-tracker-agent" element={<TerrorismFundingTrackerAgent />} />
        <Route path="/social-media-radicalization-bot-agent" element={<SocialMediaRadicalizationBotAgent />} />
        <Route path="/arms-smuggling-predictor-agent" element={<ArmsSmugglingPredictorAgent />} />
        <Route path="/criminal-profiler-agent-agent" element={<CriminalProfilerAgentAgent />} />
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
