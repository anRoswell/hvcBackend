const moment = require('moment');

const UUID = ({
  get: () => {
    const key = Math.random().toString(36).substring(2, 12).toUpperCase()
    const time = moment().unix().toString().split("").reverse().join("")
    return `EC${key.substr(4)}-${time.substr(6)}${key.substr(0, 4)}-${time.substr(0, 6)}`
  }
});

module.exports = UUID;