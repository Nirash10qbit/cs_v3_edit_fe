import local from './env/local';
import valet from './env/valet';

export default function (env) {
  switch (env) {
    case 'production':
      // return require('./env/local')
      break;

    case 'valet':
      return valet
      break;

    default:
      return local
      break;
  }
}
