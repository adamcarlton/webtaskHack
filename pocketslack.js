const Slack = require('slack-node')

module.exports = function (ctx, done) {
    slack = new Slack();
    const webhook = ctx.data.SLACK_URL

    slack.setWebhook(webhook);
        
    slack.webhook({
        channel: "#pocket",
        username: "pocketbot",
        text: "Hello! The article: '" + ctx.data.title + "' has been saved. Here's a brief description: \n'" + ctx.data.excerpt + "'\n The full article can be found here: " + ctx.data.url
    }, function(err, response){
        if (err) return done(err)
    })
};