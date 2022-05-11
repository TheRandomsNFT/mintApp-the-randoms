import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  contractName: 'TheRandomsTest',
  tokenName: 'The Randoms - Test',
  tokenSymbol: 'RNDMST',
  hiddenMetadataUri: 'ipfs://QmeihYjAmGm6nwyXsgvyvmD4rctv4ymrkSYJrygKssXopJ/Hiden_Metadata.json', 
  maxSupply: 2000,
  whitelistSale: {
    price: 0.01,
    maxMintAmountPerTx: 3,
  },
  preSale: {
    price: 0.00,
    maxMintAmountPerTx: 2000,
  },
  publicSale: {
    price: 0.01,
    maxMintAmountPerTx: 2,
  },
  contractAddress: "",
  marketplaceIdentifier: 'The Randoms Testing',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
