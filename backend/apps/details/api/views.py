from django.http import HttpResponse
from .serializers import UserDetailSerializer
from ..models.entities import UserDetail
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAdminUser


def details(request):
    return HttpResponse("Hi, this is details section. Thank you!")


# View for posting a new detail
class UserDetailSerializerCreateView(generics.CreateAPIView):
    permission_classes = [AllowAny]
    queryset = UserDetail.objects.all()
    serializer_class = UserDetailSerializer


# View for listing all of the details
class UserDetailSerializerListView(generics.ListAPIView):
    permission_classes = [AllowAny]
    queryset = UserDetail.objects.all()
    serializer_class = UserDetailSerializer
    
