# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-07-13 18:29
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('goods', '0009_auto_20180629_1738'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('operation', '0013_auto_20180711_1540'),
    ]

    operations = [
        migrations.CreateModel(
            name='ShoppingBase',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nums', models.IntegerField(default=1, verbose_name='商品数量')),
                ('status', models.IntegerField(choices=[(1, '开启'), (-1, '关闭')], default=1, verbose_name='订单状态')),
                ('add_time', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='修改时间')),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='goods.Commodity', verbose_name='商品')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='用户')),
            ],
            options={
                'verbose_name': '购物车',
                'verbose_name_plural': '购物车',
            },
        ),
    ]