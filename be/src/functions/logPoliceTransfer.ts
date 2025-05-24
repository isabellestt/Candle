export const logPoliceTransfer = async ({ transferred }: { transferred: boolean }) => {
  if (transferred) {
    console.log("User consented to transfer the call to the police.");
    return { transferred: true };
  } else {
    console.log("Error, or user did not consent to transfer the call.");
    return { transferred: false };
  }
};
