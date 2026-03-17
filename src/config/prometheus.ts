import client from "prom-client";

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

export const register = client.register;

export const httpRequestCounter = new client.Counter({
  name: "http_requests_total",
  help: "Total number of requests",
  labelNames: ["method", "route", "status"],
});