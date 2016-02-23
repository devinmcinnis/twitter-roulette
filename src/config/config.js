'use strict';

module.exports = function() {
  var envs = {
    'development': {
      'env': 'development',
      'title': '- Development'
    },
    'staging': {
      'env': 'staging',
      'title': '- Staging'
    },
    'production': {
      'env': 'production',
      'title': '- Tweet Raffle'
    }
  };

  return envs[process.env.NODE_ENV || 'development'];
};
