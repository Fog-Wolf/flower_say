# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-06-23 14:49
from __future__ import unicode_literals

import DjangoUeditor.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('goods', '__first__'),
        ('stores', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='Activity',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name='活动名称')),
                ('desc', models.CharField(max_length=300, verbose_name='活动描述')),
                ('detail', DjangoUeditor.models.UEditorField(default='', verbose_name='活动详情')),
                ('is_index', models.BooleanField(default=False, verbose_name='是否首页')),
                ('click_nums', models.IntegerField(default=0, verbose_name='活动点击数')),
                ('status', models.IntegerField(choices=[('1', '启用'), ('2', '禁用')], default=1, verbose_name='活动状态')),
                ('start_date', models.DateTimeField(default='', verbose_name='活动开始时间')),
                ('end_date', models.DateTimeField(default='', verbose_name='活动结束时间')),
                ('add_time', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='修改时间')),
                ('store_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='stores.StoreOrg', verbose_name='所属门店')),
            ],
            options={
                'verbose_name': '活动',
                'verbose_name_plural': '活动',
            },
        ),
        migrations.CreateModel(
            name='ActivityGoods',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.CharField(default=0, max_length=50, verbose_name='活动价')),
                ('status', models.IntegerField(choices=[('1', '启用'), ('2', '禁用')], default=1, verbose_name='状态')),
                ('add_time', models.DateTimeField(auto_now_add=True, verbose_name='创建时间')),
                ('update_time', models.DateTimeField(auto_now=True, verbose_name='修改时间')),
                ('activity_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='activitys.Activity', verbose_name='活动ID')),
                ('goods_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='goods.Commodity', verbose_name='关联商品')),
            ],
            options={
                'verbose_name': '活动关联商品',
                'verbose_name_plural': '活动关联商品',
            },
        ),
    ]
