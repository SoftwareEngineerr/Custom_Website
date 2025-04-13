import { combineReducers } from 'redux';
import LoaderReducer from './reducer/mainreducer';
import Api from './reducer/api';
import ShowModal from './reducer/showmodal';
// import Uploadimage from './reducer/image/image';
// import Theme from './reducer/theme/theme'
import WebsiteChanger from './reducer/websitechange/index';
import Section from './reducer/section/section';
import PageChanger from './reducer/page/page';


export const rootreducer = combineReducers({
    Api : Api,
    // Auth: Auth,
    Modal:ShowModal,
    // Uploadimage: Uploadimage,
    WebsiteChanger: WebsiteChanger,
    Section: Section,
    PageChanger:PageChanger,
    Loader: LoaderReducer,
    Modal:ShowModal,
  });
  