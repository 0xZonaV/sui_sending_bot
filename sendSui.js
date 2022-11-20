import {Ed25519Keypair, JsonRpcProvider, Network, RawSigner} from "@mysten/sui.js";
import {readFileSync} from "fs";
import * as fs from "fs";

const content = readFileSync("mnemonics.txt", 'utf-8');
const mnemonicArr = content.split(/\r?\n/);

for (let i=0; i<mnemonicArr.length; i++) {
    const provider = new JsonRpcProvider(Network.DEVNET);
    const keypair = Ed25519Keypair.deriveKeypair(mnemonicArr[i]);
    const address = keypair.getPublicKey().toSuiAddress();
    const keypairMain = Ed25519Keypair.deriveKeypair("YOUR MNEMONIC");
    const signerMain = new RawSigner(keypairMain, provider);

    fs.open("done.txt", "a", function (e,id){
        fs.write(id, mnemonicArr[i] + ';' + address + "\r\n", null, "utf8", function (){
            console.log(address);
            fs.close(id);
        });
    })

    await signerMain.transferSui({
        suiObjectId: 'SUI OBJECT ID', //SUI object for send
        amount: 30000, // Amount in MISTS
        gasBudget: 10000,
        recipient: address
    });


};


