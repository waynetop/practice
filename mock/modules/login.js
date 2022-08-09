const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
};

module.exports = [
  // user login
  {
    url: '/tiny_authority_tbs/login.tml',
    type: 'post',
    response: config => {
      const { userName } = config.body;
      const token = tokens[userName];

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        };
      }

      return {
        code: 20000,
        data: token
      };
    }
  }
];
