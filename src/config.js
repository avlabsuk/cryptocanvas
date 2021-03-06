import { METAMASK_NETWORKS } from './constants/metamask'

const CONFIG_SHARED = {
  LIVE_LAUNCH_DATE: Date.UTC(2018, 6, 9, 15, 0, 0),
}

const CONFIG_MAIN = {
  // Contract settings
  CONTRACT_ADDRESS: '0xBfaD2ceE086D21a0b75847Cc0BF2C3c58023a844', // Main net
  WEB3_HTTP_PROVIDER: 'https://mainnet.infura.io/v3/4e9bcb4154874a5b947661b973f75347',
  ETHEREUM_NETWORK: METAMASK_NETWORKS.main,
  // Browser page title
  PAGE_TITLE: 'CryptoCanvas - Create, Trade & Collect Blockchain Artworks',
  // Delay to check transactions in ms
  CHECK_TX_DELAY: 3000,
  // Delay to check account address in ms
  CHECK_ACCOUNT_DELAY: 2000,
  // Delay to check account address in ms
  CHECK_GAS_PRICE_DELAY: 60 * 1000, // 1 minute
  // Delay to check account address in ms
  CHECK_ETH_PRICE_DELAY: 60 * 60 * 1000, // 1 hour
  // How long a canvas is stored in the cache, in ms
  CANVAS_CACHE_TIME: 15 * 60 * 1000,  // 15 minutes
  // Minimum bid in Initial Bidding
  MINIMUM_BID: 0.08,
  // Maximum number of canvases painted at the same time
  MAX_ACTIVE_CANVASES: 12,
  // Maximum number of canvases in total
  MAX_TOTAL_CANVASES: 1000,
  // Maximum number of pixels sent in a single batch
  MAX_PIXELS_IN_BATCH: 100,
  // Contract Creation block
  START_BLOCK: 0,
  pixelSize: {
    preview: 5,
    canvas: 13,
  },
  gridColumns: 48,
  COMMISSION: 0.039,
  PAINTERS_REWARD: 0.061,
  SHARED: CONFIG_SHARED,
}

const CONFIG_RINKEBY = {
  // Contract settings
  CONTRACT_ADDRESS: '0xe06ac2eba65f7184aae3ca2a0cb1cfdc604b765f', // Rinkeby testnet
  WEB3_HTTP_PROVIDER: 'https://rinkeby.infura.io/v3/4e9bcb4154874a5b947661b973f75347',
  ETHEREUM_NETWORK: METAMASK_NETWORKS.rinkeby,
  // Browser page title
  PAGE_TITLE: 'CryptoCanvas BETA - Create, Trade & Collect Blockchain Artworks',
  // Delay to check transactions in ms
  CHECK_TX_DELAY: 3000,
  // Delay to check account address in ms
  CHECK_ACCOUNT_DELAY: 2000,
  // Delay to check account address in ms
  CHECK_GAS_PRICE_DELAY: 60 * 1000, // 1 minute
  // Delay to check account address in ms
  CHECK_ETH_PRICE_DELAY: 60 * 60 * 1000, // 1 hour
  // How long a canvas is stored in the cache, in ms
  CANVAS_CACHE_TIME: 15 * 60 * 1000,  // 15 minutes
  // Minimum bid in Initial Bidding
  MINIMUM_BID: 0.08,
  // Maximum number of canvases painted at the same time
  MAX_ACTIVE_CANVASES: 12,
  // Maximum number of canvases in total
  MAX_TOTAL_CANVASES: 1000,
  // Maximum number of pixels sent in a single batch
  MAX_PIXELS_IN_BATCH: 100,
  // Contract Creation block
  START_BLOCK: 0,
  pixelSize: {
    preview: 5,
    canvas: 13,
  },
  gridColumns: 48,
  COMMISSION: CONFIG_MAIN.COMMISSION,
  PAINTERS_REWARD: CONFIG_MAIN.PAINTERS_REWARD,
  SHARED: CONFIG_SHARED,
}

const getConfig = () => {
    switch (process.env.REACT_APP_ETHEREUM_NETWORK) {
      case 'rinkeby':
        return CONFIG_RINKEBY
      case 'main':
      default:
        return CONFIG_MAIN
    }
}

export const CONFIG = getConfig()
