import Fastify from "fastify";
import { logger } from "../lib/logger";

const fastify = Fastify({ logger: true });

fastify.post("/callback", (request, reply) => {
  logger.debug(request.body);
});

const startFastify = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
startFastify();
