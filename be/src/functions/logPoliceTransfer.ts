export const logPoliceTransfer = async ({ consent }: { consent: boolean }) => {
  if (consent) {
    console.log("User consented to transfer the call to the police.");
    return { transfer: true };
  } else {
    console.log("User did not consent to transfer the call.");
    return { transfer: false };
  }
};
