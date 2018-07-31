from django.shortcuts import render
from django.views.generic.base import View
from django.http import HttpResponse
from .forms import UserAskForm


# Create your views here.

class DownlineView(View):
    def get(self, request):
        return render(request, "downline.html", {})

    def post(self, request):
        userask_form = UserAskForm(request.POST)
        if userask_form.is_valid():
            userask_form.save(commit=True)
            return HttpResponse('{"status":"success"}', content_type='application/json')
        else:
            return HttpResponse('{"status":"fail","msg":"添加错误"}', content_type='application/json')
