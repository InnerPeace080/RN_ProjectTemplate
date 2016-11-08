import {
  Dimensions
} from 'react-native';

var RDActionsTypes = require( '../actions/RDActionsTypes');

// components
var Define = require('../Define');
var Debug = require('../Util/Debug');
var Util = require('../Util/Util');
// NOTE : if want to use promise of middleware action , this reducer must update state to a temp to use in then of promise
// =>no no no , only need update state variable from reduxManager in then funciton   (maybe because pointer changed)

var widthScreen = Dimensions.get('window').width;
var heightScreen = Dimensions.get('window').height;

/**
 * Reducer Template.
 * @param {Object} state .
 * @param {Object} action .
 * @returns {null} .
 */
function AppState(state ={
  currentState:RDActionsTypes.AppState.constants.APP_STATE_LIST.RUNNING,
  currentDirect: (widthScreen < heightScreen)?
                      RDActionsTypes.AppState.constants.APP_STATE_DIRECT_LIST.PORTRAIT:
                      RDActionsTypes.AppState.constants.APP_STATE_DIRECT_LIST.LANDSCAPE,
                  } , action) {
  var stateTemp =state;
  switch (action.type) {
    case RDActionsTypes.AppState.set:{
      stateTemp = Object.assign({}, state);
      switch (action.subtype) {
        case RDActionsTypes.constants.REQUEST_SUBTYPE.REQUEST:{
          stateTemp.currentState = action.data;
          break;
        }
        default:
          break;
      }
      break;
    }
    case RDActionsTypes.AppState.setDirect:{
      stateTemp = Object.assign({}, state);
      switch (action.subtype) {
        case RDActionsTypes.constants.REQUEST_SUBTYPE.REQUEST:{
          stateTemp.currentDirect = action.data;
          break;
        }
        default:
          break;
      }
      break;
    }
    default:
      // Debug.log('ServerConnection:unknown type:'+action.type);
      break;
  }

  return stateTemp;

}


module.exports= AppState;
