document.querySelector(".toggle").addEventListener("click", function () {
  if (this.classList.contains("fa-bars")) {
    this.classList.replace("fa-bars", "fa-times");
    document.querySelector(".mobile").classList.add("show");
  } else {
    this.classList.replace("fa-times", "fa-bars");
    document.querySelector(".mobile").classList.remove("show");
  }
});

let galleryViewer = document.querySelector(".gallery-viewer");
let photoView = document.getElementById("photoView");
document.querySelector(".gallery").addEventListener("click", (event) => {
  console.log(event.target);
  galleryViewer.classList.add("active");
  photoView.src = event.target.src;
});

document.getElementById("closeView").addEventListener("click", () => {
  galleryViewer.classList.remove("active");
  photoView.src = "";
});

function sendDonation(){
  let fromEmail = document.getElementById('email').value;
  let fname = document.getElementById('name').value; 
  let lname = document.getElementById('lname').value;
  let amount = document.getElementById('damount').value;
  let phone = document.getElementById('phone').value;
  let comment = document.getElementById('comment').innerText;
  Email.send({
    Host : "smtp.elasticemail.com",
    Port: 2525,
    Username : "umarishaq26@gmail.com",
    Password : "E11ADD3253E82F783B92BE36ABAD8AC09622",
    To : 'umarishaq26@2tocsolutions.com',
    From : fromEmail,
    Subject : "Donation From " + lname,
    Body : `Full Name: ${fname + " " + lname } <br>
            Email: ${fromEmail} <br> 
            Phone Number: ${phone} <br>
            Amount: ${amount} <br>
            Comment: ${comment}`
}).then(
  message => alert(message)
);
}
