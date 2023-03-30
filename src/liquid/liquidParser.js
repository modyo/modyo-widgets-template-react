import LiquidParserJs from './LiquidParserJs';
import PlatformParser from './PlatformParser';

const LiquidClass =
  process.env.NODE_ENV !== 'production' ? LiquidParserJs : PlatformParser;

const liquidParser = new LiquidClass();

export default liquidParser;
