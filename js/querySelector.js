function getTagContent(url, tag) {
    fetch(url)
        .then(response => {
            if (response.ok && response.status === 200) {
                return response.text()
            }
            else {
                throw new Error(
                    `Oups, le serveur retourne un ${response.status}`
                );
            }
        })
        .then(htmlSource => {
            let htmlContent = document.createElement('body')
            htmlContent.innerHTML = htmlSource.trim()
            console.log(htmlContent.querySelector(tag))
        })
        .catch(error => {
            console.log("Message : ", error)
        });
}
