# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-07-06 15:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('operation', '0004_auto_20180706_1539'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraddress',
            name='country',
            field=models.CharField(default='', max_length=100, verbose_name='国家'),
        ),
    ]