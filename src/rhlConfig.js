// Base config for react-hot-loader so it can support new features.
import { setConfig } from 'react-hot-loader';

setConfig({
  ignoreSFC: true, // Fix Hooks
  pureRender: true, // Remove side effect from Classes
});
