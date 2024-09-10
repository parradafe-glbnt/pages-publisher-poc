import Fastify from "fastify";
import { Product } from "./interfaces/product.interface";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", async function handler(request, reply) {
    const productToReturn : Product = {
        id: '1111-2222-3333-4444',
        name : 'Iphone 16 pro',
        value : 899
    } ;
  return productToReturn;
});

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
