import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.1.caption'),
          title: i18n.t('forms.application.sitemap.1.title'),
          children: [{
            link: 'i-i-s-1-должности-l',
            caption: i18n.t('forms.application.sitemap.1.i-i-s-1-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.1.i-i-s-1-должности-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-1-квитанция-l',
            caption: i18n.t('forms.application.sitemap.1.i-i-s-1-квитанция-l.caption'),
            title: i18n.t('forms.application.sitemap.1.i-i-s-1-квитанция-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-1-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.1.i-i-s-1-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.1.i-i-s-1-сотрудники-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-1-перерасчет-к-у-l',
            caption: i18n.t('forms.application.sitemap.1.i-i-s-1-перерасчет-к-у-l.caption'),
            title: i18n.t('forms.application.sitemap.1.i-i-s-1-перерасчет-к-у-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-1-база-данных-л-с-l',
            caption: i18n.t('forms.application.sitemap.1.i-i-s-1-база-данных-л-с-l.caption'),
            title: i18n.t('forms.application.sitemap.1.i-i-s-1-база-данных-л-с-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-1-комму-услуги-l',
            caption: i18n.t('forms.application.sitemap.1.i-i-s-1-комму-услуги-l.caption'),
            title: i18n.t('forms.application.sitemap.1.i-i-s-1-комму-услуги-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-1-жилец-l',
            caption: i18n.t('forms.application.sitemap.1.i-i-s-1-жилец-l.caption'),
            title: i18n.t('forms.application.sitemap.1.i-i-s-1-жилец-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-1-организация-l',
            caption: i18n.t('forms.application.sitemap.1.i-i-s-1-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.1.i-i-s-1-организация-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }
      ]
    };
  }),
})