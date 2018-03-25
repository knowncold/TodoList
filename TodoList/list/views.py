from django.shortcuts import render
import django.utils.timezone as timezone
import datetime

# Create your views here.

from django.http import HttpResponse
import json
from .models import Item

def index(request):
    return HttpResponse('Index')

def addItem(request):
    data = json.loads(request.body)
    title = data['title']
    expire = datetime.datetime.strptime(data['expire'], '%Y-%m-%d')
    detail = data['detail']
    done = data['done']
    new_item = Item(title=title, done=done, details=detail, expireDate=expire)
    new_item.save()
    return HttpResponse('Add')

def updateItem(request):
    data = json.loads(request.body)
    title = data['title']
    expire = datetime.datetime.strptime(data['expire'], '%Y-%m-%d')
    detail = data['detail']
    done = data['done']
    item = Item.objects.get(id=data['id'])
    item.title = title
    item.expireDate = expire
    item.details = detail
    item.done = done
    item.save()
    return HttpResponse('Update')

def deleteItem(request):
    data = json.loads(request.body)
    item = Item.objects.get(id=data['id'])
    item.delete()
    return HttpResponse('Delete')

def markItem(request):
    print request.body
    data = json.loads(request.body)
    item = Item.objects.get(id=data['id'])
    item.done = data['done']
    item.save(update_fields=['done'])
    return HttpResponse('Mark')

def listItem(request):
    items = Item.objects.all().order_by('createTime')
    for i in items:
        print str(i)
    jsonData = json.dumps(map(lambda x: str(x), items))
    return HttpResponse(jsonData)
