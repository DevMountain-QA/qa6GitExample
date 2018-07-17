module.exports = {
    url: "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html",
    elements: {
        marnie : {
            selector: '(//li[@class="listText"])[text()="Marnie Barnett"]',
            locateStrategy: 'xpath'
        },
        titleEntry : 'input[name="titleEntry"]',
        cancelButton : 'button[name="cancel"]',
        disabledCancelButton : {
            selector: '(//button[@name="cancel"])[@disabled]',
            locateStrategy: 'xpath'
        }
    }
}