const core = require("@actions/core")

async function PublishSummary() {
    await core.summary
    .addHeading('Test Results')
    .addCodeBlock("awdwadad", "js")
    .addTable([
        [{data: "File", header: true}, {data: "Result", header: true}],
        ["foo.js", "Pass `✅` "],
        ["bar.js", "Fail `❌`"],
        ["test.js", "Pass `✅`"]
    ])
    .addLink("View staging deployment!", "https://github.com")
    .write()
}

PublishSummary()