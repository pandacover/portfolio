import emailJs from "@emailjs/browser";

type IDType = {
	serviceID: string;
	templateID: string;
	keyID: string;
};

const ID: IDType = {
	serviceID: "service_3dwphvu",
	templateID: "template_ddvibtw",
	keyID: "UaPwiYTTTCRuyjWMU",
};

export default async function SendEmail(form: any) {
	try {
		await emailJs.sendForm(ID.serviceID, ID.templateID, form, ID.keyID);
	} catch (err) {
		console.error(err);
	}
}
