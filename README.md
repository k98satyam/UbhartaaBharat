# UbhartaaBharat
A Crowdfunding platform where payment is done via Ether(backed by Blockchain Tecchnology)

# Instillation

## Installing npm
  
Download the latest version of node.js (Comes in-built with Node Package Manager) https://nodejs.org/en/  
(Download the LTS version as it is stable)

## Installing Ganache 
  
Ganache provides a private test network for development process  
https://www.trufflesuite.com/ganache

## Install Truffle

Open cmd with default location and run the command  
```
npm install truffle –g
```
    
## Install metamask
  
Add metamask extension to your chrome browser  
https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en

## Setup your ganache
  
Open ganache  
Click on start a new workspace  
Give any name of your choice to the workspace  
Click on add New Project and add truffle-config.js file present in our prototype (“/Prototype/truffle-config.js”)    
Click on Save Workspace  

## Setup metamask
  
Click on the fox icon added to your chrome  
Click on network dropdown ( in the middle of top bar)  
Click on custom RPC  
Provide a network name of your choosing  
In Network url, write - HTTP://127.0.0.1:7545  

## Running The Project (Skip if decided to run the project locally)
  
Go to the website – “https://ubhartaabharat.web.app/ ” and you can view or work on the website  
Make sure ganache is running in the background  
```
Do not use real ethers on the website, it could lead to loss of money as our project is still under development
```
    
## Running the project locally (Skip the following if using the above mentioned url)
  	
Note:- All npm commands must be run inside cmd in the below mentioned folders  
Use the command – “ npm install “ in the following folders –  
```
/UhartaaBharat  
/UhartaaBharat/client  
/UhartaaBharat/client/functions  
```  
Use the command - “ npm start “ in the folder /Prototype/client and your project will run on a local server  
```
Do not use real ethers on the website, it could lead to loss of money as our project is still under development  
```
