import * as Constants from './Constants.js';

class Utils {

    GetRandonString(length) {
        var result = '';
        var characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    GetRandomNumber(length) {
        return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
    }

    GetEnv(args) {
        var Env;
        for (var i = 0; i < args.length; i++) {
          if (args[i].includes('Env')) {
            Env = args[i].split('=').pop();
          }
        }
        return Env;
    }
}

export default new Utils();