module.exports = {
   root: true,
   // eslint auto-merges this config with root one - line above due to conflicts with Jest plugin
   // eslint will stop here as looks at file system for config to use for practicular file
   plugins: ['eslint-plugin-cypress'],
   extends: ['plugin:cypress/recommended'],
   //    extends cypress recommended ruleset
   env: { 'cypress/globals': true },
   //    globals coming from ESLint plugin installed above
}
