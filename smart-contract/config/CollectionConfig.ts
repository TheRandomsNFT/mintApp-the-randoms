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
  hiddenMetadataUri: 'ipfs://QmdGeLAvPLfAbzRvNLceB5SUc7r8XKY3qVjVUWEQgArBfS/Hiden_Metadata.json', 
  maxSupply: 8888,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 3,
  },
  preSale: {
    price: 0.00,
    maxMintAmountPerTx: 2000,
  },
  publicSale: {
    price: 0.06,
    maxMintAmountPerTx: 2,
  },
  contractAddress: "0xc82a098d77766e99135b921a83ffe0de593e9cfc",
  marketplaceIdentifier: 'The Randoms',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
