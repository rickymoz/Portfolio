var firstMessage = new bootstrap.Toast(document.querySelector(".toast1"));
var secondMessage = new bootstrap.Toast(document.querySelector(".toast2"));
firstMessage.show();
setTimeout(() => {
  secondMessage.show();
}, 5700);

var myPhoneNumber = document.getElementById("myPhoneNumber"); //?

myPhoneNumber.addEventListener("click", function () {
  Swal.fire({
    html:
      '<div style="text-align: center; font-size: 18px;">' +
      '<p style="color: #000000">Feel free to reach out to me!</p>' +
      '<p style="font-size: 24px; color: rgb(2,169,88);">+351 930 000 000</p>' +
      "</div>",
    iconHtml:
      '<img src="/resources/img/whatsapp.png" style="width: 84px; height: 84px;">',
    customClass: {
      icon: "no-border",
    },
    confirmButtonText: `<i class="bi bi-hand-thumbs-up-fill"></i>`,
    confirmButtonColor: "rgb(2,169,88)",
  });
});
