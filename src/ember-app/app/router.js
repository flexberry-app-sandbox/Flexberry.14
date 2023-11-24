import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-1-база-данных-л-с-l');
  this.route('i-i-s-1-база-данных-л-с-e',
  { path: 'i-i-s-1-база-данных-л-с-e/:id' });
  this.route('i-i-s-1-база-данных-л-с-e.new',
  { path: 'i-i-s-1-база-данных-л-с-e/new' });
  this.route('i-i-s-1-должности-l');
  this.route('i-i-s-1-должности-e',
  { path: 'i-i-s-1-должности-e/:id' });
  this.route('i-i-s-1-должности-e.new',
  { path: 'i-i-s-1-должности-e/new' });
  this.route('i-i-s-1-жилец-l');
  this.route('i-i-s-1-жилец-e',
  { path: 'i-i-s-1-жилец-e/:id' });
  this.route('i-i-s-1-жилец-e.new',
  { path: 'i-i-s-1-жилец-e/new' });
  this.route('i-i-s-1-квитанция-l');
  this.route('i-i-s-1-квитанция-e',
  { path: 'i-i-s-1-квитанция-e/:id' });
  this.route('i-i-s-1-квитанция-e.new',
  { path: 'i-i-s-1-квитанция-e/new' });
  this.route('i-i-s-1-комму-услуги-l');
  this.route('i-i-s-1-комму-услуги-e',
  { path: 'i-i-s-1-комму-услуги-e/:id' });
  this.route('i-i-s-1-комму-услуги-e.new',
  { path: 'i-i-s-1-комму-услуги-e/new' });
  this.route('i-i-s-1-организация-l');
  this.route('i-i-s-1-организация-e',
  { path: 'i-i-s-1-организация-e/:id' });
  this.route('i-i-s-1-организация-e.new',
  { path: 'i-i-s-1-организация-e/new' });
  this.route('i-i-s-1-перерасчет-к-у-l');
  this.route('i-i-s-1-перерасчет-к-у-e',
  { path: 'i-i-s-1-перерасчет-к-у-e/:id' });
  this.route('i-i-s-1-перерасчет-к-у-e.new',
  { path: 'i-i-s-1-перерасчет-к-у-e/new' });
  this.route('i-i-s-1-сотрудники-l');
  this.route('i-i-s-1-сотрудники-e',
  { path: 'i-i-s-1-сотрудники-e/:id' });
  this.route('i-i-s-1-сотрудники-e.new',
  { path: 'i-i-s-1-сотрудники-e/new' });
});

export default Router;
