const messageInput = document.querySelector("#message-input");

messageInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    return getMessage();
  }
});

function getMessage() {
  document.querySelector("#message-output").innerHTML = messageInput.value;
  messageInput.value = "";
}
