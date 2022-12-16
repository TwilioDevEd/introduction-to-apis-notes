exports.handler = async function (context, event, callback) {
  const client = context.getTwilioClient();
  const gallery = [];
  
  /* This is the format we need to match. Here for reference
    [
      {
        src: "https://placekitten.com/200/300",
        description: "Look at this kitteh",
        alt: "A kitteh",
        thumbnailWidth: "200px",
      },
    ];
  */
  const messages = await client.messages.list({ to: context.TWILIO_NUMBER });
  for (const message of messages) {
    // You can have multiple medias on each message
    const pics = await message.media().list();
    for (const pic of pics) {
      // Add to the gallery array, use the outer loop's message value to put the same body
      // for each pic
      gallery.push({
        src: "https://api.twilio.com" + pic.uri.replace(".json", ""),
        description: message.body,
        alt: message.body,
        thumbnailWidth: "200px",
      });
    }
  }
  // Twilio Function will automatically turn gallery into proper JSON and set the 
  // header to `application\json`
  return callback(null, gallery);
};
