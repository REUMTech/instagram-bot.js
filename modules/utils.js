const LOG = require('../modules/logger/types');
const colors = require('colors');
const MAP_COLORS = require('./logger/types').MAP_COLORS;

/**
 * Utils
 * =====================
 * Logger and other functions...
 *
 * @author:     Patryk Rzucidlo [@ptkdev] <support@ptkdev.io> (https://ptkdev.it)
 * @license:    This code and contributions have 'GNU General Public License v3'
 * @version:    0.6.2
 * @changelog:  0.1 initial release
 *              0.2 new pattern
 *              0.3 new sleep system
 *
 */
class Utils {
    constructor(bot, config) {
        this.bot = bot;
        this.config = config;
    }

    /**
     * Logger
     * =====================
     * Better than console.log() 
     *
     */
    logger(type, func, text) {
        let color = MAP_COLORS[type];
        console.log(`${type} ${func}: ${text}`[color]);
    }

    /**
     * Screenshot
     * =====================
     * Save screenshot from chrome
     *
     */
    async screenshot(func, name) {
        try{
            await this.bot.screenshot({ path: './logs/screenshot/' + this.config.instagram_username + '_' + func + '_' + name + '.jpg' });
        } catch (err) {
            this.logger(LOG.WARNING, "screenshot", "error "+ err);
        }
        
    }

    /**
     * Random
     * =====================
     * Random number between two numbers
     *
     */
    random_interval(min, max) {
        return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000;
    }

    /**
     * Get random number between two numbers
     * @param min
     * @param max
     * @return {number}
     */
    random_number(min, max){
        return (Math.floor(Math.random() * (20 - 10 + 1)) + 10);
    }

    /**
     * Mix array element
     * @param arr
     * @return array
     */
    mix_array(arr){
        return arr.sort(function(){ return 0.5-Math.random() });
    }
    /**
     * Sleep
     * =====================
     * Zzz
     *
     */
    sleep(sec) {
        let sleep = require('system-sleep');
        sleep(sec);
    }

    /**
     * Check is debug
     * @return {boolean}
     */
    isDebug(){
        return this.config.debug === true;
    }

    /**
     * Get random hash tag from config file
     * @return {string}
     */
    get_random_hash_tag(){
        return this.config.instagram_hashtag[Math.floor(Math.random() * this.config.instagram_hashtag.length)];
    }
}

module.exports = (bot, config, utils) => { return new Utils(bot, config, utils); };