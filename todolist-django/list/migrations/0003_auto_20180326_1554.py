# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('list', '0002_auto_20180321_1533'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='createTime',
            field=models.DateTimeField(default=b'2018-03-26-15-54-10'),
        ),
        migrations.AlterField(
            model_name='item',
            name='expireDate',
            field=models.DateField(default=b'2018-03-26'),
        ),
    ]
