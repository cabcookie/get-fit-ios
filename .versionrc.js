const tracker = {
    filename: "app.json",
    updater: require("./standard-version-updater")
}

module.exports = {
    bumpFiles: [tracker, {
        filename: "package.json",
        type: "json",
    }]
}
