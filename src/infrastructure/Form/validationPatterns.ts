/**
 * ! Validation Patterns for Form Component fields
 * * Each key of this object represents id of certain form field.
 * * If those id's and key's are not equal then validation is not executed properly
 * 
 */

export const ValidationPatterns = {
	'e-mail': new RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'),
	'password': new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
	'repeatpassword': new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),
	'firstname': new RegExp(/^[^\W_]{2,}$/),
	'lastname': new RegExp(/^[^\W_]{2,}$/),
	
};