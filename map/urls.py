from django.conf.urls import patterns, include, url

from map import views

urlpatterns = patterns('',
    url(r'^$', views.lol, name='index'),
)
