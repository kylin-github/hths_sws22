// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMruvBjbnpht6Ko0nilpX9sQI4iiPomBc",
  authDomain: "sws2022.firebaseapp.com",
  databaseURL: "https://sws2022-default-rtdb.firebaseio.com",
  projectId: "sws2022",
  storageBucket: "sws2022.appspot.com",
  messagingSenderId: "995998104413",
  appId: "1:995998104413:web:25fc6e53fd5eca171786b4",
  measurementId: "G-9YKZP1BWXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const analytics = getAnalytics(app);

var memName, memGrade, memEmail, memSchool

function dataPrep(){
    // memName = document.getElementById('nameText').value;
    // recipe = document.getElementById('recipeText').value;
    // tempRecipe = document.getElementById('tempRecipeSelect').value;
    // typeRecipe = document.getElementById('typeRecipeSelect').value;
    // allergens = document.getElementById('allergensSelect').value;
    // link = document.getElementById('linkText').value;
}

function InsertData(){
    set(ref(db, 'recipe/'+memName), {
        // memberName: memName,
        // recipeName: recipe,
        // recipeTemp: tempRecipe,
        // recipeType: typeRecipe, 
        // recipeAllergens: allergens,
        // recipeLink: link
    })
    .then(()=>{
        alert('data stored successfully');
    })
    .catch((error)=>{
        alert('unsuccessful, error'+error)
    })
}


if ($("body").data("title") === "community_recipes") {
    document.getElementById('insert').onclick = function(){
        dataPrep();
        InsertData();
    }
    
}