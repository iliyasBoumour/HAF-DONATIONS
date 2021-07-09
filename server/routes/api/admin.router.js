const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");
const AdminBroMongoose = require("@admin-bro/mongoose");
const mongoose = require("mongoose");
const express = require("express");
const { getHashPassowrd } = require("../../helpers/HashPassword");
const bcrypt = require("bcryptjs");
const app = express();
// const path = require('path');
// const __direname = path.resolve();

// const logoPath = path.join(__direname, 'public','logo.png');
console.log(logoPath);
const locale = {
  translations: {
    labels: {
      // change Heading for Login
      loginWelcome: "Hight Atlas Fondation",
    },
    messages: {
      loginWelcome: "Admin Panel",
    },
  },
};

AdminBro.registerAdapter(AdminBroMongoose);

const User = require("../../models/User");
const Project = require("../../models/Project");
const adminBro = new AdminBro({
<<<<<<< HEAD
  resources: [{
    resource: User,
    options: {
      properties: {
        password: {
          type: 'password',
          isVisible: {
            list: false, edit: true, filter: false, show: false,
          }
        },
        edit: {
          isVisible: {
            edit: false
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
=======
  resources: [
    {
      resource: User,
      options: {
        properties: {
          password: {
            type: "password",
            isVisible: {
              list: true,
              edit: true,
              filter: false,
              show: false,
            },
          },
        },
        actions: {
          new: {
            before: async (req) => {
              if (req.method === "post") {
                var { password, ...otherParams } = req.payload;
                if (password) password = getHashPassowrd(password);
>>>>>>> a908f24873fd20c70618036d070bef5d4025e806
                return {
                  ...req,
                  payload: {
                    ...otherParams,
                    password,
                  },
                };
              }
              return req;
            },
          },
        },
      },
    },
<<<<<<< HEAD

  }, 
  { 
    resource: Project,
    options:{
      properties: {
        rest: {
          isVisible: {
            list: true, edit: false, filter: false, show: true,
          }
        },
        evolution: {
          isVisible: {
            edit: false
          }
        },
        completed: {
          isVisible: {
            edit: false
          }
        },
        createdAt: {
          isVisible: {
            edit: false
          }
        }
      }
    }
  }],
=======
    {
      resource: Project,
      options: {},
    },
  ],
>>>>>>> a908f24873fd20c70618036d070bef5d4025e806
  locale,
  dashboard: {
    component: AdminBro.bundle(
      "../../../client/src/components/Admin/image-edit"
    ),
  },
  branding: {
<<<<<<< HEAD
    companyName: 'HAF',
    logo: 'https://highatlasfoundation.org/wp-content/uploads/2021/01/haf-130.png'
=======
    companyName: "HAF",
    logo: "https://res.cloudinary.com/dlngsvzco/image/upload/v1625830211/logo_uqafda.png",
>>>>>>> a908f24873fd20c70618036d070bef5d4025e806
  },
  rootPath: "/admin",
});

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: "admin",
  cookiePassword: "password strong",
  authenticate: async (email, password) => {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      return user.toJSON();
    }
    return null;
  },
});
module.exports = router;
