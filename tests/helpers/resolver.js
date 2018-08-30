import Resolver from '../../resolver';
import config from '../../config/environment';

const resolver = Resolver.create({ namespace: 'whatevs' });

resolver.namespace = {
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix
};

export default resolver;
