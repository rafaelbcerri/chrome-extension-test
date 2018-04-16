var WHATSAPP_NUMBER

window.addEventListener('DOMContentLoaded', function () {
  addLoading()
  chrome.tabs.executeScript(null, {file: "content.js"})

  chrome.runtime.onMessage.addListener((msg, sender) => {
    WHATSAPP_NUMBER = msg.whatsapp
  })
})

function addLoading() {
    var hello = document.createElement("div")

    hello.className = "hello"
    hello.innerHTML = " \
      <div>Hello world</div>\
      <button id='changeContent'>fetch</button>"

    document.getElementById("content").appendChild(hello)
    document.getElementById("changeContent").addEventListener("click", addFetch)
}

function addFetch() {
    var respose = document.createElement("div")

    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(data => {
      respose.innerHTML = "\
      <div>\
        <p><b>Nome:</b>" + data.name + "</p>\
        <p><b>Telefone:</b>" + WHATSAPP_NUMBER + "</p>\
      </div>\
      "
    })

    document.getElementById("content").lastChild.remove()
    document.getElementById("content").appendChild(respose)
}
