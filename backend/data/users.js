import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'vasista',
    email: 'vasista@g.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'alex',
    email: 'alex@g.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users