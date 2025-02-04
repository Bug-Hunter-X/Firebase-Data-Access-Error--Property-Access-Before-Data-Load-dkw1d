```javascript
async function getData() {
  const docRef = doc(db, "collection", "docId");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data().property); // Access property after data is loaded
  } else {
    console.log("No such document!");
  }
}

getData();
```