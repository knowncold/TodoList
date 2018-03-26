from django.db import models
import django.utils.timezone as timezone
import datetime

# Create your models here.


class Item(models.Model):
    title = models.CharField(max_length=200)
    createTime = models.DateTimeField(default=timezone.now)
    expireDate = models.DateField(default=datetime.datetime.strftime(datetime.datetime.today(), "%Y-%m-%d"))
    done = models.BooleanField(default=False)
    details = models.CharField(max_length=200)
    id = models.AutoField(primary_key=True)

