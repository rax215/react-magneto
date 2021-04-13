const getTextField = (attributes) => { 
    return (
    `
            <TextField id="${attributes.textInputName}" label="${attributes.textInputLabel}" className="${attributes.className}" variant="outline" />
    `    
    )
}

module.exports = {getTextField}