import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IIS1БазаДанныхЛСLForm from './forms/i-i-s-1-база-данных-л-с-l';
import IIS1ДолжностиLForm from './forms/i-i-s-1-должности-l';
import IIS1ЖилецLForm from './forms/i-i-s-1-жилец-l';
import IIS1КвитанцияLForm from './forms/i-i-s-1-квитанция-l';
import IIS1КоммуУслугиLForm from './forms/i-i-s-1-комму-услуги-l';
import IIS1ОрганизацияLForm from './forms/i-i-s-1-организация-l';
import IIS1ПерерасчетКУLForm from './forms/i-i-s-1-перерасчет-к-у-l';
import IIS1СотрудникиLForm from './forms/i-i-s-1-сотрудники-l';
import IIS1БазаДанныхЛСEForm from './forms/i-i-s-1-база-данных-л-с-e';
import IIS1ДолжностиEForm from './forms/i-i-s-1-должности-e';
import IIS1ЖилецEForm from './forms/i-i-s-1-жилец-e';
import IIS1КвитанцияEForm from './forms/i-i-s-1-квитанция-e';
import IIS1КоммуУслугиEForm from './forms/i-i-s-1-комму-услуги-e';
import IIS1ОрганизацияEForm from './forms/i-i-s-1-организация-e';
import IIS1ПерерасчетКУEForm from './forms/i-i-s-1-перерасчет-к-у-e';
import IIS1СотрудникиEForm from './forms/i-i-s-1-сотрудники-e';
import IIS1БазаДанныхЛСModel from './models/i-i-s-1-база-данных-л-с';
import IIS1ДолжностиModel from './models/i-i-s-1-должности';
import IIS1ЖилецModel from './models/i-i-s-1-жилец';
import IIS1КвитанцияModel from './models/i-i-s-1-квитанция';
import IIS1КоммуУслугиModel from './models/i-i-s-1-комму-услуги';
import IIS1ОрганизацияModel from './models/i-i-s-1-организация';
import IIS1ПерерасчетКУModel from './models/i-i-s-1-перерасчет-к-у';
import IIS1СотрудникиModel from './models/i-i-s-1-сотрудники';
import IIS1ТЧПерерасчетаКУModel from './models/i-i-s-1-т-ч-перерасчета-к-у';
import IIS1ТЧквитанцииModel from './models/i-i-s-1-т-чквитанции';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-1-база-данных-л-с': IIS1БазаДанныхЛСModel,
    'i-i-s-1-должности': IIS1ДолжностиModel,
    'i-i-s-1-жилец': IIS1ЖилецModel,
    'i-i-s-1-квитанция': IIS1КвитанцияModel,
    'i-i-s-1-комму-услуги': IIS1КоммуУслугиModel,
    'i-i-s-1-организация': IIS1ОрганизацияModel,
    'i-i-s-1-перерасчет-к-у': IIS1ПерерасчетКУModel,
    'i-i-s-1-сотрудники': IIS1СотрудникиModel,
    'i-i-s-1-т-ч-перерасчета-к-у': IIS1ТЧПерерасчетаКУModel,
    'i-i-s-1-т-чквитанции': IIS1ТЧквитанцииModel
  },

  'application-name': '1',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': '1',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '1',
          title: '1'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        1: {
          caption: '1',
          title: '1',
          'i-i-s-1-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-1-квитанция-l': {
            caption: 'Квитанция',
            title: ''
          },
          'i-i-s-1-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-1-перерасчет-к-у-l': {
            caption: 'Перерасчет КУ',
            title: ''
          },
          'i-i-s-1-база-данных-л-с-l': {
            caption: 'База данных ЛС',
            title: ''
          },
          'i-i-s-1-комму-услуги-l': {
            caption: 'Комму услуги',
            title: ''
          },
          'i-i-s-1-жилец-l': {
            caption: 'Жилец',
            title: ''
          },
          'i-i-s-1-организация-l': {
            caption: 'Организация',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-1-база-данных-л-с-l': IIS1БазаДанныхЛСLForm,
    'i-i-s-1-должности-l': IIS1ДолжностиLForm,
    'i-i-s-1-жилец-l': IIS1ЖилецLForm,
    'i-i-s-1-квитанция-l': IIS1КвитанцияLForm,
    'i-i-s-1-комму-услуги-l': IIS1КоммуУслугиLForm,
    'i-i-s-1-организация-l': IIS1ОрганизацияLForm,
    'i-i-s-1-перерасчет-к-у-l': IIS1ПерерасчетКУLForm,
    'i-i-s-1-сотрудники-l': IIS1СотрудникиLForm,
    'i-i-s-1-база-данных-л-с-e': IIS1БазаДанныхЛСEForm,
    'i-i-s-1-должности-e': IIS1ДолжностиEForm,
    'i-i-s-1-жилец-e': IIS1ЖилецEForm,
    'i-i-s-1-квитанция-e': IIS1КвитанцияEForm,
    'i-i-s-1-комму-услуги-e': IIS1КоммуУслугиEForm,
    'i-i-s-1-организация-e': IIS1ОрганизацияEForm,
    'i-i-s-1-перерасчет-к-у-e': IIS1ПерерасчетКУEForm,
    'i-i-s-1-сотрудники-e': IIS1СотрудникиEForm
  },

});

export default translations;
