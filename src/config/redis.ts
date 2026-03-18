// Require the Bull library
import Queue from "bull";

// Create a queue with the specified Redis connection
export const notificationQueue = new Queue("notifications", {
  redis: {
    host: "127.0.0.1",
    port: 6379,
  },
});

export const DLQ = new Queue("DLQ", {
  redis: {
    host: "127.0.0.1",
    port: 6379,
  },
});
