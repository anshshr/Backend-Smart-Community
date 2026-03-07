// send a notification on
// 1. some one sends a message and the other person is not online and do not store in db and we are not doing this and we are keeping it pending
// 2. some one cretaed a products close(5 km) to my radius or the area and store in the db and we are implementing it using the redis queue
import admin from "firebase-admin";
import fs from "fs";
// ----------- FIREBASE SERVICE ACCOUNT LOAD -----------
const serviceAccountPath = "./serviceAccountKey.json"; // add the file to which your project is configured
if (!fs.existsSync(serviceAccountPath)) {
    console.error("❌ Firebase key file not found!");
    process.exit(1);
}
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
export const sendNotification = async (title, body, token, screen) => {
    let successCount = 0;
    let failCount = 0;
    const message = {
        token: token,
        notification: { title, body },
        data: { screen: screen, id: "123" },
        android: {
            priority: "high",
            collapseKey: String(Date.now()),
            ttl: 86400 * 1000, // 24 hours in milliseconds
            // OR ttl: "86400s"
        },
    };
    try {
        await admin.messaging().send(message); // admin is coming from the firebase that my project is configured
        successCount++;
    }
    catch (err) {
        console.error("FCM Error:", err);
        failCount++;
    }
};
//# sourceMappingURL=notification.js.map