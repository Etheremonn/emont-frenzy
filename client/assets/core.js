/**
 * Emonteam
 * https://www.emonteam.com/
 * Copyright 2017 Emon Team. All rights reserved.
 */

var EMONT_FRENZY_ABI_ARRAY = [{"constant":true,"inputs":[],"name":"maxPos","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_fromPos","type":"uint256"},{"name":"_toPos","type":"uint256"}],"name":"getActiveFish","outputs":[{"name":"pos","type":"uint256"},{"name":"fishId","type":"uint256"},{"name":"player","type":"address"},{"name":"weight","type":"uint256"},{"name":"blockNumber","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"moderators","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_minWeightPunish","type":"uint256"},{"name":"_maxWeightBonus","type":"uint256"}],"name":"setMaxConfig","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"countFishAtBase","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"addDrop","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"addFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_moveCharge","type":"uint256"},{"name":"_cashOutRate","type":"uint256"},{"name":"_cashInRate","type":"uint256"}],"name":"setRate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_fromPos","type":"uint256"},{"name":"_toPos","type":"uint256"}],"name":"getAllBonus","outputs":[{"name":"pos","type":"uint256"},{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minCashout","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_isMaintaining","type":"bool"}],"name":"UpdateMaintaining","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_weight","type":"uint256"}],"name":"getMaxJump","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalModerators","outputs":[{"name":"","type":"uint16"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_fishId","type":"uint32"}],"name":"getFish","outputs":[{"name":"player","type":"address"},{"name":"weight","type":"uint256"},{"name":"active","type":"bool"},{"name":"blockNumber","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cashOutRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sendTo","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdrawEther","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ONE_EMONT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_player","type":"address"},{"name":"_tokens","type":"uint256"}],"name":"AddFishByToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"BASE_POS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minWeightDeduct","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalFish","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"_owner","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"cashInRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxWeightBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newModerator","type":"address"}],"name":"AddModerator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"minEatable","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"_balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_fromPos","type":"uint256"},{"name":"_toPos","type":"uint256"}],"name":"MoveFish","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"AddFish","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_pos1","type":"uint256"},{"name":"_pos2","type":"uint256"},{"name":"_pos3","type":"uint256"},{"name":"_pos4","type":"uint256"},{"name":"_pos5","type":"uint256"},{"name":"_pos6","type":"uint256"},{"name":"_pos7","type":"uint256"},{"name":"_pos8","type":"uint256"},{"name":"_pos9","type":"uint256"},{"name":"_pos10","type":"uint256"}],"name":"cleanOcean","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_fromPos","type":"uint256"}],"name":"MoveToBase","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"basePunish","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"oceanBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_a","type":"uint256"},{"name":"_b","type":"uint256"}],"name":"SafeDeduct","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_weight","type":"uint256"},{"name":"_squareLength","type":"uint256"}],"name":"updateMaxJump","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_toPos","type":"uint256"}],"name":"MoveFromBase","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_player","type":"address"}],"name":"getFishIdByAddress","outputs":[{"name":"fishId","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_sendTo","type":"address"},{"name":"_amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"width","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"CashOut","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_player","type":"address"},{"name":"_weight","type":"uint256"}],"name":"refundFish","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"minWeightPunish","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_pos","type":"uint256"},{"name":"_amount","type":"uint256"}],"name":"addBonus","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_fishId","type":"uint256"}],"name":"getFishAtBase","outputs":[{"name":"fishId","type":"uint256"},{"name":"player","type":"address"},{"name":"weight","type":"uint256"},{"name":"blockNumber","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"HIGH","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_oldModerator","type":"address"}],"name":"RemoveModerator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_pos","type":"uint256"}],"name":"getFishIdByPos","outputs":[{"name":"fishId","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"moveCharge","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStats","outputs":[{"name":"countFish","type":"uint256"},{"name":"countBonus","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_seed","type":"uint256"}],"name":"getRandom","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minJump","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_minJump","type":"uint256"}],"name":"updateMinJump","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_a","type":"uint256"},{"name":"_b","type":"uint256"}],"name":"DeductABS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_minCashout","type":"uint256"},{"name":"_minEatable","type":"uint256"},{"name":"_minWeightDeduct","type":"uint256"},{"name":"_basePunish","type":"uint256"},{"name":"_oceanBonus","type":"uint256"}],"name":"setExtraConfig","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addFee","type":"uint256"},{"name":"_addWeight","type":"uint256"},{"name":"_addDrop","type":"uint256"},{"name":"_width","type":"uint256"}],"name":"setConfig","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_pos","type":"uint256"}],"name":"getFishByPos","outputs":[{"name":"fishId","type":"uint256"},{"name":"player","type":"address"},{"name":"weight","type":"uint256"},{"name":"blockNumber","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isMaintaining","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"ChangeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"setDefaultMaxJump","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_player","type":"address"}],"name":"getFishByAddress","outputs":[{"name":"fishId","type":"uint256"},{"name":"player","type":"address"},{"name":"weight","type":"uint256"},{"name":"active","type":"bool"},{"name":"blockNumber","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"addWeight","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_tokenContract","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"player","type":"address"},{"indexed":false,"name":"fishId","type":"uint256"},{"indexed":false,"name":"weight","type":"uint256"}],"name":"EventCashout","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"pos","type":"uint256"},{"indexed":false,"name":"value","type":"uint256"}],"name":"EventBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"player","type":"address"},{"indexed":false,"name":"fishId","type":"uint256"},{"indexed":false,"name":"fromPos","type":"uint256"},{"indexed":false,"name":"toPos","type":"uint256"},{"indexed":false,"name":"weight","type":"uint256"}],"name":"EventMove","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"player","type":"address"},{"indexed":true,"name":"defender","type":"address"},{"indexed":false,"name":"playerFishId","type":"uint256"},{"indexed":false,"name":"defenderFishId","type":"uint256"},{"indexed":false,"name":"fromPos","type":"uint256"},{"indexed":false,"name":"toPos","type":"uint256"},{"indexed":false,"name":"playerWeight","type":"uint256"}],"name":"EventEat","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"player","type":"address"},{"indexed":true,"name":"defender","type":"address"},{"indexed":false,"name":"playerFishId","type":"uint256"},{"indexed":false,"name":"defenderFishId","type":"uint256"},{"indexed":false,"name":"fromPos","type":"uint256"},{"indexed":false,"name":"toPos","type":"uint256"},{"indexed":false,"name":"playerWeight","type":"uint256"}],"name":"EventFight","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"player","type":"address"},{"indexed":true,"name":"defender","type":"address"},{"indexed":false,"name":"playerFishId","type":"uint256"},{"indexed":false,"name":"defenderFishId","type":"uint256"},{"indexed":false,"name":"fromPos","type":"uint256"},{"indexed":false,"name":"toPos","type":"uint256"},{"indexed":false,"name":"defenderWeight","type":"uint256"}],"name":"EventSuicide","type":"event"}];

