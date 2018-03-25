from django.db import models
import django.utils.timezone as timezone
import datetime
import json

# Create your models here.

class Item(models.Model):
    title = models.CharField(max_length=200)
    createTime = models.DateTimeField(default=timezone.now)
    expireDate = models.DateField(default=datetime.datetime.strftime(datetime.datetime.today(), "%Y-%m-%d"))
    done = models.BooleanField(default=False)
    details = models.CharField(max_length=200)
    id = models.AutoField(primary_key=True)

    def __str__(self):
        return json.dumps({'title':self.title, 'createTime':datetime.datetime.strftime(self.createTime, "%Y-%m-%d-%H-%M-%S"), 'expireDate':datetime.date.strftime(self.expireDate, "%Y-%m-%d"), 'done':self.done, 'details':self.details, 'id':self.id})
