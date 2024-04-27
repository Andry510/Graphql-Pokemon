import { httpServer, app } from "./app.js";

await new Promise((resolve) => httpServer.listen({ port: app.get('port') }, resolve));

console.log(`🚀 Server ready at http://localhost:4000/graphql`);
console.log(`Server ready`);
