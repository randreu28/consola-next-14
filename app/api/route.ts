import consola from "consola";

export async function GET(_request: Request) {
  console.log("no logger");
  consola.start("logger start");
  consola.warn("logger warn");
  consola.success("logger success");
  consola.box("Logger box");
  //logger.error(new Error("This is an example error. Everything is fine!"));

  return new Response(JSON.stringify({ status: "OK" }));
}
