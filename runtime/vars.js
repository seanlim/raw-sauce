module.exports.fetch = (ctx, name) => {
  if (!ctx.vars[name] && ctx.vars[name] !== null) {
    if (!ctx.parent) {
      throw new Error(`Variable ${name} not declared.`);
    } else {
      return fetchVar(ctx.parent, name);
    }
  }
  return ctx.vars[name];
};
