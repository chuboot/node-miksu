const rosRest = require("ros-rest");

const clientRosRest = rosRest({
  host: "10.10.8.1",
  user: "userapi",
  password: "passapi",
  port: 443, // default 443
  secure: false, // default false
});

module.exports = clientRosRest;
