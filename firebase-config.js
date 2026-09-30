/*
 * 🔑 The Phuket List — Firebase details
 *
 * Firebase Console → Project settings (⚙️) → General → "Your apps" → Web app → SDK setup and configuration → Config.
 * Copy the values from there into the object below. That's the only place you need to change.
 *
 * These keys are safe to ship in a web page; your Security Rules are what protect the data.
 */
window.TRIP_FIREBASE_CONFIG = {
    apiKey: "PASTE_API_KEY",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project",
    storageBucket: "your-project.firebasestorage.app",
    messagingSenderId: "000000000000",
    appId: "1:000000000000:web:0000000000000000"
};

// Everyone who opens the page with the same TRIP_ID shares photos and ticks.
window.TRIP_ID = "phuket-2026";
