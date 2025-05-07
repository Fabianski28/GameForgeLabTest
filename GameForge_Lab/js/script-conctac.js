             // Fonction pour valider le formulaire et afficher un message de confirmation
             const form = document.getElementById("myForm");
             const confirmation = document.getElementById("confirmation");
             
             // Récupération des champs par ID
             const usernameInput = document.getElementById("username");
             const emailInput = document.getElementById("email");
             const messageInput = document.getElementById("message");
     
             if(usernameInput) {
                 usernameInput.addEventListener('blur', () => {
                     if(usernameInput.value.length < 3){
                         usernameInput.style.borderColor = "red";
                     }else{
                         usernameInput.style.borderColor = "green";
                     }
                 });
             }
             emailInput.addEventListener('blur', () => {
                 if(!emailInput.value.includes("@")) {
                     emailInput.style.borderColor = "red";
                 }else{
                     emailInput.style.borderColor = "green";
                 }
             });
     
             if(messageInput) {
                 messageInput.addEventListener('blur', () => {
                     if(messageInput.value.length < 10){
                         messageInput.style.borderColor = "red";
                     }else{
                         messageInput.style.borderColor = "green";
                     }
                 });
             }
             
             form.addEventListener("submit", function (e) {
                 e.preventDefault();
             
                 const username = usernameInput.value.trim();
                 const email = emailInput.value.trim();
                 const message = messageInput.value.trim();
             
                 if (username.length >= 3 && email.length > 0 && message.length >= 10) {
                 confirmation.classList.remove("hidden");
                 confirmation.classList.add("show");
             
                 form.reset();
             
                 setTimeout(() => {
                     confirmation.classList.remove("show");
                     confirmation.classList.add("hidden");
                 }, 3000);
                 } else {
                 alert("Veuillez remplir correctement tous les champs.");
                 }
             });