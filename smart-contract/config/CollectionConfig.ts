import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  contractName: 'randomContract',
  tokenName: 'The Randoms',
  tokenSymbol: 'RNDMS',
  hiddenMetadataUri: 'ipfs://replaceme/1.json', 
  maxSupply: 7777,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 3,
  },
  preSale: {
    price: 0.05,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  contractAddress: "0x35c78471CCe133De0bCDFF49dFb313D15ffcFD9f",
  marketplaceIdentifier: 'Replaceme',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
