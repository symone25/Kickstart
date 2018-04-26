import Web3 from "web3";

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
// We are in the browser and metamask is running.
web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running meta metamask.
const provider = new Web3.providers.HttpProvider(
  'https://rinkeby.infura.io/rL1Nit3HWXrLiamz9lu4'
);
web3 = new Web3(provider);
}

export default web3;
