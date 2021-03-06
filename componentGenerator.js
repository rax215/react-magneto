const generateComponent = (name,components) => {
  
    const jsxCode = `import { ${[...new Set(components.map((comp) => comp.compName))].join(', ')} } from '@material-ui/core'
      
const ${name} = () => {
  return (
    <div>            
      ${components.map((comp) => `${comp.jsx}`).join('\n')}
    </div>
  )
}

export default ${name}`     
    
  return jsxCode
}
    
    

    // fs.writeFile(path.join(__dirname, `${name}.js`), jsxCode, (err) => {
    //     // throws an error, you could also catch it here
    //     if (err) throw err;
    
    //     // the file was saved
    //     console.log('file contents written');
    //   })

module.exports = { generateComponent }