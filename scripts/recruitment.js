const components = [
    { url: 'components/header.html', id: 'header' },
    { url: 'components/footer.html', id: 'footer' },
    { url: 'components/nav.html', id: 'nav' },
    { url: 'components/sections/abstract.html', id: 'abstract' },
    { url: 'components/sections/uniqueBenefits.html', id: 'unique-benefits' },
    { url: 'components/sections/definitions.html', id: 'definitions' },
    { url: 'components/sections/introduction.html', id: 'introduction' },
    { url: 'components/sections/jobSpec.html', id: 'jobSpec' },
    { url: 'components/sections/applicationProcess.html', id: 'applicationProcess' },
    { url: 'components/sections/interviewProcess.html', id: 'interviewProcess' },
    { url: 'components/sections/assessment.html', id: 'assessment' },
    { url: 'components/sections/postInterview.html', id: 'postInterview' },
    { url: 'components/sections/continuousImprovement.html', id: 'continuousImprovement' },
    { url: 'components/sections/resourcesTraining.html', id: 'resourcesTraining' },
    { url: 'components/sections/legalConsiderations.html', id: 'legalConsiderations' },
    { url: 'components/sections/appendix.html', id: 'appendix' },
    { url: 'components/sections/glossary.html', id: 'glossary' }
];

components.forEach(({ url, id }) => loadComponent(url, id));