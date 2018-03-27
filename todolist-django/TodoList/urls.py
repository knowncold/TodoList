from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^todolist/', include('list.urls')),
    url(r'^admin/', include(admin.site.urls)),
]
