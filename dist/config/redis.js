// Require the Bull library
import Queue from "bull";
// Define Redis connection details
const redisConfig = {
    host: "127.0.0.1", // Redis server address
    port: 6379, // Redis server port
    // You can add more Redis connection options here if needed
};
// Create a queue with the specified Redis connection
const notificationQueue = new Queue("notifications", { redis: redisConfig });
export default notificationQueue;
//# sourceMappingURL=redis.js.map