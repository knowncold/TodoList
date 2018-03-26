from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    # url(r'^mark/$', views.markItem, name='mark'),
    # url(r'^delete/$', views.deleteItem, name='delete'),
    # url(r'^update/$', views.updateItem, name='update'),
    url(r'^items/(?P<pk>[0-9]+)/$', views.ItemDetail.as_view()),
    url(r'^items/$', views.ItemList.as_view()),
]
