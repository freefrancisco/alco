// THis is not used by fresh, it was only if I wanted to serve things directly
import { serveDir } from "jsr:@std/http/file-server";
// Serve files from the 'public' directory
Deno.serve((req) => serveDir(req, { fsRoot: "./static" }));
