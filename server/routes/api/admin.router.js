const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')
const mongoose = require('mongoose')
const express = require('express')
const { getHashPassowrd } = require('../../helpers/HashPassword')
const bcrypt = require('bcryptjs');
const app = express();
  // const test = require('../../test-edit');
const locale = {
  translations: {
    labels: {
      // change Heading for Login
      loginWelcome: 'hello brahim',
    },
    messages: {
      loginWelcome: 'hello from my computer',
    },
  },
};




AdminBro.registerAdapter(AdminBroMongoose)

const User = require('../../models/User');
const Project = require('../../models/Project')
const adminBro = new AdminBro({
  resources: [{
    resource: User,
    options: {
      properties: {
        password: {
          type: 'password',
          isVisible: {
            list: true, edit: true, filter: false, show: false,
          }
        }
      },
      actions: {
        new: {
          before: async (req) => {
            if(req.method === 'post') {   
              var {password, ...otherParams} = req.payload;
              if(password)
                password = getHashPassowrd(password);
                return {
                  ...req,
                  payload:{
                    ...otherParams,
                    password,
                  }
                }
            }
            return req;
          } 
        }
      }
    },

  }, 
  { 
    resource: Project,
    options:{
    }
  }],
  locale,
  branding: {
    companyName: 'HAF'
  },
  rootPath: '/admin',
})

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: 'admin',
  cookiePassword: 'password strong',
  authenticate: async (email, password) => {
        const user = await User.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))){
          return user.toJSON();
        }
        return null;
  }
});
module.exports = router