var EMONT_FRENZY_ADDRESS = "0x5df892a4d541cb55c62280125f0c38b46d9f55df";     // Main
// var EMONT_FRENZY_ADDRESS  = "0x0a7de28e4f2d33107247a054d23fb270c89904e6";   // Rinkeby

var account = undefined;
var rpcConnected = null;
var hasMetamaskInstalled = null;

var emontFrenzyInstance = null;

// front end callback code
var RESULT_CODE = {
    SUCCESS: 0,
    ERROR_CLASS_NOT_FOUND: 1,
    ERROR_LOW_BALANCE: 2,
    ERROR_SEND_FAIL: 3,
    ERROR_NOT_TRAINER: 4,
    ERROR_NOT_ENOUGH_MONEY: 5,
    ERROR_INVALID_AMOUNT: 6,
    // extra error code
    ERROR_SERVER: 20,
    NO_ACCOUNT_DETECTED: 21,
    ERROR_PARAMS: 22
}

 // init the connection and create contract
window.addEventListener('load', function() {
	 // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        window.web3 = new Web3(web3.currentProvider);

        // set account
        var accountInterval = setInterval(function() {
            if ((web3.eth.accounts[0] || null) !== account) {
                account = web3.eth.accounts[0] || null;
                if (account) {
                    web3.eth.defaultAccount = account;
                }
                console.log("INFO_LOG|update_account_info|account=" + account);
            }
        }, 500);

        web3.version.getNetwork((err, netId) => {
            switch (netId) {
                case "1":
                    console.log('INFO_LOG|running_on_main_net.');
                    break
                case "2":
                    console.log('INFO_LOG|running_on_deprecatedmorden_test_network.')
                    break
                case "3":
                    console.log('INFO_LOG|running_on_ropsten_test_network.')
                    break
                default:
                    console.log('INFO_LOG|running_on_unknown_network.')
            }
        });
        rpcConnected = true;
      	hasMetamaskInstalled = true;
    } else {
        window.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/vZmCD1X42dFUlLRd2BtV"));
        console.log("INFO_LOG|using_web_api");
        rpcConnected = true;
        hasMetamaskInstalled = false;
        account = null;
    }


    // init contract
    var emontFrenzyContractClass = web3.eth.contract(EMONT_FRENZY_ABI_ARRAY);
    emontFrenzyInstance = emontFrenzyContractClass.at(EMONT_FRENZY_ADDRESS);

});

function isEtherAccountActive() {
    return (account != null && account != undefined)
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function isValidEtherAddress(address) {
  return web3.isAddress(address);
}



function LoadDataWithRpcCheck(func) {
  var intervalId = null;
  var checkRPCLoaded = function() {
    if (rpcConnected != null) {
      func();
      clearInterval(intervalId);
    }
    console.log("check_load_basic");
  };
  intervalId = setInterval(checkRPCLoaded, 1000);
}