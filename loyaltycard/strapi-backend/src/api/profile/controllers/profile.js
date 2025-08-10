'use strict';
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::profile.profile', ({ strapi }) => ({
  async addStamp(ctx) {
    const id = ctx.params.id;
    // Must be authenticated
    if (!ctx.state.user) return ctx.unauthorized('Authentication required');

    // Ensure caller is staff
    const roleName = ctx.state.user.role && ctx.state.user.role.name;
    if (roleName !== 'staff') return ctx.unauthorized('Only staff can add stamps');

    // Load profile
    const profile = await strapi.entityService.findOne('api::profile.profile', id);
    if (!profile) return ctx.notFound('Profile not found');

    const curr = profile.visitCount || 0;
    const newCount = curr + 1;

    let rewardStatus = profile.rewardStatus || 'none';
    if (newCount === 5) rewardStatus = 'fifteen';
    if (newCount === 10) rewardStatus = 'twentyfive';

    const updated = await strapi.entityService.update('api::profile.profile', id, {
      data: {
        visitCount: newCount,
        rewardStatus
      }
    });

    // Optionally: return the updated entity in standard Strapi format
    return this.transformResponse(updated);
  }
}));
