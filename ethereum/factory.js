import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xe1fE884eE179Fd3DE461Bf6b23b8E0634A750d03"
);

export default instance;
