const Utils = require("./utils");

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
    const totalCost =  Utils.calculate("SUM", totalAmount, totalShipping);
    console.log(`The total is: ${totalCost}`);
}

module.exports = sendPaymentRequestToApi;