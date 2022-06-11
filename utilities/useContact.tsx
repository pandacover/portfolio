import emailJs from "@emailjs/browser";

interface Interface {
  serviceID: string;
  templateID: string;
  keyID: string;
}

const ID: Interface = {
  serviceID: "service_3dwphvu",
  templateID: "template_ddvibtw",
  keyID: "UaPwiYTTTCRuyjWMU",
};

export const SendEmail = (form: any) => {
  emailJs.sendForm(ID.serviceID, ID.templateID, form, ID.keyID).then(
    (response) => {
      console.log(response.text);
    },
    (error) => {
      console.error(error.message);
    }
  );
};
