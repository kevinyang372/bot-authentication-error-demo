const { Botkit } = require('botkit');
require('dotenv').config();
const controller = new Botkit({
    webhook_uri: '/api/messages',
    adapterConfig: {
        appId: process.env.APP_ID,
        appPassword: process.env.APP_PASSWORD,
    }
});
controller.ready(() => {
    controller.loadModules(__dirname + '/features');
});
controller.webserver.get('/', (req, res) => {
    res.send(`This app is running Botkit ${controller.version}.`);
});
//# sourceMappingURL=bot.js.map