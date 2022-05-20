/* eslint-disable no-undef */
module.exports = {
    overwrite: true,
    schema: process.env.GGL_ENDPOINT,
    documents: 'src/**/*.graphql',
    generates: {
        'src/generated/graphql.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
            config: {
                fetcher: {
                    credentials: 'include',
                    endpoint: process.env.GGL_ENDPOINT,
                    fetchParams: {
                        'Allow-Control-Allow-Origin': process.env.GGL_CLIENT,
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                },
            },
            './graphql.schema.json': {
                plugins: ['introspection'],
            },
        },
    },
}
