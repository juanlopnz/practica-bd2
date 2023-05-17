const redis = require('redis')

class UsersService {
  constructor() {
    this.redisClient = redis.createClient({
      host: 'redis-server',
      port: 6379
    })

    this.redisClient.on('error', err => {
      console.log('Error ' + err);
    });
  }

  async register(user) {
    try {
      const { email } = user;

      Object.keys(user).filter(key => key !== 'email').forEach((key) => {
        this.redisClient.hset(email, key, user[key])
      })

      return {
        success: true
      }

    } catch (err) {
      return {
        success: false,
        message: err.message
      }
    }
  }

  async consult(email) {

    try {
      const userFound = await new Promise((resolve, reject) => {
        this.redisClient.hgetall(email, (err, result) => {
          if (err || !result) {
            reject("Usuario no encontrado")
            return
          }
          resolve(result)
        })
      })
      return {
        success: true,
        data: userFound,
      };

    } catch (err) {
      return{
        success: false,
        message: err.message
      }
    }
  }
}

module.exports = UsersService