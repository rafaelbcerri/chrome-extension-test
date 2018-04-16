const mainElement = document.getElementById("main")

if (mainElement) {
  const userImageLink = mainElement.getElementsByTagName("img")[0].getAttribute("src")

  if (userImageLink) {
    const whatsappNumber = userImageLink.match(/u=(\d*)/)[1]

    if (whatsappNumber) {
      chrome.runtime.sendMessage({whatsapp: whatsappNumber})
    }
  }
}
