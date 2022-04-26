import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  contractName: 'TempConname',
  tokenName: 'TempContractName',
  tokenSymbol: 'TCNM',
  hiddenMetadataUri: 'ipfs://replaceme/1.json', 
  maxSupply: 9999,
  whitelistSale: {
    price: 0.115,
    maxMintAmountPerTx: 5,
  },
  preSale: {
    price: 0.115,
    maxMintAmountPerTx: 5,
  },
  publicSale: {
    price: 0.135,
    maxMintAmountPerTx: 10,
  },
  contractAddress: "0x35c78471CCe133De0bCDFF49dFb313D15ffcFD9f",
  marketplaceIdentifier: 'Replaceme',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
