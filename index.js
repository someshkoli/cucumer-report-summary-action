const core = require("@actions/core")
const data = require("./Cucumber.json")
async function PublishSummary() {
    let table = data[0].elements.map((element) => {
        steps_result = element.steps.map((step) => [element.name, step.name, step.result.status])
        return steps_result
    })
    console.log(table.flat())
    await core.summary
    .addHeading('Test Results')
    .addCodeBlock("awdwadad", "js")
    .addTable([
        [{data: "Test Name", header: true}, {data: "Step Name", header: true}, {data: "Result", header: true}],
        ...table.flat()
    ])
    .write()
}

PublishSummary()