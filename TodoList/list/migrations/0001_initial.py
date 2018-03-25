# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('title', models.CharField(max_length=200)),
                ('createTime', models.DateTimeField(default=django.utils.timezone.now)),
                ('expireDate', models.DateField(default=None)),
                ('done', models.BooleanField(default=False)),
                ('details', models.CharField(max_length=200)),
                ('id', models.AutoField(serialize=False, primary_key=True)),
            ],
        ),
    ]
