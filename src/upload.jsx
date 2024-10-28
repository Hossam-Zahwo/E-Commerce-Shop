import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// تهيئة Firebase
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
const app = initializeApp(firebaseConfig);

// تهيئة خدمة التخزين
const storage = getStorage();
const storageRef = ref(storage, 'gs://e-commerce-903d3.appspot.com/your-image.jpg');

// الحصول على رابط التنزيل
getDownloadURL(storageRef).then((url) => {
  const img = document.getElementById('your-img-id');
  img.src = url;
}).catch((error) => {
  console.error("Error getting download URL:", error);
});
