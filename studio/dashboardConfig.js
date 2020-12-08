export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fcf84521b4b07fd7fe90ecf',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6vy19uit',
                  apiId: '2a35dbd1-8b59-4d6b-9b04-c82f52867b24'
                },
                {
                  buildHookId: '5fcf845299dc7ae187e8ee9d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qm6rsvqb',
                  apiId: 'ea70dd85-4699-4810-8a60-84db72692dac'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/supertrens/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qm6rsvqb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
