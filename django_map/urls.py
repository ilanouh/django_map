from django.conf.urls import patterns, include, url
from django.contrib import admin
admin.autodiscover()

import map
urlpatterns = patterns('',
	url(r'^', include('map.urls')),
    url(r'^map/', include('map.urls')),
    url(r'^admin/', include(admin.site.urls)),
)
