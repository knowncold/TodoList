from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^items/(?P<pk>[0-9]+)/$', views.ItemDetail.as_view()),
    url(r'^items/$', views.ItemList.as_view()),
]
