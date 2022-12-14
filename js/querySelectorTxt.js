function getTagContent(url, tag) {
    fetch(url)
        .then(response => {
            if (response.ok && response.status === 200) {
                return response.text()
            }
            else {
                throw new Error(
                    `Le serveur retourne un ${response.status}`
                );
            }
        })
        .then(htmlSource => {
            let htmlContent = document.createElement('body')
            htmlContent.innerHTML = htmlSource.trim()
            let tagContent = htmlContent.querySelector(tag)
            if (tagContent !== null) {
                console.log(tagContent)
            }
            else {
                throw new Error(
                    `Aucune occurrence pour le tag ${tag}`
                );
            }
        })
        .catch(error => {
            console.log("***", error)
        });
}
