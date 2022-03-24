import pubSubHubbub from "pubsubhubbub";

export const pubSubSubscriber = pubSubHubbub.createServer({
  callbackUrl: "",
  secret: "",
  username: "",
  password: "",
});

pubSubSubscriber.listen(1337);
