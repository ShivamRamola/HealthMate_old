const medicines = [
    "Dolo 650", "Combiflam", "Crocin", "Amoxicillin", "Cetirizine",
    "Azithromycin", "Ibuprofen", "Metformin", "Omeprazole", "Atorvastatin",
    "Pantoprazole", "Levothyroxine", "Losartan", "Montelukast", "Calpol",
    "Cetrine", "Betadine", "Avil", "ORS Sachet", "Becosules"
  ];
  
  const grid = document.getElementById('medicineGrid');
  
  function createCard(name) {
    const fileName = name.toLowerCase().replace(/\s+/g, '-') + ".jpg";
    const card = document.createElement('div');
    card.className = 'medicine-card';
    card.innerHTML = `
      <img src="assets/medicines/${fileName}" alt="${name}" onerror="this.src='assets/medicines/default.jpg'">
      <h4>${name}</h4>
      <button onclick="placeOrder('${name}')">Order</button>
    `;
    return card;
  }
  
  function populateMedicines(filter = '') {
    grid.innerHTML = '';
    medicines
      .filter(name => name.toLowerCase().includes(filter.toLowerCase()))
      .forEach(name => grid.appendChild(createCard(name)));
  }
  
  document.getElementById('searchInput').addEventListener('input', e => {
    populateMedicines(e.target.value);
  });
  
  populateMedicines();
  
  function placeOrder(medicineName) {
    const user = firebase.auth().currentUser;
    const userId = user ? user.uid : "demoUser";
  
    db.collection("Orders").add({
      medicine: medicineName,
      quantity: 1,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      userId: userId
    })
    .then(() => {
      alert(`Order placed for ${medicineName}`);
    })
    .catch((error) => {
      console.error("Error placing order: ", error);
      alert("Failed to place order. Try again.");
    });
  }
  