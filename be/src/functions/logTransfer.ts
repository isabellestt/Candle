export const logTransfer = async (params: {
  transferred: boolean;
  transfer_to: string;
  urgent: boolean;
}) => {
  const {transferred, transfer_to, urgent} = params;
  if (transferred) {
    console.log("User consented to transfer the call to the police.");
    return { 
      transferred: true,
      transfer_to,
      urgent
    };
  } else {
    console.log("Error, or user did not consent to transfer the call.");
    return { 
      transferred: false,
      transfer_to,
      urgent
    };
  }
};
