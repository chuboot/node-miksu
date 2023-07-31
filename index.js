const PORT = 8000;
const express = require("express");
const clientRosRest = require("./config/router.js");

const app = express();

app.get("/", (req, res) => {
  res.json("Welcome to my miksu web!");
});
app.get("/dhcp", (req, res) => {
  clientRosRest
    .print("ip/dhcp-server/lease")
    .then((resp) => {
      const restdata = resp.data;
      res.json(restdata);
    })
    .catch((err) => {
      console.log("error:", err);
    });
});
app.get("/address-list", (req, res) => {
  clientRosRest
    .print("/ip/firewall/address-list")
    .then((resp) => {
      const restdata = resp.data;
      res.json(restdata);
    })
    .catch((err) => {
      console.log("error:", err);
    });
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
