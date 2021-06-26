const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')
const mongoose = require('mongoose')
const express = require('express')
const { getHashPassowrd } = require('../../helpers/HashPassword')

const app = express()

AdminBro.registerAdapter(AdminBroMongoose)

const User = require('../../models/User');
const adminBro = new AdminBro({
  resources: [{
    resource: User,
    options: {
      properties: {
        password: {
          type: 'string',
          isVisible: {
            list: false, edit: true, filter: false, show: false,
          }
        }
      }
    },
    actions: {
      new: {
        before: async (req) => {
          if(req.payload.password) {
            req.payload = {
              ...req.payload,
              password: getHashPassowrd(req.payload.password)
            }
          }
          return req;
        } 
      }
    }
  }],
  rootPath: '/admin',
})

const router = AdminBroExpress.buildRouter(adminBro)
module.exports = router