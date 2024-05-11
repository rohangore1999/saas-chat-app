// Why Firebase admin?
// https://stackoverflow.com/questions/42958776/whats-the-difference-between-the-firebase-and-the-firebase-admin-npm-module#:~:text=1%20Answer&text=The%20admin%20SDK%20runs%20your,used%20to%20send%20FCM%20messages.
import { initFirestore } from "@auth/firebase-adapter";
import admin from "firebase-admin";

let app;

// if App not exist then initialize it
if (!admin.apps.length) {
  app = admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
    }),
  });
}

const adminDb = initFirestore({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  }),
});

const adminAuth = admin.auth(app);

export { adminDb, adminAuth };
