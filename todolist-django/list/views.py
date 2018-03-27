from serializer import ItemSerializer
from rest_framework import generics
from django.http import HttpResponse
from .models import Item


class ItemList(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class ItemDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


def index(request):
    return HttpResponse('Index')
