const fs = require('fs');
const path = require('path');

const pagesDir = path.join('c:', 'Users', 'DELL', 'OneDrive', 'Desktop', 'AI topic for html', 'AI poilc topic', 'AI-police-topic', 'src', 'pages');

const pagesData = [
  // Investigation & Intelligence
  { fileName: 'InformerManagementDetailed.jsx', mainTitle: 'AI INFORMER', subTitle: 'MANAGEMENT' },
  { fileName: 'SecretInfoDetailed.jsx', mainTitle: 'AI SECRET INFO', subTitle: 'ANALYSIS' },
  { fileName: 'IntelligenceVerificationDetailed.jsx', mainTitle: 'AI INTELLIGENCE', subTitle: 'VERIFICATION' },
  { fileName: 'SourceReliabilityDetailed.jsx', mainTitle: 'AI SOURCE', subTitle: 'RELIABILITY' },
  { fileName: 'CriminalRelationshipDetailed.jsx', mainTitle: 'AI CRIMINAL', subTitle: 'RELATIONSHIP' },
  { fileName: 'AliasNicknameDetailed.jsx', mainTitle: 'AI ALIAS', subTitle: 'MATCHING' },
  { fileName: 'CrossCaseLinkDetailed.jsx', mainTitle: 'AI CROSS-CASE', subTitle: 'LINK ANALYSIS' },
  { fileName: 'CaseSimilarityDetailed.jsx', mainTitle: 'AI CASE', subTitle: 'SIMILARITY' },
  { fileName: 'SuspectMovementDetailed.jsx', mainTitle: 'AI SUSPECT', subTitle: 'MOVEMENT' },
  { fileName: 'InvestigationQualityDetailed.jsx', mainTitle: 'AI INVESTIGATION', subTitle: 'QUALITY REVIEW' },
  // Judicial & Admin
  { fileName: 'CommissionOfInquiryCoordinationDetailed.jsx', mainTitle: 'AI COMMISSION OF INQUIRY', subTitle: 'COORDINATION' },
  { fileName: 'MagisterialInquiryWorkflowDetailed.jsx', mainTitle: 'AI MAGISTERIAL', subTitle: 'INQUIRY WORKFLOW' },
  { fileName: 'HumanRightsCommissionCaseDetailed.jsx', mainTitle: 'AI HUMAN RIGHTS', subTitle: 'COMMISSION CASE' },
  { fileName: 'StateInformationCommissionCaseDetailed.jsx', mainTitle: 'AI STATE INFORMATION', subTitle: 'COMMISSION TRACKER' },
  { fileName: 'LokayuktaReferenceManagementDetailed.jsx', mainTitle: 'AI LOKAYUKTA', subTitle: 'REFERENCE MANAGEMENT' },
  { fileName: 'LegislativeAssemblyQuestionDetailed.jsx', mainTitle: 'AI LEGISLATIVE ASSEMBLY', subTitle: 'QUESTION COORDINATION' },
  { fileName: 'ParliamentQuestionCoordinationDetailed.jsx', mainTitle: 'AI PARLIAMENT QUESTION', subTitle: 'COORDINATION' },
  { fileName: 'AssuranceMonitoringCellDetailed.jsx', mainTitle: 'AI ASSURANCE', subTitle: 'MONITORING CELL' },
  { fileName: 'GovernmentReferenceMonitoringDetailed.jsx', mainTitle: 'AI GOVERNMENT', subTitle: 'REFERENCE MONITORING' },
  { fileName: 'CabinetDecisionComplianceDetailed.jsx', mainTitle: 'AI CABINET DECISION', subTitle: 'COMPLIANCE TRACKER' }
];

let fixedCount = 0;

pagesData.forEach(page => {
  const filePath = path.join(pagesDir, page.fileName);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Fix <h2>
    content = content.replace(
      /<ShieldAlert className="inline-icon" size=\{28\} \/>[\s\S]*?<\/h2>/,
      `<ShieldAlert className="inline-icon" size={28} /> ${page.mainTitle} ${page.subTitle}\n            </h2>`
    );

    // Fix <h1> cyber-title
    const titleUpper = page.mainTitle + ' ' + page.subTitle;
    const words = titleUpper.split(' ');
    const lastWord = words.pop();
    const restOfTitle = words.join(' ');
    
    content = content.replace(
      /<h1 className="cyber-title">.*?<\/h1>/,
      `<h1 className="cyber-title">${restOfTitle} <span>${lastWord}</span></h1>`
    );

    fs.writeFileSync(filePath, content, 'utf8');
    fixedCount++;
  }
});

console.log(`Successfully fixed titles for ${fixedCount} pages.`);
