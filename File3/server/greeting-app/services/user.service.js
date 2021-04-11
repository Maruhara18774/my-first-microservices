"use strict";

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */
const {MoleculerError} = require('moleculer').Errors;

module.exports = {
	name: "user",

	/**
	 * Settings
	 */
	settings: {

	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Say a 'Hello' action.
		 *
		 * @returns
		 */
		signin: {
			rest: {
				method: "POST",
				path: "/signin"
			},
            params: {
                username: {type="string", min=3},
                password: {type="string", min=6}
            },
			async handler({action,params,meta, ... ctx}) {
                if(!username && !password){
                    throw new MoleculerError("Người dùng đã tồn tại!");
                }
                // Create account
                
                // localhost - 1400 
                // npx sequelize-auto -h localhost -d RENTALAPARTMENT -u sa -x !Passw0rd -p 1400 -e mssql -o "./src/models"    
				return true;
			}
		},

		/**
		 * Welcome, a username
		 *
		 * @param {String} name - User name
		 */
		welcome: {
			rest: "/welcome",
			params: {
				name: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				return `Welcome, ${ctx.params.name}`;
			}
		}
	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {

	}
};
