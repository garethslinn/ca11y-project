const components = [
    { url: '../../../components/sections/webStandards/header.html', id: 'header' },
    { url: '../../../components/sections/webStandards/footer.html', id: 'footer' },
    { url: '../../../components/sections/webStandards/nav.html', id: 'nav' },
    { url: '../../../components/sections/webStandards/abstract.html', id: 'abstract' },
    { url: '../../../components/sections/webStandards/placeholder.html', id: 'placeholder' },

    { url: '../../../components/sections/webStandards/appendix.html', id: 'appendix' },
    { url: '../../../components/sections/webStandards/glossary.html', id: 'glossary' }
];

components.forEach(({ url, id }) => loadComponent(url, id));