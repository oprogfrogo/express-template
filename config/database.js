'use strict'

const databases = {
    process: {
        client: 'mysql2',
        connection: (process.env.NODEDB || 'mysql://user:pass@host:port') + '/process'
    },
    visareg: {
        client: 'mysql2',
        connection: (process.env.NODEDB || 'mysql://user:pass@host:port') + '/visareg'
    }
}

module.exports = {
    all: databases
};
