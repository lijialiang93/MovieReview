var keystone = require('keystone');
var Types = keystone.Field.Types;

// First we gonna create our User list
var User = new keystone.List('User');

var avatarImgStorage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
      // required; path where the files should be stored
      path: keystone.expandPath('server/public/img/avatar'),
      generateFilename: function (file, index) {
          return uuid() + pathPlug.extname(file.originalname);
      },
      whenExists: 'error',
      // path where files will be served
      publicPath: '/public/img/avatar',
  },
});

// Then we gonna add the fields 
User.add({
  name: { type: Types.Name, required: true, index: true },
  email: { type: Types.Email, initial: true, required: true, index: true },
  password: { type: Types.Password, initial: true },
  image: {
    type: Types.File,
    storage: avatarImgStorage,
    mimetype: '.jpeg, .jpg, .gif, .svg',
  },
  canAccessKeystone: { type: Boolean, initial: true },
});

User.register();