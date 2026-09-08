// Configure este arquivo com os dados do seu projeto Firebase Web.
// Os valores podem ser obtidos em Firebase Console > Configurações do projeto > Seus apps > Web.
const firebaseConfig = {
  apiKey: "AIzaSyAjV7F_aKwgCzm0YXRhRBnZ3mzRNPjKxoc",
  authDomain: "central-de-chamados-pcp.firebaseapp.com",
  projectId: "central-de-chamados-pcp",
  storageBucket: "central-de-chamados-pcp.firebasestorage.app",
  messagingSenderId: "186523896419",
  appId: "1:186523896419:web:111990a7cb8b05b4634656"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
