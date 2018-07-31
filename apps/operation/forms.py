#!/usr/bin/env python
# _*_ coding:utf-8 _*_
# Author: wang
# Date: 18/07/06 16:21


from django import forms
from .models import UserAddress


class AddressForm(forms.ModelForm):
    class Meta:
        model = UserAddress
        fields = ['user', 'shou_name', 'shou_address', 'country', 'town', 'city', 'postal_code', 'company']
