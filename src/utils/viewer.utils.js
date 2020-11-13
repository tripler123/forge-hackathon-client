import axios from 'axios';

/* global Autodesk */
const url_base = 'https://forge-hackathon-api.herokuapp.com/'

const getToken = async () => {
  const {
    data
  } = await axios.get(url_base + 'forge/token');
  return data
}

export const initializeViewer = async (urn) => {
  const token = await getToken()

  const viewerOptions = {
    env: 'AutodeskProduction',
    accessToken: token,
    api: 'derivativeV2',
  };

  var viewerContainer = document.getElementById('viewerContainer')
  var viewer = new Autodesk.Viewing.Private.GuiViewer3D(viewerContainer, {})
  window.privateViewer = viewer;

  await Autodesk.Viewing.Initializer(viewerOptions, () => {

    viewer.start();

    Autodesk.Viewing.Document.load(`urn:${urn}`, (doc) => {
      var defaultModel = doc.getRoot().getDefaultGeometry();
      viewer.loadDocumentNode(doc, defaultModel);
      viewer.resize();
    });

  });

  viewer.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, async (view) => {
    let result = await view.model.getPropertyDb().executeUserFunction(
      userFunction)
    window.allElements = result;
  })
}


function userFunction(pdb) {
  let _attrIdElemento = -1;

  pdb.enumAttributes(function (i, attrDef, attrRaw) {
    let name = attrDef.name;

    if (name === 'Elemento') {
      _attrIdElemento = i;
      return true;
    }
  });


  if (_attrIdElemento === -1)
    return null;

  const found = [];
  pdb.enumObjects(function (dbId) {
    pdb.enumObjectProperties(dbId, function (attrId, valId) {
      if (attrId === _attrIdElemento) {
        // var value = pdb.getAttrValue(attrId, valId);
        // if (value === "Viga") {
        //   found.push(dbId)
        // }

        found.push(dbId)

        return true;
      }
    })
  });

  return found;
}