let employeeManager = {}
module.exports = {
    beforeEach: browser => {
        employeeManager = browser.page.demoPageObject()
        employeeManager.navigate()
    },
    after: browser => {
        browser.end()
    },
    //I added something
    //https://dmutah.atlassian.net/browse/DEM-4
    'Cancel Edit': browser => {
        var currentTitle = ""
        employeeManager
            .click('@marnie')
            .expect.element('@disabledCancelButton').to.be.visible
        employeeManager
            .getValue('@titleEntry', result => {
                currentTitle = result.value
                employeeManager
                    .clearValue('@titleEntry')
                    .setValue('@titleEntry', currentTitle + ', the Grand Poobah')
                    .expect.element('@disabledCancelButton').not.to.be.present
                employeeManager
                    .click('@cancelButton')
                    .verify.value('@titleEntry', currentTitle, 'entry changed back to original value')
            })
    }
}