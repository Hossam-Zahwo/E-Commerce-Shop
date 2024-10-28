import { getStorage, ref, getDownloadURL } from "firebase/storage";

const storage = getStorage();
const storageRef = ref(storage, 'gs://e-commerce-903d3.appspot.com/your-image.jpg');

getDownloadURL(storageRef).then((url) => {
  const img = document.getElementById('your-img-id');
  img.src = url;
}).catch((error) => {
  console.error("Error getting download URL:", error);
});
