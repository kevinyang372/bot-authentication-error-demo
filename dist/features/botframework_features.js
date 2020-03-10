var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { MicrosoftAppCredentials } = require('botframework-connector');
module.exports = function (controller) {
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
            MicrosoftAppCredentials.trustServiceUrl(req.body.serviceUrl);
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
};
//# sourceMappingURL=botframework_features.js.map