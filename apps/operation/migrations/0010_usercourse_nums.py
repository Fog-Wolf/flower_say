# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-07-10 17:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('operation', '0009_usercourse_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='usercourse',
            name='nums',
            field=models.IntegerField(default=1, verbose_name='商品数量'),
        ),
    ]
