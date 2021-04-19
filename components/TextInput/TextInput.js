const getTextField = (attributes) => { 
    return (
    `
            <TextField id="${attributes.textInputName}" label="${attributes.textInputLabel}" className="${attributes.className}" variant="outlined" />
    `    
    )
}

module.exports = {getTextField}
