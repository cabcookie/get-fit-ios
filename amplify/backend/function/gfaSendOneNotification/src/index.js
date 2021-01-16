const superagent = require('superagent');

exports.handler = async (event) => {
    console.log("event", event)
    const { title = "", message, url = "" } = event
    const TRIGGER = "send_training_notif"
    const KEY = "cqZJNiZx4eWpc05bcVcsbq"
    const URL = `https://maker.ifttt.com/trigger/${TRIGGER}/with/key/${KEY}`
    const params = { value1: title, value2: message, value3: url }
    
    console.log("url", URL)
    console.log("params", params)
    
    const res = await superagent.post(URL).send(params)
    console.log("Response", { url: URL, params: params, status: res.status, text: res.text, date: res.header.date })

    return res
}
