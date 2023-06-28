const hashParams = window.location.hash.substring(1).split('&')

for (const param of hashParams) {
  const [key, value] = param.split('=')
  if (key && value) {
    for (const element of document.getElementsByName(key)) {
      if (element.type === "checkbox") {
        element.checked = (value === "true")
      } else {
        element.value = decodeURIComponent(value)
      }
    }
  }
}
