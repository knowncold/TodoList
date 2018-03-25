from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^add/$', views.addItem, name='add'),
    url(r'^mark/$', views.markItem, name='mark'),
    url(r'^delete/$', views.deleteItem, name='delete'),
    url(r'^update/$', views.updateItem, name='update'),
    url(r'^list/$', views.listItem, name='list')
]
