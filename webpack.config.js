function buildConfig(env='base') {
  if(env === 'dev') {
    env = 'base';
  }
  return require('./config/' + env + '.js')(env)
}

module.exports = buildConfig;