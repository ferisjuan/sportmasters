/* eslint-disable no-undef */
module.exports = {
    overwrite: true,
    schema: process.env.SCHEMA_ENDPOINT,
    documents: 'src/**/*.graphql',
    generates: {
        'src/generated/graphql.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
            config: {
                fetcher: {
                    credentials: 'include',
                    endpoint: process.env.GGL_ENDPOINT,
                    fetchParams: {
                        headers: {
                            'Access-Control-Allow-Origin': process.env.GGL_CLIENT,
                            'access-control-allow-credentials': 'true',
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        credentials: 'include',
                    },
                },
            },
            './graphql.schema.json': {
                plugins: ['introspection'],
            },
        },
    },
}
