declare module "@emailjs/browser" {
  interface EmailJSParams {
    [key: string]: unknown;
  }

  interface EmailJSSDK {
    send(
      serviceId: string,
      templateId: string,
      templateParams?: EmailJSParams,
      publicKey?: string
    ): Promise<unknown>;
  }

  const emailjs: EmailJSSDK;
  export default emailjs;
}
