'use strict';

/**
 * boost service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::boost.boost');
