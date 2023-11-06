"use client";

import consola from "consola/browser";

export default function ClientComponent() {
  consola.start("Building project...");
  consola.warn("A new version of consola is available: 3.0.1");
  consola.success("Project built!");
  consola.error(new Error("This is an example error. Everything is fine!"));
  consola.box("I am a simple box");

  return <h1>hello world</h1>;
}
