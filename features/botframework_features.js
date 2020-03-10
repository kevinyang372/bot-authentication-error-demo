/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

const botframework_connector_1 = require("botframework-connector");

module.exports = function(controller) {

    // controller.webserver.post('/triggers', async (req, res) => {
    //     try {

    //         // spawn new bot
    //         let bot = await controller.spawn();

    //         const params = {
    //             channelId: 'msteams',
    //             user: { id: req.body.user_id },
    //             conversation: {
    //                 tenantId: req.body.tenantId
    //             },
    //             bot: {
    //                 id: req.body.bot_id,
    //                 name: req.body.bot_name
    //             },
    //             serviceUrl: req.body.serviceUrl
    //         }

    //         MicrosoftAppCredentials.trustServiceUrl(req.body.serviceUrl);
    //         await bot.startConversationWithUser(params);
    //         await bot.say(req.body.message);

    //         res.json('Success! Message sent');

    //     } catch(err) {
    //         console.error(err)
    //         res.status(401);
    //         res.send(err.message);
    //     }
    // });

    controller.webserver.post('/triggers', (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            let bot = yield controller.spawn();
            const params = {
                channelId: 'msteams',
                user: { id: req.body.user_id },
                conversation: {
                    tenantId: req.body.tenantId
                },
                bot: {
                    id: req.body.bot_id,
                    name: req.body.bot_name
                },
                serviceUrl: req.body.serviceUrl
            };
            botframework_connector_1.MicrosoftAppCredentials.trustServiceUrl(req.body.serviceUrl);
            yield bot.startConversationWithUser(params);
            yield bot.say(req.body.message);
            res.json('Success! Message sent');
        }
        catch (err) {
            console.error(err);
            res.status(401);
            res.send(err.message);
        }
    }));

}