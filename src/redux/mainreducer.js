import { combineReducers } from 'redux';
import LoaderReducer from './reducer/mainreducer';
import Api from './reducer/api';
import ShowModal from './reducer/showmodal';
import WebsiteChanger from './reducer/websitechange/index';
import Section from './reducer/section/section';
import PageChanger from './reducer/page/page';


export const rootreducer = combineReducers({
    Api : Api,
    Modal:ShowModal,
    WebsiteChanger: WebsiteChanger,
    Section: Section,
    PageChanger:PageChanger,
    Loader: LoaderReducer,
    Modal:ShowModal,
  });
  