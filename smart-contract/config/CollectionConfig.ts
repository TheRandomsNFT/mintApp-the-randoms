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
    maxMintAmountPerTx: 5,
  },
  preSale: {
    price: 0.05,
    maxMintAmountPerTx: 10,
  },
  publicSale: {
    price: 0.025,
    maxMintAmountPerTx: 4,
  },
  contractAddress: "0x79aa05963c92a2a10d96bd840eb5e73a1e675e92",
  marketplaceIdentifier: 'therandomsnfts',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;