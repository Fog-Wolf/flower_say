#!/usr/bin/env python
# _*_ coding:utf-8 _*_
# Author: wang
# Date: 18/07/01 15:18
from django import forms
from apps.operation.models import UserAsk
import re


class UserAskForm(forms.ModelForm):
    class Meta:
        model = UserAsk
        fields = ['name', 'mobile', 'email', 'course_name']

    # 验证手机号码是否合法
    def clean_mobile(self):
        mobile = self.cleaned_data["mobile"]
        REEX_MOBILE = "^1\d{10}$"
        p = re.compile(REEX_MOBILE)
        if p.match(mobile):
            return mobile
        else:
            return forms.ValidationError("手机号非法", code="mobile_invalid")
