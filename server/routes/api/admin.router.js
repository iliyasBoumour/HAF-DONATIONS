const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')
const mongoose = require('mongoose')
const express = require('express')
const { getHashPassowrd } = require('../../helpers/HashPassword')
const bcrypt = require('bcryptjs');
const app = express();
const path = require('path');
const __direname = path.resolve();

const logoPath = path.join(__direname, 'public','logo.png');
console.log(logoPath);
const locale = {
  translations: {
    labels: {
      // change Heading for Login
      loginWelcome: 'Hight Atlas Fondation',
    },
    messages: {
      loginWelcome: 'Admin Panel',
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
  dashboard: {
    component: AdminBro.bundle('../../../client/src/components/Admin/image-edit')
  },
  branding: {
    companyName: 'HAF',
    logo: 'https://res.cloudinary.com/dlngsvzco/image/upload/v1625830211/logo_uqafda.png'
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