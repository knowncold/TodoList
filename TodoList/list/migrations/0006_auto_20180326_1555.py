# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('list', '0005_auto_20180326_1555'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='createTime',
            field=models.DateTimeField(default=b'2018-03-26 15:55:38'),
        ),
    ]
