#!/usr/bin/env python
# _*_ coding:utf-8 _*_
# Author: wang
# Date: 18/07/04 16:37

from django import forms
from captcha.fields import CaptchaField
from .models import UserProfile


# 验证表单
class LoginForm(forms.Form):
    username = forms.CharField(required=True)
    password = forms.CharField(required=True, min_length=5)


class RegisterForm(forms.Form):
    email = forms.EmailField(required=True)
    password = forms.CharField(required=True, min_length=5)
    # 验证码,参数：错误信息
    captcha = CaptchaField(error_messages={'invalid': '验证码错误'})


class UserInforForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = ['nick_name', 'first_name', 'last_name', 'birthday', 'mobile']


class ModifyPwdForm(forms.Form):
    password1 = forms.CharField(required=True, min_length=5)
    password2 = forms.CharField(required=True, min_length=5)
