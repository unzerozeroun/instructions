fetch("changes_.json")
    .then(response => {
        if (response.ok
            && response.status === 200
            && response.headers.get("Content-Type") === "application/json") {
            return response.json()
        }
        else {
            throw new Error(
                `Le serveur retourne un ${response.status}`
            );
        }
    })
    .then(jsonTree => {
        for (const fileCommited of jsonTree.values) {
            console.log(fileCommited.path["toString"])
        }
    })
    .catch(error => {
        console.log("***", error)
    });
