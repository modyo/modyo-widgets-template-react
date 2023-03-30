// eslint-disable-next-line import/no-extraneous-dependencies
import { Liquid } from 'liquidjs';
import localLiquidVariables from './local-liquid-variables';

let engine;
const developmentMode = import.meta.env.DEV;

const LocalLiquid = developmentMode ? Liquid : { Liquid: null };

if (LocalLiquid) {
  engine = new LocalLiquid({
    strictFilters: true,
    strictVariables: true,
  });
  engine.registerFilter(
    'asset_url_by_uuid',
    (a) => localLiquidVariables.assets.find((el) => el.id === a).url
  );
  engine.registerFilter('asset_image', (a) => {
    const asset = localLiquidVariables.assets.find((el) => el.id === a);
    return `<img src='${asset.url}'' alt='${asset.alt_text}' />`;
  });
}
class LiquidParserClass {
  /** context of liquid drops in local */
  library = {};

  /**
   * Create a Client.
   * @param library object containing all local liquid context
   * @returns function with all Liquid instance
   */
  constructor(library) {
    this.library = library;
  }

  /**
   * Parse a liquid string
   * @param liquidString Target Content Space UID
   * @returns a usable object or string
   */
  async parseLiquidAsync(liquidString) {
    return engine.parseAndRender(liquidString, this.library);
  }

  /**
   * Parse a liquid string
   * @param liquidString Target Content Space UID
   * @returns a usable object or string
   */
  parseLiquid(liquidString) {
    return engine.parseAndRenderSync(liquidString, this.library);
  }

  parse(liquidString) {
    if (process.env.NODE_ENV !== 'production') {
      return this.parseLiquid(liquidString);
    }
    return liquidString;
  }

  parseAsync(liquidString) {
    if (process.env.NODE_ENV !== 'production') {
      return this.parseLiquidAsync(liquidString);
    }
    return liquidString;
  }
}
const liquidParser = new LiquidParserClass(localLiquidVariables);

export default liquidParser;
