interface TemplateParams {
  [key: string]: unknown;
}

interface EmailJSLike {
  send(
    serviceId: string,
    templateId: string,
    templateParams?: TemplateParams,
    publicKey?: string
  ): Promise<{ status: number; text: string }>;
}

const emailjs: EmailJSLike = {
  async send(serviceId, templateId, templateParams = {}, publicKey = "") {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: templateParams,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text || "Email request failed");
    }

    return {
      status: response.status,
      text: await response.text(),
    };
  },
};

export default emailjs;
