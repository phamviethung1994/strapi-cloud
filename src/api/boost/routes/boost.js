'use strict';

/**
 * boost router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::boost.boost');
