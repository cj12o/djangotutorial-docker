from django.shortcuts import render

from django.contrib.auth.models import Group, User
from rest_framework import permissions, viewsets

from base.serializers import GroupSerializer, UserSerializer
from rest_framework.views import APIView
from rest_framework.views import APIView
from django.http import JsonResponse
from base.models import Visited
import json
from django.contrib.auth import authenticate, login


class Hello(APIView):
    def get(self, request):
        user=request.user
        if not user.is_authenticated:
            return JsonResponse({"message": f"Invalid user"})
        counter=Visited.objects.get(user=user)
        counter.counter+=1
        counter.save()
        return JsonResponse({"message": f"hello world counter{counter.counter}"})


class Login(APIView):
    def post(self, request):
        try:
            data = json.loads(request.body)
            username = data.get("username")
            password = data.get("password")
            print(username, password)
            user = authenticate(request, username=username, password=password)
            
            if user is not None:
                return JsonResponse({"message": "user logged in"}, status=200)
            else:
                return JsonResponse({"message": "user not found"}, status=404)  
        except Exception as e:
            return JsonResponse({"message": str(e)}, status=400)

