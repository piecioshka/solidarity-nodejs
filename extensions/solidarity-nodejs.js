module.exports = (context) => {
    // Register this plugin
    context.addPlugin({
        name: 'solidarity-nodejs',
        description: 'Plugin to validate Node.js environment',
        snapshot: 'solidarity-nodejs-template.json'
    });
};
