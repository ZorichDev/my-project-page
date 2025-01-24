// function sendMail() {
//     let params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value,
//         subject: document.getElementById("subject").value
//     }
//     emailjs.sendMail("service_ptzp7rd","template_uvkbxrd", params).then(alert(email sent!!))
// }

// function sendMail() {
//     // Collect form values
//     let params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value,
//         subject: document.getElementById("subject").value,
//     };

//     // Initialize EmailJS
//     emailjs.init("your_user_id"); // Replace "your_user_id" with your actual EmailJS user ID

//     // Send email using EmailJS
//     emailjs.send("service_ptzp7rd", "template_uvkbxrd", params)
//         .then(function(response) {
//             alert("Email sent successfully!");
//         })
//         .catch(function(error) {
//             console.error("Failed to send email:", error);
//             alert("Failed to send email. Please try again later.");
//         });
// }

function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        subject: document.getElementById("subject").value,
    };

    emailjs.init("3PD5AyCly9DCyS4u1");
    
    emailjs.send("service_ptzp7rd", "template_uvkbxrd", params)
        .then(function (response) {
            console.log("Full response:", response);
            alert("Email sent successfully!");
        })
        .catch(function (error) {
            console.error("Detailed error:", error);
            alert(`Failed: ${error.text}`);
        });
}
