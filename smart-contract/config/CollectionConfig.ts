import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  contractName: 'TheRandoms',
  tokenName: 'The Randoms',
  tokenSymbol: 'RNDMS',
  hiddenMetadataUri: 'ipfs://QmY1THwzcMqC2mXMzMYRUKdpfbAFxsUnYkVaq1jf6fURiS/Hidden.json',
  maxSupply: 8888,
  whitelistSale: {
    price: 0.04,
    maxMintAmountPerTx: 4,
  },
  preSale: {
    price: 0.00,
    maxMintAmountPerTx: 1000,
  },
  publicSale: {
    price: 0.05,
    maxMintAmountPerTx: 3,
  },
  contractAddress: "",
  marketplaceIdentifier: 'therandomsnfts',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;