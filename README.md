<h4 align="center">
  <img alt="common readme" src="suiLogo.png">
</h4>

Just sending SUI tokens by Sui Object from main wallet to wallets from mnemonics.txt

---

## mnemonics.txt format

One line = one mnemonic

**Example:**
>fame buzz prevent joy delay unknown shiver snow text orchard paddle stable <br />
>soft rubber slice pride ahead cover recycle dumb utility bunker anger acquire <br />
>obvious orbit trumpet peace path spare twin list hero weapon fun example <br />
nasty please wide choice sock fine fence manage cost leisure clip parrot

## Install

With [npm](https://npmjs.org/) installed and cloned repo, run

    $ npm install

When npm packages installed, create mnemonics.txt file and insert your mnemonics

    $ touch mnemonics.txt

Inside sendSui.js:
1) Edit Main Wallet mnemonic
```shell
const keypairMain = Ed25519Keypair.deriveKeypair("YOUR MNEMONIC");
```
2) Edit Amount and SUI object
```shell
 await signerMain.transferSui({
        suiObjectId: 'SUI OBJECT ID', //SUI object for send
        amount: 30000, // Amount in MISTS
        gasBudget: 10000,
        recipient: address
    });
```

### Usage
Simply run this inside your directory:

    $ node sendSui.js

