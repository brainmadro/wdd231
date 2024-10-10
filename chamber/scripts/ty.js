const params = new URLSearchParams(location.search);

const application = {
	firstName: params.get("application_first_name"),
	lastName: params.get("application_last_name"),
	organizationalTitle: params.get("application_organizational_title"),
	emailAddress: params.get("application_email_address"),
	mobilePhone: params.get("application_mobile_phone"),
	businessName: params.get("application_business_name"),
	membershipLevel: params.get("application_membership_level"),
	description: params.get("application_description"),
	timestamp: params.get("application_timestamp")
}

console.log(application);
