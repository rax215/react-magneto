const path = require('path');
const parser = new (require('simple-excel-to-json').XlsParser)();
const CommonUtil = require('./commonUtil')
const ComponentLibrary = require('./componentLIbrary')
const ComponentGenerator = require('./componentGenerator')

// .xlsx file path
const filePath = path.join(__dirname, 'ui.xlsx');

// parsing excel file
var data = parser.parseXls2Json(filePath, {
  isNested: true,
});
// selecting the sheet
const materialUiSheet = data[0];
let masterLayout = CommonUtil.createMasterLayout(materialUiSheet)

let componentData = []; 
masterLayout.componentList.forEach(component => {
  if(component.type === 'TextInput') {
    componentData.push({"compName" : "TextField","jsx" : ComponentLibrary.TextInputComponent(component.attributes)})
  }
})

ComponentGenerator.generateComponent(masterLayout.componentName,componentData)
