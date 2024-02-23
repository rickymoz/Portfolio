var firstMessage = new bootstrap.Toast(document.querySelector(".toast1"));
var secondMessage = new bootstrap.Toast(document.querySelector(".toast2"));
firstMessage.show();
setTimeout(() => {
  secondMessage.show();
}, 5700);

document.addEventListener("DOMContentLoaded", function () {
  var myPhoneNumber = document.getElementById("myPhoneNumber");

  myPhoneNumber.addEventListener("click", function () {
    Swal.fire({
      html:
        '<div style="text-align: center; font-size: 18px;">' +
        "<p>Feel free to reach out to me!</p>" +
        '<p style="font-size: 24px; color: #3498db;">+351 938 023 880</p>' +
        "</div>",
      icon: "info",
      confirmButtonText: `<i class="bi bi-hand-thumbs-up-fill"></i>`,
    });
  });
});
