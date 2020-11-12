/* global THREE */
import React, { useState } from 'react'


function ViewerPanel() {

  const orange = new THREE.Vector4(1, 0.6, 0, 1);

  const [parameterName, setparameterName] = useState('')
  const [parameterValue, setparameterValue] = useState('')

  // const SetColor = () => {
  //   const dbid_array = window.privateViewer.getSelection();
  //   dbid_array.forEach(dbId => window.privateViewer.setThemingColor(dbId, orange));
  // }

  const setColorByParameter = (element) => {

    window.privateViewer.model.getBulkProperties(window.allElements, null, items => {
      let isolated = [];
      items.forEach(item => {
        var pro_Elemento = item.properties.find(
          p => p.attributeName === parameterName
        );
        if (pro_Elemento.displayValue === element) {
          // window.privateViewer.setThemingColor(item.dbId, orange)
          isolated.push(item.dbId)
        }
      }
      );
      if (isolated.length > 0) {
        window.privateViewer.isolate(isolated)
      }
    })
  };

  const clearView = () => {
    // window.privateViewer.clearThemingColors();
    window.privateViewer.isolate(0);
    // console.log(window.allElements)
  }

  return (
    <div>
      {/* <button onClick={SetColor}>Colorear Seleccionado</button> */}
      <input
        type="text"
        value={parameterName}
        onChange={(e) => setparameterName(e.target.value)}
        placeholder="Parameter Name" />

      <input type="text"
        value={parameterValue}
        onChange={(e) => setparameterValue(e.target.value)}
        placeholder="Parameter Value" />
      <button onClick={() => setColorByParameter(parameterValue)}>Set Theming Color</button>
      <button onClick={clearView}>Reset</button>
    </div>
  )
}

export default ViewerPanel
